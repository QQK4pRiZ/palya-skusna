import type { Metadata } from "next";
import ReservationsClient from "./ReservationsClient";

export const metadata: Metadata = {
  title: "Бронювання — ПаляВкусна",
  description:
    "Забронюйте столик у ПаляВкусна онлайн. Ресторан відкритий середа–неділя з 18:00.",
};

export default function ReservationsPage() {
  return <ReservationsClient />;
}
