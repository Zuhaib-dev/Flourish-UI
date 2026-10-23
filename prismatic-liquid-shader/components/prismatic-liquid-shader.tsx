'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Sliders,
  Eye,
  EyeOff,
  Shuffle,
  Maximize2,
  Minimize2,
  Droplets,
  Waves,
  RefreshCw,
} from 'lucide-react'

// --- Vertex Shader ---
const VERT_SRC = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

// --- Fragment Shader with Perceptual OKLab Blending & Dynamic Fluid Distortion ---
const FRAG_SRC = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_mouse_speed;
uniform float u_mouse_active;

// Controls
uniform float u_speed;
uniform float u_turbulence;
uniform float u_scale;
uniform float u_grain;
uniform float u_chromatic;
uniform int u_cursor_mode; // 0: Ripple, 1: Swirl, 2: Push/Displace, 3: Chromatic Lens
uniform float u_seed;

// Up to 8 color stops in sRGB [0..1]
uniform vec3 u_colors[8];
uniform int u_color_count;

// --- Simplex / Value Noise & FBM ---
float hash21(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
    mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = rot * p * 2.05 + vec2(11.3, 7.7);
    a *= 0.5;
  }
  return v;
}

// --- Perceptual OKLab Color Mixing ---
vec3 srgbToLinear(vec3 c) {
  return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
}

vec3 linearToSrgb(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

vec3 linToOklab(vec3 c) {
  float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
  float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
  float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
  l = pow(max(l, 0.0), 1.0 / 3.0);
  m = pow(max(m, 0.0), 1.0 / 3.0);
  s = pow(max(s, 0.0), 1.0 / 3.0);
  return vec3(
    0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s
  );
}

vec3 oklabToLin(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l; m = m * m * m; s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 mixOklab(vec3 c1, vec3 c2, float t) {
  vec3 o1 = linToOklab(srgbToLinear(c1));
  vec3 o2 = linToOklab(srgbToLinear(c2));
  return clamp(linearToSrgb(oklabToLin(mix(o1, o2, t))), 0.0, 1.0);
}

vec3 samplePalette(float t) {
  t = clamp(t, 0.0, 1.0);
  float n = float(u_color_count - 1);
  float stepVal = t * n;
  int idx = int(floor(stepVal));
  float frac = fract(stepVal);

  vec3 col = u_colors[0];
  for (int i = 0; i < 7; i++) {
    if (i == idx && i < u_color_count - 1) {
      col = mixOklab(u_colors[i], u_colors[i + 1], smoothstep(0.0, 1.0, frac));
      break;
    }
  }
  return col;
}

// Film Grain generator
float grainHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  
  float t = u_time * u_speed * 0.45;
  vec2 mouseP = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  vec2 delta = p - mouseP;
  float dist = length(delta);

  // --- Dynamic Mouse Interaction ---
  if (u_mouse_active > 0.01) {
    float strength = u_mouse_active * (1.0 + u_mouse_speed * 3.5);
    
    if (u_cursor_mode == 0) {
      // 0: Ripple waves
      float rippleRadius = 0.55;
      float wave = sin(dist * 24.0 - u_time * 6.0) * exp(-dist * 4.5);
      p -= normalize(delta + 0.0001) * wave * 0.06 * strength;
    } else if (u_cursor_mode == 1) {
      // 1: Vortex Swirl
      float swirlRadius = 0.45;
      float factor = max(0.0, 1.0 - dist / swirlRadius);
      float angle = factor * factor * 2.8 * strength;
      float ca = cos(angle), sa = sin(angle);
      p = mouseP + mat2(ca, -sa, sa, ca) * delta;
    } else if (u_cursor_mode == 2) {
      // 2: Fluid Push / Displacement
      float pushRadius = 0.5;
      float factor = exp(-dist * 3.8);
      p += normalize(delta + 0.0001) * factor * 0.18 * strength;
    } else if (u_cursor_mode == 3) {
      // 3: Chromatic Refraction Lens
      float lensRadius = 0.35;
      if (dist < lensRadius) {
        float f = smoothstep(lensRadius, 0.0, dist);
        p += delta * f * 0.25 * strength;
      }
    }
  }

  // --- Multi-layer Domain Warping ---
  vec2 q = vec2(
    fbm(p * u_scale + vec2(0.0, 0.0) + t * 0.12 + u_seed),
    fbm(p * u_scale + vec2(5.2, 1.3) + t * 0.15 + u_seed * 0.5)
  );

  vec2 r = vec2(
    fbm(p * u_scale + 4.0 * q + vec2(1.7, 9.2) + t * 0.2),
    fbm(p * u_scale + 4.0 * q + vec2(8.3, 2.8) + t * 0.18)
  );

  float field = fbm(p * u_scale + 4.0 * r * u_turbulence + t * 0.25);

  // --- Dynamic Color Sampling with Chromatic Separation ---
  float chromaShift = u_chromatic * 0.025 * (1.0 + u_mouse_speed * 2.0);
  vec3 col;
  
  if (chromaShift > 0.001) {
    float fieldR = field + (r.x - 0.5) * chromaShift;
    float fieldG = field;
    float fieldB = field - (r.y - 0.5) * chromaShift;
    
    vec3 cR = samplePalette(fieldR);
    vec3 cG = samplePalette(fieldG);
    vec3 cB = samplePalette(fieldB);
    col = vec3(cR.r, cG.g, cB.b);
  } else {
    col = samplePalette(field);
  }

  // --- Specular Liquid Sheen Highlights ---
  float highlight = pow(clamp(dot(normalize(vec3(r.x, r.y, 0.5)), normalize(vec3(0.3, 0.5, 1.0))), 0.0, 1.0), 4.0);
  col += vec3(0.9, 0.95, 1.0) * highlight * 0.18;

  // --- Tactile Film Grain ---
  if (u_grain > 0.001) {
    float grain = (grainHash(gl_FragCoord.xy + fract(u_time * 17.1)) - 0.5) * u_grain * 0.14;
    col += grain;
  }

  // --- Soft Vignette ---
  float vignette = smoothstep(1.2, 0.35, length(uv - 0.5));
  col *= mix(0.78, 1.0, vignette);

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`

// Helper: parse hex to [r, g, b] in 0..1
function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  const num = parseInt(clean, 16)
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255,
  ]
}

export interface ColorPreset {
  id: string
  name: string
  subtitle: string
  colors: string[]
}

export const COLOR_PRESETS: ColorPreset[] = [
  {
    id: 'prismatic-aurora',
    name: 'Prismatic Aurora',
    subtitle: 'Cosmic violet, luminous magenta & electric cyan',
    colors: ['#070210', '#25084a', '#78158c', '#d8297b', '#00e5ff', '#4facfe', '#ffffff'],
  },
  {
    id: 'liquid-amber',
    name: 'Liquid Amber',
    subtitle: 'Molten obsidian, volcanic ruby & solar gold',
    colors: ['#120500', '#3a0c00', '#882200', '#e35800', '#f9d220', '#fff2b8', '#ffffff'],
  },
  {
    id: 'abyssal-glow',
    name: 'Abyssal Deep',
    subtitle: 'Bioluminescent navy, oceanic teal & electric mint',
    colors: ['#020b14', '#05233d', '#08536f', '#00a896', '#02c39a', '#9bf6ff', '#ffffff'],
  },
  {
    id: 'neo-tokyo',
    name: 'Neo Tokyo',
    subtitle: 'Synthwave hot pink, acid lime & deep indigo',
    colors: ['#0c0220', '#26085a', '#541388', '#d0006f', '#ff4d00', '#00ffc2', '#ffffff'],
  },
  {
    id: 'opal-silk',
    name: 'Opal Silk',
    subtitle: 'Iridescent pearl, dusty lilac & seafoam mist',
    colors: ['#10121a', '#222838', '#59698a', '#a6a2e4', '#f1c2d9', '#d0efe2', '#ffffff'],
  },
  {
    id: 'emerald-velvet',
    name: 'Emerald Velvet',
    subtitle: 'Royal jade, deep forest & neon mint luminescence',
    colors: ['#021208', '#072e17', '#0c5c30', '#189e53', '#48df7b', '#b3ffd0', '#ffffff'],
  },
]

export const CURSOR_MODES = [
  { id: 0, label: 'Ripples', icon: Waves },
  { id: 1, label: 'Vortex Swirl', icon: RefreshCw },
  { id: 2, label: 'Displacement', icon: Droplets },
  { id: 3, label: 'Chromatic Lens', icon: Sparkles },
]

export interface PrismaticLiquidShaderProps {
  initialPreset?: string
  initialCursorMode?: number
  className?: string
}

export function PrismaticLiquidShader({
  initialPreset = 'prismatic-aurora',
  initialCursorMode = 0,
  className = '',
}: PrismaticLiquidShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Interactive State
  const [activePresetId, setActivePresetId] = useState(initialPreset)
  const [cursorMode, setCursorMode] = useState(initialCursorMode)
  const [speed, setSpeed] = useState(1.1)
  const [turbulence, setTurbulence] = useState(1.25)
  const [scale, setScale] = useState(1.8)
  const [chromatic, setChromatic] = useState(1.2)
  const [grain, setGrain] = useState(0.4)
  const [seed, setSeed] = useState(42.0)
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Current Preset Object
  const currentPreset =
    COLOR_PRESETS.find((p) => p.id === activePresetId) || COLOR_PRESETS[0]

  // Dynamic Uniform References (to feed animation loop smoothly)
  const stateRef = useRef({
    speed,
    turbulence,
    scale,
    chromatic,
    grain,
    seed,
    cursorMode,
    colors: currentPreset.colors.map(hexToRgb),
    colorCount: currentPreset.colors.length,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
    mouseSpeed: 0,
    mouseActive: 0,
    lastMouseX: 0,
    lastMouseY: 0,
  })

  // Synchronize stateRef whenever React state updates
  useEffect(() => {
    stateRef.current.speed = speed
    stateRef.current.turbulence = turbulence
    stateRef.current.scale = scale
    stateRef.current.chromatic = chromatic
    stateRef.current.grain = grain
    stateRef.current.seed = seed
    stateRef.current.cursorMode = cursorMode
    stateRef.current.colors = currentPreset.colors.map(hexToRgb)
    stateRef.current.colorCount = currentPreset.colors.length
  }, [speed, turbulence, scale, chromatic, grain, seed, cursorMode, currentPreset])

  // Mouse / Pointer Event Listeners
  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = rect.height - (e.clientY - rect.top) // Flip Y for WebGL coords

    const s = stateRef.current
    const dx = x - s.lastMouseX
    const dy = y - s.lastMouseY
    const dist = Math.sqrt(dx * dx + dy * dy)
    s.mouseSpeed = Math.min(dist / 25.0, 2.5)

    s.targetMouseX = x
    s.targetMouseY = y
    s.lastMouseX = x
    s.lastMouseY = y
    s.mouseActive = 1.0
  }, [])

  const handlePointerLeave = useCallback(() => {
    stateRef.current.mouseActive = 0.0
  }, [])

  // WebGL Render Loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl =
      canvas.getContext('webgl', { powerPreference: 'high-performance', alpha: false }) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null)

    if (!gl) {
      console.warn('WebGL not supported on this browser.')
      return
    }

    // Compile Shader Helper
    function createShader(gl: WebGLRenderingContext, type: number, src: string) {
      const s = gl.createShader(type)
      if (!s) return null
      gl.shaderSource(s, src)
      gl.compileShader(s)
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(s))
        gl.deleteShader(s)
        return null
      }
      return s
    }

    const vert = createShader(gl, gl.VERTEX_SHADER, VERT_SRC)
    const frag = createShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC)
    if (!vert || !frag) return

    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vert)
    gl.attachShader(program, frag)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }
    gl.useProgram(program)

    // Fullscreen Quad Buffer
    const quad = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ])
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW)

    const aPos = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    // Uniform Locations
    const uRes = gl.getUniformLocation(program, 'u_resolution')
    const uTime = gl.getUniformLocation(program, 'u_time')
    const uMouse = gl.getUniformLocation(program, 'u_mouse')
    const uMouseSpeed = gl.getUniformLocation(program, 'u_mouse_speed')
    const uMouseActive = gl.getUniformLocation(program, 'u_mouse_active')
    const uSpeedLoc = gl.getUniformLocation(program, 'u_speed')
    const uTurbulenceLoc = gl.getUniformLocation(program, 'u_turbulence')
    const uScaleLoc = gl.getUniformLocation(program, 'u_scale')
    const uGrainLoc = gl.getUniformLocation(program, 'u_grain')
    const uChromaticLoc = gl.getUniformLocation(program, 'u_chromatic')
    const uCursorModeLoc = gl.getUniformLocation(program, 'u_cursor_mode')
    const uSeedLoc = gl.getUniformLocation(program, 'u_seed')
    const uColorCountLoc = gl.getUniformLocation(program, 'u_color_count')

    // Color Uniforms
    const uColorLocs: WebGLUniformLocation[] = []
    for (let i = 0; i < 8; i++) {
      const loc = gl.getUniformLocation(program, `u_colors[${i}]`)
      if (loc) uColorLocs.push(loc)
    }

    let animId = 0
    let startTime = performance.now()
    let isVisible = true

    // Resize Handler
    const resize = () => {
      if (!canvas) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      const targetW = Math.floor(w * dpr)
      const targetH = Math.floor(h * dpr)
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW
        canvas.height = targetH
        gl.viewport(0, 0, targetW, targetH)
      }
    }

    window.addEventListener('resize', resize)
    resize()

    // IntersectionObserver to pause rendering when out of viewport
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
    })
    observer.observe(canvas)

    // Main Render Loop
    const render = (now: number) => {
      animId = requestAnimationFrame(render)
      if (!isVisible) return

      const elapsed = (now - startTime) * 0.001
      const s = stateRef.current

      // Smooth mouse easing
      s.mouseX += (s.targetMouseX - s.mouseX) * 0.12
      s.mouseY += (s.targetMouseY - s.mouseY) * 0.12
      s.mouseSpeed *= 0.94

      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, elapsed)
      gl.uniform2f(uMouse, s.mouseX * (canvas.width / canvas.clientWidth), s.mouseY * (canvas.height / canvas.clientHeight))
      gl.uniform1f(uMouseSpeed, s.mouseSpeed)
      gl.uniform1f(uMouseActive, s.mouseActive)
      gl.uniform1f(uSpeedLoc, s.speed)
      gl.uniform1f(uTurbulenceLoc, s.turbulence)
      gl.uniform1f(uScaleLoc, s.scale)
      gl.uniform1f(uGrainLoc, s.grain)
      gl.uniform1f(uChromaticLoc, s.chromatic)
      gl.uniform1i(uCursorModeLoc, s.cursorMode)
      gl.uniform1f(uSeedLoc, s.seed)
      gl.uniform1i(uColorCountLoc, s.colorCount)

      for (let i = 0; i < uColorLocs.length; i++) {
        const rgb = s.colors[i] || [0, 0, 0]
        gl.uniform3f(uColorLocs[i], rgb[0], rgb[1], rgb[2])
      }

      gl.drawArrays(gl.TRIANGLES, 0, 6)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      observer.disconnect()
      gl.deleteProgram(program)
      gl.deleteShader(vert)
      gl.deleteShader(frag)
      gl.deleteBuffer(buf)
    }
  }, [])

  // Randomize Seed Function
  const handleRandomize = () => {
    setSeed(Math.random() * 100.0)
    setTurbulence(0.8 + Math.random() * 1.2)
  }

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => console.error(err))
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative w-full h-screen overflow-hidden bg-[#07090e] select-none ${className}`}
    >
      {/* 1. WebGL Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block cursor-crosshair"
      />

      {/* 2. Top Sleek Brand & Header Overlay */}
      <header className="absolute top-6 left-6 right-6 flex items-start justify-between pointer-events-none z-20">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-[11px] font-mono-code font-semibold tracking-wider text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>WEBGL 2.0 • OKLAB LIQUID SPECTRUM</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display drop-shadow-md">
            PRISMATIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">DYNAMICS</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md font-medium drop-shadow-sm">
            Hyper-fluid hydrodynamic wave field with perceptual OKLab gamut blending and velocity-driven cursor physics.
          </p>
        </div>

        {/* Top Right Quick Toggles */}
        <div className="pointer-events-auto flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleRandomize}
            className="p-2.5 rounded-full glass-panel text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Randomize flow seed"
          >
            <Shuffle className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => setShowControls(!showControls)}
            className="p-2.5 rounded-full glass-panel text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title={showControls ? 'Hide Controls' : 'Show Controls'}
          >
            {showControls ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="p-2.5 rounded-full glass-panel text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* 3. Center Subtle Interaction Prompt (fades out on interaction) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="text-center px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/70 text-xs font-mono-code tracking-widest uppercase animate-pulse">
          Move cursor or drag to stir liquid waves
        </div>
      </div>

      {/* 4. Bottom Floating Glassmorphism Control Center */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="absolute bottom-6 left-6 right-6 max-w-4xl mx-auto glass-panel rounded-2xl p-4 sm:p-5 z-20 space-y-4"
          >
            {/* Row 1: Preset Palettes */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Color Spectrum:</span>
                <span className="text-cyan-300 font-mono-code lowercase text-[11px]">
                  ({currentPreset.name})
                </span>
              </div>

              {/* Palette Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                {COLOR_PRESETS.map((preset) => {
                  const isActive = preset.id === activePresetId
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setActivePresetId(preset.id)}
                      className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                        isActive
                          ? 'bg-white/20 text-white border border-white/40 shadow-sm'
                          : 'bg-black/30 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
                      }`}
                    >
                      {/* Color dots preview */}
                      <div className="flex -space-x-1">
                        {preset.colors.slice(1, 4).map((c, i) => (
                          <span
                            key={i}
                            className="w-2.5 h-2.5 rounded-full border border-black/40"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                      <span>{preset.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Row 2: Interaction Mode & Live Sliders */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2 border-t border-white/10 items-center">
              {/* Cursor Mode Selector */}
              <div className="md:col-span-5 flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5">
                {CURSOR_MODES.map((mode) => {
                  const Icon = mode.icon
                  const isActive = cursorMode === mode.id
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setCursorMode(mode.id)}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold tracking-wide flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isActive
                          ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 shadow-xs'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{mode.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Sliders: Speed, Turbulence, Chromatic */}
              <div className="md:col-span-7 grid grid-cols-3 gap-3 text-[11px] font-mono-code text-slate-300">
                {/* Flow Speed */}
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Flow:</span>
                    <span className="text-cyan-300">{speed.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="3.0"
                    step="0.1"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Turbulence */}
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Warp:</span>
                    <span className="text-pink-300">{turbulence.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="2.5"
                    step="0.05"
                    value={turbulence}
                    onChange={(e) => setTurbulence(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Chromatic Aberration */}
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Prism:</span>
                    <span className="text-amber-300">{chromatic.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.0"
                    max="3.0"
                    step="0.1"
                    value={chromatic}
                    onChange={(e) => setChromatic(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
