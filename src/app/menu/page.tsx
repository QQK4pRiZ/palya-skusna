import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Меню — ПаляВкусна",
  description:
    "Дегустаційне меню, À la carte та винна карта. Авторська кухня шеф-кухаря ПаляВкусна.",
};

export default function MenuPage() {
  return <MenuClient />;
}
