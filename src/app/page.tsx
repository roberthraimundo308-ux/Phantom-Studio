
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
import AIProjectAssistant from "@/components/AIProjectAssistant";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <CustomCursor />
      <SectionProgress />
      <Navbar />

      {/* Bloco Inicial */}
      <div className="relative z-10">
        <Hero />
        <LogosCarousel />
        
        {/* Manifesto Section */}
        <section id="manifesto" className="relative h-screen flex items-center py-32 md:py-[180px] px-6 md:pl-[180px] md:pr-[80px]">
          <div className="max-w-[1600px] mx-auto w-full">
            <div className="font-mono text-[10px] tracking-[0.32em] text-accent uppercase mb-[52px] flex items-center gap-[14px] before:content-['01'] before:text-muted">
              Manifesto
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

      {/* Seção de Números - Fixa para ser sobreposta */}
      <div className="sticky top-0 z-10">
        <Numbers />
      </div>

      {/* Serviços - Inicia a sobreposição (Efeito Cortina) */}
      <div className="relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <Services />
      </div>

      {/* Portfólio - Sobrepõe Serviços */}
      <div className="relative z-30 shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <Portfolio />
        <AIProjectAssistant />
      </div>

      {/* Comparação - Sobrepõe Portfólio */}
      <section id="weapon" className="relative z-40 py-20 md:py-[180px] px-6 md:pl-[180px] md:pr-[80px] bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <div className="max-w-[1600px] mx-auto">
          <ScrollReveal className="flex flex-col md:flex-row items-baseline justify-between border-b border-border pb-7 mb-[60px] rev gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['04'] before:text-muted">
              A Diferença
            </span>
            <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-foreground">SITE COMUM VS ARMA</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 border border-border rev">
            <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-border bg-black/10">
              <div className="font-mono text-[9px] tracking-[0.28em] text-muted uppercase mb-8 flex items-center gap-2.5 before:content-[''] before:w-5 before:h-[1px] before:bg-muted">
                Site Comum
              </div>
              <ul className="space-y-6 font-mono text-[13px] text-muted list-none">
                <li className="flex gap-4 items-start"><span className="text-red-500 font-bold">✕</span> Template genérico e engessado</li>
                <li className="flex gap-4 items-start"><span className="text-red-500 font-bold">✕</span> Carregamento lento (Prejudica o SEO)</li>
                <li className="flex gap-4 items-start"><span className="text-red-500 font-bold">✕</span> Design esquecível, sem identidade</li>
                <li className="flex gap-4 items-start"><span className="text-red-500 font-bold">✕</span> Nenhuma estratégia de conversão</li>
                <li className="flex gap-4 items-start"><span className="text-red-500 font-bold">✕</span> Não ranqueia no Google</li>
              </ul>
            </div>
            <div className="p-10 md:p-14 bg-s1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="font-mono text-[9px] tracking-[0.28em] text-accent uppercase mb-8 flex items-center gap-2.5 before:content-[''] before:w-5 before:h-[1px] before:bg-accent">
                Phantom Studio
              </div>
              <ul className="space-y-6 font-mono text-[13px] text-foreground list-none">
                <li className="flex gap-4 items-start"><span className="text-accent font-bold">✓</span> Design único, 100% personalizado</li>
                <li className="flex gap-4 items-start"><span className="text-accent font-bold">✓</span> Performance máxima (Core Vitals 95+)</li>
                <li className="flex gap-4 items-start"><span className="text-accent font-bold">✓</span> Identidade visual impactante</li>
                <li className="flex gap-4 items-start"><span className="text-accent font-bold">✓</span> CRO integrado em cada decisão</li>
                <li className="flex gap-4 items-start"><span className="text-accent font-bold">✓</span> SEO técnico de elite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Processo - Sobrepõe Comparação */}
      <section id="process" className="relative z-50 py-32 md:py-[180px] px-6 md:pl-[180px] md:pr-[80px] bg-s1 shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <div className="max-w-[1600px] mx-auto">
          <ScrollReveal className="flex flex-col md:flex-row items-baseline justify-between border-b border-border pb-7 mb-[60px] rev gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['05'] before:text-muted">
              Metodologia
            </span>
            <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-foreground">PROCESSO</h2>
          </ScrollReveal>
          
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-border border border-border" stagger>
            {[
              { n: '01', title: 'Descoberta', desc: 'Entendemos seu negócio e público a fundo.' },
              { n: '02', title: 'Estratégia', desc: 'Definimos arquitetura e metas de conversão.' },
              { n: '03', title: 'Design', desc: 'Criamos identidade visual única. Sem templates.' },
              { n: '04', title: 'Código', desc: 'Desenvolvimento limpo, rápido e escalável.' },
              { n: '05', title: 'Lançamento', desc: 'SEO, testes e suporte pós-entrega.' }
            ].map((step, i) => (
              <div key={i} className={`rev d${i} bg-s1 p-10 transition-colors duration-400 hover:bg-s2 group`}>
                <div className="font-headline text-7xl text-border mb-5 transition-colors duration-400 group-hover:text-accent leading-none">
                  {step.n}
                </div>
                <div className="font-ui text-[18px] font-bold text-foreground mb-2.5">
                  {step.title}
                </div>
                <div className="font-mono text-[11px] leading-[1.75] text-muted">
                  {step.desc}
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Preços - Sobrepõe Processo */}
      <section id="pricing" className="relative z-60 py-32 md:py-[180px] px-6 md:pl-[180px] md:pr-[80px] bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <div className="max-w-[1600px] mx-auto">
          <ScrollReveal className="flex flex-col md:flex-row items-baseline justify-between border-b border-border pb-7 mb-[60px] rev gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['06'] before:text-muted">
              Investimento
            </span>
            <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-foreground">PLANOS</h2>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-3 gap-5" stagger>
            {[
              { tag: 'Essencial', name: 'LAUNCH', price: '3.500', feat: ['Landing Page Conversão', 'Design Personalizado', 'Mobile-first', 'SEO On-page', 'Entrega em 10 dias'] },
              { tag: '★ Mais Popular', name: 'GROW', price: '8.500', feat: ['Site Multi-páginas', 'Design Premium', 'CMS Integrado', 'SEO Avançado', 'Core Web Vitals 90+'], highlight: true },
              { tag: 'Full Experience', name: 'DOMINATE', price: '18K+', feat: ['E-Commerce Completo', 'Animações GSAP', '100/100 PageSpeed', 'Copywriting Profissional', 'Suporte 90 dias'] },
            ].map((plan, i) => (
              <div key={i} className={`rev d${i} border border-border p-9 md:p-[44px] bg-s1 transition-all duration-350 hover:-translate-y-1 relative overflow-hidden group cursor-pointer ${plan.highlight ? 'border-accent bg-s2' : ''}`}>
                {plan.highlight && <div className="absolute top-0 inset-x-0 h-[1px] bg-accent"></div>}
                <div className={`font-mono text-[9px] tracking-[0.26em] uppercase mb-2 ${plan.highlight ? 'text-accent' : 'text-muted'}`}>{plan.tag}</div>
                <div className="font-headline text-4xl tracking-[0.05em] mb-7">{plan.name}</div>
                <div className="font-headline text-6xl leading-none mb-1.5"><small className="text-lg text-muted align-middle mr-1">R$</small>{plan.price}</div>
                <div className="font-mono text-[10px] tracking-[0.16em] text-muted mb-9">PAGAMENTO ÚNICO</div>
                <ul className="list-none flex flex-col gap-3.5 mb-10">
                  {plan.feat.map((f, fIdx) => (
                    <li key={fIdx} className="font-mono text-[11px] leading-tight text-muted flex gap-3 items-start before:content-['→'] before:text-accent before:shrink-0">
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 font-mono text-[11px] tracking-[0.2em] uppercase border border-border transition-all duration-300 ${plan.highlight ? 'bg-accent text-black border-accent' : 'text-foreground hover:border-accent/40 hover:text-accent'}`}>
                  Começar Agora
                </button>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Sobrepõe Preços */}
      <section id="cta" className="relative z-70 py-40 px-6 md:pl-[180px] md:pr-[80px] text-center bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_50%_50%,rgba(200,255,0,0.045)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="relative z-10">
          <div className="font-mono text-[10px] tracking-[0.32em] text-accent uppercase mb-7">Pronto para começar?</div>
          <ScrollReveal className="rev">
            <h2 className="font-headline text-[clamp(52px,9.5vw,136px)] leading-[0.9] mb-11 text-foreground">
              O MELHOR SITE<br />
              <span className="word-out">DA SUA VIDA.</span>
            </h2>
          </ScrollReveal>
          <p className="rev d1 text-[17px] text-muted max-w-[440px] mx-auto mb-13 leading-relaxed">
            Não existe segunda chance para causar uma primeira impressão. Seu site é sua arma mais poderosa. Vamos forjar a sua.
          </p>
          <a href="#" className="big-btn pointer-events-auto inline-flex items-center gap-[18px] font-mono text-[12px] tracking-[0.22em] uppercase text-black bg-accent px-[52px] py-[20px] group relative overflow-hidden transition-all duration-350 hover:gap-7">
            <span className="absolute inset-0 bg-white -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-450 ease-[cubic-bezier(0.76,0,0.24,1)]"></span>
            <span className="relative z-10">Iniciar Projeto</span>
            <span className="relative z-10">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-80 border-t border-border p-10 md:pl-[180px] md:pr-[80px] flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left bg-background">
        <div className="font-headline text-4xl tracking-[0.18em] text-foreground">PHANTOM<span className="text-accent">.</span></div>
        <ul className="flex flex-wrap justify-center gap-9 list-none">
          <li><a href="#" className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase hover:text-accent transition-colors">Sobre</a></li>
          <li><a href="#" className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase hover:text-accent transition-colors">Portfólio</a></li>
          <li><a href="#" className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase hover:text-accent transition-colors">Blog</a></li>
          <li><a href="#" className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase hover:text-accent transition-colors">Contato</a></li>
        </ul>
        <div className="font-mono text-[9px] tracking-[0.15em] text-muted">© 2025 PHANTOM STUDIO — Todos os direitos reservados</div>
      </footer>
    </main>
  );
}
