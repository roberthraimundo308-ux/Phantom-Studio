"use client";

import React, { useEffect, useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const DATA = [
  { val: 127, suffix: "+", label: "PROJETOS ENTREGUES", width: 92 },
  { val: 47, prefix: "R$", suffix: "M", label: "GERADOS PARA CLIENTES", width: 78 },
  { val: 4.9, suffix: "", label: "AVALIAÇÃO MÉDIA", width: 98, hasStar: true },
  { val: 100, suffix: "%", label: "ENTREGAS NO PRAZO", width: 100 },
];

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRun) {
        setHasRun(true);
        let start = 0;
        const duration = 2000;
        const isFloat = !Number.isInteger(target);
        
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const current = progress * target;
          setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasRun]);

  return <span ref={ref}>{count}</span>;
}

export default function Numbers() {
  return (
    <section id="numbers" className="relative h-screen flex flex-col justify-center bg-background py-20 px-6 md:pl-[180px] md:pr-[80px]">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-baseline justify-between border-b border-border pb-7 mb-20 gap-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-accent uppercase flex items-center gap-3 before:content-['02'] before:text-muted">
            IMPACTO REAL
          </span>
          <h2 className="font-headline text-[clamp(44px,5.5vw,76px)] tracking-[0.03em] leading-tight text-foreground uppercase text-right">MÉTRICAS</h2>
        </div>

        <ScrollReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-white/5 bg-white/5 gap-[1px]" stagger>
          {DATA.map((item, i) => (
            <div key={i} className={`rev d${i} bg-background p-10 md:p-14 flex flex-col items-start gap-4 h-full relative group transition-colors duration-500 hover:bg-s1/50`}>
              <div className="font-display text-[clamp(60px,7vw,94px)] leading-none text-foreground flex items-center">
                {item.prefix && <span className="text-accent text-[0.45em] mr-1 align-middle">{item.prefix}</span>}
                <Counter target={item.val} />
                <span className="text-foreground">{item.suffix}</span>
                {item.hasStar && <Star className="fill-accent text-accent w-12 h-12 ml-2 mb-2" />}
              </div>
              
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
                {item.label}
              </div>

              <div className="mt-8 w-full max-w-[160px] h-[2px] bg-white/10 relative overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ width: `${item.width}%` }}
                />
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
