
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { MOCK_MOVIES } from "../data/mock";
import { Link } from "react-router";

export function Search() {
  const [query, setQuery] = useState("");

  const filteredMovies = MOCK_MOVIES.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white pt-20 px-4 pb-20">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search for movies, shows..."
          className="w-full bg-[#2A2A2A] text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#F4BD39] placeholder-gray-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {query && (
        <div className="mb-4 text-sm text-gray-400">
          Found {filteredMovies.length} results for "{query}"
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} to={`/details/${movie.id}`} className="group block">
            <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden mb-2 relative">
              <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
               <div className="absolute top-2 right-2 bg-[#F4BD39] text-black text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                  {movie.rating}
               </div>
            </div>
            <h3 className="text-sm font-medium line-clamp-1 group-hover:text-[#F4BD39] transition">{movie.title}</h3>
            <p className="text-xs text-gray-500">{movie.year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
