
"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

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
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 md:py-[180px] px-6 md:pl-[180px] md:pr-[80px] max-w-[1600px] mx-auto">
      <ScrollReveal className="flex flex-col md:flex-row items-baseline justify-between border-b border-border pb-7 mb-[60px] rev gap-4">
        <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['02'] before:text-muted">
          O Que Fazemos
        </span>
        <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight">SERVIÇOS</h2>
      </ScrollReveal>

      <ul className="list-none">
        {SERVICES.map((s, i) => (
          <li 
            key={i} 
            className="border-b border-border overflow-hidden group"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="flex items-center justify-between py-[30px] cursor-pointer transition-[padding] duration-[0.45s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:px-5">
              <span className="font-mono text-[10px] tracking-[0.22em] text-muted min-w-[36px]">{s.num}</span>
              <span className="font-headline text-[clamp(28px,3.5vw,52px)] tracking-[0.02em] flex-1 pl-9 text-foreground transition-colors duration-300 group-hover:text-accent">
                {s.name}
              </span>
              <span className={`text-[22px] text-muted transition-all duration-[0.35s] ${active === i ? 'rotate-45 text-accent' : ''}`}>+</span>
            </div>
            <div className={`transition-all duration-[0.55s] ease-[cubic-bezier(0.16,1,0.3,1)] ${active === i ? 'max-h-[180px] pb-7' : 'max-h-0'}`}>
              <div className="pl-[72px] text-[15px] leading-[1.7] text-muted max-w-[560px]">
                {s.desc}
                <div className="flex gap-2 flex-wrap mt-[14px]">
                  {s.pills.map((p, pIdx) => (
                    <span key={pIdx} className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted border border-border px-[10px] py-1">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
