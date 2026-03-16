
"use client";

import React, { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d")!;
    let W: number, H: number, dots: any[];

    const init = () => {
      W = cv.width = cv.parentElement?.offsetWidth || window.innerWidth;
      H = cv.height = cv.parentElement?.offsetHeight || window.innerHeight;
      const cols = Math.floor(W / 60);
      const rows = Math.floor(H / 60);
      dots = [];
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          dots.push({
            x: c * (W / cols),
            y: r * (H / rows),
            ox: c * (W / cols),
            oy: r * (H / rows),
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            a: Math.random() * 0.5 + 0.1,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (Math.abs(d.x - d.ox) > 12) d.vx *= -1;
        if (Math.abs(d.y - d.oy) > 12) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,85,0,${d.a * 0.15})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  return (
    <section id="hero" className="relative min-h-svh flex flex-col justify-center px-6 md:pl-[180px] md:pr-[80px] pt-[140px] pb-32 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-50" />
      
      <div className="relative z-10 w-full flex flex-col items-center md:items-start text-center md:text-left">
        <div className="font-mono text-[clamp(7px,1.2vw,10px)] tracking-[0.32em] text-muted uppercase mb-[48px] flex items-center gap-[14px] animate-[fdUp_0.8s_0.2s_forwards] opacity-0 md:before:content-[''] md:before:w-7 md:before:h-[1px] md:before:bg-muted whitespace-nowrap">
          Estúdio Digital · Experiências que Convertem
        </div>

        <h1 className="font-display text-[clamp(44px,11.5vw,165px)] leading-[1] tracking-[-0.02em] text-foreground">
          <span className="block overflow-hidden py-1 h-[1.3em]">
            <span className="block translate-y-[110%] animate-[slideUp_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]">NÃO FAZEMOS</span>
          </span>
          <span className="block overflow-hidden py-1 h-[1.3em]">
            <span className="block translate-y-[110%] animate-[slideUp_0.9s_0.08s_cubic-bezier(0.16,1,0.3,1)_forwards] word-out">SITES.</span>
          </span>
          <span className="block overflow-hidden py-1 h-[1.3em]">
            <span className="block translate-y-[110%] animate-[slideUp_0.9s_0.16s_cubic-bezier(0.16,1,0.3,1)_forwards]">
              CRIAMOS <span className="word-acc">EXPERIÊNCIAS.</span>
            </span>
          </span>
        </h1>

        <div className="mt-20 flex flex-col md:flex-row items-center md:items-end justify-between w-full gap-10">
          <p className="text-[clamp(15px,1.8vw,19px)] font-normal leading-[1.65] text-muted max-w-[480px] animate-[fdUp_0.8s_0.75s_forwards] opacity-0 text-center md:text-left">
            Cada pixel é uma decisão estratégica. Cada animação, uma intenção. O resultado? O melhor site que seus clientes já visitaram na vida.
          </p>
          <div className="flex flex-col items-center gap-[10px] animate-[fdUp_0.8s_1s_forwards] opacity-0 hidden md:flex">
            <div className="w-[1px] h-[60px] bg-border relative overflow-hidden after:content-[''] after:absolute after:top-[-100%] after:left-0 after:w-full after:h-full after:bg-accent after:animate-[drip_1.4s_ease-in-out_infinite]"></div>
            <span className="font-mono text-[9px] tracking-[0.28em] text-muted vertical-rl">SCROLL</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp { to { transform: translateY(0); } }
        @keyframes fdUp { to { opacity: 1; } }
        @keyframes drip { to { top: 100%; } }
      `}</style>
    </section>
  );
}
