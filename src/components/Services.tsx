
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
    color: "bg-accent"
  },
  {
    num: "02",
    icon: <Globe className="w-5 h-5" />,
    name: "Sites Institucionais de Elite",
    desc: "A vitrine digital definitiva para sua empresa. Estrutura multi-páginas, CMS integrado e identidade visual impactante.",
    features: ["Painel de Edição (CMS)", "Blog Integrado", "Responsividade Fluida"],
    color: "bg-accent"
  },
  {
    num: "03",
    icon: <ShoppingCart className="w-5 h-5" />,
    name: "E-Commerce de Performance",
    desc: "Lojas virtuais que vendem mais. Experiência de compra otimizada, checkout rápido e design que transmite autoridade.",
    features: ["Checkout Otimizado (CRO)", "Integração com Pagamentos", "Gestão de Estoque Simples"],
    color: "bg-accent"
  },
  {
    num: "04",
    icon: <RefreshCw className="w-5 h-5" />,
    name: "Redesign Estratégico",
    desc: "Seu site atual não converte? Transformamos sua presença digital com um redesign focado em resultados e modernidade.",
    features: ["Auditoria de UX/UI", "Otimização de Conversão", "Migração de Tecnologia"],
    color: "bg-accent"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 md:pl-[180px] md:pr-[80px] bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-border pb-7 mb-20 gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['02'] before:text-muted">
            Nossa Expertise
          </span>
          <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-foreground">SERVIÇOS</h2>
        </div>

        <div className="flex flex-col gap-12">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="sticky w-full min-h-[500px] bg-s1 rounded-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border border-border p-8 md:p-16 flex flex-col lg:flex-row gap-12 overflow-hidden group"
              style={{ top: `${120 + i * 40}px` }}
            >
              {/* Conteúdo Principal */}
              <div className="flex-1 z-10">
                <h3 className="font-headline text-[clamp(32px,4vw,60px)] leading-[1.1] text-foreground mb-8 max-w-[600px]">
                  {s.name}
                </h3>
                <p className="text-[17px] leading-relaxed text-muted max-w-[500px] mb-10">
                  {s.desc}
                </p>

                <button className="flex items-center gap-3 bg-accent hover:scale-105 text-black font-bold px-7 py-3.5 rounded-full transition-all duration-300 group/btn">
                  <span className="text-sm uppercase tracking-wider">Saber mais</span>
                  <div className="bg-black/10 p-1.5 rounded-full group-hover/btn:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Lista de Features */}
                <div className="mt-16 space-y-4">
                  {s.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl w-fit min-w-[300px] border border-border">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shadow-sm text-accent">
                        {s.icon}
                      </div>
                      <span className="font-mono text-[11px] tracking-wider text-foreground/70 uppercase">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Elemento Gráfico */}
              <div className="hidden lg:flex flex-1 items-center justify-center relative">
                <div className="absolute right-0 w-[400px] h-[400px] opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-accent">
                    <path fill="currentColor" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.5,-0.9C83.9,13.9,77.3,27.8,68.4,39.6C59.5,51.4,48.3,61.1,35.3,68.1C22.3,75.1,7.5,79.4,-7.6,78.2C-22.7,77,-38.1,70.3,-51.1,60.6C-64.1,50.9,-74.7,38.2,-79.8,23.7C-84.9,9.2,-84.5,-7,-79.1,-21.5C-73.7,-36,-63.3,-48.8,-50.7,-56.4C-38.1,-64.1,-23.3,-66.6,-8.7,-71.4C5.9,-76.2,17.8,-83.3,31.4,-83.6C45,-83.9,60.4,-77.4,44.7,-76.4Z" transform="translate(100 100)" />
                  </svg>
                </div>
                {/* Ícone Grande Central */}
                <div className="relative z-10 w-32 h-32 rounded-full border-4 border-accent/20 flex items-center justify-center text-accent animate-pulse">
                  {React.cloneElement(s.icon as React.ReactElement, { className: "w-16 h-16" })}
                </div>
              </div>

              {/* Número no background */}
              <div className="absolute top-[-20px] right-[-20px] font-headline text-[240px] text-white/[0.03] pointer-events-none select-none">
                {s.num}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
