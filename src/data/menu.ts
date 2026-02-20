export type MenuCategory = "tasting" | "alacarte" | "wine";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  allergens?: string;
  category: MenuCategory;
}

export interface WineItem {
  id: string;
  name: string;
  region: string;
  vintage: string;
  description: string;
  priceGlass: string;
  priceBottle: string;
  category: "wine";
}

export const tastingMenu: MenuItem[] = [
  {
    id: "t1",
    name: "Тартар із яловичини",
    description:
      "Мармурова яловичина, трюфельне масло, жовток перепілки, кріп",
    price: "480 ₴",
    image:
      "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?w=800&q=80",
    allergens: "Яйця",
    category: "tasting",
  },
  {
    id: "t2",
    name: "Крем-суп із трюфелем",
    description:
      "Лісові гриби, трюфельна олія, пармезан, мікрозелень",
    price: "420 ₴",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    allergens: "Молоко, глютен",
    category: "tasting",
  },
  {
    id: "t3",
    name: "Лосось конфі",
    description:
      "Норвезький лосось, гарбузове пюре, соус із паршавелю, ікра",
    price: "620 ₴",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
    allergens: "Риба",
    category: "tasting",
  },
  {
    id: "t4",
    name: "Качина грудка",
    description:
      "Качина грудка sous-vide, черешневий деглясе, пюре з кореня петрушки",
    price: "740 ₴",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    allergens: "Глютен",
    category: "tasting",
  },
  {
    id: "t5",
    name: "Дегустаційний десерт",
    description:
      "Шоколад Valrhona 75%, сіль Maldon, ванільний крем, малиновий гель",
    price: "360 ₴",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
    allergens: "Молоко, яйця",
    category: "tasting",
  },
];

export const alaCarteMenu: MenuItem[] = [
  {
    id: "a1",
    name: "Карпаччо із лосося",
    description: "Тонкі слайси лосося, каперси, руккола, лимонний дрессінг",
    price: "380 ₴",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    allergens: "Риба",
    category: "alacarte",
  },
  {
    id: "a2",
    name: "Паста з трюфелем",
    description: "Свіжа паста tagliolini, вершковий трюфельний соус, пармезан",
    price: "560 ₴",
    image:
      "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=800&q=80",
    allergens: "Глютен, молоко, яйця",
    category: "alacarte",
  },
  {
    id: "a3",
    name: "Ризото із морепродуктами",
    description: "Арборіо, мідії, креветки, кальмар, шафранний соус",
    price: "680 ₴",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
    allergens: "Молюски, риба",
    category: "alacarte",
  },
  {
    id: "a4",
    name: "Телятина міланезе",
    description: "Відбивна з телятини, лимон, руккола, томати чері, трюфель",
    price: "820 ₴",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&q=80",
    allergens: "Глютен, яйця",
    category: "alacarte",
  },
  {
    id: "a5",
    name: "Крем-брюле",
    description: "Ванільний заварний крем, карамельна скоринка, сезонні ягоди",
    price: "280 ₴",
    image:
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80",
    allergens: "Молоко, яйця",
    category: "alacarte",
  },
  {
    id: "a6",
    name: "Тірамісу авторське",
    description: "Класичний тірамісу з кавою Blend №1, маскарпоне, амаретто",
    price: "320 ₴",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    allergens: "Молоко, яйця, глютен",
    category: "alacarte",
  },
];

export const wineList: WineItem[] = [
  {
    id: "w1",
    name: "Шардоне Бургундія",
    region: "Бургундія, Франція",
    vintage: "2021",
    description:
      "Насичений смак з нотками персику, ванілі та легкою мінеральністю",
    priceGlass: "280 ₴",
    priceBottle: "1 400 ₴",
    category: "wine",
  },
  {
    id: "w2",
    name: "Піно Нуар Орегон",
    region: "Орегон, США",
    vintage: "2020",
    description:
      "Елегантний, шовковистий. Вишня, малина, земля й тонкий дуб",
    priceGlass: "320 ₴",
    priceBottle: "1 700 ₴",
    category: "wine",
  },
  {
    id: "w3",
    name: "Верментіно Сардинія",
    region: "Сардинія, Італія",
    vintage: "2022",
    description:
      "Свіжий та ароматний. Цитрус, білі квіти, мигдаль і морський бриз",
    priceGlass: "240 ₴",
    priceBottle: "1 180 ₴",
    category: "wine",
  },
  {
    id: "w4",
    name: "Мальбек Мендоса",
    region: "Мендоса, Аргентина",
    vintage: "2019",
    description:
      "Щільний, темний фрукт — слива, чорниця. Темний шоколад і тютюн",
    priceGlass: "290 ₴",
    priceBottle: "1 500 ₴",
    category: "wine",
  },
  {
    id: "w5",
    name: "Прозекко Вальдоббіадене",
    region: "Венето, Італія",
    vintage: "2023",
    description:
      "Ігристе, свіже, з нотками зеленого яблука, груші та білих квітів",
    priceGlass: "220 ₴",
    priceBottle: "1 050 ₴",
    category: "wine",
  },
  {
    id: "w6",
    name: "Совіньйон Блан Мальборо",
    region: "Мальборо, Нова Зеландія",
    vintage: "2022",
    description: "Інтенсивний аромат: лайм, маракуя, шавлія, свіжа зелень",
    priceGlass: "260 ₴",
    priceBottle: "1 320 ₴",
    category: "wine",
  },
];
