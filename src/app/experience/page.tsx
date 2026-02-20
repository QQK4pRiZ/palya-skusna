import type { Metadata } from "next";
import ExperienceClient from "./ExperienceClient";

export const metadata: Metadata = {
  title: "Наш досвід — ПаляВкусна",
  description:
    "Гастрономічна подорож ПаляВкусна. Від ідеї до тарілки — наша філософія смаку та краси.",
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
