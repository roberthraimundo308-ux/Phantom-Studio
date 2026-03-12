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

      {/* Bloco Inicial: Hero, Logos e Manifesto */}
      <div className="relative z-10 bg-background">
        <Hero />
        <LogosCarousel />
        
        {/* Manifesto Section */}
        <section id="manifesto" className="relative min-h-screen flex items-center py-32 px-6 md:pl-[180px] md:pr-[80px]">
          <div className="max-w-[1600px] mx-auto w-full">
            <div className="font-mono text-[10px] tracking-[0.32em] text-accent uppercase mb-[52px] flex items-center gap-[14px] before:content-['01'] before:text-muted">
              MANIFESTO
            </div>
            <ScrollReveal className="rev">
              <p className="text-[clamp(26px,3.8vw,50px)] font-semibold leading-[1.4] text-foreground">
                <span className="text-muted">A maioria das agências cria sites.</span><br />
                Nós criamos <em className="not-italic text-accent">experiências que ninguém esquece.</em><br />
                <span className="text-muted">Enquanto seus concorrentes usam templates,</span><br />
                você terá um site que <em className="not-italic text-accent">é único no mundo.</em>
              </p>
            </ScrollReveal>
          </div>
        </section>
      </div>

      {/* Seção de Números - Fixa para o efeito de cortina */}
      <div className="sticky top-0 z-10 h-screen overflow-hidden">
        <Numbers />
      </div>

      {/* Serviços - Sobrepõe Números */}
      <div className="relative z-20 bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
        <Services />
      </div>

      {/* Portfólio Imersivo - Transição para o Tema Claro ocorre aqui */}
      <div className="relative z-30">
        <Portfolio />
      </div>

      {/* Conteúdo em Tema Claro (Exibido após o Portfólio) */}
      <div className="relative z-40 bg-[#EDE8DE] text-[#050505]">
        
        {/* Processo - Novo Layout Imersivo */}
        <section id="process" className="relative bg-[#EDE8DE] min-h-screen flex flex-col md:flex-row border-t border-cobalt/10">
          {/* Coluna Esquerda: Sticky Headline */}
          <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen flex flex-col justify-center px-6 md:pl-[180px] md:pr-[80px] py-20 md:py-0 border-b md:border-b-0 md:border-r border-cobalt/10 relative">
            <div className="font-mono text-[10px] tracking-[0.3em] text-cobalt/40 uppercase mb-8 flex items-center gap-3 before:content-['05'] before:text-cobalt/20">
              METODOLOGIA
            </div>
            <h2 className="font-headline text-[clamp(60px,8vw,120px)] leading-[0.85] text-cobalt uppercase mb-12">
              FORJADO EM<br />CADA ETAPA.
            </h2>
            <p className="font-mono text-[12px] md:text-[14px] leading-relaxed text-cobalt/60 max-w-[400px] uppercase tracking-tight">
              Navegar pelas complexidades digitais exige precisão. Nossa metodologia transforma visão em performance bruta, guiando seu projeto com confiança absoluta.
            </p>

            {/* Indicador Circular Estilo Cursor (Azul) - Alinhado com a Referência */}
            <div className="absolute right-[-21px] top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10 bg-[#EDE8DE] is-cursor">
              <div className="w-10 h-10 border border-cobalt/20 is-cursor flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-cobalt is-cursor"></div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Scrolling Cards */}
          <div className="w-full md:w-1/2 px-6 md:px-20 py-20 md:py-40 flex flex-col gap-24 md:gap-40">
            {[
              { n: '01', title: 'Descoberta', desc: 'Mergulhamos profundamente no seu ecossistema para entender objetivos, dores e o público-alvo.' },
              { n: '02', title: 'Estratégia', desc: 'Definimos a arquitetura de informação e as metas de conversão. Cada clique é planejado.' },
              { n: '03', title: 'Design', desc: 'Criamos uma identidade visual única e disruptiva. Design autoral que comunica força e autoridade.' },
              { n: '04', title: 'Código', desc: 'Desenvolvimento de elite. Limpo, rápido e escalável. Focamos em performance máxima em qualquer dispositivo.' },
              { n: '05', title: 'Lançamento', desc: 'SEO avançado, testes rigorosos de qualidade e suporte contínuo para garantir o sucesso.' }
            ].map((step, i) => (
              <ScrollReveal key={i} className="rev">
                <div className="bg-white p-10 md:p-14 shadow-[20px_20px_60px_rgba(46,49,146,0.05)] border border-cobalt/5 relative group hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-12 border-b border-cobalt/10 pb-6">
                    <h3 className="font-headline text-4xl md:text-5xl text-cobalt tracking-wide uppercase">{step.title}</h3>
                    <span className="font-headline text-5xl md:text-6xl text-cobalt/10 group-hover:text-cobalt/20 transition-colors">{step.n}</span>
                  </div>
                  <p className="font-mono text-[11px] md:text-[13px] leading-relaxed text-cobalt/60 uppercase tracking-tight">
                    {step.desc}
                  </p>
                  {/* Linhas decorativas técnicas */}
                  <div className="absolute top-0 left-0 w-4 h-[1px] bg-cobalt/20"></div>
                  <div className="absolute top-0 left-0 w-[1px] h-4 bg-cobalt/20"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-cobalt/20"></div>
                  <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-cobalt/20"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Depoimentos - Integrados ao Tema Claro */}
        <div className="relative z-45 bg-[#EDE8DE]">
          <Testimonials />
        </div>

        {/* Preços */}
        <section id="pricing" className="relative py-32 md:py-[180px] px-6 md:pl-[180px] md:pr-[80px]">
          <div className="max-w-[1600px] mx-auto">
            <ScrollReveal className="rev flex flex-col md:flex-row items-baseline justify-between border-b border-black/10 pb-7 mb-20 gap-4">
              <span className="font-mono text-[10px] tracking-[0.3em] text-black/40 uppercase flex items-center gap-3 before:content-['06'] before:text-black/20">
                INVESTIMENTO
              </span>
              <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-black">PLANOS</h2>
            </ScrollReveal>

            <ScrollReveal className="grid grid-cols-1 lg:grid-cols-3 gap-5" stagger>
              {[
                { tag: 'Essencial', name: 'LAUNCH', price: '3.500', feat: ['Landing Page Conversão', 'Design Personalizado', 'Mobile-first', 'SEO On-page', 'Entrega em 10 dias'] },
                { tag: '★ Mais Popular', name: 'GROW', price: '8.500', feat: ['Site Multi-páginas', 'Design Premium', 'CMS Integrado', 'SEO Avançado', 'Core Web Vitals 90+'], highlight: true },
                { tag: 'Full Experience', name: 'DOMINATE', price: '18K+', feat: ['E-Commerce Completo', 'Animações GSAP', '100/100 PageSpeed', 'Copywriting Profissional', 'Suporte 90 dias'] },
              ].map((plan, i) => (
                <div key={i} className={`rev d${i} border border-black/10 p-9 md:p-[44px] bg-white transition-all duration-350 hover:-translate-y-1 relative overflow-hidden group cursor-pointer ${plan.highlight ? 'border-black bg-[#FDFDFD]' : ''}`}>
                  {plan.highlight && <div className="absolute top-0 inset-x-0 h-[1px] bg-black"></div>}
                  <div className={`font-mono text-[9px] tracking-[0.26em] uppercase mb-2 ${plan.highlight ? 'text-black' : 'text-black/30'}`}>{plan.tag}</div>
                  <div className="font-headline text-4xl tracking-[0.05em] mb-7 text-black">{plan.name}</div>
                  <div className="font-headline text-6xl leading-none mb-1.5 text-black"><small className="text-lg text-black/30 align-middle mr-1">R$</small>{plan.price}</div>
                  <div className="font-mono text-[10px] tracking-[0.16em] text-black/30 mb-9">PAGAMENTO ÚNICO</div>
                  <ul className="list-none flex flex-col gap-3.5 mb-10">
                    {plan.feat.map((f, fIdx) => (
                      <li key={fIdx} className="font-mono text-[11px] leading-tight text-black/60 flex gap-3 items-start before:content-['→'] before:text-black before:shrink-0">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 font-mono text-[11px] tracking-[0.2em] uppercase border border-black/10 transition-all duration-300 ${plan.highlight ? 'bg-black text-white border-black' : 'text-black hover:border-black/40 hover:bg-black hover:text-white'}`}>
                    Começar Agora
                  </button>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="relative py-40 px-6 md:pl-[180px] md:pr-[80px] text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none"></div>
          <div className="relative z-10">
            <div className="font-mono text-[10px] tracking-[0.32em] text-black/40 uppercase mb-7">PRONTO PARA COMEÇAR?</div>
            <ScrollReveal className="rev">
              <h2 className="font-headline text-[clamp(52px,9.5vw,136px)] leading-[0.9] mb-11 text-black">
                O MELHOR SITE<br />
                <span className="text-black/20">DA SUA VIDA.</span>
              </h2>
            </ScrollReveal>
            <p className="rev d1 text-[17px] text-black/50 max-w-[440px] mx-auto mb-13 leading-relaxed">
              Não existe segunda chance para causar uma primeira impressão. Seu site é sua arma mais poderosa. Vamos forjar a sua.
            </p>
            <a href="#" className="big-btn pointer-events-auto inline-flex items-center gap-[18px] font-mono text-[12px] tracking-[0.22em] uppercase text-white bg-black px-[52px] py-[20px] group relative overflow-hidden transition-all duration-350 hover:gap-7">
              <span className="absolute inset-0 bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-450 ease-[cubic-bezier(0.76,0,0.24,1)]"></span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">Iniciar Projeto</span>
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">→</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-black/5 p-10 md:pl-[180px] md:pr-[80px] flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div className="font-headline text-4xl tracking-[0.18em] text-black">PHANTOM<span className="text-accent">.</span></div>
          <ul className="flex flex-wrap justify-center gap-9 list-none">
            <li><a href="#" className="font-mono text-[10px] tracking-[0.2em] text-black/40 uppercase hover:text-black transition-colors">Sobre</a></li>
            <li><a href="#" className="font-mono text-[10px] tracking-[0.2em] text-black/40 uppercase hover:text-black transition-colors">Portfólio</a></li>
            <li><a href="#" className="font-mono text-[10px] tracking-[0.2em] text-black/40 uppercase hover:text-black transition-colors">Blog</a></li>
            <li><a href="#" className="font-mono text-[10px] tracking-[0.2em] text-black/40 uppercase hover:text-black transition-colors">Contato</a></li>
          </ul>
          <div className="font-mono text-[9px] tracking-[0.15em] text-black/30">© 2025 PHANTOM STUDIO — Todos os direitos reservados</div>
        </footer>
      </div>
    </main>
  );
}
