"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NAV_LINKS = [
  { href: "/",             label: "Головна" },
  { href: "/menu",         label: "Меню" },
  { href: "/experience",   label: "Наш досвід" },
  { href: "/gallery",      label: "Галерея" },
  { href: "/reservations", label: "Бронювання" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Intro animation
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 2.2 }
    );
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav ref={navRef} className="navbar" style={{ opacity: 0 }}>
        <Link href="/" className="navbar__logo">
          ПаляВкусна
        </Link>

        <ul className="navbar__links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? "active" : ""}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="navbar__burger"
          aria-label="Відкрити меню"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            style={{
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span
            style={{
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile fullscreen menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(({ href, label }, i) => (
          <Link
            key={href}
            href={href}
            style={{ transitionDelay: menuOpen ? `${i * 0.07}s` : "0s" }}
          >
            {label}
          </Link>
        ))}
      </div>
    </>
  );
}
