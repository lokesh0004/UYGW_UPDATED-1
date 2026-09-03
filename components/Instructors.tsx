"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function FounderMessage() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".founder-heading", {
      scrollTrigger: { trigger: ".founder-heading", start: "top 85%" },
      y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
    });
    gsap.from(".founder-photo", {
      scrollTrigger: { trigger: ".founder-card", start: "top 80%" },
      x: -50, opacity: 0, duration: 0.9, ease: "power3.out",
    });
    gsap.from(".founder-text > *", {
      scrollTrigger: { trigger: ".founder-card", start: "top 80%" },
      y: 30, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="px-8 md:px-16 py-28 relative" style={{ background: "var(--void)" }}>
      <div className="section-divider mb-20" />

      <div className="founder-heading text-center mb-16">
        <span className="block text-xs font-bold tracking-[4px] uppercase mb-4" style={{ color: "var(--gold)" }}>
          Founder's Message
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
          Why I Call It <span className="text-gradient-gold">Coaching</span>
        </h2>
      </div>

      <div
        className="founder-card glass rounded-3xl border overflow-hidden max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[320px_1fr]"
        style={{ borderColor: "rgba(46,139,87,0.15)" }}
      >
        {/* Photo */}
        <div className="founder-photo relative h-72 md:h-auto">
          <Image
            src="/founder.jpg"
            alt="Renu, Founder of UYGW"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 40%, rgba(15,61,46,0.6) 100%)" }}
          />
        </div>

        {/* Text */}
        <div className="founder-text p-8 md:p-12 flex flex-col justify-center relative">
          <span
            className="absolute top-6 left-8 md:left-10 text-6xl font-bold select-none"
            style={{ color: "var(--gold)", opacity: 0.25, fontFamily: "'Playfair Display', serif" }}
          >
            "
          </span>

          <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "var(--text)" }}>
            When I started UYGW, I didn't want to create another place where students
            simply came in, completed some worksheets and went home. I wanted to help
            students understand how to learn.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            Because sometimes the difference between a struggling student and a confident
            student isn't intelligence. It's having someone recognise what is holding them
            back and show them how to overcome it.
          </p>

          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
            That's why UYGW focuses on <span style={{ color: "var(--gold)", fontWeight: 600 }}>creating confident learners.</span>
          </p>

          {/* CTA box */}
          <div
            className="rounded-2xl p-5 mb-8 border"
            style={{
              background: "rgba(46,139,87,0.08)",
              borderColor: "rgba(46,139,87,0.25)",
            }}
          >
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text)" }}>
              We're opening a small number of additional coaching places for September.
              If your child could benefit from personalised support, send me their{" "}
              <span style={{ color: "var(--forest-light)", fontWeight: 600 }}>
                year level + subject
              </span>{" "}
              and I'll be happy to have a conversation.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t" style={{ borderColor: "rgba(46,139,87,0.15)" }}>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ background: "var(--forest-light)", boxShadow: "0 0 20px rgba(46,139,87,0.25)" }}
            >
              R
            </div>
            <div>
              <div className="text-base font-bold" style={{ color: "var(--text)" }}>
                Renu
              </div>
              <div className="text-xs font-semibold" style={{ color: "var(--forest-light)" }}>
                Founder, UYGW
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}