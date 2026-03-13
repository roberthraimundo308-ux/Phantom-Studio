"use client";

import React from "react";
import Image from "next/image";
import { Cpu, Zap, BarChart3, ShieldCheck, Box } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const TESTIMONIALS = [
  {
    id: 1,
    text: "A Phantom transformou nossa visão em uma arma digital. O resultado superou todas as expectativas de performance.",
    name: "ROBERTO K.",
    company: "TECHFLOW",
    role: "CEO",
    icon: <Zap className="w-4 h-4" />,
    avatarId: 'user-roberto'
  },
  {
    id: 2,
    text: "Design único. Não é apenas um site, é uma experiência imersiva que respira a alma da nossa marca.",
    name: "AMANDA LIMA",
    company: "STUDIO CRIATIVO",
    role: "ART DIRECTOR",
    icon: <Cpu className="w-4 h-4" />,
    avatarId: 'user-amanda'
  },
  {
    id: 3,
    text: "Performance impecável. Nossas conversões subiram 40% logo no primeiro mês após o lançamento.",
    name: "JOÃO MENDES",
    company: "GROWTH CORP",
    role: "MARKETING",
    icon: <BarChart3 className="w-4 h-4" />,
    avatarId: 'user-joao'
  },
  {
    id: 4,
    text: "O processo é transparente e o código é de elite. A melhor decisão estratégica que tomamos este ano.",
    name: "CARLA DIAS",
    company: "NEOBANK",
    role: "CTO",
    icon: <ShieldCheck className="w-4 h-4" />,
    avatarId: 'user-carla'
  },
  {
    id: 5,
    text: "A atenção aos detalhes técnicos e a estética brutalista nos colocaram anos à frente da concorrência.",
    name: "LUCAS ROCHA",
    company: "DIGITAL EDGE",
    role: "FOUNDER",
    icon: <Box className="w-4 h-4" />,
    avatarId: 'user-lucas'
  },
  {
    id: 6,
    text: "Experiência de usuário elevada ao nível de arte. Phantom é o novo padrão para o mercado de luxo.",
    name: "SOFIA VALLI",
    company: "VOGUE ITALY",
    role: "PRODUCT OWNER",
    icon: <Zap className="w-4 h-4" />,
    avatarId: 'user-sofia'
  },
  {
    id: 7,
    text: "Código limpo, rápido e escalável. Eles não entregam apenas design, entregam engenharia de elite.",
    name: "RICARDO M.",
    company: "META DESIGN",
    role: "LEAD DEV",
    icon: <Cpu className="w-4 h-4" />,
    avatarId: 'user-ricardo'
  },
  {
    id: 8,
    text: "O impacto visual do nosso novo portal é imbatível. A Phantom entendeu perfeitamente nosso DNA.",
    name: "ELENA G.",
    company: "ULTRA LABS",
    role: "BRAND DIRECTOR",
    icon: <BarChart3 className="w-4 h-4" />,
    avatarId: 'user-elena'
  }
];

export default function Testimonials() {
  const col1 = [...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(0, 4)];
  const col2 = [...TESTIMONIALS.slice(4, 8), ...TESTIMONIALS.slice(4, 8)];

  return (
    <section 
      id="testimonials" 
      className="relative h-[140vh] flex flex-col py-32 px-6 md:pl-[180px] md:pr-[80px] bg-background overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none z-0">
        <div className="font-headline text-[25vw] leading-none text-white tracking-[0.1em]">
          REVIEWS
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full h-full flex flex-col relative z-10">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-white/10 pb-7 mb-16 gap-4 shrink-0">
          <div className="flex items-center gap-4">
             <div className="w-8 h-[1px] bg-accent/40"></div>
             <span className="font-mono text-[10px] tracking-[0.32em] text-accent uppercase">
              07 RECONHECIMENTO
            </span>
          </div>
          <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-foreground uppercase">
            <span className="word-out text-white/10 mr-4">O QUE</span>
            <span className="text-foreground">DIZEM</span>
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden mask-vertical">
          <div className="relative overflow-hidden h-full">
            <div className="animate-scroll-slow flex flex-col gap-10 py-10">
              {col1.map((t, idx) => (
                <TestimonialCard key={`col1-${t.id}-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden h-full hidden md:block">
            <div className="animate-scroll-fast flex flex-col gap-10 py-10">
              {col2.map((t, idx) => (
                <TestimonialCard key={`col2-${t.id}-${idx}`} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-slow {
          animation: scrollVertical 40s linear infinite;
        }
        .animate-scroll-fast {
          animation: scrollVertical 28s linear infinite;
        }
        .animate-scroll-slow:hover, .animate-scroll-fast:hover {
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

function TestimonialCard({ testimonial: t }: { testimonial: any }) {
  const avatarUrl = PlaceHolderImages.find(img => img.id === t.avatarId)?.imageUrl || "https://picsum.photos/seed/user/100/100";

  return (
    <div className="group relative bg-s1/40 backdrop-blur-sm border border-white/5 p-10 md:p-12 transition-all duration-500 hover:bg-s1/60 hover:border-accent/20 cursor-none flex flex-col gap-8">
      <div className="flex justify-between items-start">
        <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/5 is-cursor">
           <Image 
             src={avatarUrl} 
             alt={t.name}
             fill
             className="object-cover"
             data-ai-hint="person portrait"
           />
        </div>
        <div className="flex flex-col items-end">
          <span className="font-mono text-[9px] tracking-[0.2em] text-white/20 group-hover:text-white/40 uppercase">
            {t.company}
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-accent/40 uppercase">
            {t.role}
          </span>
        </div>
      </div>

      <div className="relative">
        <h3 className="font-headline text-3xl md:text-5xl text-foreground tracking-[-0.01em] uppercase group-hover:text-accent transition-colors">
          {t.name}
        </h3>
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-accent/0 group-hover:bg-accent/40 transition-all duration-500 group-hover:-left-8"></div>
      </div>

      <p className="font-body text-[clamp(14px,1.5vw,16px)] leading-[1.65] text-muted group-hover:text-foreground/70 transition-colors">
        {t.text}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-accent/20 group-hover:text-accent/60 transition-colors">
          {t.icon}
        </div>
        <div className="flex gap-1.5 opacity-20">
          <div className="w-1 h-1 bg-white"></div>
          <div className="w-1 h-1 bg-white"></div>
          <div className="w-1 h-1 bg-accent"></div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-4 h-[1px] bg-white/5 group-hover:bg-accent/20 transition-colors"></div>
      <div className="absolute top-0 left-0 w-[1px] h-4 bg-white/5 group-hover:bg-accent/20 transition-colors"></div>
    </div>
  );
}
