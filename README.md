# ПаляВкусна — Premium Restaurant Website

> Сучасний концептуальний сайт ресторану з акцентом на емоцію, мінімалізм та плавні анімації.
> Натхнення: Alinea (Chicago) — editorial, ultra-minimal, high-end.

---

## 🔗 Live Demo

**[palyavkusna.vercel.app](https://palyavkusna.vercel.app)**

---

## ✨ Особливості

- **Preloader** з анімованим логотипом
- **Custom cursor** — слідує за мишею з lag-ефектом
- **GSAP ScrollTrigger** — кожна секція оживає при скролі
- **Lenis smooth scroll** — шовковий скрол без jerks
- **Hero** з паралакс-оверлеєм та кінематографічною типографікою
- **Меню** — три вкладки (дегустаційне / à la carte / вина) з модальним вікном деталей
- **Наш досвід** — 4 scroll-triggered секції з чергуванням фото/текст
- **Галерея** — masonry-сітка з фільтрами по категоріях і lightbox-переглядачем
- **Бронювання** — повна форма з мікроінтеракціями та станом успіху
- **ScrollProgress bar** у верхній частині сторінки
- **SEO metadata** на кожній сторінці

---

## ⚙️ Технології

| Шар | Технологія |
|---|---|
| Framework | Next.js 15 (App Router) |
| Мова | TypeScript |
| Стилі | Tailwind CSS + CSS Modules |
| Анімації | GSAP 3 + ScrollTrigger |
| Скрол | Lenis |
| Шрифти | Cormorant Garamond + Inter |
| Деплой | Vercel |

---

## 🚀 Запуск локально

```bash
git clone https://github.com/QQK4pRiZ/palya-skusna.git
cd palya-skusna
npm install
npm run dev
```

Відкрий http://localhost:3000

---

## 📁 Структура

```
src/
├── app/
│   ├── page.tsx              # Головна
│   ├── menu/                 # Меню
│   ├── experience/           # Наш досвід
│   ├── gallery/              # Галерея
│   └── reservations/         # Бронювання
├── components/
│   ├── home/                 # Hero, StorySection, SignatureDishes…
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CustomCursor.tsx
│   ├── Preloader.tsx
│   └── SmoothScrollProvider.tsx
└── data/
    ├── menu.ts
    ├── gallery.ts
    ├── experience.ts
    └── signatures.ts
```

---

## 📄 Ліцензія

MIT — вільне використання для портфоліо та комерційних проєктів.
