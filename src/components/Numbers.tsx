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
    <section id="numbers" className="py-20 md:py-[80px] px-6 md:px-[52px] border-t border-border">
      <ScrollReveal className="max-w-[1380px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border border border-border" stagger>
        {DATA.map((item, i) => (
          <div key={i} className={`rev d${i} bg-background p-10 md:p-[52px] flex flex-col gap-[10px] transition-colors duration-400 hover:bg-s1`}>
            <div className="font-headline text-[clamp(50px,5.5vw,84px)] leading-none text-foreground">
              {item.prefix && <span className="text-accent">{item.prefix}</span>}
              <Counter target={item.val} />
              <span className="text-accent">{item.suffix}</span>
            </div>
            <div className="font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
              {item.label}
            </div>
            <div className="mt-4 h-[1px] bg-border relative overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ width: `${item.width}%` }}
              />
            </div>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
