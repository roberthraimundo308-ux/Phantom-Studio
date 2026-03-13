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
              <p className="font-body text-[clamp(26px,3.8vw,50px)] font-semibold leading-[1.4] text-foreground">
                <span className="text-muted">A maioria das agências cria sites.</span><br />
                Nós criamos <em className="not-italic text-accent">experiências que ninguém esquece.</em><br />
                <span className="text-muted">Enquanto seus concorrentes usam templates,</span><br />
                você terá um site que <em className="not-italic text-accent">é único no mundo.</em>
              </p>
            </ScrollReveal>
          </div>
        </section>
      </div>

      <div className="sticky top-0 z-10 h-screen overflow-hidden">
        <Numbers />
      </div>

      <div className="relative z-20 bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
        <Services />
      </div>

      <div className="relative z-30">
        <Portfolio />
      </div>

      <div className="relative z-40 bg-[#EDE8DE] text-[#050505]">
        <section id="process" className="relative bg-[#EDE8DE] min-h-screen flex flex-col md:flex-row border-t border-accent/10">
          <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen flex flex-col justify-center px-6 md:pl-[180px] md:pr-[80px] py-20 md:py-0 border-b md:border-b-0 md:border-r border-accent/10 relative">
            <div className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase mb-8 flex items-center gap-3 before:content-['05'] before:text-accent/20">
              METODOLOGIA
            </div>
            <h2 className="font-headline text-[clamp(60px,8vw,120px)] leading-[0.85] text-[#050505] uppercase mb-12">
              FORJADO EM<br />CADA ETAPA.
            </h2>
            <p className="font-body text-[clamp(15px,1.8vw,19px)] leading-[1.65] text-[#050505]/70 max-w-[400px]">
              Navegar pelas complexidades digitais exige precisão. Nossa metodologia transforma visão em performance bruta, guiando seu projeto com confiança absoluta.
            </p>

            <div className="absolute right-[-21px] top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10 bg-[#EDE8DE] is-cursor">
              <div className="w-10 h-10 border border-accent/20 is-cursor flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-accent is-cursor"></div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-6 md:px-20 py-20 md:py-40 flex flex-col gap-24 md:gap-40">
            {[
              { n: '01', title: 'Descoberta', desc: 'Mergulhamos profundamente no seu ecossistema para entender objetivos, dores e o público-alvo.' },
              { n: '02', title: 'Estratégia', desc: 'Definimos a arquitetura de informação e as metas de conversão. Cada clique é planejado.' },
              { n: '03', title: 'Design', desc: 'Criamos uma identidade visual única e disruptiva. Design autoral que comunica força e autoridade.' },
              { n: '04', title: 'Código', desc: 'Desenvolvimento de elite. Limpo, rápido e escalável. Focamos em performance máxima em qualquer dispositivo.' },
              { n: '05', title: 'Lançamento', desc: 'SEO avançado, testes rigorosos de qualidade e suporte contínuo para garantir o sucesso.' }
            ].map((step, i) => (
              <ScrollReveal key={i} className="rev">
                <div className="bg-white p-10 md:p-14 shadow-[20px_20px_60px_rgba(232,85,0,0.12)] border border-accent/10 relative group hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-12 border-b border-accent/10 pb-6">
                    <h3 className="font-headline text-4xl md:text-6xl text-[#050505] tracking-[-0.01em] uppercase">{step.title}</h3>
                    <span className="font-headline text-5xl md:text-7xl text-accent/10 group-hover:text-accent transition-colors">{step.n}</span>
                  </div>
                  <p className="font-body text-[clamp(15px,1.8vw,19px)] leading-[1.65] text-[#050505]/60">
                    {step.desc}
                  </p>
                  <div className="absolute top-0 left-0 w-4 h-[1px] bg-accent/20"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-4 bg-accent/20"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-accent/20"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-accent/20"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>

      <div className="relative z-50">
        <Testimonials />
      </div>

      <section id="cta" className="relative min-h-[60vh] bg-[#EDE8DE] text-[#050505] px-6 md:pl-[180px] md:pr-[80px] flex flex-col justify-center py-24 md:py-32 overflow-hidden z-[60] border-t border-[#050505]/5">
        <div className="flex flex-col md:flex-row justify-end items-start md:items-center">
          <div className="max-w-[800px] md:text-left">
            <h2 className="font-body text-[clamp(26px,3.8vw,50px)] font-semibold leading-[1.4] mb-14 text-[#050505]">
              Uma ideia, um projeto, ou simplesmente precisa desafiar o <span className="text-accent">status quo?</span>
            </h2>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black text-white font-mono text-[10px] tracking-[0.22em] uppercase px-5 py-3 gap-2 transition-all duration-300 group hover:gap-4 hover:bg-accent hover:text-black"
            >
              <span className="relative">Vamos conversar</span>
              <span className="relative transition-all group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between gap-16 md:gap-0 mt-20">
          <div className="flex flex-col items-start w-full md:w-auto">
            <h1 className="font-headline text-[clamp(80px,18vw,320px)] leading-[0.7] tracking-tighter -ml-2 md:-ml-8 uppercase select-none text-[#050505] phantom-footer-text">
              PHANTOM
            </h1>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </section>
    </main>
  );
}