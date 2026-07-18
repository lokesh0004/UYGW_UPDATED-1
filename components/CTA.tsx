"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: "top 75%" } });
    tl.from(".cta-box", { scale: 0.9, opacity: 0, duration: 1, ease: "power3.out" })
      .from(".cta-line", { y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" }, "-=0.6")
      .from(".cta-btn", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.4");

    document.querySelectorAll<HTMLElement>(".cta-btn").forEach(btn => {
      btn.addEventListener("mousemove", (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
      });
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="px-8 md:px-16 py-28 relative overflow-hidden" style={{ background: "#050B1F" }}>
      <div className="section-divider mb-20" />
      <div className="cta-box relative max-w-4xl mx-auto rounded-3xl p-16 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(79,70,229,0.08) 50%, rgba(0,212,255,0.05) 100%)",
          border: "1px solid rgba(99,102,241,0.2)",
          boxShadow: "0 0 100px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none rounded-3xl"
          style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative z-10">
          <span className="cta-line inline-block text-xs font-bold tracking-[4px] uppercase text-indigo-400 mb-6">Start Today</span>
          <h2 className="cta-line font-['Clash_Display'] text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Your Dream Career<br />
            <span className="text-gradient-indigo">Starts With One Click.</span>
          </h2>
          <p className="cta-line text-slate-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Join 50,000+ students already transforming their lives with CodeHub. Free to start, no credit card needed.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="cta-btn relative px-10 py-4 rounded-2xl text-white font-bold text-base overflow-hidden group hoverable"
              style={{ background: "linear-gradient(135deg, #6366F1, #4F46E5)", boxShadow: "0 8px 40px rgba(99,102,241,0.5)" }}>
              <span className="relative z-10">Get Started Free →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-indigo-600/0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <button className="cta-btn px-10 py-4 rounded-2xl text-slate-300 font-bold text-base border border-slate-700 hover:border-indigo-400 hover:text-white transition-all duration-300 glass hoverable">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
