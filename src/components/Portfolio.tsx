
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress (0 to 1) within the section height (500vh to give space for zoom + internal scroll)
      const totalHeight = rect.height;
      const progress = Math.max(0, Math.min(1, -rect.top / (totalHeight - windowHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scale: starts smaller (fiel à imagem) and goes to full screen
  // progress 0 -> 0.6 (zoom phase), 0.6 -> 1.0 (internal content focus or transition)
  const zoomLimit = 0.75;
  const zoomProgress = Math.min(scrollProgress / zoomLimit, 1);
  const scale = 0.65 + zoomProgress * 1.5; // Base 65% width to ~160% (full fill)
  const opacity = 1 - zoomProgress * 1.5; // UI fades out quickly
  
  // Internal content scroll simulation based on scroll progress
  const internalScrollY = scrollProgress > 0.4 ? (scrollProgress - 0.4) * 800 : 0;

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[500vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* UI Labels - Fiel à referência */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none p-10 md:p-[60px]"
          style={{ opacity: Math.max(0, opacity) }}
        >
          {/* Top Header Labels */}
          <div className="flex items-start justify-between w-full">
            <div className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase flex items-center gap-3">
              <span className="text-white/20">◆</span> TRABALHOS
            </div>
            <div className="font-headline text-[22px] tracking-[0.2em] text-foreground uppercase">
              NOSSAS CRIAÇÕES
            </div>
          </div>

          {/* Left Large Text */}
          <div className="absolute left-10 md:left-[60px] top-1/2 -translate-y-1/2 max-w-[400px]">
            <h2 className="font-display text-[clamp(60px,8vw,120px)] font-bold leading-[0.85] text-white tracking-tighter">
              PHANTOM<span className="text-accent">.</span>
            </h2>
          </div>
        </div>

        {/* Central Card (The "Forma") */}
        <div 
          className="relative z-10 flex items-center justify-center will-change-transform"
          style={{ 
            width: '80vw',
            aspectRatio: '16/9',
            transform: `scale(${scale})`,
          }}
        >
           <div className="absolute inset-0 overflow-hidden bg-s1 border-0 border-white/5">
              {/* Internal Scrollable Content */}
              <div 
                ref={scrollableRef}
                className="w-full transition-transform duration-100 ease-out"
                style={{ transform: `translateY(-${internalScrollY}px)` }}
              >
                {/* List of Portfolio Works inside the frame */}
                {PlaceHolderImages.map((img, i) => (
                  <div key={img.id} className="relative w-full aspect-video border-b border-background">
                    <Image 
                      src={img.imageUrl} 
                      alt={img.description} 
                      fill 
                      className="object-cover opacity-80"
                      priority={i === 0}
                    />
                    <div className="absolute bottom-10 left-10 z-10">
                       <div className="font-mono text-[8px] tracking-[0.3em] text-accent mb-2 uppercase">PROJETO {i + 1}</div>
                       <div className="font-headline text-4xl text-white tracking-wider">{img.description.split(' ')[0]}</div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Final Transition Overlay to Light Theme */}
        <div 
          className="absolute inset-0 z-40 pointer-events-none"
          style={{ 
            backgroundColor: '#EDE8DE',
            opacity: Math.max(0, (scrollProgress - 0.92) * 12) 
          }}
        />
      </div>
    </section>
  );
}
