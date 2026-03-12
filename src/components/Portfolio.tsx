
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const PROJECTS = [
  {
    id: "01",
    title: "Matos & Sejanoski",
    category: "LAW FIRM EXPERIENCE",
    image: PlaceHolderImages[0].imageUrl,
    description: "Plataforma digital jurídica com foco em autoridade e precisão."
  },
  {
    id: "02",
    title: "Tidescape",
    category: "COASTAL LUXURY",
    image: PlaceHolderImages[1].imageUrl,
    description: "Experiência imersiva para o mercado imobiliário de alto padrão."
  },
  {
    id: "03",
    title: "OCI Buzzworthy",
    category: "DIGITAL INNOVATION",
    image: PlaceHolderImages[2].imageUrl,
    description: "Hub de inovação com interface dinâmica e futurista."
  },
  {
    id: "04",
    title: "Big Drop Inc",
    category: "GLOBAL AGENCY",
    image: PlaceHolderImages[0].imageUrl,
    description: "Portfolio de elite para uma das maiores agências do mundo."
  },
  {
    id: "05",
    title: "Oak Island",
    category: "ENTERTAINMENT HUB",
    image: PlaceHolderImages[1].imageUrl,
    description: "Narrativa digital imersiva sobre mistérios e exploração."
  },
  {
    id: "06",
    title: "Reportage",
    category: "ARCHITECTURE & DESIGN",
    image: PlaceHolderImages[2].imageUrl,
    description: "A vitrine digital definitiva para projetos arquitetônicos premium."
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Ajustado para acomodar 6 projetos com buffers laterais
  const translateX = scrollProgress * 80; 

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[600vh] bg-[#EDE8DE]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        
        {/* Header Padronizado em Preto */}
        <div className="pt-16 md:pt-24 px-6 md:pl-[180px] md:pr-[80px] z-20 shrink-0">
          <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-[#050505]/10 pb-7 mb-8 gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#050505] uppercase flex items-center gap-3 before:content-['04'] before:text-[#050505]/20 font-bold">
              TRABALHOS SELECIONADOS
            </span>
            <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-[#050505] uppercase">
              NOSSAS CRIAÇÕES
            </h2>
          </div>
        </div>

        {/* Galeria Horizontal */}
        <div className="flex-1 relative flex items-center min-h-0">
          <div 
            className="flex h-full items-center transition-transform duration-200 ease-out will-change-transform"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {/* Espaçamento Inicial de 180px para alinhar com o menu */}
            <div className="min-w-[180px] h-full shrink-0"></div>

            {PROJECTS.map((project, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-center min-w-[100vw] md:min-w-[80vw] h-full pr-10 md:pr-32 group"
              >
                {/* Título do Projeto e Categoria */}
                <div className="mb-6 md:mb-8">
                  <div className="font-mono text-[10px] md:text-[11px] text-[#050505]/40 mb-3 tracking-widest uppercase flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-[#050505]/20"></span>
                    {project.category}
                  </div>
                  <h3 className="font-headline text-[clamp(40px,5vw,72px)] text-[#050505] leading-[0.85] mb-4 md:mb-6 uppercase">
                    {project.title}
                  </h3>
                </div>
                
                {/* Container da Imagem com Aspect Ratio Otimizado */}
                <div className="relative w-full max-w-[1400px] aspect-[21/9] overflow-hidden grayscale contrast-125 transition-all duration-700 hover:grayscale-0 shadow-2xl bg-white/5">
                  <div className="absolute inset-0 bg-[#050505]/5 mix-blend-multiply z-10 pointer-events-none"></div>
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                    sizes="80vw"
                  />
                  <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#EDE8DE] border-l border-t border-[#050505]/10 flex items-center justify-center z-20 cursor-pointer hover:bg-[#050505] group/btn transition-colors">
                     <span className="text-3xl md:text-4xl text-[#050505] font-light group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all">→</span>
                  </div>
                </div>

                {/* Descrição em tom preto suave */}
                <div className="mt-8 md:mt-10 max-w-[500px]">
                  <p className="font-mono text-[11px] md:text-[12px] text-[#050505]/60 leading-relaxed uppercase tracking-tight">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Espaçamento Final Simétrico de 180px */}
            <div className="min-w-[180px] h-full shrink-0"></div>
          </div>
        </div>

        {/* Branding Lateral Minimalista */}
        <div className="absolute right-8 bottom-8 z-20 pointer-events-none opacity-[0.03]">
           <div className="font-headline text-2xl md:text-4xl text-[#050505] tracking-[0.5em] rotate-90 origin-right">
             PHANTOM.
           </div>
        </div>
      </div>
    </section>
  );
}
