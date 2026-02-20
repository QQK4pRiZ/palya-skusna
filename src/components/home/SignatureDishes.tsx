"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { signatureDishes } from "@/data/signatures";

gsap.registerPlugin(ScrollTrigger);

export default function SignatureDishes() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sig-header > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sig-header",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Cards reveal stagger with clip-path
      gsap.fromTo(
        ".dish-card",
        { opacity: 0, clipPath: "inset(0 100% 0 0)" },
        {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.1,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".dishes-grid",
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
      className="section section--cream"
      style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      {/* Header */}
      <div
        className="sig-header"
        style={{
          maxWidth: "1400px",
          margin: "0 auto 4rem",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <div>
          <span
            className="section__label"
            style={{ color: "var(--gold)" }}
          >
            Фірмові страви
          </span>
          <h2 style={{ color: "var(--black)" }}>
            Обране
            <br />
            шефом
          </h2>
        </div>
        <Link
          href="/menu"
          className="btn-primary"
          style={{ borderColor: "var(--black)", color: "var(--black)" }}
        >
          <span>Переглянути меню</span>
          <span>→</span>
        </Link>
      </div>

      {/* Grid */}
      <div className="dishes-grid">
        {signatureDishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={dish.image}
              alt={dish.name}
              className="dish-card__img"
              loading="lazy"
            />
            <div className="dish-card__overlay" />
            <div className="dish-card__info">
              <span className="dish-card__name">{dish.name}</span>
              <p className="dish-card__desc">{dish.description}</p>
              <span className="dish-card__price">{dish.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
