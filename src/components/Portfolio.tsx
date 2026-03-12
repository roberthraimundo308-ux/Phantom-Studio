"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const PROJECTS = [
  {
    id: "01",
    title: "Dolce & Gabbana Boutique",
    category: "FASHION E-COMMERCE",
    image: PlaceHolderImages[0].imageUrl,
    description: "Design imersivo focado em luxo e exclusividade digital."
  },
  {
    id: "02",
    title: "Tiffany Flagship",
    category: "HIGH-END BRANDING",
    image: PlaceHolderImages[1].imageUrl,
    description: "Identidade visual disruptiva para o mercado de alta joalheria."
  },
  {
    id: "03",
    title: "Dream Hotel",
    category: "LIFESTYLE EXPERIENCE",
    image: PlaceHolderImages[2].imageUrl,
    description: "Interface focada em hospitalidade e conversão premium."
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const progress = Math.max(0, Math.min(1, -rect.top / (totalHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // O scroll horizontal acontece entre 0.2 e 0.9 do scroll da seção
  const horizontalProgress = scrollProgress > 0.2 ? (scrollProgress - 0.2) / 0.7 : 0;
  const translateX = Math.max(0, Math.min(1, horizontalProgress)) * 100;

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[400vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-[#EDE8DE]">
        
        {/* Camada de Background / Linhas Verticais */}
        <div className="absolute inset-0 flex pointer-events-none">
          <div className="flex-1 border-r border-[#0000FF]/10 h-full"></div>
          <div className="flex-1 border-r border-[#0000FF]/10 h-full"></div>
          <div className="flex-1 border-r border-[#0000FF]/10 h-full"></div>
          <div className="flex-1 border-r border-[#0000FF]/10 h-full"></div>
        </div>

        {/* Título da Sessão */}
        <div className="absolute top-12 left-6 md:left-[180px] z-20">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#0000FF] uppercase flex items-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-[#0000FF]/30"></span> 04 TRABALHOS
          </div>
          <h2 className="font-headline text-5xl md:text-7xl text-[#0000FF] tracking-tight leading-none">
            NOSSAS CRIAÇÕES
          </h2>
        </div>

        {/* Galeria Horizontal */}
        <div 
          className="flex gap-0 h-full items-center px-6 md:pl-[180px] transition-transform duration-200 ease-out will-change-transform"
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col justify-center min-w-[100vw] md:min-w-[60vw] h-full px-12 md:px-20 border-r border-[#0000FF]/10 group"
            >
              <div className="mb-10">
                <div className="font-mono text-[11px] text-[#0000FF]/40 mb-3 tracking-widest uppercase">
                  {project.category}
                </div>
                <h3 className="font-headline text-[clamp(40px,6vw,84px)] text-[#0000FF] leading-tight mb-8">
                  {project.title}
                </h3>
              </div>
              
              <div className="relative w-full aspect-[16/9] overflow-hidden grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0">
                {/* Overlay Azul Halftone Effect Simulado */}
                <div className="absolute inset-0 bg-[#0000FF]/20 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                
                {/* Seta Ícone minimalista como na imagem */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white border-l border-t border-[#0000FF]/10 flex items-center justify-center z-20">
                   <span className="text-3xl text-[#0000FF] font-light">→</span>
                </div>
              </div>

              <div className="mt-8 max-w-[400px]">
                <p className="font-mono text-[13px] text-[#0000FF]/60 leading-relaxed uppercase">
                  {project.description}
                </p>
              </div>
            </div>
          ))}

          {/* Espaço Final para completar a rolagem */}
          <div className="min-w-[20vw]"></div>
        </div>

        {/* Marca d'água lateral fixa */}
        <div className="absolute right-12 bottom-12 z-20 pointer-events-none opacity-10">
           <div className="font-headline text-2xl text-[#0000FF] tracking-[0.4em] rotate-90 origin-right">
             PHANTOM STUDIO.
           </div>
        </div>
      </div>
    </section>
  );
}
