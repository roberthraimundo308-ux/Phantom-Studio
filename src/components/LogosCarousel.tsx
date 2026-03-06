"use client";

import React, { useEffect, useRef } from "react";

const LOGOS = [
  { name: "CITADEL" },
  { name: "KKR", className: "text-[20px] tracking-[0.18em]" },
  { name: "Goldman Sachs", className: "text-[14px] leading-[1.25]" },
  { name: "MongoDB", icon: true },
  { name: "Palantir", icon: true },
  { name: "Salesforce", className: "italic text-[16px]" },
  { name: "Apple", icon: true, onlyIcon: true },
  { name: "Penn", icon: true },
  { name: "Stanford", icon: true },
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
      velocity += e.deltaY * -0.05;
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    const animate = () => {
      velocity += (baseSpeed - velocity) * 0.07;
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
    <div className="logos-section relative border-y border-white/5 py-9 overflow-hidden bg-transparent before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[120px] before:z-[2] before:bg-gradient-to-r before:from-background before:to-transparent after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-[120px] after:z-[2] after:bg-gradient-to-l after:from-background after:to-transparent">
      <div ref={trackRef} className="flex items-center gap-[72px] w-max will-change-transform">
        {[...LOGOS, ...LOGOS].map((logo, idx) => (
          <div
            key={idx}
            className={`logo-item inline-flex items-center gap-2 font-body font-semibold tracking-[0.06em] text-white/30 whitespace-nowrap transition-colors duration-300 hover:text-white/60 ${logo.className || ""}`}
          >
            {logo.icon && (
              <svg className="w-5 opacity-60 transition-opacity duration-300 group-hover:opacity-100" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="currentColor" />
              </svg>
            )}
            {!logo.onlyIcon && logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}
