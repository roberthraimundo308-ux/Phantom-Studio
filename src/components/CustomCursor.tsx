"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isGrowing, setIsGrowing] = useState(false);
  const [colorMode, setColorMode] = useState<"accent" | "muted">("accent");

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -200;
    let mouseY = -200;
    let ringX = -200;
    let ringY = -200;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // O ponto central deve ser instantâneo
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    };

    const handleInteraction = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .cursor-pointer, .is-cursor")) {
        setIsGrowing(true);
      } else {
        setIsGrowing(false);
      }
    };

    const handleScroll = () => {
      const portfolio = document.getElementById("portfolio");
      const process = document.getElementById("process");
      const pricing = document.getElementById("pricing");
      const cta = document.getElementById("cta");

      const isInLightSection = (el: HTMLElement | null) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        const midPoint = window.innerHeight * 0.5;
        return rect.top <= midPoint && rect.bottom >= midPoint;
      };

      if (isInLightSection(portfolio) || isInLightSection(process) || isInLightSection(pricing) || isInLightSection(cta)) {
        setColorMode("muted");
      } else {
        setColorMode("accent");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleInteraction);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      // Calibração de agilidade: fator aumentado para 0.25 para suavidade sem lag
      // Usamos uma interpolação mais alta para evitar o efeito de "distância" excessiva
      const easing = 0.22;
      ringX += (mouseX - ringX) * easing;
      ringY += (mouseY - ringY) * easing;
      
      // translate3d é mais performático (aceleração de hardware)
      ring.style.transform = `translate3d(${ringX - (isGrowing ? 28 : 18)}px, ${ringY - (isGrowing ? 28 : 18)}px, 0)`;
      
      requestAnimationFrame(animate);
    };
    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleInteraction);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, [isGrowing]);

  const dotColorClass = "bg-accent";
  const ringColorClass = colorMode === "accent" ? "border-accent opacity-40" : "border-accent opacity-80";

  return (
    <>
      <div
        ref={dotRef}
        className={`fixed w-2 h-2 z-[99999] pointer-events-none is-cursor transition-colors duration-300 ${dotColorClass}`}
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={ringRef}
        className={`fixed border-[1.5px] z-[99999] pointer-events-none is-cursor ${ringColorClass} ${
          isGrowing ? "w-14 h-14" : "w-9 h-9"
        } transition-[width,height,border-color,opacity] duration-300 ease-out`}
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}
