
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

  // Scale starts from a fixed point and fills the screen
  const scale = 1 + scrollProgress * 1.5;
  const opacity = 1 - Math.pow(scrollProgress, 2); // Fades UI as it zooms
  
  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[400vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Top Navigation / Labels */}
        <div 
          className="absolute top-0 left-0 w-full z-20 pt-16 px-6 md:pl-[120px] md:pr-[120px] pointer-events-none"
          style={{ opacity }}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase flex items-center gap-3 before:content-['03'] before:text-muted/40">
                TRABALHOS
              </span>
            </div>
            <h2 className="font-headline text-[clamp(44px,6vw,96px)] tracking-[0.05em] leading-none text-foreground uppercase">
              NOSSAS CRIAÇÕES
            </h2>
          </div>
        </div>

        {/* Content Layer (Left Side Text) */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none flex items-center px-6 md:pl-[120px]"
          style={{ opacity }}
        >
          <div className="max-w-[600px]">
            <h2 className="font-display text-[clamp(60px,10vw,140px)] font-bold leading-[0.85] text-white tracking-tighter">
              PHANTOM<span className="text-accent">.</span>
            </h2>
          </div>
        </div>

        {/* Central Media Window - Fixed Ratio based on image */}
        <div 
          className="relative z-10 flex items-center justify-center transition-transform duration-75 ease-out"
          style={{ 
            width: '80vw',
            aspectRatio: '16/9',
            transform: `scale(${scale})`,
          }}
        >
           <div className="absolute inset-0 overflow-hidden bg-s1">
              <Image 
                src={PlaceHolderImages[0].imageUrl} 
                alt="Phantom Studio Case" 
                fill 
                className="object-cover opacity-70"
                priority
              />
           </div>
        </div>

        {/* Final Transition Overlay to Light Theme */}
        <div 
          className="absolute inset-0 z-40 pointer-events-none"
          style={{ 
            backgroundColor: '#EDE8DE',
            opacity: Math.max(0, (scrollProgress - 0.9) * 10) 
          }}
        />
      </div>
    </section>
  );
}
