import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollProgress from "@/components/ScrollProgress";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ПаляВкусна — Преміальний Гастрономічний Ресторан",
  description:
    "ПаляВкусна — місце, де кожна страва є витвором мистецтва. Дегустаційне меню, авторська кухня, незабутній досвід.",
  keywords: "ресторан, гастрономія, дегустаційне меню, преміум, Україна",
  openGraph: {
    title: "ПаляВкусна — Преміальний Гастрономічний Ресторан",
    description: "Емоція смаку. Естетика подачі. Сучасна гастрономія.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${cormorant.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
