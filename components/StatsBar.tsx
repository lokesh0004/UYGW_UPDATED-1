"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = ["Google","Microsoft","Amazon","Flipkart","Swiggy","Razorpay","Zomato","CRED"];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".stats-bar-inner", {
      scrollTrigger: { trigger: ref.current, start: "top 85%" },
      y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
    });
    const marquee = document.querySelector<HTMLElement>(".marquee-track");
    if (marquee) {
      const w = marquee.scrollWidth / 2;
      gsap.to(marquee, { x: -w, duration: 20, repeat: -1, ease: "none" });
    }
  }, { scope: ref });

  return (
    <div
      ref={ref}
      className="relative z-10 overflow-hidden border-y"
      style={{ background: "var(--surface-2)", borderColor: "rgba(46,139,87,0.15)", backdropFilter: "blur(20px)" }}
    >
      <div className="stats-bar-inner section-divider" />
      <div className="py-5 overflow-hidden">
        <div className="marquee-track flex gap-16 items-center whitespace-nowrap" style={{ width: "max-content" }}>
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="text-sm font-semibold tracking-wider transition-colors duration-200 cursor-default"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
      <div className="section-divider" />
      <p className="text-center text-xs py-2 tracking-widest uppercase" style={{ color: "var(--muted)" }}>
        Trusted by employees at
      </p>
    </div>
  );
}