
"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    num: "01",
    name: "LANDING PAGE",
    desc: "Uma página projetada para converter visitantes em clientes. Design estratégico, copywriting persuasivo e performance que impressiona.",
    pills: ["Design", "Conversão", "SEO", "Performance"],
  },
  {
    num: "02",
    name: "SITE INSTITUCIONAL",
    desc: "A vitrine digital da sua empresa. Multi-páginas, CMS integrado, otimizado para SEO e feito para impressionar em qualquer dispositivo.",
    pills: ["Multi-página", "CMS", "Responsivo"],
  },
  {
    num: "03",
    name: "E-COMMERCE",
    desc: "Lojas que vendem. Experiência de compra fluida, checkout otimizado e design que transmite confiança a cada scroll.",
    pills: ["Shopify", "WooCommerce", "Custom"],
  },
  {
    num: "04",
    name: "REDESIGN ESTRATÉGICO",
    desc: "Seu site não converte? Diagnosticamos os problemas e entregamos uma versão nova — mais rápida, mais bonita, mais eficaz.",
    pills: ["Auditoria UX", "Otimização", "CRO"],
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / totalHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative h-[500vh] bg-background"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        {/* Header Fixo da Seção */}
        <div className="absolute top-0 left-0 w-full z-50 px-6 md:pl-[180px] md:pr-[80px] pt-20">
          <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-border pb-7 gap-4 bg-background/90 backdrop-blur-md">
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['02'] before:text-muted">
              O Que Fazemos
            </span>
            <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-foreground">SERVIÇOS</h2>
          </div>
        </div>

        {/* Container de Conteúdo */}
        <div className="relative h-full w-full">
          {SERVICES.map((s, i) => {
            const start = i * 0.25;
            const end = (i + 1) * 0.25;
            
            // Lógica de animação: o item sobe e fica fixo.
            // Para não sobrepor texto sem background, vamos esmaecer o anterior.
            let translateY = 100;
            let opacity = 0;

            if (scrollProgress >= start) {
              const cardProgress = Math.min(1, (scrollProgress - start) / 0.15); 
              translateY = 100 - (cardProgress * 100);
              opacity = cardProgress;
            }

            // Se o próximo começar a subir, este aqui começa a sumir para não embolar o texto
            const nextStart = (i + 1) * 0.25;
            if (scrollProgress > nextStart) {
              const exitProgress = Math.min(1, (scrollProgress - nextStart) / 0.1);
              opacity = 1 - exitProgress;
              translateY = 0;
            }

            return (
              <div 
                key={i} 
                className="absolute inset-0 flex items-center justify-center px-6 md:pl-[180px] md:pr-[80px] pointer-events-none"
                style={{ 
                  transform: `translateY(${translateY}px)`, // Usando px para um movimento mais sutil se preferir, ou %
                  opacity: opacity,
                  zIndex: 10 + i
                }}
              >
                <div className="max-w-[1200px] w-full mt-24 pointer-events-auto">
                  <div className="flex items-start gap-8 md:gap-14">
                    <span className="font-mono text-xs md:text-sm tracking-[0.22em] text-accent mt-4">{s.num}</span>
                    <div className="flex-1">
                      <h3 className="font-headline text-[clamp(32px,6.5vw,94px)] tracking-[0.02em] text-foreground mb-6 leading-none">
                        {s.name}
                      </h3>
                      <p className="text-[clamp(16px,2.2vw,22px)] leading-[1.6] text-muted max-w-[720px] mb-10">
                        {s.desc}
                      </p>
                      <div className="flex gap-3 flex-wrap">
                        {s.pills.map((p, pIdx) => (
                          <span key={pIdx} className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent border border-accent/20 bg-accent/5 px-5 py-2 rounded-full">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
