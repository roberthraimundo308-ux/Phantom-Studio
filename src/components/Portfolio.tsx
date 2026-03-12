
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      // Calcula o progresso total do scroll nesta seção (0 a 1)
      const progress = Math.max(0, Math.min(1, -rect.top / (totalHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fases do Scroll:
  // 0.0 -> 0.6: Zoom do card (Aumenta de tamanho)
  // 0.6 -> 1.0: Scroll interno do site/projeto
  const zoomLimit = 0.6;
  const zoomProgress = Math.min(scrollProgress / zoomLimit, 1);
  
  // Escala: Inicia em 0.65 (tamanho da referência) e vai até 1.0 (preencher a tela)
  const scale = 0.65 + (zoomProgress * 0.35);
  
  // Opacidade dos rótulos UI conforme o zoom ocorre
  const uiOpacity = 1 - (zoomProgress * 3);
  
  // Scroll interno do Iframe: O conteúdo se move para cima conforme o scroll avança após o zoom
  // Multiplicamos por um valor alto para simular a rolagem de um site longo
  const internalScrollY = scrollProgress > zoomLimit ? (scrollProgress - zoomLimit) * 2500 : 0;

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[500vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Camada de UI: Textos e Rótulos */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none p-10 md:p-[80px]"
          style={{ opacity: Math.max(0, uiOpacity) }}
        >
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-2">
              <div className="font-mono text-[11px] tracking-[0.3em] text-accent uppercase flex items-center gap-3">
                <span className="w-8 h-[1px] bg-accent/30"></span> TRABALHOS
              </div>
              <div className="font-headline text-[18px] tracking-[0.2em] text-white/20 uppercase">
                CASES DE SUCESSO
              </div>
            </div>
            
            <div className="flex flex-col items-end text-right">
              <h2 className="font-headline text-[32px] tracking-[0.1em] text-foreground leading-none">
                NOSSAS CRIAÇÕES
              </h2>
              <span className="font-mono text-[9px] tracking-[0.4em] text-muted uppercase mt-2">
                — PERFORMANCE & DESIGN
              </span>
            </div>
          </div>

          <div className="absolute left-10 md:left-[80px] top-1/2 -translate-y-1/2 select-none">
            <h2 className="font-display text-[clamp(100px,15vw,240px)] font-bold leading-none text-white/[0.03] tracking-tighter uppercase">
              PHANTOM
            </h2>
          </div>
        </div>

        {/* Card Central com Zoom e Iframe */}
        <div 
          className="relative z-10 flex items-center justify-center will-change-transform bg-s1 shadow-[0_0_120px_rgba(0,0,0,0.6)] overflow-hidden border border-white/5"
          style={{ 
            width: '100vw',
            height: '100vh',
            transform: `scale(${scale})`,
            borderRadius: '0px'
          }}
        >
          {/* Container do Site - Move-se verticalmente simulando scroll */}
          <div 
            className="w-full h-[4000px] absolute top-0 left-0 transition-transform duration-150 ease-out pointer-events-none"
            style={{ transform: `translateY(-${internalScrollY}px)` }}
          >
            <iframe 
              src="https://www.matosesejanoski.adv.br/" 
              className="w-full h-full border-none"
              title="Matos e Sejanoski Advogados"
              loading="lazy"
            />
          </div>

          {/* Overlay de informação do projeto no canto inferior */}
          <div 
            className="absolute bottom-12 left-12 z-30 transition-opacity duration-500"
            style={{ opacity: scrollProgress > 0.1 ? 1 : 0 }}
          >
             <div className="font-mono text-[9px] tracking-[0.4em] text-accent mb-3 uppercase flex items-center gap-3">
               <span className="w-8 h-[1px] bg-accent/30"></span> PROJETO EM DESTAQUE
             </div>
             <div className="flex items-center gap-5">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center font-mono text-sm text-white bg-black/40 backdrop-blur-md">
                  01
                </div>
                <h3 className="font-headline text-5xl text-white tracking-[0.1em] uppercase drop-shadow-lg">
                  Matos e Sejanoski
                </h3>
             </div>
          </div>
        </div>

        {/* Overlay de Transição para o Tema Claro ao Final do Scroll */}
        <div 
          className="absolute inset-0 z-40 pointer-events-none"
          style={{ 
            backgroundColor: '#EDE8DE',
            opacity: Math.max(0, (scrollProgress - 0.94) * 16) 
          }}
        />
      </div>
    </section>
  );
}
