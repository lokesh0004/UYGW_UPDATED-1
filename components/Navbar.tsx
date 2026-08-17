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
        ref.current.style.background = "rgba(15,61,46,0.95)";
        ref.current.style.boxShadow = "0 1px 0 rgba(46,139,87,0.25), 0 8px 32px rgba(0,0,0,0.25)";
      } else {
        ref.current.style.background = "rgba(15,61,46,0.55)";
        ref.current.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={ref}
      className="fixed top-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-4 backdrop-blur-2xl border-b transition-all duration-300"
      style={{ visibility: "hidden", background: "rgba(15,61,46,0.55)", borderColor: "rgba(212,175,55,0.15)" }}
    >
      {/* Logo */}
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-white">UYGW</span>
        <span style={{ color: "var(--gold)" }}>Education</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
  <li key={l}>
    <a
      href="#"
      className="text-sm font-medium transition-colors duration-200 relative group"
      style={{ color: "#C9D6CC" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#C9D6CC")}
    >
      {l}
      <span
        className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
        style={{ background: "var(--gold)" }}
      />
    </a>
  </li>
))}
      </ul>

      {/* CTA */}
      <div className="flex gap-3">
        <button
          className="px-5 py-2 text-sm font-medium transition-colors duration-200"
          style={{ color: "#C9D6CC" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#C9D6CC")}
        >
          Log In
        </button>
        <button
          className="relative px-5 py-2 rounded-xl text-sm font-semibold text-white overflow-hidden group"
          style={{ background: "linear-gradient(135deg, #2E8B57, #165C44)" }}
        >
          <span className="relative z-10">Contact Us</span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </button>
      </div>
    </nav>
  );
}