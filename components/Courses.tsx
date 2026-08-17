"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { courses } from "@/data";

gsap.registerPlugin(ScrollTrigger);

const tabs = ["All", "Web Dev", "AI & ML", "Design", "DevOps", "Data", "Security"];

export default function Courses() {
  const [active, setActive] = useState("All");
  const trackRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".courses-heading", {
      scrollTrigger: { trigger: ".courses-heading", start: "top 85%" },
      y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
    });

    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth - track.parentElement!.clientWidth;

    gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".courses-scroll-container",
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.utils.toArray<HTMLElement>(".course-card").forEach((card, i) => {
      gsap.from(card, {
        y: 30, opacity: 0, duration: 0.5, delay: i * 0.08, ease: "power2.out",
        scrollTrigger: { trigger: ".courses-scroll-container", start: "top 80%", once: true },
      });

      card.addEventListener("mousemove", (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, { rotateY: x * 12, rotateX: -y * 12, transformPerspective: 800, duration: 0.4, ease: "power2.out" });
        gsap.to(card.querySelector(".card-shine"), { opacity: 0.12, x: x * 40, y: y * 40, duration: 0.3 });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
        gsap.to(card.querySelector(".card-shine"), { opacity: 0, duration: 0.3 });
      });
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="relative" style={{ background: "var(--void)" }}>
      {/* Header */}
      <div className="courses-heading px-8 md:px-16 pt-24 pb-12">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <div>
            <span className="block text-xs font-bold tracking-[4px] uppercase mb-3" style={{ color: "var(--forest-light)" }}>
              Courses
            </span>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>
              Top <span className="text-gradient-gold">Picks</span> For You
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {tabs.map(t => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 glass border"
                style={
                  active === t
                    ? {
                        background: "var(--forest-light)",
                        color: "#FFFFFF",
                        borderColor: "var(--forest-light)",
                        boxShadow: "0 0 20px rgba(46,139,87,0.35)",
                      }
                    : {
                        color: "var(--muted)",
                        borderColor: "rgba(46,139,87,0.2)",
                      }
                }
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="section-divider" />
      </div>

      {/* Horizontal scroll area */}
      <div className="courses-scroll-container overflow-hidden" style={{ height: "100vh" }}>
        <div className="h-full flex items-center pl-8 md:pl-16">
          <div ref={trackRef} className="h-scroll-wrapper flex gap-6" style={{ willChange: "transform" }}>
            {courses.map((c) => (
              <div
                key={c.id}
                className="course-card relative flex-shrink-0 w-[320px] glass rounded-3xl overflow-hidden border hoverable"
                style={{ transformStyle: "preserve-3d", borderColor: "rgba(46,139,87,0.15)" }}
              >
                {/* Shine */}
                <div
                  className="card-shine absolute inset-0 z-10 pointer-events-none opacity-0 rounded-3xl"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, transparent 60%)" }}
                />

                {/* Thumb */}
                <div className={`h-48 bg-gradient-to-br ${c.grad} flex items-center justify-center relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                  />
                  {c.badge && (
                    <span className={`absolute top-3 left-3 ${c.badgeCls} text-white text-[10px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider`}>
                      {c.badge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: c.color }}>
                      {c.initials}
                    </div>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{c.instructor}</span>
                    <span
                      className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                      style={{ color: "var(--forest-light)", background: "rgba(46,139,87,0.08)", borderColor: "rgba(46,139,87,0.2)" }}
                    >
                      {c.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold leading-snug mb-3" style={{ color: "var(--text)" }}>{c.title}</h3>

                  <div className="flex gap-3 text-xs mb-4" style={{ color: "var(--muted)" }}>
                    <span>{c.hours}h</span>
                    <span>{c.lessons}</span>
                  </div>

                  <div className="flex items-center justify-between pt-3.5 border-t" style={{ borderColor: "rgba(46,139,87,0.15)" }}>
                    <div className="flex items-center gap-1">
                      <span className="text-sm" style={{ color: "var(--gold)" }}>{"★".repeat(c.rating)}</span>
                      <span className="text-xs" style={{ color: "var(--muted)" }}>({c.reviews.toLocaleString()})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card at end */}
            <div
              className="flex-shrink-0 w-[280px] rounded-3xl border flex flex-col items-center justify-center p-10 text-center hoverable"
              style={{
                background: "linear-gradient(135deg, rgba(46,139,87,0.1), rgba(46,139,87,0.03))",
                borderColor: "rgba(46,139,87,0.2)",
              }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>1,200+ More Courses</h3>
              <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>Explore the full catalog and find your perfect match.</p>
              <button
                className="px-6 py-3 rounded-xl font-semibold text-sm"
                style={{
                  background: "linear-gradient(135deg, var(--forest-light), var(--forest))",
                  color: "#FFFFFF",
                  boxShadow: "0 4px 20px rgba(46,139,87,0.35)",
                }}
              >
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}