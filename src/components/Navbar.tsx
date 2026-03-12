
"use client";

import React, { useRef, useState, useEffect } from "react";

export default function Navbar() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const portfolio = document.getElementById("portfolio");
      const process = document.getElementById("process");
      const pricing = document.getElementById("pricing");
      const cta = document.getElementById("cta");

      const checkInView = (el: HTMLElement | null) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        // Verifica se a seção está passando pela área do topo (onde a navbar fica)
        return rect.top <= 60 && rect.bottom >= 60;
      };

      if (checkInView(portfolio) || checkInView(process) || checkInView(pricing) || checkInView(cta)) {
        setIsLightSection(true);
      } else {
        setIsLightSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Dinâmica de Cores:
  // Seção Clara -> Botão Preto com Hover Laranja
  // Seção Escura -> Botão Laranja com Hover Laranja Vibrante
  const btnStyles = isLightSection 
    ? "bg-black text-white hover:bg-accent hover:text-black" 
    : "bg-accent text-black hover:brightness-110";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[500] flex items-center justify-between py-6 px-13 md:px-[52px] pointer-events-none">
      <a href="#" className="font-headline text-[22px] tracking-[0.18em] text-foreground no-underline pointer-events-auto mix-blend-difference">
        PHANTOM<span className="text-accent">.</span>
      </a>
      <a
        ref={btnRef}
        href="#cta"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`magnetic-btn pointer-events-auto font-mono text-[10px] tracking-[0.22em] uppercase px-5 py-3 flex items-center gap-2 group relative overflow-hidden transition-all duration-300 hover:gap-4 ${btnStyles}`}
      >
        <span className="relative">Iniciar Projeto</span>
        <span className="relative">→</span>
      </a>
    </nav>
  );
}
