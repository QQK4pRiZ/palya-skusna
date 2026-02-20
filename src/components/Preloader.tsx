"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      if (overlayRef.current) overlayRef.current.style.display = "none";
      return;
    }

    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power3.in",
        delay: 0.8,
      })
      .to(overlayRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.9,
        ease: "power4.inOut",
        onComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.display = "none";
          }
        },
      });
  }, []);

  return (
    <div ref={overlayRef} className="preloader" style={{ clipPath: "inset(0 0 0% 0)" }}>
      <span ref={textRef} className="preloader__logo" style={{ opacity: 0 }}>
        ПаляВкусна
      </span>
    </div>
  );
}
