"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isGrowing, setIsGrowing] = useState(false);
  const [colorMode, setColorMode] = useState<"green" | "blue">("green");

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
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const handleInteraction = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .cursor-pointer")) {
        setIsGrowing(true);
      } else {
        setIsGrowing(false);
      }
    };

    const handleScroll = () => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        const rect = portfolioSection.getBoundingClientRect();
        // Mudança de cor dinâmica: verde no topo (escuro), azul a partir do portfólio (claro)
        if (rect.top <= window.innerHeight * 0.5) {
          setColorMode("blue");
        } else {
          setColorMode("green");
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleInteraction);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      // Velocidade de interpolação ajustada para 0.15 para ser mais responsivo
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      requestAnimationFrame(animate);
    };
    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleInteraction);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const dotColorClass = colorMode === "green" ? "bg-accent" : "bg-cobalt";
  const ringColorClass = colorMode === "green" ? "border-accent opacity-40" : "border-cobalt opacity-100";

  return (
    <>
      <div
        ref={dotRef}
        className={`fixed w-2 h-2 z-[99999] pointer-events-none is-cursor transition-colors duration-300 ${dotColorClass}`}
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={ringRef}
        className={`fixed border-[1.5px] z-[99999] pointer-events-none transition-all duration-300 is-cursor ${ringColorClass} ${
          isGrowing ? "w-14 h-14" : "w-9 h-9"
        }`}
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}