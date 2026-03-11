
"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    text: "A Phantom transformou nossa visão em uma arma digital. O resultado superou todas as expectativas de performance.",
    name: "Roberto K.",
    company: "TechFlow Solutions",
    role: "CEO",
    avatar: "https://picsum.photos/seed/person1/100/100",
    pos: "top-[10%] left-[5%]",
    color: "bg-accent"
  },
  {
    id: 2,
    text: "Design único. Não é apenas um site, é uma experiência imersiva que respira a alma da nossa marca.",
    name: "Amanda Lima",
    company: "Studio Criativo",
    role: "Diretora de Arte",
    avatar: "https://picsum.photos/seed/person2/100/100",
    pos: "top-[25%] right-[10%]",
    color: "bg-white"
  },
  {
    id: 3,
    text: "Performance impecável. Nossas conversões subiram 40% logo no primeiro mês após o lançamento.",
    name: "João Mendes",
    company: "Growth Corp",
    role: "Marketing Manager",
    avatar: "https://picsum.photos/seed/person3/100/100",
    pos: "bottom-[30%] left-[15%]",
    color: "bg-accent"
  },
  {
    id: 4,
    text: "O processo é transparente e o código é de elite. A melhor decisão estratégica que tomamos este ano.",
    name: "Carla Dias",
    company: "NeoBank",
    role: "CTO",
    avatar: "https://picsum.photos/seed/person4/100/100",
    pos: "bottom-[15%] right-[20%]",
    color: "bg-white"
  }
];

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="testimonials" className="relative h-[120vh] md:h-screen flex items-center py-32 px-6 md:pl-[180px] md:pr-[80px] bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full h-full relative">
        
        {/* Título da Sessão */}
        <div className="absolute top-0 left-0 z-10">
          <div className="font-mono text-[10px] tracking-[0.32em] text-accent uppercase mb-4 flex items-center gap-3 before:content-[''] before:w-5 before:h-[1px] before:bg-accent/30">
            Reconhecimento
          </div>
          <h2 className="font-headline text-[clamp(44px,6vw,84px)] tracking-tight leading-none text-foreground uppercase">
            O QUE DIZEM<br />
            <span className="word-out text-white/10">SOBRE NÓS</span>
          </h2>
        </div>

        {/* Layout de Balões Flutuantes */}
        <div className="relative w-full h-full pt-40 md:pt-0">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className={`absolute ${t.pos} z-20 group transition-all duration-500`}
              onMouseEnter={() => setHoveredId(t.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Balão de Texto */}
              <div className={`relative p-6 md:p-8 max-w-[320px] md:max-w-[420px] shadow-2xl transition-transform duration-500 cursor-none ${
                t.color === 'bg-accent' ? 'bg-accent text-black' : 'bg-s1 text-white border border-white/10'
              } ${hoveredId === t.id ? 'scale-105 -translate-y-2' : 'scale-100'}`}>
                <p className="font-mono text-[12px] md:text-[14px] leading-relaxed tracking-tight">
                  "{t.text}"
                </p>
                
                {/* Indicador visual de balão (triângulo retangular) */}
                <div className={`absolute bottom-[-10px] left-8 w-5 h-5 rotate-45 ${
                  t.color === 'bg-accent' ? 'bg-accent' : 'bg-s1 border-r border-b border-white/10'
                }`} />
              </div>

              {/* Card de Autor (Aparece no Hover) */}
              <div className={`absolute top-full mt-6 left-0 flex items-center gap-4 bg-s2 p-4 border border-white/5 transition-all duration-500 pointer-events-none ${
                hoveredId === t.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="relative w-12 h-12 overflow-hidden bg-muted">
                  <Image 
                    src={t.avatar} 
                    alt={t.name} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <div className="font-headline text-lg text-white leading-none mb-1">{t.name}</div>
                  <div className="font-mono text-[9px] tracking-widest text-accent uppercase">{t.company} — {t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Elemento Decorativo Central (Similar à imagem) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
          <div className="font-headline text-[25vw] leading-none text-white word-out">
            PHANTOM
          </div>
        </div>
      </div>
    </section>
  );
}
