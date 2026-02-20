"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { galleryImages, type GalleryImage } from "@/data/gallery";

gsap.registerPlugin(ScrollTrigger);

type Category = "всі" | "страви" | "інтер'єр" | "команда" | "деталі";

const CATEGORIES: Category[] = ["всі", "страви", "інтер'єр", "деталі"];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("всі");
  const [lightbox, setLightbox] = useState<{
    images: GalleryImage[];
    index: number;
  } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === "всі"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  const animateGrid = () => {
    if (!gridRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.fromTo(
      gridRef.current.querySelectorAll(".gallery-item"),
      { opacity: 0, scale: 0.95, clipPath: "inset(0 0 100% 0)" },
      {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 0.9,
        stagger: 0.06,
        ease: "power3.out",
      }
    );
  };

  useEffect(() => {
    animateGrid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gallery-page-hero > *",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((lb) =>
          lb
            ? { ...lb, index: (lb.index + 1) % lb.images.length }
            : null
        );
      if (e.key === "ArrowLeft")
        setLightbox((lb) =>
          lb
            ? {
                ...lb,
                index: (lb.index - 1 + lb.images.length) % lb.images.length,
              }
            : null
        );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <>
      {/* Page Hero */}
      <div
        style={{
          minHeight: "50vh",
          paddingTop: "8rem",
          padding: "8rem 4rem 5rem",
          background: "var(--black)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=60"
          alt=""
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.1,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, var(--black) 0%, transparent 60%)",
          }}
        />
        <div className="gallery-page-hero" style={{ position: "relative", zIndex: 1 }}>
          <span className="section__label" style={{ opacity: 0 }}>
            Фотографії
          </span>
          <h1
            style={{
              color: "var(--cream)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 0.95,
              opacity: 0,
            }}
          >
            Галерея
          </h1>
        </div>
      </div>

      {/* Filter tabs */}
      <div
        style={{
          padding: "3rem 4rem",
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          borderBottom: "1px solid rgba(184,150,110,0.15)",
        }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              background: "none",
              border: "none",
              fontSize: "0.72rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: active === cat ? "var(--cream)" : "var(--grey)",
              borderBottom: active === cat ? "1px solid var(--gold)" : "1px solid transparent",
              paddingBottom: "0.5rem",
              cursor: "none",
              transition: "color 0.3s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        style={{ padding: "3px" }}
      >
        <div ref={gridRef} className="gallery-grid" style={{ padding: "0 3px" }}>
          {filtered.map((img, i) => (
            <div
              key={img.id}
              className="gallery-item"
              onClick={() => setLightbox({ images: filtered, index: i })}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={() => setLightbox(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.images[lightbox.index].src}
            alt={lightbox.images[lightbox.index].alt}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Закрити"
          >
            ✕
          </button>

          <button
            className="lightbox__prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lb) =>
                lb
                  ? {
                      ...lb,
                      index:
                        (lb.index - 1 + lb.images.length) % lb.images.length,
                    }
                  : null
              );
            }}
            aria-label="Попереднє"
          >
            ←
          </button>

          <button
            className="lightbox__next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lb) =>
                lb
                  ? { ...lb, index: (lb.index + 1) % lb.images.length }
                  : null
              );
            }}
            aria-label="Наступне"
          >
            →
          </button>

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              color: "var(--grey-lt)",
            }}
          >
            {lightbox.index + 1} / {lightbox.images.length}
          </div>
        </div>
      )}
    </>
  );
}
