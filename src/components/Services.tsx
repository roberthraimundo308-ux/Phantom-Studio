
"use client";

import React, { useRef, useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    num: "01",
    name: "LANDING PAGE",
    desc: "Uma página projetada para converter visitantes em clientes. Design estratégico, copywriting persuasivo e performance que impressiona.",
    pills: ["Design", "Conversão", "SEO", "Performance"]
  },
  {
    num: "02",
    name: "SITE INSTITUCIONAL",
    desc: "A vitrine digital da sua empresa. Multi-páginas, CMS integrado, otimizado para SEO e feito para impressionar em qualquer dispositivo.",
    pills: ["Multi-página", "CMS", "Responsivo"]
  },
  {
    num: "03",
    name: "E-COMMERCE",
    desc: "Lojas que vendem. Experiência de compra fluida, checkout otimizado e design que transmite confiança a cada scroll.",
    pills: ["Shopify", "WooCommerce", "Custom"]
  },
  {
    num: "04",
    name: "REDESIGN ESTRATÉGICO",
    desc: "Seu site não converte? Diagnosticamos os problemas e entregamos uma versão nova — mais rápida, mais bonita, mais eficaz.",
    pills: ["Auditoria UX", "Otimização", "CRO"]
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = -rect.top;
      
      // Calculamos o progresso dentro da seção (0 a 1)
      const progress = Math.max(0, Math.min(1, scrollProgress / (sectionHeight - window.innerHeight)));
      
      // Determinamos qual item deve estar ativo com base no progresso
      const newIndex = Math.floor(progress * SERVICES.length);
      setActiveIndex(Math.min(newIndex, SERVICES.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative h-[400vh]" // Altura maior para permitir o scroll interno
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 md:pl-[180px] md:pr-[80px] overflow-hidden">
        <ScrollReveal className="flex flex-col md:flex-row items-baseline justify-between border-b border-border pb-7 mb-10 rev gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['02'] before:text-muted">
            O Que Fazemos
          </span>
          <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight">SERVIÇOS</h2>
        </ScrollReveal>

        <div className="relative max-w-[1200px] w-full">
          {SERVICES.map((s, i) => (
            <div 
              key={i} 
              className={cn(
                "absolute top-0 left-0 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                activeIndex === i 
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" 
                  : i < activeIndex 
                    ? "opacity-0 -translate-y-20 scale-95 pointer-events-none" 
                    : "opacity-0 translate-y-20 scale-105 pointer-events-none"
              )}
            >
              <div className="flex items-start gap-8 md:gap-14">
                <span className="font-mono text-xs md:text-sm tracking-[0.22em] text-accent mt-4">{s.num}</span>
                <div className="flex-1">
                  <h3 className="font-headline text-[clamp(32px,6vw,84px)] tracking-[0.02em] text-foreground mb-6 leading-none">
                    {s.name}
                  </h3>
                  <div className="text-[clamp(16px,2vw,20px)] leading-[1.6] text-muted max-w-[680px] mb-8">
                    {s.desc}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {s.pills.map((p, pIdx) => (
                      <span key={pIdx} className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent border border-accent/20 bg-accent/5 px-4 py-1.5 rounded-full">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de progresso lateral interno à seção */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
          {SERVICES.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "w-[2px] h-10 transition-all duration-500",
                activeIndex === i ? "bg-accent h-16" : "bg-white/10"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
