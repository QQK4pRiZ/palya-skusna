export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "страви" | "інтер'єр" | "команда" | "деталі";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
    alt: "Авторська подача страви",
    category: "страви",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=85",
    alt: "Елегантний інтер'єр залу",
    category: "інтер'єр",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85",
    alt: "Ранкова кава",
    category: "деталі",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800&q=85",
    alt: "Десерт від шеф-кухаря",
    category: "страви",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=85",
    alt: "Барна стійка",
    category: "інтер'єр",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=85",
    alt: "Піца на дереві",
    category: "страви",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=85",
    alt: "М'ясне блюдо з гарніром",
    category: "страви",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=85",
    alt: "Кулінарні деталі",
    category: "деталі",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=85",
    alt: "Міні закуски",
    category: "страви",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=85",
    alt: "Вечірній зал",
    category: "інтер'єр",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=85",
    alt: "Яйця Бенедикт",
    category: "страви",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=85",
    alt: "Свіжі інгредієнти",
    category: "деталі",
  },
];

// Used on home page preview (5 images)
export const galleryPreview: GalleryImage[] = galleryImages.slice(0, 5);
