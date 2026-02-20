import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Brand */}
      <div>
        <span className="footer__logo">ПаляВкусна</span>
        <p className="footer__tagline">
          Сучасна гастрономія. Емоція смаку.
          <br />
          Естетика кожної подачі.
        </p>
      </div>

      {/* Navigation */}
      <div>
        <span className="footer__heading">Навігація</span>
        <ul className="footer__links">
          <li><Link href="/">Головна</Link></li>
          <li><Link href="/menu">Меню</Link></li>
          <li><Link href="/experience">Наш досвід</Link></li>
          <li><Link href="/gallery">Галерея</Link></li>
          <li><Link href="/reservations">Бронювання</Link></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <span className="footer__heading">Контакти</span>
        <ul className="footer__links">
          <li><a href="tel:+380441234567">+38 044 123 45 67</a></li>
          <li>
            <a href="mailto:hello@palya.com.ua">hello@palya.com.ua</a>
          </li>
          <li>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
            >
              вул. Хрещатик, 1, Київ
            </a>
          </li>
          <li style={{ marginTop: "1rem", fontSize: "0.78rem", color: "var(--grey)", letterSpacing: "0.05em" }}>
            Ср–Нд: 18:00–24:00
          </li>
        </ul>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} ПаляВкусна. Всі права захищені.
        </p>
        <p className="footer__copy" style={{ color: "var(--gold)" }}>
          Досвід смаку починається тут
        </p>
      </div>
    </footer>
  );
}
