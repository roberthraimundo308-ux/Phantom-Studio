
"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const PROJECTS = [
  {
    id: 0,
    tag: "Moda · Itália",
    title: "ADOVASIO",
    desc: "Experiência editorial para marca de moda italiana.",
    url: "adovasio.it",
    image: PlaceHolderImages.find(img => img.id === 'adovasio-bg')?.imageUrl || "https://picsum.photos/seed/fashion1/820/490",
    mockup: "adovasio"
  },
  {
    id: 1,
    tag: "Agência · Digital",
    title: "REFRACT WEB",
    desc: "Identidade digital para agência criativa global.",
    url: "refractweb.com",
    image: PlaceHolderImages.find(img => img.id === 'refract-bg')?.imageUrl || "https://picsum.photos/seed/tech1/820/490",
    mockup: "refract"
  },
  {
    id: 2,
    tag: "Gastronomia · 1978",
    title: "LA PANUOZZERIA",
    desc: "Site imersivo para restaurante histórico napolitano.",
    url: "lapanuozzeria1978.it",
    image: PlaceHolderImages.find(img => img.id === 'panuozzeria-bg')?.imageUrl || "https://picsum.photos/seed/food1/820/490",
    mockup: "panuozzeria"
  }
];

export default function Portfolio() {
  const [active, setActive] = useState(0);

  return (
    <section 
      id="portfolio" 
      className="relative px-6 md:pl-[180px] md:pr-[80px] py-[140px] bg-[#EDE8DE] text-[#050505] z-10 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-[1600px] mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row items-baseline justify-between border-b border-black/10 pb-7 mb-[60px] rev gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#050505] uppercase flex items-center gap-3 before:content-['03'] before:text-black/30">
            Trabalhos
          </span>
          <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-[#050505]">
            NOSSAS CRIAÇÕES
          </h2>
        </ScrollReveal>

        <div className="flex flex-col items-center gap-4">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              onMouseEnter={() => setActive(i)}
              className={`relative overflow-hidden cursor-none border border-black/5 transition-all duration-750 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                active === i ? "w-full md:w-[820px] h-[360px] md:h-[490px] z-[5]" : "w-[220px] h-[220px] z-[1]"
              }`}
            >
              <div className="absolute inset-0 transition-opacity duration-500 opacity-100 bg-black">
                 <Image 
                  src={p.image} 
                  alt={p.title} 
                  fill 
                  className={`object-cover transition-transform duration-1000 ${active === i ? 'scale-110 opacity-60' : 'scale-100 opacity-30'}`}
                />
              </div>
              
              <div className={`absolute inset-0 flex flex-col transition-all duration-650 ease-[cubic-bezier(0.16,1,0.3,1)] ${active === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="h-8 bg-black/95 border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
                  <div className="flex-1 h-4 bg-white/5 rounded-[3px] mx-2 px-2 flex items-center font-mono text-[8px] tracking-[0.06em] text-white/25">
                    {p.url}
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto bg-black scrollbar-hide relative">
                   <Image 
                    src={p.image} 
                    alt={p.title} 
                    fill 
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-display text-4xl">
                    {p.title}
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 flex flex-col items-center justify-center gap-[10px] z-[3] transition-opacity duration-300 ${active === i ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <span className="font-mono text-[9px] tracking-[0.26em] text-white/30">0{i+1}</span>
                <span className="font-headline text-xl tracking-[0.08em] text-white/55">{p.title}</span>
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/20 uppercase">{p.tag.split(' · ')[0]}</span>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/85 to-transparent flex items-end justify-between z-[4] transition-all duration-400 ${active === i ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-2'}`}>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.24em] text-accent uppercase mb-1">{p.tag}</div>
                  <div className="font-headline text-[26px] tracking-[0.04em] text-white">{p.title}</div>
                  <div className="font-mono text-[10px] leading-[1.7] text-white/50 max-w-[280px]">{p.desc}</div>
                </div>
                <a href={`https://${p.url}`} target="_blank" className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent no-underline border-b border-accent/30 pb-1 hover:border-accent whitespace-nowrap pointer-events-auto">
                  Ver Site →
                </a>
              </div>
            </div>
          ))}
        </div>

        <ScrollReveal className="mt-12 w-full flex items-center justify-between rev">
          <span className="font-mono text-[10px] tracking-[0.2em] text-black/40 uppercase">3 de 47 projetos exibidos</span>
          <button className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#050505] no-underline border border-black/10 px-5 py-2.5 transition-all duration-300 hover:border-black/30 pointer-events-auto">
            Ver Todos →
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
