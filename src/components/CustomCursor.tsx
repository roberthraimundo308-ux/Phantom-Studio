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
      ringX += (mouseX - ringX) * 0.38;
      ringY += (mouseY - ringY) * 0.38;
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
        className={`fixed border-[1.5px] z-[99999] pointer-events-none transition-all duration-300 is-cursor ${ringColorClass} ${
          isGrowing ? "w-14 h-14" : "w-9 h-9"
        }`}
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}