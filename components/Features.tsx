"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { features } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Heading reveal
    gsap.from(".feat-heading", {
      scrollTrigger: { trigger: ".feat-heading", start: "top 85%" },
      y: 50, opacity: 0, duration: 0.9, ease: "power3.out",
    });

    // Cards: staggered reveal with clip-path
    gsap.from(".feat-card", {
      scrollTrigger: { trigger: ".feat-grid", start: "top 80%", end: "bottom 60%", toggleActions: "play none none reverse" },
      y: 60, opacity: 0, scale: 0.95, duration: 0.7, stagger: 0.15, ease: "power3.out",
    });

    // Each card icon bounce
    document.querySelectorAll<HTMLElement>(".feat-icon").forEach((el, i) => {
      gsap.to(el, { y: -6, duration: 2 + i * 0.3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: i * 0.4 });
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="relative px-8 md:px-16 py-28" style={{ background: "#050B1F" }}>
      {/* Section label */}
      <div className="feat-heading text-center mb-20">
        <span className="inline-block text-xs font-bold tracking-[4px] uppercase text-indigo-400 mb-4">Why LearnOva</span>
        <h2 className="font-['Clash_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
          Built for <span className="text-gradient-indigo">Real Growth</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
          Everything you need to go from curious beginner to confident professional — in one place.
        </p>
      </div>

      {/* Grid */}
      <div className="feat-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="feat-card glass rounded-3xl p-7 border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300 group relative overflow-hidden hoverable">
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
              style={{ background: "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.1) 0%, transparent 70%)" }} />

            <div className="feat-icon text-4xl mb-5 relative z-10">{f.icon}</div>
            <h3 className="font-['Clash_Display'] text-lg font-bold text-white mb-3 relative z-10">{f.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
