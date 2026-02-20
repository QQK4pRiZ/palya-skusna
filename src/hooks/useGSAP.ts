"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  start?: string;
};

/**
 * Attaches a ScrollTrigger fade-up reveal to the returned ref.
 * Works for single elements or containers (children will stagger).
 */
export function useReveal<T extends HTMLElement>(
  selector?: string,
  options: RevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const targets = selector
      ? ref.current.querySelectorAll(selector)
      : [ref.current];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: options.y ?? 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: options.duration ?? 1,
          ease: "power3.out",
          stagger: options.stagger ?? 0.12,
          delay: options.delay ?? 0,
          scrollTrigger: {
            trigger: ref.current,
            start: options.start ?? "top 80%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [selector, options.y, options.duration, options.stagger, options.delay, options.start]);

  return ref;
}

/**
 * Clip-path mask reveal: sweeps in from right.
 */
export function useMaskReveal<T extends HTMLElement>(selector?: string) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const targets = selector
      ? ref.current.querySelectorAll(selector)
      : [ref.current];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power4.inOut",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [selector]);

  return ref;
}

/**
 * Parallax on scroll for image containers.
 */
export function useParallax<T extends HTMLElement>(speed = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * -100,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}
