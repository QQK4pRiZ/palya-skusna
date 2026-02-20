"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Image scale reveal
      gsap.fromTo(
        ".story-image img",
        { scale: 1.15 },
        {
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-image",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Text stagger
      gsap.fromTo(
        ".story-text > *",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-text",
            start: "top 78%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      <div className="story-grid">
        {/* Image */}
        <div className="story-image">
          <Image
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1000&q=85"
            alt="Інтер'єр ПаляВкусна"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        {/* Text */}
        <div className="story-text" style={{ maxWidth: "520px" }}>
          <span className="section__label">Наша Філософія</span>
          <h2 style={{ marginBottom: "2rem" }}>
            Гастрономія
            <br />як мистецтво
          </h2>
          <p
            style={{
              color: "var(--grey-lt)",
              lineHeight: "1.8",
              marginBottom: "1.5rem",
              fontSize: "1rem",
            }}
          >
            ПаляВкусна — це місце, де страва перестає бути їжею і стає
            переживанням. Ми не просто готуємо — ми конструюємо
            гастрономічні образи з локальних сезонних продуктів.
          </p>
          <p
            style={{
              color: "var(--grey)",
              lineHeight: "1.8",
              marginBottom: "3rem",
              fontSize: "0.92rem",
            }}
          >
            Натхнений сучасними тенденціями Скандинавії та традиціями
            Середземномор'я, шеф-кухар Андрій Величко щосезону переосмислює
            класику через призму українського терруару.
          </p>
          <Link href="/experience" className="btn-primary">
            <span>Дізнатися більше</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
