
import { MOCK_BANNERS, MOCK_CATEGORIES } from "../data/mock";
import { HeroCarousel } from "../components/HeroCarousel";
import { MovieSection } from "../components/MovieSection";

export function Home() {
  return (
    <div className="bg-[#141414] pb-20">
      <HeroCarousel banners={MOCK_BANNERS} />
      <div className="pt-4 -mt-16 relative z-10">
        {MOCK_CATEGORIES.map((category) => (
          <MovieSection key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
