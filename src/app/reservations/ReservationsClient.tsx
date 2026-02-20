"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { gsap } from "gsap";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  note: string;
}

const TIMES = [
  "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30",
];

const GUESTS = ["1", "2", "3", "4", "5", "6", "7", "8+"];

export default function ReservationsPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".res-left > *",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".form-group",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out", delay: 0.4 }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Micro-interaction: animate the input label
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!prefersReduced) {
      const label = e.target
        .closest(".form-group")
        ?.querySelector(".form-label");
      if (label) {
        gsap.fromTo(
          label,
          { color: "var(--gold-lt)" },
          { color: "var(--gold)", duration: 0.3, ease: "power2.out" }
        );
      }
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReduced && formRef.current) {
      gsap.to(formRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          setSubmitted(true);
          if (successRef.current) {
            gsap.fromTo(
              successRef.current,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
            );
          }
        },
      });
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div ref={pageRef} className="reservation-layout">
      {/* Left — Brand info */}
      <div className="reservation-left">
        <div className="res-left">
          <span
            className="section__label"
            style={{ color: "var(--gold)", opacity: 0 }}
          >
            Бронювання
          </span>
          <h1
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              lineHeight: 1,
              color: "var(--black)",
              marginBottom: "2rem",
              fontWeight: 300,
              opacity: 0,
            }}
          >
            Забронюйте
            <br />
            свій стіл
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#555",
              lineHeight: "1.9",
              maxWidth: "400px",
              marginBottom: "3rem",
              opacity: 0,
            }}
          >
            Ми відкриті середа–неділя з 18:00 до 24:00.
            Для груп від 6 осіб просимо звертатись напряму.
          </p>

          {/* Contact info */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              opacity: 0,
            }}
          >
            {[
              { label: "Телефон", value: "+38 044 123 45 67" },
              { label: "Email", value: "hello@palya.com.ua" },
              { label: "Адреса", value: "вул. Хрещатик, 1, Київ" },
              { label: "Години роботи", value: "Ср–Нд: 18:00–24:00" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: "0.92rem", color: "#333" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — Form */}
      <div className="reservation-right">
        {!submitted ? (
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <h2
              style={{
                fontFamily: "var(--font-serif), serif",
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 300,
                color: "var(--cream)",
                marginBottom: "3rem",
              }}
            >
              Деталі бронювання
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0 2rem",
              }}
            >
              <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                <label className="form-label" htmlFor="name">
                  Ім'я та прізвище
                </label>
                <input
                  className="form-input"
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Олена Коваленко"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="olena@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Телефон
                </label>
                <input
                  className="form-input"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+380"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="date">
                  Дата
                </label>
                <input
                  className="form-input"
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="time">
                  Час
                </label>
                <select
                  className="form-select"
                  id="time"
                  name="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                >
                  <option value="">Оберіть час</option>
                  {TIMES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                <label className="form-label" htmlFor="guests">
                  Кількість гостей
                </label>
                <select
                  className="form-select"
                  id="guests"
                  name="guests"
                  required
                  value={form.guests}
                  onChange={handleChange}
                >
                  <option value="">Оберіть кількість</option>
                  {GUESTS.map((g) => (
                    <option key={g} value={g}>
                      {g} {parseInt(g) === 1 ? "гість" : "гостей"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                <label className="form-label" htmlFor="note">
                  Особливі побажання
                </label>
                <textarea
                  className="form-textarea"
                  id="note"
                  name="note"
                  placeholder="Алергії, особливі дієти, святкові побажання..."
                  value={form.note}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ marginTop: "2rem" }}
            >
              <span>Підтвердити бронювання</span>
              <span>→</span>
            </button>
          </form>
        ) : (
          <div ref={successRef} style={{ opacity: 0 }}>
            <div
              style={{
                width: "60px",
                height: "1px",
                background: "var(--gold)",
                marginBottom: "3rem",
              }}
            />
            <span
              className="section__label"
              style={{ color: "var(--gold)" }}
            >
              Підтверджено
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif), serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--cream)",
                marginBottom: "2rem",
                marginTop: "1rem",
              }}
            >
              Чекаємо
              <br />
              на вас
            </h2>
            <p
              style={{
                color: "var(--grey-lt)",
                lineHeight: "1.9",
                fontSize: "0.95rem",
                maxWidth: "400px",
                marginBottom: "1.5rem",
              }}
            >
              Дякуємо, {form.name.split(" ")[0]}. Ваше бронювання
              прийнято. Підтвердження надійде на{" "}
              <span style={{ color: "var(--gold)" }}>{form.email}</span>.
            </p>
            <p
              style={{
                color: "var(--grey)",
                fontSize: "0.82rem",
                lineHeight: "1.7",
              }}
            >
              {form.date} · {form.time} · {form.guests} гостей
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
