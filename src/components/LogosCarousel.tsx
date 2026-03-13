"use client";

import React, { useEffect, useRef } from "react";

const LOGOS = [
  { name: "OpenAI", className: "text-[20px]" },
  { name: "GitHub", className: "text-[18px]" },
  { name: "WordPress", className: "text-[22px] tracking-[0.05em]" },
  { name: "Vercel", className: "text-[20px] font-bold" },
  { name: "Next.js", className: "font-mono font-bold text-[20px]" },
  { name: "Shopify", className: "text-[22px] tracking-tight" },
  { name: "Tailwind CSS", className: "text-[14px] tracking-[0.25em] uppercase" },
  { name: "Framer", className: "text-[20px]" },
  { name: "Anthropic", className: "text-[18px]" },
  { name: "React", className: "text-[20px] font-bold" },
];

export default function LogosCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let velocity = -0.6;
    const baseSpeed = -0.6;

    const onWheel = (e: WheelEvent) => {
      // Calibração: Intensidade de resposta ao scroll aumentada
      velocity += e.deltaY * -0.12;
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    const animate = () => {
      // Calibração: Retorno ao baseSpeed mais rápido (0.07 -> 0.12)
      velocity += (baseSpeed - velocity) * 0.12;
      offset += velocity;

      const halfWidth = track.scrollWidth / 2;
      if (offset <= -halfWidth) offset += halfWidth;
      if (offset >= 0) offset -= halfWidth;

      track.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="logos-section relative py-12 overflow-hidden bg-transparent before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[200px] before:z-[2] before:bg-gradient-to-r before:from-background before:to-transparent after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-[200px] after:z-[2] after:bg-gradient-to-l after:from-background after:to-transparent">
      <div ref={trackRef} className="flex items-center gap-[100px] w-max will-change-transform">
        {[...LOGOS, ...LOGOS].map((logo, idx) => (
          <div
            key={idx}
            className={`logo-item inline-flex items-center gap-2.5 font-body font-semibold tracking-[0.06em] text-white/20 whitespace-nowrap transition-colors duration-300 hover:text-accent/60 cursor-none ${logo.className || "text-[18px]"}`}
          >
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}
