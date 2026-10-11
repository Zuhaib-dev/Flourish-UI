"use client";

import React, { useEffect, useRef, useState } from "react";

export interface WavesShaderUniforms {
  /** Playback speed multiplier (default -0.67, feel: speed 30/100) */
  speed?: number;
  /** Zoom scale (default 1.32, feel: zoom 41/100) */
  zoom?: number;
  /** Wave intensity (default 0.49, feel: intensity 49/100) */
  intensity?: number;
  /** Domain warp (default 0.01, feel: warp 1/100) */
  warp?: number;
  /** Wave detail level (default 1.73) */
  detail?: number;
  /** Wave paramA factor (default 0.84) */
  paramA?: number;
  /** Contrast adjustment (default 1.08, feel: contrast 53/100) */
  contrast?: number;
  /** Brightness adjustment (default 0.07, feel: brightness 57/100) */
  brightness?: number;
  /** Color saturation (default 2.00, feel: saturation 100/100) */
  saturation?: number;
  /** Hue rotation in radians (default 2.27 rad ~ 130°, feel: hue 130°) */
  hue?: number;
  /** Vignette intensity (default 0.00, feel: vignette 0/100) */
  vignette?: number;
  /** Blur radius (default 0.040) */
  blur?: number;
  /** Grain intensity (default 0.35, feel: grain 100/100) */
  grain?: number;
  /** Seed value for noise (default 4984.0) */
  seed?: number;
  /** Field rotation angle in radians (default 3.37) */
  rotate?: number;
  /** Slow drift factor (default 0.40) */
  drift?: number;
  /** Toggle perceptual OKLab blending (default true) */
  oklab?: boolean;
  /** 2D field offset (default [-0.13, 0.05]) */
  offset?: [number, number];
}

export interface WavesFlowShaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Up to 8 color stops as hex strings (e.g. ['#1A1423', '#B75D69', '#EACDC2', '#FFF5EB'])
   * or [r, g, b] floats in range 0..1. Defaults to the four OKLab wave colors.
   */
  colors?: string[] | [number, number, number][];
  /** Custom shader uniform parameters */
  uniforms?: WavesShaderUniforms;
  /** Toggle interactive mouse cursor reaction (default: false, cursor off) */
  interactive?: boolean;
  /** Cursor reaction mode: 0 push, 1 pinch, 2 swirl, 3 ripple (default: 3) */
  cursorEffect?: number;
  /** Cursor distortion strength (default: 0.54) */
  cursorStrength?: number;
  /** Cursor effect radius in UV space (default: 0.56) */
  cursorRadius?: number;
  /** Maximum device pixel ratio cap (default: 2) */
  maxDpr?: number;
  /** Additional CSS class for the canvas element */
  canvasClassName?: string;
  /** Additional inline styles for the canvas element */
  canvasStyle?: React.CSSProperties;
  /** Optional content rendered in front of the animated shader canvas */
  children?: React.ReactNode;
}

// Exact fragment shader provided by the user (Waves — 21st.dev Shader Builder)
const FRAGMENT_SHADER_SOURCE = `
// "Waves" — made with the 21st.dev Shader Builder
// Packed WebGL1 uniforms (the shader exposes readable u_* aliases as macros):
//   u_colors[8] (first 4 used)
//   vec3(0.102, 0.078, 0.137)
//   vec3(0.718, 0.365, 0.412)
//   vec3(0.918, 0.804, 0.761)
//   vec3(1.000, 0.961, 0.922)
//   u_scene = vec4(canvas width, canvas height, seconds * -0.67, 4.0)
//   u_shape = vec4(1.32, 0.49, 0.84, 0.01)
//   u_surface = vec4(1.73, 1.08, 0.07, 2.00)
//   u_finish = vec4(2.27, 0.00, 0.040, 0.35)
//   u_transform = vec4(4984.0, 3.37, 0.40, 1.0)
//   u_space = vec4(-0.13, 0.05, pointer x, pointer y)
//   u_cursor = vec4(presence, 3.0, 0.54, 0.56)
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec3 u_colors[8];
// Seven packed vectors + eight colour vectors = 15 fragment uniform vectors,
// one below WebGL1's guaranteed minimum. Macros preserve the public u_* API.
uniform vec4 u_scene;      // resolution.xy, time, colour count
uniform vec4 u_shape;      // scale, intensity, paramA, warp
uniform vec4 u_surface;    // detail, contrast, brightness, saturation
uniform vec4 u_finish;     // hue, vignette, blur, grain
uniform vec4 u_transform;  // seed, rotation, drift, OKLab toggle
uniform vec4 u_space;      // offset.xy, pointer.xy
uniform vec4 u_cursor;
#define u_resolution u_scene.xy
#define u_time u_scene.z
#define u_colorCount u_scene.w
#define u_scale u_shape.x
#define u_intensity u_shape.y
#define u_paramA u_shape.z
#define u_warp u_shape.w
#define u_detail u_surface.x
#define u_contrast u_surface.y
#define u_brightness u_surface.z
#define u_saturation u_surface.w
#define u_hue u_finish.x
#define u_vignette u_finish.y
#define u_blur u_finish.z
#define u_grain u_finish.w
#ifdef GL_FRAGMENT_PRECISION_HIGH
#define u_seed u_transform.x
#else
// Keep hash inputs inside mediump's guaranteed ±2^14 range.
#define u_seed mod(u_transform.x, 31.0)
#endif
#define u_rotate u_transform.y
#define u_drift u_transform.z
#define u_oklab u_transform.w
#define u_offset u_space.xy
#define u_mouse u_space.zw
#define u_cursorPresence u_cursor.x
#define u_cursorEffect u_cursor.y
#define u_cursorStrength u_cursor.z
#define u_cursorRadius u_cursor.w
float hash21(vec2 p) {
#ifndef GL_FRAGMENT_PRECISION_HIGH
p = mod(p, 31.0);
#endif
p = fract(p * vec2(234.34, 435.345));
p += dot(p, p + 34.23);
return fract(p.x * p.y);
}
// Even, un-structured white noise for film grain (Dave Hoskins hash12). The
// multiply hash above is fine for value noise but shows a faint axis-aligned
// mesh at integer fragment coords, which reads as a net over flat areas.
float grainHash(vec2 p) {
vec3 p3 = fract(vec3(p.xyx) * 0.1031);
p3 += dot(p3, p3.yzx + 33.33);
return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p) {
#ifndef GL_FRAGMENT_PRECISION_HIGH
p = mod(p, 31.0);
#endif
float n = sin(dot(p, vec2(41.0, 289.0)));
return fract(vec2(15731.743, 7892.321) * n);
}
float noise(vec2 p) {
vec2 i = floor(p);
vec2 f = fract(p);
vec2 u = f * f * (3.0 - 2.0 * f);
return mix(
mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
u.y);
}
float fbm(vec2 p) {
float v = 0.0;
float a = 0.5;
for (int i = 0; i < 5; i++) {
v += a * noise(p);
p = p * 2.03 + vec2(17.0, 9.2);
a *= 0.5;
}
return v;
}
// --- OKLab colour mixing (perceptual), gated by u_oklab -----------------------
vec3 srgbToLinear(vec3 c) {
return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
}
vec3 linearToSrgb(vec3 c) {
// max() guards the sRGB branch: out-of-gamut OKLab interpolations can send a
// channel negative, and pow(negative, …) is NaN which mix()/step() would
// then propagate. The linear branch clips such channels to 0 downstream.
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
0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s);
}
vec3 oklabToLin(vec3 c) {
float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
l = l * l * l;
m = m * m * m;
s = s * s * s;
return vec3(
4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
-0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s);
}
vec3 mixColour(vec3 a, vec3 b, float t) {
if (u_oklab > 0.5) {
vec3 la = linToOklab(srgbToLinear(a));
vec3 lb = linToOklab(srgbToLinear(b));
return clamp(linearToSrgb(oklabToLin(mix(la, lb, t))), 0.0, 1.0);
}
return mix(a, b, t);
}
// Mix through the recipe colours; x is clamped to 0..1. WebGL1 forbids
// dynamic uniform indexing in fragment shaders, hence the constant loop.
vec3 palette(float x) {
float n = max(u_colorCount - 1.0, 1.0);
float f = clamp(x, 0.0, 1.0) * n;
vec3 col = u_colors[0];
for (int i = 0; i < 7; i++) {
if (float(i) < n) col = mixColour(col, u_colors[i + 1], smoothstep(0.0, 1.0, clamp(f - float(i), 0.0, 1.0)));
}
return col;
}
vec3 hueRotate(vec3 col, float a) {
const mat3 toYIQ = mat3(0.299, 0.596, 0.211, 0.587, -0.274, -0.523, 0.114, -0.322, 0.312);
const mat3 toRGB = mat3(1.0, 1.0, 1.0, 0.956, -0.272, -1.106, 0.621, -0.647, 1.703);
vec3 yiq = toYIQ * col;
float ca = cos(a), sa = sin(a);
yiq = vec3(yiq.x, yiq.y * ca - yiq.z * sa, yiq.y * sa + yiq.z * ca);
return toRGB * yiq;
}
vec3 shade(vec2 uv, vec2 p, float t) {
float y = uv.y + sin(uv.x * (3.0 + u_intensity * 9.0) + t * 0.8) * 0.08 + (fbm(p * 2.0 + t * 0.1) - 0.5) * u_intensity * 0.6;
return palette(y);
}
void main() {
vec2 uv = gl_FragCoord.xy / u_resolution.xy;
vec2 screenUv = uv;
vec2 p = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
float cursorMask = 0.0;
// Cursor modes 1–3 are local distortions. Push shifts the same screen-space
// coordinates before field transforms, so Zoom/Rotate don't change its feel.
if (u_cursorPresence > 0.001) {
// u_mouse is normalized to -1..1 in canvas space. Convert it to the same
// aspect-corrected screen space as p so effects stay under the cursor.
vec2 cursor = (0.5 * u_mouse * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
vec2 cursorDelta = p - cursor;
if (u_cursorEffect < 0.5) {
p += cursor * u_cursorPresence * u_cursorStrength * 0.55;
} else {
float cursorDistance = length(cursorDelta);
vec2 cursorDirection = cursorDelta / max(cursorDistance, 0.0001);
cursorMask = u_cursorPresence * (1.0 - smoothstep(0.0, u_cursorRadius, cursorDistance));
if (u_cursorEffect < 1.5) {
p -= cursorDirection * cursorMask * u_cursorStrength * 0.24;
} else if (u_cursorEffect < 2.5) {
float cursorAngle = cursorMask * u_cursorStrength * 2.2;
float cc = cos(cursorAngle), cs = sin(cursorAngle);
p = cursor + mat2(cc, -cs, cs, cc) * cursorDelta;
} else if (u_cursorEffect < 3.5) {
float ripple = sin(
cursorDistance / max(u_cursorRadius, 0.001) * 18.0 - u_time * 5.0);
p -= cursorDirection * ripple * cursorMask * u_cursorStrength * 0.07;
}
}
}
// Keep presets that read uv (rather than p) in the same warped space.
uv = p * min(u_resolution.x, u_resolution.y) / u_resolution.xy + 0.5;
p *= u_scale;
// Field transform: rotate, pan, pointer push, slow drift.
if (abs(u_rotate) > 0.0001) {
float cr = cos(u_rotate), sr = sin(u_rotate);
p = mat2(cr, -sr, sr, cr) * p;
}
p += u_offset;
if (u_drift > 0.0001) p += u_drift * vec2(sin(u_time * 0.31), cos(u_time * 0.23));
// Organic domain warp.
if (u_warp > 0.0) {
p += u_warp * (vec2(
fbm(p * u_detail + u_seed),
fbm(p * u_detail + vec2(5.2, 1.3))) - 0.5);
}
// Shade, with an optional soft 5-tap blur.
vec3 col;
if (u_blur > 0.0) {
float e = u_blur;
float pe = e * u_scale;
vec2 uvE = vec2(e) * min(u_resolution.x, u_resolution.y) / u_resolution.xy;
col  = shade(uv, p, u_time) * 0.36;
col += shade(uv + vec2(uvE.x, 0.0), p + vec2(pe, 0.0), u_time) * 0.16;
col += shade(uv - vec2(uvE.x, 0.0), p - vec2(pe, 0.0), u_time) * 0.16;
col += shade(uv + vec2(0.0, uvE.y), p + vec2(0.0, pe), u_time) * 0.16;
col += shade(uv - vec2(0.0, uvE.y), p - vec2(0.0, pe), u_time) * 0.16;
} else {
col = shade(uv, p, u_time);
}
// Post: contrast, saturation, hue, brightness, vignette, grain.
if (abs(u_contrast - 1.0) > 0.0001) col = (col - 0.5) * u_contrast + 0.5;
if (abs(u_saturation - 1.0) > 0.0001) {
float luma = dot(col, vec3(0.299, 0.587, 0.114));
col = mix(vec3(luma), col, u_saturation);
}
if (abs(u_hue) > 0.0001) col = hueRotate(col, u_hue);
if (abs(u_brightness) > 0.0001) col += u_brightness;
if (u_vignette > 0.0001) {
float vd = length(screenUv - 0.5) * 1.41421356;
col *= 1.0 - u_vignette * smoothstep(0.35, 1.0, vd);
}
if (u_cursorPresence > 0.001 && u_cursorEffect > 3.5) col += (vec3(0.18) + col * 0.12) * cursorMask * u_cursorStrength;
if (u_grain > 0.0001) col += (grainHash(
gl_FragCoord.xy + vec2(u_seed * 17.0, u_seed * 31.0)) - 0.5) * u_grain;
gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

// Plain fullscreen triangle vertex shader
const VERTEX_SHADER_SOURCE = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Default four wave colors: #1A1423, #B75D69, #EACDC2, #FFF5EB
const DEFAULT_VEC3_COLORS: [number, number, number][] = [
  [0.102, 0.078, 0.137], // #1A1423
  [0.718, 0.365, 0.412], // #B75D69
  [0.918, 0.804, 0.761], // #EACDC2
  [1.000, 0.961, 0.922], // #FFF5EB
];

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "").trim();
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16) / 255;
    const g = parseInt(clean[1] + clean[1], 16) / 255;
    const b = parseInt(clean[2] + clean[2], 16) / 255;
    return [r, g, b];
  }
  if (clean.length === 6) {
    const r = parseInt(clean.substring(0, 2), 16) / 255;
    const g = parseInt(clean.substring(2, 4), 16) / 255;
    const b = parseInt(clean.substring(4, 6), 16) / 255;
    return [r, g, b];
  }
  return [0, 0, 0];
}

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("WebGL shader compile error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vsSource: string,
  fsSource: string
): WebGLProgram | null {
  const vs = compileShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return null;

  const prog = gl.createProgram();
  if (!prog) return null;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);

  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    console.error("WebGL program link error:", gl.getProgramInfoLog(prog));
    gl.deleteProgram(prog);
    return null;
  }
  return prog;
}

export function WavesFlowShader({
  colors = DEFAULT_VEC3_COLORS,
  uniforms = {},
  interactive = false,
  cursorEffect = 3.0,
  cursorStrength = 0.54,
  cursorRadius = 0.56,
  maxDpr = 2,
  className = "",
  canvasClassName = "",
  canvasStyle,
  children,
  style,
  ...restProps
}: WavesFlowShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  // Mutable animation state references to avoid RAF re-allocations
  const mouseState = useRef({
    x: 0,
    y: 0,
    targetPresence: 0,
    presence: 0,
  });

  const uniformsRef = useRef(uniforms);
  uniformsRef.current = uniforms;

  const colorsRef = useRef(colors);
  colorsRef.current = colors;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Plain WebGL1 context, no external libraries
    const gl =
      (canvas.getContext("webgl", {
        antialias: false,
        depth: false,
        stencil: false,
        alpha: false,
        powerPreference: "high-performance",
        preserveDrawingBuffer: false,
      }) as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      console.warn("WebGL1 not supported in this browser environment.");
      setWebGlSupported(false);
      return;
    }

    const program = createProgram(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE);
    if (!program) {
      setWebGlSupported(false);
      return;
    }

    gl.useProgram(program);

    // Fullscreen single triangle: vertices (-1, -1), (3, -1), (-1, 3)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1.0, -1.0, 3.0, -1.0, -1.0, 3.0]),
      gl.STATIC_DRAW
    );

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Look up uniform locations
    const uColorsLoc =
      gl.getUniformLocation(program, "u_colors[0]") ||
      gl.getUniformLocation(program, "u_colors");
    const uSceneLoc = gl.getUniformLocation(program, "u_scene");
    const uShapeLoc = gl.getUniformLocation(program, "u_shape");
    const uSurfaceLoc = gl.getUniformLocation(program, "u_surface");
    const uFinishLoc = gl.getUniformLocation(program, "u_finish");
    const uTransformLoc = gl.getUniformLocation(program, "u_transform");
    const uSpaceLoc = gl.getUniformLocation(program, "u_space");
    const uCursorLoc = gl.getUniformLocation(program, "u_cursor");

    // Preallocated float buffer for 8 color vectors (24 floats)
    const packedColors = new Float32Array(24);

    let animationFrameId: number | null = null;
    let isTabVisible = !document.hidden;
    const startTime = performance.now();

    // Mouse / Pointer handlers when interactive is enabled
    const handlePointerMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      const px = ((e.clientX - rect.left) / rect.width) * 2.0 - 1.0;
      const py = 1.0 - ((e.clientY - rect.top) / rect.height) * 2.0;

      mouseState.current.x = px;
      mouseState.current.y = py;
      mouseState.current.targetPresence = 1.0;
    };

    const handlePointerLeave = () => {
      mouseState.current.targetPresence = 0.0;
    };

    const targetEl = containerRef.current || canvas;
    if (interactive && targetEl) {
      targetEl.addEventListener("mousemove", handlePointerMove as EventListener);
      targetEl.addEventListener("mouseleave", handlePointerLeave as EventListener);
    }

    // Tab visibility handling: pause RAF loop when hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isTabVisible = false;
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      } else {
        isTabVisible = true;
        if (animationFrameId === null) {
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (!isTabVisible) return;

      // 1. Resize handling: cap devicePixelRatio at 2
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
      const rect = canvas.getBoundingClientRect();
      const displayWidth = Math.max(1, Math.floor(rect.width * dpr));
      const displayHeight = Math.max(1, Math.floor(rect.height * dpr));

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
      }

      // 2. Prepare color uniform buffer
      const currentColors = colorsRef.current;
      const colorCount = Math.min(8, Math.max(1, currentColors.length));

      packedColors.fill(0);
      for (let i = 0; i < colorCount; i++) {
        const c = currentColors[i];
        let rgb: [number, number, number] = [0, 0, 0];
        if (typeof c === "string") {
          rgb = hexToRgb(c);
        } else if (Array.isArray(c) && c.length >= 3) {
          rgb = [c[0], c[1], c[2]];
        }
        packedColors[i * 3 + 0] = rgb[0];
        packedColors[i * 3 + 1] = rgb[1];
        packedColors[i * 3 + 2] = rgb[2];
      }

      if (uColorsLoc) {
        gl.uniform3fv(uColorsLoc, packedColors);
      }

      // 3. Time calculation: default -0.67 (speed 30/100)
      const u = uniformsRef.current;
      const elapsedSeconds = (performance.now() - startTime) / 1000;
      const speedMultiplier = u.speed ?? -0.67;
      const timeVal = elapsedSeconds * speedMultiplier;

      // u_scene = vec4(canvas width, canvas height, seconds * -0.67, 4.0)
      if (uSceneLoc) {
        gl.uniform4f(
          uSceneLoc,
          canvas.width,
          canvas.height,
          timeVal,
          colorCount
        );
      }

      // u_shape = vec4(scale, intensity, paramA, warp)
      // Defaults: 1.32 (zoom 41/100), 0.49 (intensity 49/100), 0.84, 0.01 (warp 1/100)
      if (uShapeLoc) {
        gl.uniform4f(
          uShapeLoc,
          u.zoom ?? 1.32,
          u.intensity ?? 0.49,
          u.paramA ?? 0.84,
          u.warp ?? 0.01
        );
      }

      // u_surface = vec4(detail, contrast, brightness, saturation)
      // Defaults: 1.73, 1.08 (contrast 53/100), 0.07 (brightness 57/100), 2.00 (saturation 100/100)
      if (uSurfaceLoc) {
        gl.uniform4f(
          uSurfaceLoc,
          u.detail ?? 1.73,
          u.contrast ?? 1.08,
          u.brightness ?? 0.07,
          u.saturation ?? 2.00
        );
      }

      // u_finish = vec4(hue, vignette, blur, grain)
      // Defaults: 2.27 (hue 130° rad), 0.00 (vignette 0/100), 0.040, 0.35 (grain 100/100)
      if (uFinishLoc) {
        gl.uniform4f(
          uFinishLoc,
          u.hue ?? 2.27,
          u.vignette ?? 0.00,
          u.blur ?? 0.040,
          u.grain ?? 0.35
        );
      }

      // u_transform = vec4(seed, rotation, drift, OKLab toggle)
      // Defaults: 4984.0, 3.37, 0.40, 1.0
      if (uTransformLoc) {
        gl.uniform4f(
          uTransformLoc,
          u.seed ?? 4984.0,
          u.rotate ?? 3.37,
          u.drift ?? 0.40,
          (u.oklab ?? true) ? 1.0 : 0.0
        );
      }

      // Smooth pointer presence transition
      const ms = mouseState.current;
      ms.presence += (ms.targetPresence - ms.presence) * 0.1;

      // u_space = vec4(offset.xy, pointer.xy)
      // Defaults: -0.13, 0.05, pointer x, pointer y
      const offset = u.offset ?? [-0.13, 0.05];
      if (uSpaceLoc) {
        gl.uniform4f(
          uSpaceLoc,
          offset[0],
          offset[1],
          interactive ? ms.x : 0.0,
          interactive ? ms.y : 0.0
        );
      }

      // u_cursor = vec4(presence, effect, strength, radius)
      // Cursor: off => presence = 0.0
      if (uCursorLoc) {
        const presence = interactive ? ms.presence : 0.0;
        gl.uniform4f(
          uCursorLoc,
          presence,
          cursorEffect,
          cursorStrength,
          cursorRadius
        );
      }

      // Draw single fullscreen triangle
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      animationFrameId = requestAnimationFrame(render);
    };

    // Kick off animation loop
    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (interactive && targetEl) {
        targetEl.removeEventListener("mousemove", handlePointerMove as EventListener);
        targetEl.removeEventListener("mouseleave", handlePointerLeave as EventListener);
      }
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
      if (program) gl.deleteProgram(program);
    };
  }, [
    interactive,
    cursorEffect,
    cursorStrength,
    cursorRadius,
    maxDpr,
  ]);

  const canvasElement = (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 h-full w-full select-none ${canvasClassName}`}
      style={{
        display: "block",
        ...canvasStyle,
      }}
    />
  );

  // If component is used as a standalone canvas background element:
  if (!children) {
    return (
      <div
        ref={containerRef}
        className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
        style={style}
        {...restProps}
      >
        {canvasElement}
        {!webGlSupported && (
          <div
            className="absolute inset-0 bg-gradient-to-tr from-[#1A1423] via-[#B75D69] to-[#FFF5EB] opacity-60"
            aria-hidden="true"
          />
        )}
      </div>
    );
  }

  // If children are passed, wrap content with the shader canvas mounted behind:
  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={style}
      {...restProps}
    >
      {canvasElement}
      {!webGlSupported && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-[#1A1423] via-[#B75D69] to-[#FFF5EB] opacity-60"
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}

// Named alias so both WavesFlowShader and WavesShaderBackground work interchangeably
export const WavesShaderBackground = WavesFlowShader;
export default WavesFlowShader;
