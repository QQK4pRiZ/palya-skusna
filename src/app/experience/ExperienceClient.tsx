"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceSteps } from "@/data/experience";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ExperiencePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Hero text
      gsap.fromTo(
        ".exp-page-hero > *",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );

      // Each section
      document.querySelectorAll(".exp-step").forEach((section, i) => {
        const img = section.querySelector(".experience-img img");
        const text = section.querySelectorAll(".experience-text > *");
        const num = section.querySelector(".experience-number");

        gsap.fromTo(
          num,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          }
        );

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15, clipPath: "inset(0 0 100% 0)" },
            {
              scale: 1,
              clipPath: "inset(0 0 0% 0)",
              duration: 1.3,
              ease: "power4.inOut",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                once: true,
              },
            }
          );
        }

        gsap.fromTo(
          text,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              once: true,
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "flex-end",
          padding: "0 4rem 6rem",
          background: "var(--black)",
          paddingTop: "8rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=75"
          alt=""
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, var(--black) 0%, transparent 60%)",
          }}
        />
        <div className="exp-page-hero" style={{ position: "relative", zIndex: 1 }}>
          <span className="section__label" style={{ opacity: 0 }}>
            Наш досвід
          </span>
          <h1
            style={{
              color: "var(--cream)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 0.95,
              opacity: 0,
            }}
          >
            Гастрономічна
            <br />
            подорож
          </h1>
        </div>
      </div>

      {/* Steps */}
      {experienceSteps.map((step, i) => (
        <div
          key={step.id}
          className="exp-step experience-section"
          style={{
            flexDirection:
              step.imageSide === "right" ? "row" : "row-reverse",
            background: i % 2 === 0 ? "var(--black)" : "#111",
          }}
        >
          {/* Text */}
          <div className="experience-text">
            <span className="experience-number">{step.number}</span>
            <span
              className="section__label"
              style={{ marginBottom: "1rem" }}
            >
              {step.label}
            </span>
            <h2
              style={{
                color: "var(--cream)",
                marginBottom: "2rem",
                fontWeight: 300,
              }}
            >
              {step.title}
            </h2>
            <p
              style={{
                color: "var(--grey-lt)",
                lineHeight: "1.9",
                fontSize: "1rem",
                maxWidth: "480px",
              }}
            >
              {step.body}
            </p>
          </div>

          {/* Image */}
          <div className="experience-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={step.image}
              alt={step.imageAlt}
              loading="lazy"
            />
          </div>
        </div>
      ))}

      {/* CTA */}
      <div
        style={{
          background: "var(--cream)",
          textAlign: "center",
          padding: "10rem 2rem",
          color: "var(--black)",
        }}
      >
        <span className="section__label" style={{ color: "var(--gold)" }}>
          Готові?
        </span>
        <h2 style={{ color: "var(--black)", marginBottom: "2.5rem" }}>
          Забронюйте свій стіл
        </h2>
        <Link
          href="/reservations"
          className="btn-primary"
          style={{ borderColor: "var(--black)", color: "var(--black)" }}
        >
          <span>Бронювання</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
