"use client";

import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Início" },
  { id: "manifesto", label: "Manifesto" },
  { id: "numbers", label: "Números" },
  { id: "services", label: "Serviços" },
  { id: "portfolio", label: "Portfólio" },
  { id: "weapon", label: "Comparação" },
  { id: "process", label: "Processo" },
  { id: "pricing", label: "Planos" },
  { id: "cta", label: "Contato" },
];

export default function SectionProgress() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let active = 0;
      SECTIONS.forEach((s, i) => {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.55) {
          active = i;
        }
      });
      setActiveIdx(active);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="sec-progress" className="fixed left-7 top-1/2 -translate-y-1/2 z-[400] flex flex-col items-center gap-2 hidden md:flex">
      <div className="flex flex-col gap-[10px]">
        {SECTIONS.map((s, i) => (
          <div
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`w-[3px] h-[3px] rounded-full bg-white/20 transition-all duration-400 cursor-pointer ${
              i === activeIdx ? "bg-accent shadow-[0_0_5px_rgba(200,255,0,0.4)] scale-y-150" : ""
            }`}
          />
        ))}
      </div>
      <div className="font-mono text-[7px] tracking-[0.2em] text-white/20 uppercase vertical-rl rotate-180 mt-1 transition-colors duration-400">
        {SECTIONS[activeIdx].label}
      </div>
    </div>
  );
}
