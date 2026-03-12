"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Filtra para remover a segunda imagem (índice 1) conforme solicitado
  const filteredProjects = PlaceHolderImages.filter((_, index) => index !== 1);

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

  // Fases do Scroll:
  // 0.0 -> 0.7: Zoom do card até preencher a tela
  // 0.7 -> 1.0: Scroll interno dos projetos
  const zoomLimit = 0.7;
  const zoomProgress = Math.min(scrollProgress / zoomLimit, 1);
  
  // Scale inicia em 0.7 (padronizado) e vai até 1.0 (preencher tela)
  const scale = 0.7 + (zoomProgress * 0.3);
  const uiOpacity = 1 - (zoomProgress * 2.5);
  
  // Scroll interno dos projetos
  const internalScrollY = scrollProgress > zoomLimit ? (scrollProgress - zoomLimit) * 1200 : 0;

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[400vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* UI Labels Minimalistas */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none p-10 md:p-[60px]"
          style={{ opacity: Math.max(0, uiOpacity) }}
        >
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-1">
              <div className="font-mono text-[11px] tracking-[0.25em] text-foreground uppercase flex items-center gap-2">
                PHANTOM<span className="text-accent">.</span>
              </div>
              <div className="font-mono text-[9px] tracking-[0.3em] text-accent uppercase opacity-60">
                — TRABALHOS
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <div className="font-headline text-[18px] tracking-[0.2em] text-white/20 uppercase">
                NOSSAS CRIAÇÕES
              </div>
            </div>
          </div>

          <div className="absolute left-10 md:left-[60px] top-1/2 -translate-y-1/2 select-none">
            <h2 className="font-display text-[clamp(80px,12vw,180px)] font-bold leading-none text-white/5 tracking-tighter uppercase">
              PHANTOM
            </h2>
          </div>
        </div>

        {/* Card de Portfólio com Zoom e Scroll Interno */}
        <div 
          className="relative z-10 flex items-center justify-center will-change-transform bg-s1 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden"
          style={{ 
            width: '100vw',
            height: '100vh',
            transform: `scale(${scale})`,
            borderRadius: '0px'
          }}
        >
          <div 
            className="w-full h-full transition-transform duration-100 ease-out"
            style={{ transform: `translateY(-${internalScrollY}px)` }}
          >
            {filteredProjects.map((img, i) => (
              <div key={img.id} className="relative w-full h-screen">
                <Image 
                  src={img.imageUrl} 
                  alt={img.description} 
                  fill 
                  className="object-cover opacity-90"
                  priority={i === 0}
                  sizes="100vw"
                />
                
                <div className="absolute bottom-12 left-12 z-10">
                   <div className="font-mono text-[9px] tracking-[0.4em] text-accent mb-3 uppercase flex items-center gap-3">
                     <span className="w-8 h-[1px] bg-accent/30"></span> PROJETO {i + 1}
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-white/20 flex items-center justify-center font-mono text-xs text-white">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <h3 className="font-headline text-6xl text-white tracking-[0.1em] uppercase">
                        {img.imageHint}
                      </h3>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overlay de Transição para o Tema Claro ao Final */}
        <div 
          className="absolute inset-0 z-40 pointer-events-none"
          style={{ 
            backgroundColor: '#EDE8DE',
            opacity: Math.max(0, (scrollProgress - 0.96) * 25) 
          }}
        />
      </div>
    </section>
  );
}