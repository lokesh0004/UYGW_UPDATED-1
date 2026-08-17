"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const [studentsWatching, setStudentsWatching] = useState(250);

  useEffect(() => {
    const randomStudents =
      Math.floor(Math.random() * (650 - 250 + 1)) + 250;

    setStudentsWatching(randomStudents);
  }, []);

  useGSAP(() => {
    gsap.to(".hero-video", {
      scale: 1.12,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    gsap.to(".hero-overlay", {
      opacity: 0.9,
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    const tl = gsap.timeline({
      delay: 0.3,
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(
      ".hero-eyebrow",
      { clipPath: "inset(0 100% 0 0)", opacity: 1 },
      { clipPath: "inset(0 0% 0 0)", duration: 0.9 }
    )
      .from(".hero-line", { y: 90, opacity: 0, rotateX: -15, duration: 1, stagger: 0.14, transformOrigin: "top center" }, "-=0.4")
      .from(".hero-sub", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(".hero-btn", { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.4")
      .from(".hero-stat", { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3")
      .from(".hero-scroll-hint", { opacity: 0, y: 10, duration: 0.6 }, "-=0.2");

    gsap.to(".hero-scroll-hint", {
      y: 8, duration: 1.2, repeat: -1, yoyo: true, ease: "sine.inOut",
    });

    document.querySelectorAll<HTMLElement>(".btn-magnetic").forEach((btn) => {
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

    document.querySelectorAll<HTMLElement>(".stat-num").forEach((el) => {
      const end = parseFloat(el.dataset.end || "0");
      const suffix = el.dataset.suffix || "";
      const dec = parseInt(el.dataset.dec || "0");

      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: () => {
          const obj = { v: 0 };
          gsap.fromTo(obj, { v: 0 }, {
            v: end, duration: 2.5, ease: "power2.out",
            onUpdate: () => {
              const val = dec ? obj.v.toFixed(dec) : Math.round(obj.v);
              el.textContent = val + suffix;
            },
          });
        },
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
      <div
        className="hero-overlay absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,61,46,0.82) 0%, rgba(15,61,46,0.55) 50%, rgba(15,61,46,0.75) 100%)",
        }}
      />

      {/* Bottom fade to site bg */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--void))" }}
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, transparent, rgba(15,61,46,0.6))" }}
      />

      {/* Forest mesh tint */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(46,139,87,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid on top of video */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(rgba(212,175,55,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 60% 80% at 20% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* ── CONTENT — on top of video ── */}
      <div className="relative z-20 w-full min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-28 pb-20">

        <div className="max-w-3xl">

          {/* Eyebrow badge */}
          <div
            className="hero-eyebrow inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border"
            style={{
              background: "rgba(212,175,55,0.15)",
              borderColor: "rgba(212,175,55,0.35)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--gold)", boxShadow: "0 0 8px #D4AF37" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#F0DFA0" }}>
              India's #1 Ed-Tech Platform
            </span>
          </div>

          {/* Heading lines */}
          <div className="overflow-hidden mb-1">
            <div className="hero-line text-5xl md:text-6xl lg:text-[80px] font-bold text-white leading-none tracking-tight">
              Beyond Grades
            </div>
          </div>

          <div className="overflow-hidden mb-1">
            <div className="hero-line text-5xl md:text-6xl lg:text-[80px] font-bold leading-none tracking-tight text-gradient-gold">
              The UYGW
            </div>
          </div>

          <div className="overflow-hidden mb-8">
            <div className="hero-line text-5xl md:text-6xl lg:text-[80px] font-bold text-white leading-none tracking-tight">
              Learning Journey.
            </div>
          </div>

          {/* Sub */}
          <p
            className="hero-sub text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            style={{ color: "#E8EFE9", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            MORE THAN A LEARNING CENTRE. A PLACE WHERE CONFIDENCE IS BUILT.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap mb-16">

            <button
              className="hero-btn btn-magnetic relative px-8 py-4 rounded-2xl font-bold text-base overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #2E8B57, #165C44)",
                color: "#FFFFFF",
                boxShadow: "0 8px 32px rgba(46,139,87,0.5)",
              }}
            >
              <span className="relative z-10">Book 1:1 Free Session →</span>
              <div
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
                style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.25), transparent)" }}
              />
            </button>

            <button
              className="hero-btn btn-magnetic px-8 py-4 rounded-2xl font-bold text-base border transition-all duration-300"
              style={{
                color: "#FFFFFF",
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              ▶ Watch Preview
            </button>

          </div>

          {/* Stats row */}
          <div className="flex gap-10 flex-wrap">
            {[
              { end: 1200, suffix: "+", dec: 0, label: "Courses" },
              { end: 50, suffix: "K+", dec: 0, label: "Students" },
              { end: 4.9, suffix: "★", dec: 1, label: "Rating" },
              { end: 98, suffix: "%", dec: 0, label: "Completion" },
            ].map((s) => (
              <div key={s.label} className="hero-stat">
                <div
                  className="stat-num text-3xl md:text-4xl font-bold text-white"
                  data-end={s.end}
                  data-suffix={s.suffix}
                  data-dec={s.dec}
                  style={{ textShadow: "0 0 30px rgba(212,175,55,0.5)" }}
                >
                  {s.end}
                  {s.suffix}
                </div>
                <div className="text-xs mt-0.5 tracking-wide uppercase" style={{ color: "#C9D6CC" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── LIVE INDICATOR ── */}
        <div
          className="absolute bottom-24 right-8 md:right-16 flex items-center gap-3 px-4 py-3 rounded-2xl border"
          style={{
            background: "rgba(15,61,46,0.65)",
            borderColor: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
          <div>
            <div className="text-white text-xs font-bold">LIVE NOW</div>
            <div className="text-[10px]" style={{ color: "#C9D6CC" }}>
              {studentsWatching.toLocaleString()} students watching
            </div>
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div className="hero-scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] tracking-widest uppercase" style={{ color: "#C9D6CC" }}>
            Scroll
          </span>
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, #C9D6CC, transparent)" }} />
        </div>

      </div>
    </section>
  );
}