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
  Compass,
  Check,
} from 'lucide-react'

// --- Vertex Shader ---
const VERT_SRC = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

// --- Fragment Shader with Quintic C2 Smooth Noise, Viscous Gyroscopic Fluid, and OKLab Color Mixing ---
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

// --- Quintic Smooth Noise (C2 continuous first & second derivatives for silky waves) ---
float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float smoothNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  // Quintic Hermite interpolation curve (Ken Perlin's improved polynomial)
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Ultra-smooth multi-octave FBM with irrational rotation matrix
float smoothFBM(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 rot = mat2(0.80, -0.60, 0.60, 0.80);
  for (int i = 0; i < 4; i++) {
    v += a * smoothNoise(p);
    p = rot * p * 2.02 + vec2(17.1, 9.3);
    a *= 0.5;
  }
  return v;
}

// --- Perceptual OKLab Color Mixing Pipeline ---
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
      // Smooth Hermite blend between adjacent color stops
      col = mixOklab(u_colors[i], u_colors[i + 1], smoothstep(0.0, 1.0, frac));
      break;
    }
  }
  return col;
}

// Microscopic film grain hash
float grainHash(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  
  // Smooth temporal scale
  float t = u_time * u_speed * 0.35;
  vec2 mouseP = (u_mouse - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  vec2 delta = p - mouseP;
  float dist = length(delta);

  // --- Silky Viscous Pointer Interactions ---
  if (u_mouse_active > 0.01) {
    float strength = u_mouse_active * (1.0 + u_mouse_speed * 2.8);
    
    if (u_cursor_mode == 0) {
      // 0: Soft Acoustic Waves & Ripples
      float rippleRadius = 0.65;
      float falloff = exp(-pow(dist / rippleRadius, 2.0));
      float wave = sin(dist * 20.0 - u_time * 5.0) * falloff;
      p -= normalize(delta + 0.0001) * wave * 0.045 * strength;
    } else if (u_cursor_mode == 1) {
      // 1: Fluid Vortex Swirl
      float swirlRadius = 0.55;
      float falloff = exp(-pow(dist / swirlRadius, 2.0));
      float angle = falloff * 2.5 * strength;
      float ca = cos(angle), sa = sin(angle);
      p = mouseP + mat2(ca, -sa, sa, ca) * delta;
    } else if (u_cursor_mode == 2) {
      // 2: Viscous Fluid Push / Displacement
      float pushRadius = 0.60;
      float falloff = exp(-pow(dist / pushRadius, 2.0));
      p += normalize(delta + 0.0001) * falloff * 0.14 * strength;
    } else if (u_cursor_mode == 3) {
      // 3: Chromatic Refraction Lens
      float lensRadius = 0.45;
      if (dist < lensRadius) {
        float f = smoothstep(lensRadius, 0.0, dist);
        p += delta * f * 0.22 * strength;
      }
    }
  }

  // --- Viscous Gyroscopic Liquid Flow (Harmonic Sine-Coupled Drift) ---
  vec2 flowDrift = vec2(
    sin(p.y * 1.8 + t * 0.6) * 0.15,
    cos(p.x * 1.8 - t * 0.5) * 0.15
  );
  p += flowDrift;

  // --- Multi-Tier Smooth Domain Warping ---
  vec2 q = vec2(
    smoothFBM(p * u_scale + vec2(0.0, 0.0) + t * 0.08 + u_seed),
    smoothFBM(p * u_scale + vec2(5.2, 1.3) + t * 0.10 + u_seed * 0.7)
  );

  vec2 r = vec2(
    smoothFBM(p * u_scale + 3.2 * q + vec2(1.7, 9.2) + t * 0.14),
    smoothFBM(p * u_scale + 3.2 * q + vec2(8.3, 2.8) + t * 0.12)
  );

  // Organic field value
  float field = smoothFBM(p * u_scale + 3.5 * r * u_turbulence + t * 0.18);

  // Soft harmonic modulation to enrich depth
  field = smoothstep(0.05, 0.95, field);

  // --- Dynamic Color Sampling with Smooth Chromatic Dispersion ---
  float chromaShift = u_chromatic * 0.022 * (1.0 + u_mouse_speed * 1.5);
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

  // --- Soft Specular Caustics & Liquid Sheen ---
  vec2 dF = vec2(
    smoothFBM(p * u_scale + 3.5 * r * u_turbulence + vec2(0.01, 0.0)) - field,
    smoothFBM(p * u_scale + 3.5 * r * u_turbulence + vec2(0.0, 0.01)) - field
  );
  vec3 normal = normalize(vec3(dF * 25.0, 1.0));
  vec3 lightDir = normalize(vec3(0.35, 0.65, 0.8));
  float specular = pow(clamp(dot(normal, lightDir), 0.0, 1.0), 5.0);
  col += vec3(0.95, 0.98, 1.0) * specular * 0.16;

  // --- Tactile Micro-Film Grain ---
  if (u_grain > 0.001) {
    float grain = (grainHash(gl_FragCoord.xy + fract(u_time * 19.3)) - 0.5) * u_grain * 0.11;
    col += grain;
  }

  // --- Gentle Cinematic Vignette ---
  float vignette = smoothstep(1.3, 0.4, length(uv - 0.5));
  col *= mix(0.82, 1.0, vignette);

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
  { id: 1, label: 'Vortex', icon: RefreshCw },
  { id: 2, label: 'Push', icon: Droplets },
  { id: 3, label: 'Prism Lens', icon: Sparkles },
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
  const [speed, setSpeed] = useState(1.0)
  const [turbulence, setTurbulence] = useState(1.15)
  const [scale, setScale] = useState(1.75)
  const [chromatic, setChromatic] = useState(1.1)
  const [grain, setGrain] = useState(0.35)
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
    s.mouseSpeed = Math.min(dist / 22.0, 2.2)

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

    // IntersectionObserver to pause rendering when offscreen
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

      // Ultra-smooth mouse easing
      s.mouseX += (s.targetMouseX - s.mouseX) * 0.1
      s.mouseY += (s.targetMouseY - s.mouseY) * 0.1
      s.mouseSpeed *= 0.95

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
    setTurbulence(0.9 + Math.random() * 0.6)
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
            <span>WEBGL 2.0 • PERCEPTUAL OKLAB DYNAMICS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-display drop-shadow-md">
            PRISMATIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-amber-300">LIQUID</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md font-medium drop-shadow-sm">
            Hyper-smooth hydrodynamic wave field with perceptual OKLab gamut blending and velocity-driven cursor physics.
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

      {/* 3. Center Subtle Interaction Hint */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="text-center px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/80 text-xs font-mono-code tracking-widest uppercase animate-pulse">
          Move cursor or drag across canvas to stir liquid waves
        </div>
      </div>

      {/* 4. Bottom Floating Glassmorphism Control Center (Redesigned with Zero Overlaps) */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="absolute bottom-6 left-6 right-6 max-w-4xl mx-auto glass-panel rounded-2xl p-5 sm:p-6 z-20 space-y-4"
          >
            {/* Section 1: Color Spectrum Header & Presets */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Color Spectrum</span>
                </div>
                <span className="text-cyan-300 font-mono-code text-[11px] bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                  {currentPreset.name}
                </span>
              </div>

              {/* Palette Buttons Grid with ample spacing */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {COLOR_PRESETS.map((preset) => {
                  const isActive = preset.id === activePresetId
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setActivePresetId(preset.id)}
                      className={`relative px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer flex flex-col items-start gap-1.5 text-left ${
                        isActive
                          ? 'bg-white/20 text-white border border-cyan-400/50 shadow-md ring-1 ring-cyan-400/30'
                          : 'bg-black/35 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {/* Swatch dots */}
                      <div className="flex items-center -space-x-1">
                        {preset.colors.slice(1, 5).map((c, i) => (
                          <span
                            key={i}
                            className="w-3 h-3 rounded-full border border-black/40 shadow-xs"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold truncate w-full tracking-tight">
                        {preset.name}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-white/10 w-full" />

            {/* Section 2: Cursor Physics Mode & Live Sliders */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
              {/* Left: Mode Buttons */}
              <div className="lg:col-span-5 space-y-1.5">
                <div className="text-[11px] font-mono-code uppercase tracking-wider text-slate-400">
                  Cursor Interaction Physics
                </div>
                <div className="grid grid-cols-4 gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10">
                  {CURSOR_MODES.map((mode) => {
                    const Icon = mode.icon
                    const isActive = cursorMode === mode.id
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setCursorMode(mode.id)}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold tracking-tight flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                          isActive
                            ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 shadow-xs'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span className="text-[10px] leading-none">{mode.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Right: Fine-Tuning Sliders with Clean Label Rows */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs font-mono-code">
                {/* Flow Speed */}
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">Flow Speed</span>
                    <span className="text-cyan-300 font-bold">{speed.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="3.0"
                    step="0.1"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-700/80 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Turbulence Warp */}
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">Turbulence</span>
                    <span className="text-pink-300 font-bold">{turbulence.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="2.5"
                    step="0.05"
                    value={turbulence}
                    onChange={(e) => setTurbulence(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-700/80 rounded-lg cursor-pointer"
                  />
                </div>

                {/* Chromatic Dispersion */}
                <div className="bg-black/30 p-2.5 rounded-xl border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-300">
                    <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">Prism Shift</span>
                    <span className="text-amber-300 font-bold">{chromatic.toFixed(1)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.0"
                    max="3.0"
                    step="0.1"
                    value={chromatic}
                    onChange={(e) => setChromatic(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-700/80 rounded-lg cursor-pointer"
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
