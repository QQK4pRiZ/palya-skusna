"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "7", label: "Актів у дегустаційному меню" },
  { value: "4", label: "Сезонних оновлення на рік" },
  { value: "12", label: "Партнерів-фермерів" },
];

export default function ExperienceTeaser() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exp-teaser__text > *",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-teaser__text",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".exp-stat",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-stats",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "12rem 4rem",
        background: "var(--cream)",
        color: "var(--black)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background number */}
      <span
        aria-hidden
        style={{
          fontFamily: "var(--font-serif), serif",
          fontSize: "clamp(12rem, 30vw, 28rem)",
          color: "rgba(10,10,10,0.04)",
          position: "absolute",
          right: "-2rem",
          top: "50%",
          transform: "translateY(-50%)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        П
      </span>

      <div
        className="exp-teaser__text"
        style={{ maxWidth: "700px", position: "relative" }}
      >
        <span className="section__label" style={{ color: "var(--gold)" }}>
          Наш досвід
        </span>
        <h2 style={{ marginBottom: "2rem", color: "var(--black)" }}>
          Більше ніж
          <br />
          вечеря
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "#555",
            lineHeight: "1.9",
            marginBottom: "3rem",
            maxWidth: "500px",
          }}
        >
          Кожен стіл у ПаляВкусна — це запрошення в гастрономічну
          подорож. Від першого аперитиву до фінального десерту —
          усе заздалегідь продумано, щоб ви просто дозволили собі
          бути тут.
        </p>
        <Link
          href="/experience"
          className="btn-primary"
          style={{ borderColor: "var(--black)", color: "var(--black)" }}
        >
          <span>Наш досвід</span>
          <span>→</span>
        </Link>
      </div>

      {/* Stats */}
      <div
        className="exp-stats"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          maxWidth: "700px",
          marginTop: "6rem",
          position: "relative",
        }}
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="exp-stat">
            <span
              style={{
                fontFamily: "var(--font-serif), serif",
                fontSize: "clamp(3rem, 6vw, 5rem)",
                color: "var(--gold)",
                display: "block",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {stat.value}
            </span>
            <p
              style={{
                fontSize: "0.78rem",
                color: "#666",
                lineHeight: "1.5",
                letterSpacing: "0.05em",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
