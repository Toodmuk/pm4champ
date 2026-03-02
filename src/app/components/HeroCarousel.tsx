import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Banner } from "../data/mock";
import { Play, Info } from "lucide-react";
import { Link } from "react-router";
import { usePrototype } from "../context/PrototypeContext";

interface HeroCarouselProps {
  banners: Banner[];
}

export function HeroCarousel({ banners }: HeroCarouselProps) {
  const { hasPreview } = usePrototype();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <Slider {...settings} className="h-full">
        {banners.map((banner) => {
          const watchLink = hasPreview
            ? `/details/${banner.movieId}`
            : `/player/${banner.movieId}`;
          const infoLink = `/details/${banner.movieId}`;

          return (
            <div key={banner.id} className="relative h-[60vh] md:h-[70vh] outline-none">
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10" />
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-16 md:bottom-24 left-4 md:left-12 z-20 max-w-lg">
                <span className="text-[#F4BD39] text-xs font-bold uppercase tracking-wider mb-2 block">
                  {banner.subtitle}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                  {banner.title}
                </h1>
                <div className="flex gap-4 mt-6">
                  <Link
                    to={watchLink}
                    className="flex items-center gap-2 bg-[#F4BD39] text-black px-6 py-3 rounded-md font-bold hover:bg-[#dca625] transition"
                  >
                    <Play size={20} fill="black" />
                    Watch Now
                  </Link>
                  <Link
                    to={infoLink}
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-md font-bold hover:bg-white/30 transition border border-white/10"
                  >
                    <Info size={20} />
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
