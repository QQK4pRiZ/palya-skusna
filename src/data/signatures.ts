export interface SignatureDish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const signatureDishes: SignatureDish[] = [
  {
    id: "s1",
    name: "Лосось з буряком",
    description: "Ферментований буряк, цитрусова олія, мікрозелень",
    price: "580 ₴",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=85",
  },
  {
    id: "s2",
    name: "Качка sous-vide",
    description: "72 год. томлення, черешня, картопля confite",
    price: "740 ₴",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85",
  },
  {
    id: "s3",
    name: "Шоколадний терруар",
    description: "Валронська 75%, копчена сіль, смажений фундук",
    price: "380 ₴",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=85",
  },
];
