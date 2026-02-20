"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Still show content, just no animation
      gsap.set(".hero__eyebrow, .hero__title, .hero__subtitle, .hero__cta", {
        opacity: 1,
        y: 0,
      });
      return;
    }

    const tl = gsap.timeline({ delay: 1.8 }); // after preloader

    // Parallax bg reveal
    tl.fromTo(
      bgRef.current,
      { scale: 1.15 },
      { scale: 1, duration: 2, ease: "power3.out" },
      0
    )
      .fromTo(
        ".hero__eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.3
      )
      .fromTo(
        ".hero__title",
        { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.1,
          ease: "power4.out",
        },
        0.5
      )
      .fromTo(
        ".hero__subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.95
      )
      .fromTo(
        ".hero__cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        1.15
      );
  }, []);

  return (
    <section ref={heroRef} className="hero">
      {/* Background image */}
      <div ref={bgRef} className="hero__bg">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=90"
          alt="Гастрономічна сцена ПаляВкусна"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
      </div>
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content">
        <span className="hero__eyebrow" style={{ opacity: 0 }}>
          Київ — Гастрономія — Емоція
        </span>
        <h1 className="hero__title" style={{ opacity: 0 }}>
          Смак,
          <br />
          що лишає
          <br />
          слід
        </h1>
        <p className="hero__subtitle" style={{ opacity: 0 }}>
          Дегустаційний ресторан у серці Києва.
          <br />
          Кожна страва — це акт, а вечеря — театр.
        </p>
        <div className="hero__cta" style={{ opacity: 0 }}>
          <Link href="/reservations" className="btn-primary">
            <span>Забронювати столик</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
