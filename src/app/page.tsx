import Hero from "@/components/home/Hero";
import StorySection from "@/components/home/StorySection";
import SignatureDishes from "@/components/home/SignatureDishes";
import ExperienceTeaser from "@/components/home/ExperienceTeaser";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <SignatureDishes />
      <ExperienceTeaser />
      <GalleryPreview />
    </>
  );
}
