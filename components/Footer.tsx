"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = {
  Platform: ["Courses", "Instructors", "Pricing", "Blog"],
  Company: ["About Us", "Careers", "Press", "Contact"],
  Support: ["Help Center", "Privacy Policy", "Terms", "Refund Policy"],
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".footer-col", {
      scrollTrigger: { trigger: ref.current, start: "top 90%" },
      y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power2.out",
    });
  }, { scope: ref });

  return (
    <footer
      ref={ref}
      className="px-8 md:px-16 pt-16 pb-8 border-t"
      style={{ background: "var(--surface-2)", borderColor: "rgba(46,139,87,0.12)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="footer-col">
          <div className="text-2xl font-bold mb-3">
            <span style={{ color: "var(--text)" }}>UY</span>
            <span className="text-gradient-indigo">GW</span>
          </div>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
            India's most advanced online learning platform. Expert instructors. Real results.
          </p>
          <div className="flex gap-2">
            {["𝕏", "in", "▶", "📷"].map(icon => (
              <button
                key={icon}
                className="w-9 h-9 glass rounded-xl flex items-center justify-center text-xs border transition-all duration-200 hoverable"
                style={{ color: "var(--muted)", borderColor: "rgba(46,139,87,0.2)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.borderColor = "rgba(46,139,87,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted)";
                  e.currentTarget.style.borderColor = "rgba(46,139,87,0.2)";
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
        {Object.entries(links).map(([h, ls]) => (
          <div key={h} className="footer-col">
            <h4 className="text-sm font-bold mb-4" style={{ color: "var(--text)" }}>{h}</h4>
            <ul className="flex flex-col gap-2.5">
              {ls.map(l => ( 
  <li key={l}> 
    <a
      href="#" 
      className="text-sm transition-colors duration-200" 
      style={{ color: "var(--muted)" }} 
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--forest-light)")} 
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")} 
    > 
      {l} 
    </a> 
  </li> 
))}
            </ul>
          </div>
        ))}
      </div>
      <div className="section-divider mb-6" />
      <div className="flex flex-wrap justify-between items-center gap-3">
        <p className="text-xs" style={{ color: "var(--muted)" }}>© 2026 UYGW. All rights reserved.</p>
        <p className="text-xs" style={{ color: "var(--muted)" }}>Made with ❤️ in India 🇮🇳</p>
      </div>
    </footer>
  );
}