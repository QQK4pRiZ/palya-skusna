export interface ExperienceStep {
  id: string;
  number: string;
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
}

export const experienceSteps: ExperienceStep[] = [
  {
    id: "e1",
    number: "01",
    label: "Початок",
    title: "Простір, який дихає",
    body: "ПаляВкусна — це не просто ресторан. Це середовище, де кожен елемент — освітлення, тиша, матеріали — налаштований на одне: повне занурення у смак. Ми проектували простір як виставкову залу, де головні експонати — страви.",
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=85",
    imageAlt: "Елегантний зал ресторану",
    imageSide: "right",
  },
  {
    id: "e2",
    number: "02",
    label: "Команда",
    title: "Шеф-кухар з баченням",
    body: "Наш шеф-кухар Андрій Величко пройшов шлях від київських кухонь до мішленівських ресторанів Копенгагена. Повернувшись, він приніс мову мінімалізму й глибини, де кожен компонент несе сенс.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=85",
    imageAlt: "Шеф-кухар за роботою",
    imageSide: "left",
  },
  {
    id: "e3",
    number: "03",
    label: "Продукт",
    title: "Від ферми до тарілки",
    body: "Ми співпрацюємо з фермами Полісся, Карпат і Причорномор'я. Меню змінюється кожного сезону — іноді кожного тижня. Тому те, що ви їсте сьогодні, більше ніколи не буде таким самим.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=85",
    imageAlt: "Свіжі сезонні продукти",
    imageSide: "right",
  },
  {
    id: "e4",
    number: "04",
    label: "Фінал",
    title: "Смак, який залишається",
    body: "Дегустаційне меню ПаляВкусна — це подорож із 7 актів. Кожна страва пов'язана з наступною єдиною драматургією. Ваша задача — лише бути тут.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
    imageAlt: "Фінальна сервіровка",
    imageSide: "left",
  },
];
