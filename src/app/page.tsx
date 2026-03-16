
import React from "react";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SectionProgress from "@/components/SectionProgress";
import Hero from "@/components/Hero";
import LogosCarousel from "@/components/LogosCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import Numbers from "@/components/Numbers";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const whatsappUrl = "https://wa.me/5547999144160?text=Olá,%20vim%20do%20anúncio";

  const steps = [
    { n: '01', title: 'Descoberta', desc: 'Mergulhamos profundamente no seu ecossistema para entender objetivos, dores e o público-alvo.' },
    { n: '02', title: 'Estratégia', desc: 'Definimos a arquitetura de informação e as metas de conversão. Cada clique é planejado.' },
    { n: '03', title: 'Design', desc: 'Criamos uma identidade visual única e disruptiva. Design autoral que comunica força e autoridade.' },
    { n: '04', title: 'Código', desc: 'Desenvolvimento de elite. Limpo, rápido e escalável. Focamos em performance máxima em qualquer dispositivo.' },
    { n: '05', title: 'Lançamento', desc: 'SEO avançado, testes rigorosos de qualidade e suporte contínuo para garantir o sucesso.' }
  ];

  return (
    <main className="bg-background min-h-screen">
      <CustomCursor />
      <SectionProgress />
      <Navbar />

      <div className="relative z-10 bg-background">
        <Hero />
        <LogosCarousel />
        
        <section id="manifesto" className="relative min-h-screen flex items-center py-32 px-6 md:pl-[180px] md:pr-[80px]">
          <div className="max-w-[1600px] mx-auto w-full">
            <div className="font-mono text-[10px] tracking-[0.32em] text-accent uppercase mb-[52px] flex items-center gap-[14px] before:content-['01'] before:text-muted">
              MANIFESTO
            </div>
            <ScrollReveal className="rev">
              <p className="font-body text-[clamp(26px,3.8vw,50px)] font-semibold leading-[1.4] text-foreground text-center md:text-left">
                <span className="text-muted">A maioria das agências cria sites.</span><br />
                Nós criamos <em className="not-italic text-accent">experiências que ninguém esquece.</em><br />
                <span className="text-muted">Enquanto seus concorrentes usam templates,</span><br />
                você terá um site que <em className="not-italic text-accent">é único no mundo.</em>
              </p>
            </ScrollReveal>
          </div>
        </section>
      </div>

      <div className="relative z-10">
        <Numbers />
      </div>

      <div className="relative z-20 bg-background">
        <Services />
      </div>

      <div className="relative z-30">
        <Portfolio />
      </div>

      <div className="relative z-40 bg-[#EDE8DE] text-[#050505]">
        <section id="process" className="relative bg-[#EDE8DE] py-20 md:py-32">
          <div className="max-w-[1600px] mx-auto px-6 md:pl-[180px] md:pr-[80px]">
            {/* Layout Split-Screen para Desktop / Empilhamento para Mobile */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-32 relative items-start">
              
              {/* Lado Esquerdo: Fixo no Desktop */}
              <div className="md:sticky md:top-40 w-full md:w-[40%] h-auto">
                <div className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-8 flex items-center gap-3 before:content-['05'] before:text-accent/20 font-bold">
                  METODOLOGIA
                </div>
                <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-[1.1] text-[#050505] uppercase">
                  FORJADO EM<br />CADA ETAPA.
                </h2>
              </div>

              {/* Lado Direito: Cards Roláveis */}
              <div className="flex-1 flex flex-col gap-10 md:gap-16 w-full pb-20 md:pb-32">
                {steps.map((step, i) => (
                  <div 
                    key={i} 
                    className="md:relative sticky top-[15vh] md:top-0 w-full" 
                  >
                    <ScrollReveal className="rev">
                      <div className="bg-white p-8 md:p-14 shadow-[20px_20px_60px_rgba(232,85,0,0.08)] border border-accent/10 relative group transition-all duration-500">
                        <div className="flex justify-between items-start mb-8 md:mb-12 border-b border-accent/10 pb-6">
                          <h3 className="font-headline text-3xl md:text-6xl text-[#050505] tracking-[-0.01em] uppercase">{step.title}</h3>
                          <span className="font-headline text-4xl md:text-7xl text-accent/10 group-hover:text-accent transition-colors">{step.n}</span>
                        </div>
                        <p className="font-body text-[clamp(15px,1.8vw,19px)] leading-[1.65] text-[#050505]/60 max-w-[600px]">
                          {step.desc}
                        </p>
                        <div className="absolute top-0 left-0 w-4 h-[1px] bg-accent/20"></div>
                        <div className="absolute top-0 left-0 w-[1px] h-4 bg-accent/20"></div>
                      </div>
                    </ScrollReveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-50">
        <Testimonials />
      </div>

      <section id="cta" className="relative min-h-[60vh] bg-[#EDE8DE] text-[#050505] px-6 md:pl-[180px] md:pr-[80px] flex flex-col justify-center py-24 md:py-32 overflow-hidden z-[60] border-t border-[#050505]/5">
        <div className="max-w-[1600px] mx-auto w-full flex flex-col">
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center mb-24">
            <div className="max-w-[800px] text-center md:text-left">
              <h2 className="font-body text-[clamp(26px,3.8vw,50px)] font-semibold leading-[1.4] mb-14 text-[#050505]">
                Uma ideia, um projeto, ou simplesmente precisa desafiar o <span className="text-accent">status quo?</span>
              </h2>
              <div className="flex justify-center md:justify-start">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white font-mono text-[10px] tracking-[0.22em] uppercase px-8 py-4 gap-2 transition-all duration-300 group hover:gap-4 hover:bg-accent hover:text-black"
                >
                  <span className="relative">Iniciar Projeto</span>
                  <span className="relative transition-all group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <h1 className="font-headline text-[clamp(80px,18vw,320px)] leading-[0.7] tracking-tighter md:-ml-8 uppercase select-none text-[#050505] phantom-footer-text">
              PHANTOM
            </h1>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </section>
    </main>
  );
}
