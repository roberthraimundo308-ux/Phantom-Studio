
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
    id: "03",
    title: "Dream Hotel",
    category: "LIFESTYLE EXPERIENCE",
    image: PlaceHolderImages[2].imageUrl,
    description: "Interface focada em hospitalidade e conversão premium."
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
      // Calcula o progresso baseado na altura total da seção (400vh)
      const progress = Math.max(0, Math.min(1, -rect.top / (totalHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ajuste do translateX para cobrir os itens e o buffer final
  // Com 2 itens de 80vw, temos 160vw. O buffer final de 20vw completa 180vw.
  const translateX = scrollProgress * 110; 

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[400vh] bg-[#EDE8DE]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        
        {/* Header Padronizado (Preto sobre Creme) - Fiel à Referência */}
        <div className="pt-12 md:pt-20 px-6 md:pl-[180px] md:pr-[80px] z-20 shrink-0">
          <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-black/10 pb-6 mb-8 gap-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-black/40">04</span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-black uppercase">
                TRABALHOS SELECIONADOS
              </span>
            </div>
            <h2 className="font-headline text-[clamp(48px,7vw,100px)] tracking-[0.03em] leading-none text-black uppercase">
              NOSSAS CRIAÇÕES
            </h2>
          </div>
        </div>

        {/* Galeria Horizontal */}
        <div className="flex-1 relative flex items-center min-h-0">
          <div 
            className="flex h-full items-center transition-transform duration-150 ease-out will-change-transform"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {/* Espaçamento Inicial (Equivalente à margem lateral do site) */}
            <div className="min-w-[180px] h-full shrink-0"></div>

            {PROJECTS.map((project, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-center min-w-[100vw] md:min-w-[80vw] h-full pr-6 md:pr-20 group"
              >
                {/* Título do Projeto e Categoria */}
                <div className="mb-6 md:mb-10">
                  <div className="font-mono text-[10px] md:text-[11px] text-black/40 mb-2 tracking-widest uppercase flex items-center gap-3">
                    <span className="w-4 h-[1px] bg-black/20"></span>
                    {project.category}
                  </div>
                  <h3 className="font-headline text-[clamp(40px,6vw,90px)] text-black leading-[0.85] mb-4 md:mb-8 uppercase">
                    {project.title}
                  </h3>
                </div>
                
                {/* Container da Imagem */}
                <div className="relative w-full max-w-[1400px] aspect-[21/9] overflow-hidden grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 shadow-2xl">
                  <div className="absolute inset-0 bg-black/5 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                    sizes="80vw"
                  />
                  {/* Botão de Detalhes Estilizado */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#EDE8DE] border-l border-t border-black/10 flex items-center justify-center z-20">
                     <span className="text-3xl md:text-4xl text-black font-light group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Descrição Compacta */}
                <div className="mt-8 md:mt-12 max-w-[600px]">
                  <p className="font-mono text-[11px] md:text-[13px] text-black/60 leading-relaxed uppercase tracking-tight">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Espaçamento Final (Equivalente ao inicial para simetria) */}
            <div className="min-w-[180px] h-full shrink-0"></div>
          </div>
        </div>

        {/* Marca d'água lateral fixa */}
        <div className="absolute right-8 bottom-8 z-20 pointer-events-none opacity-[0.03]">
           <div className="font-headline text-2xl md:text-4xl text-black tracking-[0.4em] rotate-90 origin-right">
             PHANTOM.
           </div>
        </div>
      </div>
    </section>
  );
}
