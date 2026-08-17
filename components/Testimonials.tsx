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
    <section ref={ref} className="px-8 md:px-16 py-28 relative overflow-hidden" style={{ background: "var(--void)" }}>
      {/* Bg glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(ellipse, #2E8B57 0%, transparent 70%)" }}
      />
      <div className="section-divider mb-20" />

      <div className="testi-heading text-center mb-16">
        <span className="block text-xs font-bold tracking-[4px] uppercase mb-4" style={{ color: "var(--gold)" }}>
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
          Real People. <span className="text-gradient-indigo">Real Results.</span>
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          Students who built careers, not just certificates.
        </p>
      </div>

      <div className="testi-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`testi-card glass rounded-3xl p-8 border transition-colors duration-300 relative group ${i === 1 ? "md:mt-8" : ""}`}
            style={{ borderColor: "rgba(46,139,87,0.15)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(46,139,87,0.35)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(46,139,87,0.15)")}
          >
            <div
              className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)" }}
            />
            {/* Quote mark */}
            <div className="text-6xl leading-none mb-4 -mt-2" style={{ color: "rgba(46,139,87,0.2)" }}>"</div>
            <div className="text-base mb-4" style={{ color: "var(--gold)" }}>{"★".repeat(t.rating)}</div>
            <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "var(--text)" }}>"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "rgba(46,139,87,0.15)" }}>
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center font-bold text-white text-sm`}>
                {t.initial}
              </div>
              <div>
                <div className="font-bold text-sm" style={{ color: "var(--text)" }}>{t.name}</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}