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
    <footer ref={ref} className="px-8 md:px-16 pt-16 pb-8 border-t border-indigo-500/10" style={{ background: "#030711" }}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="footer-col">
          <div className="font-['Clash_Display'] text-2xl font-bold mb-3">
            <span className="text-white">Code</span><span className="text-gradient-indigo">Hub</span>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">India's most advanced online learning platform. Expert instructors. Real results.</p>
          <div className="flex gap-2">
            {["𝕏", "in", "▶", "📷"].map(icon => (
              <button key={icon} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-xs text-slate-400 hover:text-white hover:border-indigo-500/50 border border-slate-700/50 transition-all duration-200 hoverable">
                {icon}
              </button>
            ))}
          </div>
        </div>
        {Object.entries(links).map(([h, ls]) => (
          <div key={h} className="footer-col">
            <h4 className="font-['Clash_Display'] text-sm font-bold text-white mb-4">{h}</h4>
            <ul className="flex flex-col gap-2.5">
              {ls.map(l => (
                <li key={l}><a href="#" className="text-slate-500 text-sm hover:text-indigo-400 transition-colors duration-200">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="section-divider mb-6" />
      <div className="flex flex-wrap justify-between items-center gap-3">
        <p className="text-slate-600 text-xs">© 2025 CodeHub. All rights reserved.</p>
        <p className="text-slate-600 text-xs">Made with ❤️ in India 🇮🇳</p>
      </div>
    </footer>
  );
}
