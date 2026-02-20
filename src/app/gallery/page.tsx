import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Галерея — ПаляВкусна",
  description:
    "Фотогалерея ПаляВкусна. Страви, інтер'єр та деталі від шефа.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
