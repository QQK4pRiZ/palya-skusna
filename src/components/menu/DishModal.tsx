"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { MenuItem } from "@/data/menu";

interface Props {
  dish: MenuItem;
  onClose: () => void;
}

export default function DishModal({ dish, onClose }: Props) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Open animation
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReduced) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.94, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }

    // Close on Escape
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  return (
    <div
      ref={backdropRef}
      className="modal-backdrop"
      onClick={handleBackdropClick}
    >
      <div ref={contentRef} className="modal-content">
        {/* Image */}
        <div className="modal-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={dish.image} alt={dish.name} loading="eager" />
        </div>

        {/* Body */}
        <div className="modal-body">
          <button className="modal-close" onClick={onClose} aria-label="Закрити">
            ✕
          </button>

          <span
            style={{
              fontSize: "0.68rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            {dish.category === "tasting"
              ? "Дегустаційне меню"
              : "À la carte"}
          </span>

          <h3
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              color: "var(--cream)",
              lineHeight: 1.2,
            }}
          >
            {dish.name}
          </h3>

          <p
            style={{
              fontSize: "0.88rem",
              color: "var(--grey-lt)",
              lineHeight: 1.8,
            }}
          >
            {dish.description}
          </p>

          {dish.allergens && (
            <p
              style={{
                fontSize: "0.72rem",
                color: "var(--grey)",
                letterSpacing: "0.05em",
              }}
            >
              Алергени: {dish.allergens}
            </p>
          )}

          <p
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "1.4rem",
              color: "var(--gold)",
              marginTop: "0.5rem",
            }}
          >
            {dish.price}
          </p>
        </div>
      </div>
    </div>
  );
}
