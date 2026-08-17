"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { instructors } from "@/data";

gsap.registerPlugin(ScrollTrigger);

export default function Instructors() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".instr-heading", {
      scrollTrigger: { trigger: ".instr-heading", start: "top 85%" },
      y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
    });
    gsap.from(".instr-card", {
      scrollTrigger: { trigger: ".instr-grid", start: "top 80%" },
      y: 50, opacity: 0, scale: 0.9, duration: 0.7, stagger: 0.12, ease: "back.out(1.5)",
    });
    document.querySelectorAll<HTMLElement>(".instr-card").forEach(card => {
      card.addEventListener("mouseenter", () =>
        gsap.to(card, { y: -10, boxShadow: "0 20px 60px rgba(46,139,87,0.2)", duration: 0.35, ease: "power2.out" })
      );
      card.addEventListener("mouseleave", () =>
        gsap.to(card, { y: 0, boxShadow: "none", duration: 0.5, ease: "elastic.out(1, 0.5)" })
      );
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="px-8 md:px-16 py-28 relative" style={{ background: "var(--void)" }}>
      <div className="section-divider mb-20" />
      <div className="instr-heading text-center mb-16">
        <span className="block text-xs font-bold tracking-[4px] uppercase mb-4" style={{ color: "var(--gold)" }}>
          Instructors
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
          Learn From <span className="text-gradient-gold">Industry Leaders</span>
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          Verified professionals from India's top tech companies, teaching what actually works.
        </p>
      </div>

      <div className="instr-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {instructors.map(i => (
          <div
            key={i.name}
            className="instr-card glass rounded-3xl p-7 text-center border hoverable relative overflow-hidden group"
            style={{ borderColor: "rgba(46,139,87,0.15)" }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: "linear-gradient(90deg, transparent, rgba(46,139,87,0.5), transparent)" }}
            />
            <div
              className={`w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br ${i.grad} flex items-center justify-center text-2xl font-bold text-white`}
              style={{ boxShadow: "0 0 30px rgba(46,139,87,0.25)" }}
            >
              {i.initials}
            </div>
            <div className="text-lg font-bold mb-0.5" style={{ color: "var(--text)" }}>{i.name}</div>
            <div className="text-xs font-semibold mb-0.5" style={{ color: "var(--forest-light)" }}>{i.role}</div>
            <div className="text-xs mb-5" style={{ color: "var(--muted)" }}>{i.company}</div>
            <div className="flex justify-center gap-5 pt-4 border-t" style={{ borderColor: "rgba(46,139,87,0.15)" }}>
              {[["students", i.students], ["courses", String(i.courses)], ["rating", `${i.rating}★`]].map(([label, val]) => (
                <div key={label} className="text-center">
                  <div className="text-base font-bold" style={{ color: "var(--text)" }}>{val}</div>
                  <div className="text-[10px] capitalize" style={{ color: "var(--muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}