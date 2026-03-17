
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isGrowing, setIsGrowing] = useState(false);

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

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleInteraction);

    const animate = () => {
      const easing = 0.18;
      ringX += (mouseX - ringX) * easing;
      ringY += (mouseY - ringY) * easing;
      
      const size = isGrowing ? 56 : 36;
      ring.style.transform = `translate3d(${ringX - size / 2}px, ${ringY - size / 2}px, 0)`;
      
      requestAnimationFrame(animate);
    };
    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleInteraction);
      cancelAnimationFrame(frame);
    };
  }, [isGrowing]);

  // Usamos mix-blend-mode: difference. 
  // O cursor laranja (#e85500) sobre fundo laranja resulta em preto.
  // Sobre fundo preto, ele continua laranja.
  // Sobre o fundo bege claro, ele assume a cor complementar (azul/ciano).

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 z-[99999] pointer-events-none is-cursor bg-accent mix-blend-difference"
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={ringRef}
        className={`fixed border-[1.5px] border-accent z-[99999] pointer-events-none is-cursor mix-blend-difference ${
          isGrowing ? "w-14 h-14" : "w-9 h-9"
        } transition-[width,height] duration-300 ease-out`}
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}
