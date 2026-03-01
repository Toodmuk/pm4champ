
import { Category } from "../data/mock";
import { MovieCard } from "./MovieCard";
import { ArrowRight } from "lucide-react";

interface MovieSectionProps {
  category: Category;
}

export function MovieSection({ category }: MovieSectionProps) {
  const variant = category.variant || "poster";
  const isTop10 = variant === "top10";
  const isWide = variant === "wide";

  const getItemWidth = () => {
    if (isTop10) return "w-[160px] md:w-[200px]";
    if (isWide) return "w-[260px] md:w-[340px]";
    if (variant === "thumbnail") return "w-[240px] md:w-[320px]";
    return "w-[140px] md:w-[180px]";
  };

  return (
    <section className="py-3 pl-4 md:pl-8">
      <div className="flex items-center justify-between pr-4 mb-3">
        <h2 className="text-lg md:text-xl font-bold text-white tracking-wide">{category.title}</h2>
        <a href="#" className="text-gray-400 hover:text-[#F4BD39] text-xs font-semibold uppercase flex items-center gap-1 transition-colors">
          More <ArrowRight size={14} />
        </a>
      </div>
      <div className="overflow-x-auto pb-4 -ml-4 pl-4 flex gap-3 scrollbar-hide snap-x snap-mandatory">
        {category.items.map((movie, index) => (
          <div key={`${movie.id}-${index}`} className={`snap-start shrink-0 ${getItemWidth()}`}>
            <MovieCard
              movie={movie}
              variant={variant as any}
              rank={isTop10 ? index + 1 : undefined}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
