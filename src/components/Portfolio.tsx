
"use client";

import React, { useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    id: "01",
    title: "Matos & Sejanoski",
    category: "LAW FIRM EXPERIENCE",
    url: "https://www.matosesejanoski.adv.br/",
  },
  {
    id: "02",
    title: "Tidescape",
    category: "COASTAL LUXURY",
    url: "https://tidescape.framer.ai/",
  },
  {
    id: "03",
    title: "Azulay & Zanella",
    category: "LEGAL EXCELLENCE",
    url: "https://azulayezanella.com.br/",
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

  const translateX = scrollProgress * 180; 

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative h-[400vh] bg-[#EDE8DE]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        
        <div className="pt-8 md:pt-12 px-6 md:pl-[180px] md:pr-[80px] z-20 shrink-0">
          <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-[#050505]/10 pb-4 mb-4 gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['04'] before:text-accent/20 font-bold">
              TRABALHOS SELECIONADOS
            </span>
            <h2 className="font-headline text-[clamp(40px,5vw,64px)] tracking-[0.03em] leading-tight text-[#050505] uppercase transition-all duration-500 hover:word-out-black">
              <span className="word-out-black mr-4">NOSSAS</span> CRIAÇÕES
            </h2>
          </div>
        </div>

        <div className="flex-1 relative flex items-center min-h-0">
          <div 
            className="flex h-full items-center transition-transform duration-150 ease-out will-change-transform"
            style={{ transform: `translateX(-${translateX}%)` }}
          >
            <div className="min-w-[120px] h-full shrink-0"></div>

            {PROJECTS.map((project, idx) => (
              <div 
                key={idx} 
                className="relative flex flex-col justify-center min-w-[100vw] md:min-w-[85vw] h-full pr-10 md:pr-40 group"
              >
                <div className="mb-4">
                  <div className="font-mono text-[10px] text-accent mb-2 tracking-widest uppercase flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-accent"></span>
                    {project.category}
                  </div>
                  <h3 className="font-headline text-[clamp(32px,4.5vw,60px)] text-[#050505] leading-[0.85] tracking-[-0.01em] uppercase transition-all duration-500 group-hover:word-out-black">
                    {project.title}
                  </h3>
                </div>
                
                <div className="relative w-full max-w-[1300px] aspect-video max-h-[65vh] overflow-hidden transition-all duration-700 shadow-2xl bg-white/5 border border-[#050505]/10">
                  <div className="absolute inset-0 z-20 pointer-events-none border-[8px] border-[#050505]/5"></div>
                  
                  <div 
                    className="absolute inset-0 w-full transition-transform duration-300 ease-out z-10"
                    style={{ 
                      transform: `translateY(-${scrollProgress * 65}%)`,
                      transformOrigin: 'top center'
                    }}
                  >
                    <iframe 
                      src={project.url}
                      className="w-full h-[5000px] border-none pointer-events-auto scale-100 origin-top"
                      title={project.title}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="min-w-[120px] h-full shrink-0"></div>
          </div>
        </div>

        <div className="absolute right-8 bottom-8 z-20 pointer-events-none opacity-[0.03]">
           <div className="font-headline text-xl md:text-3xl text-[#050505] tracking-[0.5em] rotate-90 origin-right">
             PHANTOM.
           </div>
        </div>
      </div>
      <style jsx>{`
        .word-out-black {
          -webkit-text-stroke: 1.5px #050505;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
