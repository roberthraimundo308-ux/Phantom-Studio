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
      const progress = Math.max(0, Math.min(1, -rect.top / (totalHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const horizontalProgress = scrollProgress > 0.1 ? (scrollProgress - 0.1) / 0.8 : 0;
  const translateX = Math.max(0, Math.min(1, horizontalProgress)) * 100;

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[400vh] bg-[#EDE8DE]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        
        {/* Header Padronizado (Preto sobre Creme) */}
        <div className="pt-12 px-6 md:pl-[180px] md:pr-[80px] z-20">
          <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-black/10 pb-7 mb-10 gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.3em] text-black/40">04</span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-black uppercase">
                TRABALHOS SELECIONADOS
              </span>
            </div>
            <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-black uppercase">NOSSAS CRIAÇÕES</h2>
          </div>
        </div>

        {/* Galeria Horizontal */}
        <div className="flex-1 flex items-center">
          <div 
            className="flex gap-0 h-full items-center px-6 md:pl-[180px] transition-transform duration-200 ease-out will-change-transform"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            {PROJECTS.map((project, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-center min-w-[100vw] md:min-w-[70vw] h-full px-12 md:px-20 border-r border-black/5 group"
              >
                <div className="mb-10">
                  <div className="font-mono text-[11px] text-black/40 mb-3 tracking-widest uppercase">
                    {project.category}
                  </div>
                  <h3 className="font-headline text-[clamp(40px,6vw,84px)] text-black leading-[0.9] mb-8">
                    {project.title}
                  </h3>
                </div>
                
                <div className="relative w-full aspect-[16/9] overflow-hidden grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0">
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply z-10 pointer-events-none transition-opacity group-hover:opacity-0"></div>
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#EDE8DE] border-l border-t border-black/10 flex items-center justify-center z-20">
                     <span className="text-4xl text-black font-light group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                <div className="mt-8 max-w-[450px]">
                  <p className="font-mono text-[13px] text-black/60 leading-relaxed uppercase tracking-tight">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="min-w-[20vw]"></div>
          </div>
        </div>

        {/* Marca d'água lateral fixa */}
        <div className="absolute right-12 bottom-12 z-20 pointer-events-none opacity-[0.03]">
           <div className="font-headline text-3xl text-black tracking-[0.4em] rotate-90 origin-right">
             PHANTOM.
           </div>
        </div>
      </div>
    </section>
  );
}
