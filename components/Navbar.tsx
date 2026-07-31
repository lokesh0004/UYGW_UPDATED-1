"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const links = ["Courses", "Instructors", "Pricing", "Blog"];

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.set(ref.current, { autoAlpha: 0, y: -60 });
    gsap.to(ref.current, { autoAlpha: 1, y: 0, duration: 1, ease: "power4.out", delay: 0.2 });

    const onScroll = () => {
      if (!ref.current) return;
      if (window.scrollY > 30) {
        ref.current.style.background = "rgba(5,11,31,0.95)";
        ref.current.style.boxShadow = "0 1px 0 rgba(99,102,241,0.2), 0 8px 32px rgba(0,0,0,0.4)";
      } else {
        ref.current.style.background = "rgba(5,11,31,0.6)";
        ref.current.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={ref} className="fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-4 backdrop-blur-2xl border-b border-indigo-500/10 transition-all duration-300" style={{ visibility: "hidden", background: "rgba(5,11,31,0.6)" }}>
      {/* Logo */}
      <div className="font-['Clash_Display'] text-2xl font-bold tracking-tight">
        <span className="text-white">UY</span>
        <span className="text-gradient-indigo">GW</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map(l => (
          <li key={l}>
            <a href="#" className="text-slate-400 text-sm font-medium hover:text-white transition-colors duration-200 relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex gap-3">
        <button className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
          Log In
        </button>
        <button className="relative px-5 py-2 rounded-xl text-sm font-semibold text-white overflow-hidden group"
          style={{ background: "linear-gradient(135deg, #6366F1, #4F46E5)" }}>
          <span className="relative z-10">Start Free →</span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </nav>
  );
}
