
import { Movie } from "../data/mock";
import { Link } from "react-router";
import { Play } from "lucide-react";

interface MovieCardProps {
  movie: Movie;
  variant?: "poster" | "thumbnail" | "top10" | "wide";
  rank?: number;
}

export function MovieCard({ movie, variant = "poster", rank }: MovieCardProps) {
  const isPoster = variant === "poster";
  const isTop10 = variant === "top10";
  const isWide = variant === "wide";

  if (isTop10 && rank !== undefined) {
    return (
      <Link to={`/details/${movie.id}`} className="group relative block">
        <div className="flex items-end">
          <span
            className="text-[100px] md:text-[120px] font-black text-transparent leading-none select-none shrink-0"
            style={{
              WebkitTextStroke: "3px rgba(255,255,255,0.4)",
              marginRight: "-12px",
              zIndex: 1,
            }}
          >
            {rank}
          </span>
          <div className="relative aspect-[2/3] w-[100px] md:w-[130px] overflow-hidden rounded-lg bg-gray-800 shrink-0">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <TagBadge tags={movie.tags} />
          </div>
        </div>
      </Link>
    );
  }

  if (isWide) {
    return (
      <Link to={`/details/${movie.id}`} className="group relative block">
        <div className="aspect-[16/9] overflow-hidden rounded-lg bg-gray-800 relative">
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <div
              className="h-full bg-[#F4BD39]"
              style={{ width: `${Math.random() * 70 + 10}%` }}
            />
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="text-white text-xs font-medium line-clamp-1">{movie.title}</span>
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0">
              <Play size={14} fill="white" className="ml-0.5" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  const aspectRatio = isPoster ? "aspect-[2/3]" : "aspect-[16/9]";

  return (
    <Link to={`/details/${movie.id}`} className="group relative block transition-transform duration-300 hover:scale-105">
      <div className={`overflow-hidden rounded-lg bg-gray-800 ${aspectRatio} relative`}>
        <img
          src={isPoster ? movie.poster : movie.thumbnail}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-[#F4BD39] rounded-full flex items-center justify-center shadow-lg">
            <Play size={20} fill="black" className="ml-1" />
          </div>
        </div>
        {/* Tag Badges */}
        <TagBadge tags={movie.tags} />
      </div>
      <div className="mt-2">
        <h3 className="text-white text-sm font-medium line-clamp-1 group-hover:text-[#F4BD39] transition-colors">{movie.title}</h3>
        <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{movie.genre.join(" • ")}</p>
      </div>
    </Link>
  );
}

function TagBadge({ tags }: { tags: string[] }) {
  const showTag = tags.find(t => ["New Episode", "New Season", "New", "Premium"].includes(t));
  if (!showTag) return null;

  const colors: Record<string, string> = {
    "New Episode": "bg-green-600",
    "New Season": "bg-red-600",
    "New": "bg-[#F4BD39] text-black",
    "Premium": "bg-[#F4BD39] text-black",
  };

  return (
    <div className={`absolute bottom-2 left-2 ${colors[showTag] || "bg-gray-700"} px-2 py-0.5 rounded text-[10px] font-bold uppercase shadow-sm`}>
      {showTag}
    </div>
  );
}
