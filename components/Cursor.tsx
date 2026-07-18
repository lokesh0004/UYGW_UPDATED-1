"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: "power2.out" });
      gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.35, ease: "power2.out" });
    });

    // Scale on hover
    document.querySelectorAll("a, button, .hoverable").forEach(el => {
      el.addEventListener("mouseenter", () => {
        gsap.to(ring, { scale: 1.8, borderColor: "#F59E0B", duration: 0.3 });
        gsap.to(dot, { scale: 0, duration: 0.2 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(ring, { scale: 1, borderColor: "rgba(99,102,241,0.5)", duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      });
    });
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}
