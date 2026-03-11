
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 to 1) within the section height (400vh)
      const totalHeight = rect.height;
      const progress = Math.max(0, Math.min(1, -rect.top / (totalHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scale increases from 1 to cover screen
  const scale = 1 + scrollProgress * 2.2;
  const opacity = 1 - Math.pow(scrollProgress, 1.5) * 1.5; // Interface fades out faster for immersion
  
  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[400vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Section Header - Standardized with the rest of the site */}
        <div 
          className="absolute top-0 left-0 w-full z-20 py-20 px-6 md:pl-[180px] md:pr-[80px] pointer-events-none"
          style={{ opacity }}
        >
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-baseline justify-between border-b border-border pb-7 gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['03'] before:text-muted">
              Showroom
            </span>
            <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-foreground uppercase">
              NOSSAS CRIAÇÕES
            </h2>
          </div>
        </div>

        {/* Parallax Content Layer */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none flex items-center px-10 md:px-[180px] py-20"
          style={{ opacity }}
        >
          <div className="max-w-[540px]">
            <h2 className="font-ui text-[clamp(32px,3.8vw,56px)] font-bold leading-[1.1] text-white tracking-tight">
              ONDE PRECISÃO E <br /> 
              <span className="text-white/20 italic font-normal">CRIATIVIDADE SE CONECTAM.</span>
            </h2>
            <div className="mt-12 space-y-2">
              <div className="font-mono text-[9px] tracking-[0.3em] text-accent uppercase">Localização</div>
              <div className="font-mono text-[11px] text-white/40 max-w-[220px] leading-relaxed uppercase">
                Orbital 25 Business Park, Unit 11 Watford WD18 9DA, UK
              </div>
            </div>
          </div>
        </div>

        {/* Central Media Window that Expands (Square Edges) */}
        <div 
          className="relative z-10 flex items-center justify-center transition-transform duration-75 ease-out"
          style={{ 
            width: '65vw',
            aspectRatio: '16/9',
            transform: `scale(${scale})`,
          }}
        >
           <div className="absolute inset-0 overflow-hidden bg-s1">
              <Image 
                src={PlaceHolderImages[0].imageUrl} 
                alt="Phantom Studio Case" 
                fill 
                className="object-cover opacity-60"
                priority
              />
           </div>
        </div>

        {/* Final Transition Overlay to Light Theme */}
        <div 
          className="absolute inset-0 z-40 pointer-events-none"
          style={{ 
            backgroundColor: '#EDE8DE',
            opacity: Math.max(0, (scrollProgress - 0.88) * 8) 
          }}
        />
      </div>
    </section>
  );
}
