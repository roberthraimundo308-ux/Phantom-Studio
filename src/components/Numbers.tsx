
"use client";

import React, { useEffect, useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const DATA = [
  { val: 127, suffix: "+", label: "Projetos Entregues", width: 92 },
  { val: 47, prefix: "R$", suffix: "M", label: "Gerados para Clientes", width: 78 },
  { val: 4, suffix: ".9★", label: "Avaliação Média", width: 98 },
  { val: 100, suffix: "%", label: "Entregas no Prazo", width: 100 },
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
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * target));
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
    <section id="numbers" className="py-20 md:py-[120px] px-6 md:pl-[180px] md:pr-[80px] bg-background">
      <ScrollReveal className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border border-border" stagger>
        {DATA.map((item, i) => (
          <div key={i} className={`rev d${i} bg-background p-10 md:p-14 flex flex-col gap-[15px] transition-colors duration-400 hover:bg-s1`}>
            <div className="font-headline text-[clamp(54px,6vw,86px)] leading-none text-foreground flex items-baseline">
              {item.prefix && <span className="text-accent text-[0.45em] mr-1">{item.prefix}</span>}
              <Counter target={item.val} />
              <span className="text-accent">{item.suffix}</span>
            </div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
              {item.label}
            </div>
            <div className="mt-6 h-[2px] bg-border relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-[2.2s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ width: `${item.width}%` }}
              />
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
