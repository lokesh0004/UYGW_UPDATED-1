"use client";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);

    const go = () => {
      ScrollTrigger.refresh();
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    };

    const timers = [300, 900, 1800].map((ms) => window.setTimeout(go, ms));

    // user khud scroll kare to auto-scroll band
    const cancel = () => timers.forEach(clearTimeout);
    window.addEventListener("wheel", cancel, { once: true });
    window.addEventListener("touchstart", cancel, { once: true });
    window.addEventListener("keydown", cancel, { once: true });

    return () => {
      cancel();
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", cancel);
    };
  }, []);

  return null;
}