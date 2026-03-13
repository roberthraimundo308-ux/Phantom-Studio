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

        <section id="pricing" className="relative py-32 md:py-[180px] px-6 md:pl-[180px] md:pr-[80px]">
          <div className="max-w-[1600px] mx-auto">
            <ScrollReveal className="rev flex flex-col md:flex-row items-baseline justify-between border-b border-[#050505]/10 pb-7 mb-20 gap-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['06'] before:text-accent/20">
                INVESTIMENTO
              </span>
              <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-[#050505] uppercase">PLANOS</h2>
            </ScrollReveal>

            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-3 gap-5" stagger>
              {[
                { tag: 'Essencial', name: 'LANDING PAGE', price: '800', feat: ['Landing Page Conversão', 'Design Personalizado', 'Mobile-first', 'SEO On-page', 'Entrega em 10 dias'] },
                { tag: '★ Mais Popular', name: 'SITE INSTITUCIONAL', price: '1.500', feat: ['Site Multi-páginas', 'Design Premium', 'CMS Integrado', 'SEO Avançado', 'Core Web Vitals 90+'], highlight: true },
                { tag: 'Full Experience', name: 'SITE COMPLETO', price: '2.000', feat: ['E-Commerce Completo', 'Animações GSAP', '100/100 PageSpeed', 'Copywriting Profissional', 'Suporte 90 dias'] },
              ].map((plan, i) => (
                <div key={i} className={`rev d${i} border border-[#050505]/10 p-9 md:p-[44px] bg-white transition-all duration-350 hover:-translate-y-1 relative overflow-hidden group cursor-pointer ${plan.highlight ? 'border-[#050505] bg-[#FDFDFD]' : ''}`}>
                  {plan.highlight && <div className="absolute top-0 inset-x-0 h-[1px] bg-[#050505]"></div>}
                  <div className={`font-mono text-[9px] tracking-[0.26em] uppercase mb-2 ${plan.highlight ? 'text-accent' : 'text-[#050505]/30'}`}>{plan.tag}</div>
                  <div className="font-headline text-5xl tracking-[-0.01em] mb-7 text-[#050505] uppercase">{plan.name}</div>
                  <div className="font-headline text-6xl leading-none mb-1.5 text-[#050505]"><small className="text-lg text-[#050505]/30 align-middle mr-1">R$</small>{plan.price}</div>
                  <div className="font-mono text-[10px] tracking-[0.16em] text-[#050505]/30 mb-9 uppercase">Pagamento Único</div>
                  <ul className="list-none flex flex-col gap-3.5 mb-10">
                    {plan.feat.map((f, fIdx) => (
                      <li key={fIdx} className="font-body text-[clamp(13px,1.4vw,15px)] leading-tight text-[#050505]/60 flex gap-3 items-start before:content-['→'] before:text-accent before:shrink-0">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full inline-flex items-center justify-center bg-black text-white font-mono text-[10px] tracking-[0.22em] uppercase px-5 py-3 gap-2 transition-all duration-300 group hover:gap-4 hover:bg-accent hover:text-black">
                    <span className="relative">Começar Agora</span>
                    <span className="relative transition-all group-hover:translate-x-1">→</span>
                  </button>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>
      </div>

      <div className="relative z-50">
        <Testimonials />
      </div>

      <section id="cta" className="relative min-h-[90vh] bg-white text-[#050505] px-6 md:pl-[180px] md:pr-[80px] flex flex-col justify-between py-24 md:py-32 overflow-hidden z-[60] border-t border-[#050505]/5">
        <div className="flex flex-col md:flex-row justify-end items-start md:items-center mt-10 md:mt-20">
          <div className="max-w-[550px] md:text-left">
            <h2 className="font-body text-[clamp(28px,3.2vw,44px)] leading-[1.5] mb-14 tracking-tight text-[#050505] font-normal">
              Uma ideia, um projeto, ou simplesmente precisa desafiar o status quo?
            </h2>
            <a href="#" className="inline-flex items-center bg-accent text-black font-mono text-[10px] tracking-[0.22em] uppercase px-5 py-3 gap-2 transition-all duration-300 group hover:gap-4 hover:bg-black hover:text-white">
              <span className="relative">Vamos conversar</span>
              <span className="relative transition-all group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between gap-16 md:gap-0 mt-20">
          <div className="flex flex-col items-start w-full md:w-auto">
            <p className="font-body text-[clamp(14px,1.5vw,16px)] text-accent mb-6 max-w-[340px] leading-relaxed">
              Estúdio digital especializado em performance e experiências únicas.
            </p>
            <h1 className="font-headline text-[clamp(80px,22vw,360px)] leading-[0.7] tracking-tighter -ml-2 md:-ml-8 uppercase select-none text-[#050505] phantom-footer-text">
              PHANTOM
            </h1>
          </div>

          <div className="flex flex-col items-end gap-3 pb-8 md:pb-12 w-full md:w-auto">
            <a href="mailto:hello@phantom.studio" className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-accent hover:text-[#050505] transition-colors">HELLO@PHANTOM.STUDIO</a>
            <a href="#" className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-accent hover:text-[#050505] transition-colors">LINKEDIN</a>
            <a href="#" className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-accent hover:text-[#050505] transition-colors">NOTAS LEGAIS</a>
            <div className="font-mono text-[9px] text-[#050505]/10 mt-6 tracking-[0.1em]">WEBSITE BY PHANTOM STUDIO — © 2025</div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </section>
    </main>
  );
}
