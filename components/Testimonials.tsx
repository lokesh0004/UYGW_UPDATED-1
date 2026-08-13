"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".testi-heading", {
      scrollTrigger: { trigger: ".testi-heading", start: "top 85%" },
      y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
    });
    gsap.from(".testi-card", {
      scrollTrigger: { trigger: ".testi-grid", start: "top 80%" },
      y: 60, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="px-8 md:px-16 py-28 relative overflow-hidden" style={{ background: "#050B1F" }}>
      {/* Bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(ellipse, #6366F1 0%, transparent 70%)" }} />
      <div className="section-divider mb-20" />

      <div className="testi-heading text-center mb-16">
        <span className="block text-xs font-bold tracking-[4px] uppercase text-cyan-400 mb-4">Testimonials</span>
        <h2 className="font-['Clash_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
          Real People. <span className="text-gradient-indigo">Real Results.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto">Students who built careers, not just certificates.</p>
      </div>

      <div className="testi-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={t.name} className={`testi-card glass rounded-3xl p-8 border border-slate-700/30 hover:border-indigo-500/30 transition-colors duration-300 relative group ${i === 1 ? "md:mt-8" : ""}`}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Quote mark */}
            <div className="font-['Clash_Display'] text-6xl text-indigo-500/20 leading-none mb-4 -mt-2">"</div>
            <div className="text-amber-400 text-base mb-4">{"★".repeat(t.rating)}</div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-700/40">
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center font-bold text-white text-sm`}>
                {t.initial}
              </div>
              <div>
                <div className="font-['Clash_Display'] font-bold text-white text-sm">{t.name}</div>
                <div className="text-slate-500 text-xs">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
