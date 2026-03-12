"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * COMPONENTE DE SCROLL HORIZONTAL (TEMPLATE)
 * 
 * Como funciona:
 * 1. O container pai (Section) define a "duração" do scroll via altura (ex: 400vh).
 * 2. O wrapper filho é 'sticky', ficando preso na tela enquanto o pai é rolado.
 * 3. O 'useEffect' calcula a posição do scroll e move a track horizontalmente.
 */

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      // Pegamos a posição do container pai em relação à tela
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculamos o progresso de 0 a 1
      // (Distância que o topo do container subiu / Altura total rolável)
      const totalScrollableHeight = rect.height - windowHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollableHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Multiplicamos o progresso por (quantidade de itens - 1) * 100 para o translate
  // Exemplo: se temos 4 itens de 100vw, movemos até -300%
  const translateX = scrollProgress * 300; 

  return (
    <section 
      ref={containerRef} 
      className="relative h-[400vh] bg-gray-100" // Define o "comprimento" do scroll
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Track que se move horizontalmente */}
        <div 
          className="flex h-full items-center transition-transform duration-150 ease-out will-change-transform"
          style={{ transform: `translateX(-${translateX}vw)` }}
        >
          {/* ITEM 01 */}
          <div className="w-screen h-full flex items-center justify-center shrink-0 border-r">
            <h2 className="text-9xl font-bold">01</h2>
          </div>

          {/* ITEM 02 */}
          <div className="w-screen h-full flex items-center justify-center shrink-0 border-r">
            <h2 className="text-9xl font-bold">02</h2>
          </div>

          {/* ITEM 03 */}
          <div className="w-screen h-full flex items-center justify-center shrink-0 border-r">
            <h2 className="text-9xl font-bold">03</h2>
          </div>

          {/* ITEM 04 */}
          <div className="w-screen h-full flex items-center justify-center shrink-0">
            <h2 className="text-9xl font-bold">04</h2>
          </div>

        </div>
      </div>
    </section>
  );
}
