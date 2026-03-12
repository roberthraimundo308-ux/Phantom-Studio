"use client";

import React from "react";
import { ArrowRight, Layout, Globe, ShoppingCart, RefreshCw } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    icon: <Layout className="w-5 h-5" />,
    name: "Landing Pages de Alta Conversão",
    desc: "Projetamos páginas focadas em um único objetivo: transformar visitantes em clientes. Design estratégico aliado a copywriting persuasivo.",
    features: ["Design Exclusivo e Autoral", "SEO On-Page Avançado", "Performance Core Web Vitals 90+"],
  },
  {
    num: "02",
    icon: <Globe className="w-5 h-5" />,
    name: "Sites Institucionais de Elite",
    desc: "A vitrine digital definitiva para sua empresa. Estrutura multi-páginas, CMS integrado e identidade visual impactante.",
    features: ["Painel de Edição (CMS)", "Blog Integrado", "Responsividade Fluida"],
  },
  {
    num: "03",
    icon: <ShoppingCart className="w-5 h-5" />,
    name: "E-Commerce de Performance",
    desc: "Lojas virtuais que vendem mais. Experiência de compra otimizada, checkout rápido e design que transmite autoridade.",
    features: ["Checkout Otimizado (CRO)", "Integração com Pagamentos", "Gestão de Estoque Simples"],
  },
  {
    num: "04",
    icon: <RefreshCw className="w-5 h-5" />,
    name: "Redesign Estratégico",
    desc: "Seu site atual não converte? Transformamos sua presença digital com um redesign focado em resultados e modernidade.",
    features: ["Auditoria de UX/UI", "Otimização de Conversão", "Migração de Tecnologia"],
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 md:pl-[180px] md:pr-[80px] bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Header Padronizado */}
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-border pb-7 mb-20 gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['03'] before:text-muted">
            NOSSA EXPERTISE
          </span>
          <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-foreground uppercase">SERVIÇOS</h2>
        </div>

        <div className="flex flex-col gap-10">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="sticky w-full min-h-[520px] bg-s1 border border-border p-10 md:p-20 flex flex-col lg:flex-row gap-12 overflow-hidden group shadow-[0_-40px_80px_rgba(0,0,0,0.8)]"
              style={{ 
                top: `${100 + i * 40}px`,
                borderRadius: '0px'
              }}
            >
              {/* Indicador de Topo Esquerdo - Ponto e Círculo (Estilo Cursor) */}
              <div className="absolute top-8 left-8 flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-cobalt is-cursor"></div>
                <div className="w-6 h-6 border border-cobalt/30 is-cursor"></div>
              </div>

              {/* Conteúdo Principal */}
              <div className="flex-1 z-10 pt-8 lg:pt-0">
                <div className="font-mono text-[11px] text-accent/40 mb-6 tracking-widest uppercase flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-accent/20"></span>
                  Especialidade {s.num}
                </div>
                
                <h3 className="font-headline text-[clamp(34px,4.5vw,64px)] tracking-wider leading-[1] text-foreground mb-8 max-w-[700px] uppercase">
                  {s.name}
                </h3>
                
                <p className="font-mono text-[13px] leading-relaxed text-muted max-w-[540px] mb-12">
                  {s.desc}
                </p>

                <button className="group/btn relative flex items-center gap-5 bg-accent text-black font-mono text-[11px] font-bold tracking-[0.25em] uppercase px-10 py-5 transition-all duration-400 hover:gap-8 hover:bg-white">
                  <span className="relative z-10">Saber Mais</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-1" />
                </button>

                {/* Lista de Features */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border/20 border border-border/20">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-s1 p-5 transition-colors hover:bg-white/[0.02]">
                      <div className="text-accent shrink-0">
                        {React.cloneElement(s.icon as React.ReactElement, { className: "w-4 h-4" })}
                      </div>
                      <span className="font-mono text-[10px] tracking-[0.15em] text-foreground/50 uppercase">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elemento Gráfico Minimalista */}
              <div className="hidden lg:flex flex-1 items-center justify-end relative">
                <div className="w-[1px] h-full bg-border/20 absolute right-0"></div>
                <div className="relative z-10 w-48 h-48 border border-accent/10 flex items-center justify-center text-accent/20 group-hover:text-accent/40 transition-colors duration-700">
                  <div className="absolute inset-4 border border-dashed border-accent/5 animate-[spin_20s_linear_infinite]"></div>
                  {React.cloneElement(s.icon as React.ReactElement, { className: "w-16 h-16 stroke-[1px]" })}
                </div>
              </div>

              {/* Número no background - Estilo Outline */}
              <div className="absolute bottom-[-40px] right-[-20px] font-headline text-[320px] leading-none text-white/[0.02] pointer-events-none select-none word-out opacity-20 group-hover:opacity-40 transition-opacity duration-1000">
                {s.num}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}