
"use client";

import React from "react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    text: "A Phantom transformou nossa visão em uma arma digital. O resultado superou todas as expectativas de performance.",
    name: "Roberto K.",
    company: "TechFlow Solutions",
    role: "CEO",
    avatar: "https://picsum.photos/seed/person1/100/100",
    color: "bg-accent"
  },
  {
    id: 2,
    text: "Design único. Não é apenas um site, é uma experiência imersiva que respira a alma da nossa marca.",
    name: "Amanda Lima",
    company: "Studio Criativo",
    role: "Diretora de Arte",
    avatar: "https://picsum.photos/seed/person2/100/100",
    color: "bg-s2"
  },
  {
    id: 3,
    text: "Performance impecável. Nossas conversões subiram 40% logo no primeiro mês após o lançamento.",
    name: "João Mendes",
    company: "Growth Corp",
    role: "Marketing Manager",
    avatar: "https://picsum.photos/seed/person3/100/100",
    color: "bg-accent"
  },
  {
    id: 4,
    text: "O processo é transparente e o código é de elite. A melhor decisão estratégica que tomamos este ano.",
    name: "Carla Dias",
    company: "NeoBank",
    role: "CTO",
    avatar: "https://picsum.photos/seed/person4/100/100",
    color: "bg-s2"
  },
  {
    id: 5,
    text: "A atenção aos detalhes técnicos e a estética brutalista nos colocaram anos à frente da concorrência.",
    name: "Lucas Rocha",
    company: "Digital Edge",
    role: "Founder",
    avatar: "https://picsum.photos/seed/person5/100/100",
    color: "bg-accent"
  },
  {
    id: 6,
    text: "Experiência de usuário elevada ao nível de arte. Phantom é o novo padrão para o mercado de luxo.",
    name: "Sofia Valli",
    company: "Vogue Italy",
    role: "Product Owner",
    avatar: "https://picsum.photos/seed/person6/100/100",
    color: "bg-s2"
  },
  {
    id: 7,
    text: "Código limpo, rápido e escalável. Eles não entregam apenas design, entregam engenharia de elite.",
    name: "Ricardo M.",
    company: "Meta Design",
    role: "Lead Developer",
    avatar: "https://picsum.photos/seed/person7/100/100",
    color: "bg-accent"
  },
  {
    id: 8,
    text: "O impacto visual do nosso novo portal é imbatível. A Phantom entendeu perfeitamente nosso DNA.",
    name: "Elena G.",
    company: "Ultra Labs",
    role: "Brand Director",
    avatar: "https://picsum.photos/seed/person8/100/100",
    color: "bg-s2"
  },
  {
    id: 9,
    text: "Nossa autoridade digital foi consolidada. O ROI deste projeto se pagou em menos de 15 dias.",
    name: "Marcelo P.",
    company: "Prime Lux",
    role: "CFO",
    avatar: "https://picsum.photos/seed/person9/100/100",
    color: "bg-accent"
  },
  {
    id: 10,
    text: "Trabalhar com a Phantom é ter a certeza de que seu site será o melhor do seu nicho, sem exceção.",
    name: "Julia Costa",
    company: "Nova Tech",
    role: "Operations",
    avatar: "https://picsum.photos/seed/person10/100/100",
    color: "bg-s2"
  },
  {
    id: 11,
    text: "Eles forjaram uma identidade que comunica força e inovação. Superaram todas as nossas metas.",
    name: "Beatriz L.",
    company: "Global Arts",
    role: "Creative Director",
    avatar: "https://picsum.photos/seed/person11/100/100",
    color: "bg-accent"
  },
  {
    id: 12,
    text: "A melhor agência que já contratamos. O suporte e a visão estratégica são diferenciados.",
    name: "Tiago S.",
    company: "Future Systems",
    role: "CEO",
    avatar: "https://picsum.photos/seed/person12/100/100",
    color: "bg-s2"
  }
];

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="relative h-screen flex flex-col py-32 px-6 md:pl-[180px] md:pr-[80px] bg-background overflow-hidden border-t border-white/5"
    >
      <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col relative z-10">
        
        {/* Cabeçalho Alinhado com Serviços */}
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-white/10 pb-7 mb-10 gap-4 shrink-0">
          <span className="font-mono text-[10px] tracking-[0.32em] text-accent uppercase flex items-center gap-3 before:content-[''] before:w-5 before:h-[1px] before:bg-accent/30">
            Reconhecimento
          </span>
          <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-foreground uppercase text-right">
            O QUE <span className="word-out text-white/10">DIZEM</span>
          </h2>
        </div>

        {/* Carrossel Vertical */}
        <div className="flex-1 relative overflow-hidden mask-vertical">
          <div className="animate-scroll-vertical flex flex-col gap-6 py-10">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="group relative flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Balão de Depoimento */}
                <div className={`relative p-8 w-full md:max-w-[600px] transition-transform duration-500 cursor-none border-0 ${
                  t.color === 'bg-accent' ? 'bg-accent text-black' : 'bg-s1 text-white border border-white/10'
                } group-hover:scale-[1.02]`}>
                  <p className="font-mono text-[13px] md:text-[15px] leading-relaxed tracking-tight">
                    "{t.text}"
                  </p>
                  
                  {/* Cauda do balão */}
                  <div className={`absolute bottom-[-10px] left-8 w-5 h-5 rotate-45 ${
                    t.color === 'bg-accent' ? 'bg-accent' : 'bg-s1 border-r border-b border-white/10'
                  }`} />
                </div>

                {/* Card de Autor - Revelado no Hover */}
                <div className="flex items-center gap-4 bg-s2 p-4 border border-white/5 opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500 pointer-events-none whitespace-nowrap">
                  <div className="relative w-12 h-12 overflow-hidden bg-muted">
                    <Image 
                      src={t.avatar} 
                      alt={t.name} 
                      fill 
                      className="object-cover grayscale"
                    />
                  </div>
                  <div>
                    <div className="font-headline text-lg text-white leading-none mb-1">{t.name}</div>
                    <div className="font-mono text-[9px] tracking-widest text-accent uppercase">{t.company} — {t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elemento Decorativo Central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.015] select-none z-0">
          <div className="font-headline text-[25vw] leading-none text-white word-out">
            PHANTOM
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-vertical {
          animation: scrollVertical 60s linear infinite;
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
        @keyframes scrollVertical {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .mask-vertical {
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}
