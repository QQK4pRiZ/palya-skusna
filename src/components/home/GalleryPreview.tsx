"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryPreview } from "@/data/gallery";

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-preview__item",
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-preview",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".gallery-label > *",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-label",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section">
      {/* Header */}
      <div
        className="gallery-label"
        style={{
          maxWidth: "1400px",
          margin: "0 auto 3rem",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <span className="section__label">Галерея</span>
          <h2>Із зали та кухні</h2>
        </div>
        <Link href="/gallery" className="btn-primary">
          <span>Вся галерея</span>
          <span>→</span>
        </Link>
      </div>

      {/* Grid */}
      <div className="gallery-preview" style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {galleryPreview.map((img) => (
          <Link key={img.id} href="/gallery" className="gallery-preview__item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} loading="lazy" />
          </Link>
        ))}
      </div>
    </section>
  );
}
