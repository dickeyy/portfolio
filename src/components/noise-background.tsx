import { useEffect, useRef } from "react";

// ── HEX → RGB ──────────────────────────────────────────────────────────────
function hexToRgb(hex: string): [number, number, number] {
    let h = hex.replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    const n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// Bayer 8x8 — values divided by 64 to match original component's threshold range
const BAYER8 = new Float32Array(
    [
        0, 32, 8, 40, 2, 34, 10, 42, 48, 16, 56, 24, 50, 18, 58, 26, 12, 44, 4,
        36, 14, 46, 6, 38, 60, 28, 52, 20, 62, 30, 54, 22, 3, 35, 11, 43, 1, 33,
        9, 41, 51, 19, 59, 27, 49, 17, 57, 25, 15, 47, 7, 39, 13, 45, 5, 37, 63,
        31, 55, 23, 61, 29, 53, 21,
    ].map((v) => v / 64),
);

// ── Shaders ────────────────────────────────────────────────────────────────
const VERT = `#version 300 es
in vec2 a_pos;
void main() {
    gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2  u_resolution;
uniform float u_time;
uniform float u_amplitude;
uniform float u_frequency;
uniform vec3  u_color;
uniform float u_pxSize;
uniform float u_bayer[64];

out vec4 fragColor;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash(i),                 hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
    );
}

float fbm(vec2 p) {
    return 0.5  * smoothNoise(p)
         + 0.35 * smoothNoise(p * 2.0)
         + 0.15 * smoothNoise(p * 4.0);
}

void main() {
    // Snap to pixel cell so output looks pixelated, matching pxSize behaviour
    vec2 cell       = floor(gl_FragCoord.xy / u_pxSize);
    vec2 cellCenter = (cell + 0.5) * u_pxSize;

    // Normalised UV in [-0.5, 0.5], aspect-corrected (mirrors original nx/ny)
    vec2 nuv   = cellCenter / u_resolution - 0.5;
    float aspect = u_resolution.x / u_resolution.y;
    if (aspect > 1.0) nuv.x *= aspect;
    else              nuv.y /= aspect;

    // fbm — scale and time movement matches original evalShape "noise" branch
    vec2  p = nuv * (u_frequency * 8.0) + vec2(-u_time, u_time);
    float v = fbm(p);
    v = 0.5 + u_amplitude * (v - 0.5) * 10.0;
    v = smoothstep(0.5, 2.0, v);

    // Bayer 8x8 dithering
    int bx = int(mod(cell.x, 8.0));
    int by = int(mod(cell.y, 8.0));
    float threshold = u_bayer[by * 8 + bx];

    float lit = v > threshold ? 1.0 : 0.0;
    fragColor = vec4(u_color * lit, lit);
}`;

// ── Component ──────────────────────────────────────────────────────────────
export interface NoiseBackgroundProps {
    colorFg?: string;
    amplitude?: number;
    frequency?: number;
    speed?: number;
    pxSize?: number;
    className?: string;
    fixed?: boolean;
}

export function NoiseBackground({
    colorFg = "#0000ff",
    amplitude = 0.15,
    frequency = 0.7,
    speed = 0.3,
    pxSize = 2,
    className,
    fixed = false,
}: NoiseBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Keep latest prop values accessible inside the render loop without
    // tearing down and recreating the WebGL context on every prop change.
    const propsRef = useRef({ colorFg, amplitude, frequency, speed, pxSize });
    useEffect(() => {
        propsRef.current = { colorFg, amplitude, frequency, speed, pxSize };
    }, [colorFg, amplitude, frequency, speed, pxSize]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const gl = canvas.getContext("webgl2", {
            alpha: true,
            premultipliedAlpha: false,
            antialias: false,
            depth: false,
            stencil: false,
        });

        if (!gl) {
            // WebGL2 unavailable — canvas stays empty (transparent), no error thrown.
            return;
        }

        // Shader compilation helper
        const compile = (type: number, src: string): WebGLShader => {
            const sh = gl.createShader(type);
            if (!sh) throw new Error("createShader failed");
            gl.shaderSource(sh, src);
            gl.compileShader(sh);
            if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
                throw new Error(gl.getShaderInfoLog(sh) ?? "shader error");
            }
            return sh;
        };

        const prog = gl.createProgram();
        if (!prog) throw new Error("createProgram failed");
        gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
        gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            throw new Error(gl.getProgramInfoLog(prog) ?? "link error");
        }
        // biome-ignore lint/correctness/useHookAtTopLevel: gl.useProgram is a WebGL API method, not a React hook
        gl.useProgram(prog);

        // Full-screen quad — two triangles covering clip space
        const vao = gl.createVertexArray();
        if (!vao) throw new Error("createVertexArray failed");
        gl.bindVertexArray(vao);
        const buf = gl.createBuffer();
        if (!buf) throw new Error("createBuffer failed");
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            // prettier-ignore
            new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
            gl.STATIC_DRAW,
        );
        const aPosLoc = gl.getAttribLocation(prog, "a_pos");
        gl.enableVertexAttribArray(aPosLoc);
        gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

        // Cache uniform locations
        const uRes = gl.getUniformLocation(prog, "u_resolution");
        const uTime = gl.getUniformLocation(prog, "u_time");
        const uAmp = gl.getUniformLocation(prog, "u_amplitude");
        const uFreq = gl.getUniformLocation(prog, "u_frequency");
        const uColor = gl.getUniformLocation(prog, "u_color");
        const uPx = gl.getUniformLocation(prog, "u_pxSize");
        const uBayer = gl.getUniformLocation(prog, "u_bayer");

        // Bayer matrix is static — upload once
        gl.uniform1fv(uBayer, BAYER8);

        // Premultiplied alpha blend
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        let dpr = 1;
        let animId = 0;
        const startTime = Date.now();

        const resize = () => {
            dpr = window.devicePixelRatio || 1;
            const W = container.clientWidth;
            const H = container.clientHeight;
            canvas.width = Math.round(W * dpr);
            canvas.height = Math.round(H * dpr);
            canvas.style.width = `${W}px`;
            canvas.style.height = `${H}px`;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };

        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(container);

        const render = () => {
            const { colorFg, amplitude, frequency, speed, pxSize } =
                propsRef.current;

            const t = (Date.now() - startTime) * 0.001 * speed;
            const [r, g, b] = hexToRgb(colorFg);

            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform1f(uTime, t);
            gl.uniform1f(uAmp, amplitude);
            gl.uniform1f(uFreq, frequency);
            gl.uniform3f(uColor, r / 255, g / 255, b / 255);
            gl.uniform1f(uPx, Math.max(1, Math.floor(pxSize * dpr)));

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animId = requestAnimationFrame(render);
        };

        animId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animId);
            ro.disconnect();
            gl.deleteVertexArray(vao);
            gl.deleteBuffer(buf);
            gl.deleteProgram(prog);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                position: fixed ? "fixed" : "absolute",
                inset: 0,
                overflow: "hidden",
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    display: "block",
                    background: "transparent",
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    );
}
