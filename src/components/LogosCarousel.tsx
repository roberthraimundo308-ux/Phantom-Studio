"use client";

import React, { useEffect, useRef } from "react";

const LOGOS = [
  { name: "OpenAI", icon: true },
  { name: "GitHub", icon: true },
  { name: "WordPress", className: "text-[18px] tracking-[0.05em]" },
  { name: "Google Ads", className: "text-[15px] font-bold" },
  { name: "Meta Ads", className: "italic text-[16px]" },
  { name: "LinkedIn Ads", className: "font-bold text-[14px] tracking-tight" },
  { name: "Vercel", icon: true, onlyIcon: true },
  { name: "Next.js", className: "font-mono font-bold" },
  { name: "Shopify", className: "text-[19px] tracking-tight" },
  { name: "Tailwind CSS", className: "text-[11px] tracking-[0.25em] uppercase" },
  { name: "TikTok Ads", className: "font-black" },
  { name: "Framer", icon: true },
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
    <div className="logos-section relative border-y border-white/5 py-10 overflow-hidden bg-transparent before:content-[''] before:absolute before:inset-y-0 before:left-0 before:w-[120px] before:z-[2] before:bg-gradient-to-r before:from-background before:to-transparent after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-[120px] after:z-[2] after:bg-gradient-to-l after:from-background after:to-transparent">
      <div ref={trackRef} className="flex items-center gap-[84px] w-max will-change-transform">
        {[...LOGOS, ...LOGOS].map((logo, idx) => (
          <div
            key={idx}
            className={`logo-item inline-flex items-center gap-2.5 font-body font-semibold tracking-[0.06em] text-white/25 whitespace-nowrap transition-colors duration-300 hover:text-accent/60 cursor-none ${logo.className || ""}`}
          >
            {logo.icon && (
              <svg className="w-4 opacity-50 transition-opacity duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {!logo.onlyIcon && logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}
