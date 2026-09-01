"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Cursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true); // default true so it doesn't flash on mobile

  useEffect(() => {
    const checkTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    setIsTouchDevice(checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return; // mobile/touch devices ke liye kuch bhi attach mat karo

    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: "power2.out" });
      gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.35, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const hoverEls = document.querySelectorAll("a, button, .hoverable");
    const enterHandlers: (() => void)[] = [];
    const leaveHandlers: (() => void)[] = [];

    hoverEls.forEach((el) => {
      const onEnter = () => {
        gsap.to(ring, { scale: 1.8, borderColor: "#D4AF37", duration: 0.3 });
        gsap.to(dot, { scale: 0, duration: 0.2 });
      };
      const onLeave = () => {
        gsap.to(ring, { scale: 1, borderColor: "rgba(46,139,87,0.4)", duration: 0.3 });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      enterHandlers.push(onEnter);
      leaveHandlers.push(onLeave);
    });

    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      hoverEls.forEach((el, i) => {
        el.removeEventListener("mouseenter", enterHandlers[i]);
        el.removeEventListener("mouseleave", leaveHandlers[i]);
      });
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null; // mobile pe render hi mat karo

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
    </>
  );
}