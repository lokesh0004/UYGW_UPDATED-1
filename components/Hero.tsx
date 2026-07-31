"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    // ── Video parallax on scroll ──
    gsap.to(".hero-video", {
      scale: 1.12,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // ── Overlay darkens slightly on scroll ──
    gsap.to(".hero-overlay", {
      opacity: 0.9,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // ── Content entrance ──
    const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power3.out" } });

    tl.fromTo(".hero-eyebrow",
      { clipPath: "inset(0 100% 0 0)", opacity: 1 },
      { clipPath: "inset(0 0% 0 0)", duration: 0.9 }
    )
    .from(".hero-line", {
      y: 90, opacity: 0, rotateX: -15,
      duration: 1, stagger: 0.14,
      transformOrigin: "top center",
    }, "-=0.4")
    .from(".hero-sub", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
    .from(".hero-btn", { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.4")
    .from(".hero-stat", { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3")
    .from(".hero-scroll-hint", { opacity: 0, y: 10, duration: 0.6 }, "-=0.2");

    // ── Scroll hint bob ──
    gsap.to(".hero-scroll-hint", {
      y: 8, duration: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut",
    });

    // ── Magnetic buttons ──
    document.querySelectorAll<HTMLElement>(".btn-magnetic").forEach(btn => {
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

    // ── Stats counter ──
    document.querySelectorAll<HTMLElement>(".stat-num").forEach(el => {
      const end = parseFloat(el.dataset.end || "0");
      const suffix = el.dataset.suffix || "";
      const dec = parseInt(el.dataset.dec || "0");
      ScrollTrigger.create({
        trigger: el, start: "top 90%", once: true,
        onEnter: () => {
         const obj = { v: 0 };
gsap.fromTo(obj,
  { v: 0 },
  {
    v: end, duration: 2.5, ease: "power2.out",
    onUpdate: () => {
      const val = dec ? obj.v.toFixed(dec) : Math.round(obj.v);
      el.textContent = val + suffix;
    },
  }
);
        }
      });
    });

  }, { scope: ref });

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden">

      {/* ── FULL SCREEN VIDEO BG ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="hero-video absolute inset-0 w-full h-full object-cover"
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* ── OVERLAY LAYERS ── */}
      {/* Dark base overlay */}
      <div className="hero-overlay absolute inset-0 z-10 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(5,11,31,0.82) 0%, rgba(5,11,31,0.55) 50%, rgba(5,11,31,0.75) 100%)" }} />

      {/* Bottom fade to site bg */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050B1F)" }} />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, transparent, rgba(5,11,31,0.6))" }} />

      {/* Indigo mesh tint */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)" }} />

      {/* Dot grid on top of video */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(99,102,241,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 60% 80% at 20% 50%, black 0%, transparent 100%)",
        }} />

      {/* ── CONTENT — on top of video ── */}
      <div className="relative z-20 w-full min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-20">

        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <div className="hero-eyebrow inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-indigo-500/30"
            style={{ background: "rgba(99,102,241,0.12)", backdropFilter: "blur(12px)" }}>
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_#6366F1]" />
            <span className="text-indigo-300 text-xs font-semibold tracking-widest uppercase">India's #1 Ed-Tech Platform</span>
          </div>

          {/* Heading lines */}
          <div className="overflow-hidden mb-1">
            <div className="hero-line font-['Clash_Display'] text-5xl md:text-6xl lg:text-[80px] font-bold text-white leading-none tracking-tight">
              Beyond Grades
            </div>
          </div>
          <div className="overflow-hidden mb-1">
            <div className="hero-line font-['Clash_Display'] text-5xl md:text-6xl lg:text-[80px] font-bold leading-none tracking-tight text-gradient-indigo">
              The UYGW
            </div>
          </div>
          <div className="overflow-hidden mb-8">
            <div className="hero-line font-['Clash_Display'] text-5xl md:text-6xl lg:text-[80px] font-bold text-white leading-none tracking-tight">
              Learning Journey.
            </div>
          </div>

          {/* Sub */}
          <p className="hero-sub text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            MORE THAN A LEARNING CENTRE.A PLACE WHERE CONFIDENCE IS BUILT.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap mb-16">
            <button className="hero-btn btn-magnetic relative px-8 py-4 rounded-2xl text-white font-bold text-base overflow-hidden group"
              style={{ background: "linear-gradient(135deg, #6366F1, #4F46E5)", boxShadow: "0 8px 32px rgba(99,102,241,0.5)" }}>
              <span className="relative z-10">Explore Courses →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <button className="hero-btn btn-magnetic px-8 py-4 rounded-2xl text-white font-bold text-base border border-white/20 hover:border-white/50 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}>
              ▶ Watch Preview
            </button>
          </div>

          {/* Stats row */}
          <div className="flex gap-10 flex-wrap">
            {[
              { end: 1200, suffix: "+", dec: 0, label: "Courses" },
              { end: 50,   suffix: "K+", dec: 0, label: "Students" },
              { end: 4.9,  suffix: "★", dec: 1, label: "Rating" },
              { end: 98,   suffix: "%", dec: 0, label: "Completion" },
            ].map(s => (
              <div key={s.label} className="hero-stat">
                <div
                  className="stat-num font-['Clash_Display'] text-3xl md:text-4xl font-bold text-white"
                  data-end={s.end} data-suffix={s.suffix} data-dec={s.dec}
                  style={{ textShadow: "0 0 30px rgba(99,102,241,0.6)" }}>
                  {s.end}{s.suffix}
                </div>
                <div className="text-slate-400 text-xs mt-0.5 tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Live indicator — bottom right corner */}
        <div className="absolute bottom-24 right-8 md:right-16 flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10"
          style={{ background: "rgba(5,11,31,0.6)", backdropFilter: "blur(16px)" }}>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
          <div>
            <div className="text-white text-xs font-bold">LIVE NOW</div>
            <div className="text-slate-400 text-[10px]">1,247 students watching</div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hero-scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-slate-400 text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
        </div>
      </div>
    </section>
  );
}
