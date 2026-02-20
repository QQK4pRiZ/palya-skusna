"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { MenuItem, WineItem } from "@/data/menu";
import { tastingMenu, alaCarteMenu, wineList } from "@/data/menu";
import DishModal from "@/components/menu/DishModal";

gsap.registerPlugin(ScrollTrigger);

type Tab = "tasting" | "alacarte" | "wine";

const TABS = [
  { id: "tasting" as Tab, label: "Дегустаційне меню" },
  { id: "alacarte" as Tab, label: "À la carte" },
  { id: "wine" as Tab, label: "Винна карта" },
];

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<Tab>("tasting");
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const animateItems = () => {
    if (!listRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.fromTo(
      listRef.current.querySelectorAll(".menu-item, .wine-item"),
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      }
    );
  };

  useEffect(() => {
    animateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".menu-hero__content > *",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleTabChange = (tab: Tab) => {
    if (tab === activeTab) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (listRef.current && !prefersReduced) {
      gsap.to(listRef.current, {
        opacity: 0,
        y: -16,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveTab(tab);
          gsap.fromTo(listRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
        },
      });
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <>
      {/* Hero */}
      <div
        className="menu-hero"
        style={{
          background: "var(--black)",
          paddingTop: "8rem",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=2000&q=80"
          alt=""
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, var(--black) 0%, transparent 70%)",
          }}
        />
        <div className="menu-hero__content" style={{ position: "relative", zIndex: 1 }}>
          <span
            className="section__label"
            style={{ opacity: 0 }}
          >
            Меню 2025
          </span>
          <h1
            style={{
              color: "var(--cream)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              lineHeight: 0.95,
              opacity: 0,
            }}
          >
            Наше меню
          </h1>
        </div>
      </div>

      {/* Menu content */}
      <div className="section" style={{ paddingTop: "5rem" }}>
        {/* Tabs */}
        <div className="menu-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`menu-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div ref={listRef}>
          {activeTab === "tasting" && (
            <div className="menu-items-list">
              {tastingMenu.map((item) => (
                <div
                  key={item.id}
                  className="menu-item"
                  onClick={() => setSelectedDish(item)}
                >
                  <div>
                    <p className="menu-item__name">{item.name}</p>
                    <p className="menu-item__desc">{item.description}</p>
                    {item.allergens && (
                      <p
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--grey)",
                          marginTop: "0.5rem",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Алергени: {item.allergens}
                      </p>
                    )}
                  </div>
                  <span className="menu-item__price">{item.price}</span>
                </div>
              ))}
              {/* Tasting note */}
              <div
                style={{
                  marginTop: "4rem",
                  padding: "2.5rem",
                  border: "1px solid rgba(184,150,110,0.2)",
                  maxWidth: "900px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif), serif",
                    fontSize: "1.2rem",
                    color: "var(--cream)",
                    lineHeight: "1.7",
                    marginBottom: "1rem",
                  }}
                >
                  Дегустаційне меню на одну особу — 2 400 ₴
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--grey)",
                    lineHeight: "1.7",
                  }}
                >
                  До ціни входять усі курси. Паринг вин — за бажанням. Бронювання
                  обов'язкове. Ми просимо повідомляти про харчові алергії та
                  особливі побажання заздалегідь.
                </p>
              </div>
            </div>
          )}

          {activeTab === "alacarte" && (
            <div className="menu-items-list">
              {alaCarteMenu.map((item) => (
                <div
                  key={item.id}
                  className="menu-item"
                  onClick={() => setSelectedDish(item)}
                >
                  <div>
                    <p className="menu-item__name">{item.name}</p>
                    <p className="menu-item__desc">{item.description}</p>
                    {item.allergens && (
                      <p
                        style={{
                          fontSize: "0.72rem",
                          color: "var(--grey)",
                          marginTop: "0.5rem",
                        }}
                      >
                        Алергени: {item.allergens}
                      </p>
                    )}
                  </div>
                  <span className="menu-item__price">{item.price}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "wine" && (
            <div className="wine-grid">
              {wineList.map((wine: WineItem) => (
                <div key={wine.id} className="wine-item">
                  <p className="wine-item__name">{wine.name}</p>
                  <p className="wine-item__region">
                    {wine.region} · {wine.vintage}
                  </p>
                  <p className="wine-item__desc">{wine.description}</p>
                  <p className="wine-item__price">
                    Бокал {wine.priceGlass} · Пляшка {wine.priceBottle}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dish Modal */}
      {selectedDish && (
        <DishModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      )}
    </>
  );
}
