
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcula o progresso (0 a 1) dentro da altura da seção (400vh)
      const totalHeight = rect.height;
      const progress = Math.max(0, Math.min(1, -rect.top / (totalHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // O scale aumenta de 1 até cobrir a tela (aprox 2.5 dependendo da proporção)
  const scale = 1 + scrollProgress * 2.2;
  const opacity = 1 - Math.pow(scrollProgress, 1.5) * 1.2; // Elementos da interface somem conforme expande
  const borderRadius = Math.max(0, (1 - scrollProgress * 1.5) * 2); // Bordas ficam retas no final

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[400vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Header da Seção (Estilo Showroom) */}
        <div 
          className="absolute top-10 left-10 md:left-20 z-20 flex items-center gap-3 font-mono text-[10px] tracking-[0.32em] text-white/40 uppercase pointer-events-none"
          style={{ opacity }}
        >
          <span className="text-accent">◆</span> Showroom · Nossas Criações
        </div>

        {/* Floating Navigation (Barra inferior da referência) */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-12 bg-black/80 backdrop-blur-xl px-12 py-5 border border-white/5 pointer-events-none"
          style={{ opacity: Math.max(0, opacity) }}
        >
          <div className="w-5 h-5 border border-white/40 rounded-[2px] flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <span className="font-mono text-[9px] tracking-[0.4em] text-white uppercase">Home</span>
          <div className="flex flex-col gap-1.5 w-6">
            <div className="h-[1px] bg-white/60"></div>
            <div className="h-[1px] bg-white/30 w-2/3 ml-auto"></div>
          </div>
        </div>

        {/* Textos Laterais */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20"
          style={{ opacity }}
        >
          <div className="max-w-[440px] mt-20 md:mt-0">
            <h2 className="font-ui text-[clamp(32px,4.5vw,60px)] font-bold leading-[1.1] text-white tracking-tight">
              Onde precisão e <br /> 
              <span className="text-white/20 italic font-normal">criatividade se conectam.</span>
            </h2>
          </div>

          <div className="flex flex-col items-end gap-10 text-right mb-20 md:mb-0">
             <div className="space-y-2">
                <div className="font-mono text-[9px] tracking-[0.3em] text-accent uppercase">Localização</div>
                <div className="font-mono text-[11px] text-white/40 max-w-[220px] leading-relaxed uppercase">
                  Orbital 25 Business Park, Unit 11 Watford WD18 9DA, UK
                </div>
             </div>
             <button className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 font-mono text-[10px] tracking-[0.3em] text-white uppercase hover:bg-accent hover:text-black transition-all duration-500 pointer-events-auto">
                <ArrowRight className="w-4 h-4 rotate-45" /> Showroom
             </button>
          </div>
        </div>

        {/* Janela de Mídia Central que Expande */}
        <div 
          className="relative z-10 flex items-center justify-center transition-transform duration-75 ease-out"
          style={{ 
            width: '65vw',
            aspectRatio: '16/9',
            transform: `scale(${scale})`,
          }}
        >
           <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: `${borderRadius}rem` }}>
              <Image 
                src={PlaceHolderImages[0].imageUrl} 
                alt="Phantom Studio Case" 
                fill 
                className="object-cover opacity-80"
                priority
              />
              
              {/* Botão Play no Centro da Mídia */}
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ opacity: 1 - scrollProgress * 3 }}
              >
                 <div className="bg-black/30 backdrop-blur-xl border border-white/10 px-10 py-5 font-mono text-[9px] tracking-[0.5em] text-white uppercase cursor-pointer hover:bg-white hover:text-black transition-all">
                    Play
                 </div>
              </div>
           </div>
        </div>

        {/* Overlay Final de Transição para o Tema Claro */}
        <div 
          className="absolute inset-0 z-40 pointer-events-none"
          style={{ 
            backgroundColor: '#EDE8DE',
            opacity: Math.max(0, (scrollProgress - 0.85) * 7) 
          }}
        />
      </div>
    </section>
  );
}
