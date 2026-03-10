"use client";

import React, { useRef } from "react";

export default function Navbar() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    btn.style.transform = "";
    btn.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
    setTimeout(() => {
      btn.style.transition = "";
    }, 500);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between py-6 px-13 md:px-[52px] mix-blend-difference pointer-events-none">
      <a href="#" className="font-headline text-[22px] tracking-[0.18em] text-foreground no-underline pointer-events-auto">
        PHANTOM<span className="text-accent">.</span>
      </a>
      <a
        ref={btnRef}
        href="#cta"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="magnetic-btn pointer-events-auto font-mono text-[10px] tracking-[0.22em] uppercase text-black bg-foreground px-5 py-3 flex items-center gap-2 group relative overflow-hidden transition-all duration-300 hover:gap-4"
      >
        <span className="absolute inset-0 bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]"></span>
        <span className="relative">Iniciar Projeto</span>
        <span className="relative">→</span>
      </a>
    </nav>
  );
}