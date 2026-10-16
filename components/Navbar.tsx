"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

const links = [
  { label: "Courses", href: "/#courses" },
  { label: "Instructors", href: "/#instructors" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About us", href: "/#about" },
];

export default function Navbar() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.set(ref.current, { autoAlpha: 0, y: -60 });
    gsap.to(ref.current, { autoAlpha: 1, y: 0, duration: 1, ease: "power4.out", delay: 0.2 });

    const onScroll = () => {
      if (!ref.current) return;
      if (window.scrollY > 30) {
        ref.current.style.background = "rgba(202, 213, 210, 0.95)";
        ref.current.style.boxShadow = "0 1px 0 rgba(183, 192, 187, 0.25), 0 8px 32px rgba(192, 183, 183, 0.25)";
      } else {
        ref.current.style.background = "rgba(191, 205, 201, 0.55)";
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
      style={{ visibility: "hidden", background: "rgba(188, 191, 190, 0.55)", borderColor: "rgba(206, 203, 195, 0.15)" }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="/Logo.png"
          alt="UYGW Education"
          width={160}
          height={48}
          priority
          className="h-10 md:h-12 w-auto"
        />
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-sm font-medium transition-colors duration-200 relative group"
              style={{ color: "#000000" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C9D6CC")}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: "var(--gold)" }}
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="flex gap-3">
        <button
          className="px-5 py-2 text-sm font-medium transition-colors duration-200"
          style={{ color: "#C9D6CC" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#9a8989")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#256534")}
        >
          Log In
        </button>
        <Link
          href="/#enquiry"
          className="relative px-5 py-2 rounded-xl text-sm font-semibold text-white overflow-hidden group"
          style={{ background: "linear-gradient(135deg, #155230, #608175)" }}
        >
          <span className="relative z-10">Contact Us</span>
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        </Link>
      </div>
    </nav>
  );
}