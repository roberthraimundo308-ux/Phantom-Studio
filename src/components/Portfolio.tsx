
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
      
      // Calcula o progresso de 0 a 1 dentro da altura da seção
      // Reduzi a altura total para 300vh para um scroll mais ágil com 2 itens
      const progress = Math.max(0, Math.min(1, -rect.top / (totalHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * CÁLCULO DE TRANSLATION PRECISO:
   * Total de itens: 2 de 80vw cada = 160vw
   * Buffers: 180px no início + 180px no fim = 360px (~25vw em telas comuns)
   * Largura Total do Conteúdo: ~185vw
   * Distância a percorrer: Conteúdo - Viewport (100vw) = ~85vw
   * Multiplicador de 46% é o ideal para que o scroll termine exatamente no fim do conteúdo.
   */
  const translateX = scrollProgress * 46; 

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[300vh] bg-[#EDE8DE]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        
        {/* Header de Impacto (Fiel ao Screenshot) */}
        <div className="pt-12 md:pt-16 px-6 md:pl-[180px] md:pr-[80px] z-20 shrink-0">
          <div className="flex flex-col md:flex-row items-start justify-between border-b border-black/10 pb-6 mb-8 gap-4 relative">
            <div className="flex items-center gap-6 mt-4">
              <span className="font-mono text-[10px] tracking-[0.4em] text-black/20">04</span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-black uppercase font-bold">
                TRABALHOS SELECIONADOS
              </span>
            </div>
            
            <h2 className="font-headline text-[clamp(60px,12vw,180px)] tracking-[-0.02em] leading-[0.8] text-black uppercase md:absolute md:right-0 md:top-0">
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
            {/* Espaçamento Inicial (Equivalente à margem lateral do site) */}
            <div className="min-w-[180px] h-full shrink-0"></div>

            {PROJECTS.map((project, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-center min-w-[100vw] md:min-w-[80vw] h-full pr-10 md:pr-32 group"
              >
                {/* Título do Projeto e Categoria */}
                <div className="mb-6 md:mb-8">
                  <div className="font-mono text-[10px] md:text-[11px] text-black/40 mb-3 tracking-widest uppercase flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-black/20"></span>
                    {project.category}
                  </div>
                  <h3 className="font-headline text-[clamp(40px,5.5vw,80px)] text-black leading-[0.85] mb-4 md:mb-6 uppercase">
                    {project.title}
                  </h3>
                </div>
                
                {/* Container da Imagem com Aspect Ratio Cinema */}
                <div className="relative w-full max-w-[1400px] aspect-[21/9] overflow-hidden grayscale contrast-125 transition-all duration-700 hover:grayscale-0 shadow-2xl">
                  <div className="absolute inset-0 bg-black/5 mix-blend-multiply z-10 pointer-events-none"></div>
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                    sizes="80vw"
                  />
                  {/* Botão de Detalhes Estilizado (Fiel à referência) */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#EDE8DE] border-l border-t border-black/10 flex items-center justify-center z-20 cursor-pointer hover:bg-black group/btn transition-colors">
                     <span className="text-3xl md:text-4xl text-black font-light group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all">→</span>
                  </div>
                </div>

                {/* Descrição Compacta */}
                <div className="mt-8 md:mt-10 max-w-[500px]">
                  <p className="font-mono text-[11px] md:text-[12px] text-black/60 leading-relaxed uppercase tracking-tight">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Espaçamento Final Simétrico */}
            <div className="min-w-[180px] h-full shrink-0"></div>
          </div>
        </div>

        {/* Branding Lateral */}
        <div className="absolute right-8 bottom-8 z-20 pointer-events-none opacity-[0.03]">
           <div className="font-headline text-2xl md:text-4xl text-black tracking-[0.5em] rotate-90 origin-right">
             PHANTOM.
           </div>
        </div>
      </div>
    </section>
  );
}
