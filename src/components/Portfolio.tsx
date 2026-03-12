
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

  // Ajuste fino do translateX para cobrir todos os itens suavemente
  const translateX = scrollProgress * 100;

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[400vh] bg-[#EDE8DE]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        
        {/* Header Padronizado (Preto sobre Creme) */}
        <div className="pt-8 md:pt-12 px-6 md:pl-[180px] md:pr-[80px] z-20 shrink-0">
          <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-black/10 pb-5 mb-6 gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.3em] text-black/40">04</span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-black uppercase">
                TRABALHOS SELECIONADOS
              </span>
            </div>
            <h2 className="font-headline text-[clamp(40px,5vw,72px)] tracking-[0.03em] leading-tight text-black uppercase">
              NOSSAS CRIAÇÕES
            </h2>
          </div>
        </div>

        {/* Galeria Horizontal - Ocupa o restante do espaço vertical */}
        <div className="flex-1 relative flex items-center min-h-0">
          <div 
            className="flex h-full items-center transition-transform duration-150 ease-out will-change-transform"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {PROJECTS.map((project, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-center min-w-[100vw] md:min-w-[80vw] h-full px-6 md:px-20 border-r border-black/5 group"
              >
                {/* Título do Projeto e Categoria */}
                <div className="mb-6 md:mb-8">
                  <div className="font-mono text-[10px] md:text-[11px] text-black/40 mb-2 tracking-widest uppercase">
                    {project.category}
                  </div>
                  <h3 className="font-headline text-[clamp(36px,5.5vw,78px)] text-black leading-[0.95] mb-4 md:mb-6 uppercase">
                    {project.title}
                  </h3>
                </div>
                
                {/* Container da Imagem com Aspect Ratio Controlado */}
                <div className="relative w-full max-w-[1200px] aspect-[16/9] md:aspect-[21/9] overflow-hidden grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 shadow-2xl">
                  <div className="absolute inset-0 bg-black/5 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  {/* Botão de Detalhes Estilizado */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-[#EDE8DE] border-l border-t border-black/10 flex items-center justify-center z-20">
                     <span className="text-2xl md:text-3xl text-black font-light group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Descrição Compacta */}
                <div className="mt-6 md:mt-8 max-w-[500px]">
                  <p className="font-mono text-[11px] md:text-[12px] text-black/60 leading-relaxed uppercase tracking-tight">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
            {/* Espaço final para suavizar a rolagem horizontal */}
            <div className="min-w-[40vw]"></div>
          </div>
        </div>

        {/* Marca d'água lateral fixa */}
        <div className="absolute right-8 bottom-8 z-20 pointer-events-none opacity-[0.03]">
           <div className="font-headline text-2xl md:text-3xl text-black tracking-[0.4em] rotate-90 origin-right">
             PHANTOM.
           </div>
        </div>
      </div>
    </section>
  );
}

