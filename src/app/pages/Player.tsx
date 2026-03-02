import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router";
import {
  ChevronLeft,
  Play,
  Pause,
  Bookmark,
  Share2,
  Info,
  Download,
  Grid3X3,
  ChevronUp,
  SkipForward,
} from "lucide-react";
import { MOCK_MOVIES, AD_VIDEOS, type Movie } from "../data/mock";
import { usePrototype } from "../context/PrototypeContext";

// Inline banner ad image
const AD_BANNER_IMAGE =
  "https://images.unsplash.com/photo-1726979097641-4ed5ba18021c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYWR2ZXJ0aXNlbWVudCUyMGJhbm5lciUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjQ3MzkyOXww&ixlib=rb-4.1.0&q=80&w=1080";

export function Player() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = MOCK_MOVIES.find((m) => m.id === id) || MOCK_MOVIES[0];
  const { hasAdsDelay, variant } = usePrototype();

  // Video refs
  const adVideoRef = useRef<HTMLVideoElement>(null);
  const contentVideoRef = useRef<HTMLVideoElement>(null);

  // ---- Ad queue: all 3 ads must be watched ----
  const totalAds = AD_VIDEOS.length; // Always 3
  const [currentAdIndex, setCurrentAdIndex] = useState(0); // 0-based index into AD_VIDEOS
  const currentAd = AD_VIDEOS[currentAdIndex] || AD_VIDEOS[0];

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay
  const [contentProgress, setContentProgress] = useState(0);

  // ---- Ad state ----
  const [isAd, setIsAd] = useState(true); // Start with ad by default for A & B
  const [adTimer, setAdTimer] = useState(AD_VIDEOS[0].duration);
  const [skipTimer, setSkipTimer] = useState(5);
  const [showSkip, setShowSkip] = useState(false);
  const [allAdsFinished, setAllAdsFinished] = useState(false);

  // ---- Variant A & B: Surprise mid-roll ad ----
  const [surpriseDelay] = useState(() => Math.floor(Math.random() * 11) + 8);
  const [surpriseTriggered, setSurpriseTriggered] = useState(false);

  // ---- Variant C: Ads Delay prompt ----
  const [adPromptTimer, setAdPromptTimer] = useState(30);
  const [showAdPrompt, setShowAdPrompt] = useState(false);

  // "You may also like" expanded
  const [showSimilar, setShowSimilar] = useState(false);

  // Find similar movies
  const similarMovies = MOCK_MOVIES.filter(
    (m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g))
  ).slice(0, 6);

  // Initialize ad behavior based on variant
  useEffect(() => {
    if (hasAdsDelay) {
      // Variant C: Don't auto-start ad, show prompt instead
      setIsAd(false);
      setShowAdPrompt(true);
    } else {
      // Variant A & B: Start with pre-roll ad immediately
      setIsAd(true);
    }
  }, [hasAdsDelay]);

  // Sync video play/pause with isPlaying state
  useEffect(() => {
    const videoEl = isAd ? adVideoRef.current : contentVideoRef.current;
    if (!videoEl) return;
    if (isPlaying) {
      videoEl.play().catch(() => {});
    } else {
      videoEl.pause();
    }
  }, [isPlaying, isAd]);

  // When switching between ad and content, auto-play the new video
  useEffect(() => {
    const videoEl = isAd ? adVideoRef.current : contentVideoRef.current;
    if (!videoEl) return;
    videoEl.muted = isMuted;
    if (isPlaying) {
      videoEl.play().catch(() => {});
    }
  }, [isAd]);

  // =============================================
  // Content playback progress
  // =============================================
  useEffect(() => {
    if (!isPlaying || isAd) return;
    const interval = setInterval(() => {
      setContentProgress((prev) => Math.min(prev + 0.05, 100));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, isAd]);

  // =============================================
  // VARIANT A & B: Surprise mid-roll ad after ALL ads end
  // =============================================
  useEffect(() => {
    if (hasAdsDelay || surpriseTriggered || isAd || !allAdsFinished) return;
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setSurpriseTriggered(true);
      // Restart from first ad again for mid-roll
      setCurrentAdIndex(0);
      setIsAd(true);
      setAdTimer(AD_VIDEOS[0].duration);
      setSkipTimer(5);
      setShowSkip(false);
      setAllAdsFinished(false);
    }, surpriseDelay * 1000);

    return () => clearTimeout(timer);
  }, [
    hasAdsDelay,
    surpriseTriggered,
    isAd,
    isPlaying,
    surpriseDelay,
    allAdsFinished,
  ]);

  // =============================================
  // VARIANT C: Ads Delay prompt countdown
  // =============================================
  useEffect(() => {
    if (!hasAdsDelay || !showAdPrompt || isAd) return;
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setAdPromptTimer((prev) => {
        if (prev <= 1) {
          setShowAdPrompt(false);
          setCurrentAdIndex(0);
          setIsAd(true);
          setAdTimer(AD_VIDEOS[0].duration);
          setSkipTimer(5);
          setShowSkip(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [hasAdsDelay, showAdPrompt, isAd, isPlaying]);

  const handleWatchAdNow = () => {
    setShowAdPrompt(false);
    setCurrentAdIndex(0);
    setIsAd(true);
    setAdTimer(AD_VIDEOS[0].duration);
    setSkipTimer(5);
    setShowSkip(false);
  };

  // =============================================
  // Move to next ad or finish all ads
  // =============================================
  const advanceToNextAdOrFinish = () => {
    const nextIndex = currentAdIndex + 1;
    if (nextIndex < totalAds) {
      // Move to next ad
      setCurrentAdIndex(nextIndex);
      setAdTimer(AD_VIDEOS[nextIndex].duration);
      setSkipTimer(5);
      setShowSkip(false);
    } else {
      // All ads done
      setIsAd(false);
      setAllAdsFinished(true);
    }
  };

  // =============================================
  // Ad playback countdown (ALL variants)
  // =============================================
  useEffect(() => {
    if (!isPlaying || !isAd) return;
    const interval = setInterval(() => {
      setAdTimer((prev) => {
        if (prev <= 1) {
          advanceToNextAdOrFinish();
          return 0;
        }
        return prev - 1;
      });
      setSkipTimer((prev) => {
        if (prev <= 1) {
          setShowSkip(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, isAd, currentAdIndex]);

  const handleSkip = () => {
    // Skip just moves to next ad, doesn't skip all
    advanceToNextAdOrFinish();
  };

  const adElapsed = currentAd.duration - adTimer;
  const adTimeStr = `${String(Math.floor(adElapsed / 60)).padStart(2, "0")}:${String(adElapsed % 60).padStart(2, "0")}`;

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pb-6">
      {/* ============================================ */}
      {/* VIDEO PLAYER AREA */}
      {/* ============================================ */}
      <div className="relative w-full aspect-video bg-black">
        {/* Video / Ad content */}
        {isAd ? (
          <div className="absolute inset-0">
            {currentAd.url ? (
              <video
                ref={adVideoRef}
                src={currentAd.url}
                autoPlay
                muted={isMuted}
                playsInline
                loop
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-yellow-900/40 to-orange-900/30 flex flex-col items-center justify-center">
                <img
                  src={movie.poster}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-3xl md:text-5xl font-black text-white/15 uppercase tracking-widest">
                    Advertisement
                  </span>
                  <span className="text-white mt-2 font-medium">
                    {currentAd.brand} — {currentAd.title}
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="absolute inset-0">
            {movie.videoUrl ? (
              <video
                ref={contentVideoRef}
                src={movie.videoUrl}
                autoPlay
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-full object-cover opacity-50"
                />
              </>
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <Play size={28} fill="white" className="ml-1" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 left-3 z-30 p-1.5 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition"
        >
          <ChevronLeft size={22} />
        </button>

        {/* "Learn More" button (during ad) */}
        {isAd && (
          <button className="absolute top-3 right-3 z-30 text-white text-xs bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded hover:bg-black/60 transition">
            Learn More
          </button>
        )}

        {/* Variant C: "Ad coming" countdown prompt — tap to watch ad now */}
        {hasAdsDelay && showAdPrompt && !isAd && (
          <button
            onClick={handleWatchAdNow}
            className="absolute top-3 right-3 z-30 flex items-center gap-0 bg-[#F5C542] backdrop-blur-sm text-black rounded-full shadow-lg hover:bg-[#f0c030] transition cursor-pointer overflow-hidden"
          >
            <span className="text-[11px] font-medium pl-3 pr-1.5 py-1.5">Ad coming</span>
            <div className="flex items-center gap-0.5 bg-black/20 rounded-full px-2.5 py-1 mr-0.5 my-0.5">
              <span className="text-[12px] font-bold">{adPromptTimer}</span>
              <Play size={10} fill="black" className="ml-0.5" />
            </div>
          </button>
        )}

        {/* Ad skip / countdown overlay */}
        {isAd && (
          <div className="absolute top-12 right-3 z-30 flex flex-col items-end gap-2">
            {hasAdsDelay ? (
              /* Variant C: Can skip after 5s — skip goes to next ad */
              <>
                {showSkip ? (
                  <button
                    onClick={handleSkip}
                    className="bg-white/90 text-black px-4 py-1.5 rounded text-xs flex items-center gap-1.5 font-bold cursor-pointer"
                  >
                    {currentAdIndex < totalAds - 1 ? "Next Ad" : "Skip Ad"} <SkipForward size={12} />
                  </button>
                ) : (
                  <div className="bg-black/50 text-gray-400 px-3 py-1 rounded text-xs border border-gray-600">
                    Skip in {skipTimer}s
                  </div>
                )}
              </>
            ) : (
              /* Variant A & B: No skip allowed — just show remaining time */
              <div className="bg-black/50 text-gray-400 px-3 py-1 rounded text-xs border border-gray-600">
                Ad ends in {adTimer}s
              </div>
            )}
          </div>
        )}

        {/* Progress bar */}
        <div className="absolute bottom-7 left-0 right-0 h-0.5 bg-gray-700 z-20">
          <div
            className="h-full bg-[#F4BD39] transition-all duration-1000"
            style={{
              width: isAd
                ? `${((currentAd.duration - adTimer) / currentAd.duration) * 100}%`
                : `${contentProgress}%`,
            }}
          />
        </div>

        {/* Ad indicator bar at bottom */}
        {isAd && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-3 py-1.5 flex items-center justify-between z-20">
            <span className="text-[11px] text-gray-300">
              Ad {currentAdIndex + 1} of {totalAds} ({adTimeStr})
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-0.5"
            >
              {isPlaying ? (
                <Pause size={14} className="text-gray-300" />
              ) : (
                <Play size={14} fill="white" className="text-gray-300" />
              )}
            </button>
          </div>
        )}

        {/* Content time bar at bottom (when not ad) */}
        {!isAd && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-3 py-1.5 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <button onClick={() => setIsPlaying(!isPlaying)} className="p-0.5">
                {isPlaying ? (
                  <Pause size={14} className="text-gray-300" />
                ) : (
                  <Play size={14} fill="white" className="text-gray-300" />
                )}
              </button>
              <span className="text-[11px] text-gray-400">12:34 / 45:00</span>
            </div>
          </div>
        )}
      </div>

      {/* ============================================ */}
      {/* SERIES INFO */}
      {/* ============================================ */}
      <div className="px-4 pt-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h1 className="text-[15px] font-medium text-white line-clamp-1">
              {movie.title}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              {movie.episodes && movie.episodes.length > 0 && (
                <span className="text-xs text-gray-400">
                  Episode {movie.episodes[0].number}
                </span>
              )}
              <span className="bg-gray-700 text-gray-300 px-1.5 py-0.5 rounded text-[10px] font-medium">
                {movie.rating}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0 pt-1">
            <button className="text-gray-400 hover:text-white transition">
              <Bookmark size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <Share2 size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition">
              <Info size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* SELECT EPISODE */}
      {/* ============================================ */}
      {movie.episodes && movie.episodes.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between px-4 mb-3">
            <span className="text-[#F4BD39] text-sm font-medium">
              Select episode
            </span>
            <div className="flex items-center gap-3">
              <button className="text-gray-400 hover:text-white transition">
                <Grid3X3 size={18} />
              </button>
              <button className="text-gray-400 hover:text-white transition">
                <Download size={18} />
              </button>
            </div>
          </div>

          {/* Episode list */}
          <div className="space-y-0">
            {movie.episodes.slice(0, 3).map((ep) => (
              <EpisodeRow
                key={ep.id}
                thumbnail={ep.thumbnail}
                title={`${movie.title} EP.${ep.number} [${ep.number}/${movie.episodes!.length}]`}
                subtitle={`Episode ${ep.number}`}
                duration={ep.duration}
                movieId={movie.id}
              />
            ))}
          </div>
        </div>
      )}

      {/* ============================================ */}
      {/* INLINE ADVERTISEMENT BANNER */}
      {/* ============================================ */}
      <div className="mt-5 px-4">
        <p className="text-center text-gray-400 text-xs mb-2">Advertisement</p>
        <div className="relative rounded-lg overflow-hidden bg-gray-900 aspect-[16/9]">
          <img
            src={AD_BANNER_IMAGE}
            alt="Advertisement"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-0 right-0 flex justify-center">
            <button className="bg-[#F4BD39] text-black text-xs px-5 py-1.5 rounded-full font-medium">
              ดูเต็มๆ
            </button>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* MORE EPISODES (below ad) */}
      {/* ============================================ */}
      {movie.episodes && movie.episodes.length > 3 && (
        <div className="mt-4">
          {movie.episodes.slice(3).map((ep) => (
            <EpisodeRow
              key={ep.id}
              thumbnail={ep.thumbnail}
              title={`${movie.title} EP.${ep.number} [${ep.number}/${movie.episodes!.length}]`}
              subtitle={`Episode ${ep.number}`}
              duration={ep.duration}
              movieId={movie.id}
              showPlayAfterAd
            />
          ))}
        </div>
      )}

      {/* ============================================ */}
      {/* YOU MAY ALSO LIKE */}
      {/* ============================================ */}
      <div className="mt-5 px-4">
        <button
          onClick={() => setShowSimilar(!showSimilar)}
          className="flex items-center justify-between w-full"
        >
          <span className="text-[#F4BD39] text-sm font-medium">
            You may also like...
          </span>
          <ChevronUp
            size={20}
            className={`text-gray-400 transition-transform duration-300 ${showSimilar ? "" : "rotate-180"}`}
          />
        </button>

        {showSimilar && (
          <div className="grid grid-cols-3 gap-2 mt-3">
            {similarMovies.map((m) => (
              <SimilarCard key={m.id} movie={m} />
            ))}
          </div>
        )}
      </div>

      {/* Debug info */}
      <div className="mt-6 mx-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 text-[10px] text-gray-500 border border-gray-800/50 inline-block">
        Prototype {variant} •{" "}
        {hasAdsDelay
          ? "Ads Delay mode"
          : `Pre-roll ad → surprise mid-roll ~${surpriseDelay}s`}
      </div>
    </div>
  );
}

/* ============================================ */
/* EPISODE ROW COMPONENT */
/* ============================================ */
function EpisodeRow({
  thumbnail,
  title,
  subtitle,
  duration,
  movieId,
  showPlayAfterAd,
}: {
  thumbnail: string;
  title: string;
  subtitle: string;
  duration: string;
  movieId: string;
  showPlayAfterAd?: boolean;
}) {
  return (
    <Link
      to={`/player/${movieId}`}
      className="flex items-center gap-3 px-4 py-2 hover:bg-gray-800/40 transition"
    >
      {/* Thumbnail */}
      <div className="relative w-[90px] aspect-video rounded overflow-hidden shrink-0 bg-gray-800">
        <img
          src={thumbnail}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-7 h-7 bg-black/50 rounded-full flex items-center justify-center">
            <Play size={12} fill="white" className="ml-0.5" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        {showPlayAfterAd && (
          <span className="text-gray-500 text-[10px] block mb-0.5">
            Play after ad
          </span>
        )}
        <p className="text-white text-xs line-clamp-2">{title}</p>
        <p className="text-gray-500 text-[11px] mt-0.5">{subtitle}</p>
      </div>

      {/* Download */}
      <button
        className="text-gray-500 hover:text-gray-300 transition shrink-0"
        onClick={(e) => e.preventDefault()}
      >
        <Download size={18} />
      </button>
    </Link>
  );
}

/* ============================================ */
/* SIMILAR MOVIE CARD */
/* ============================================ */
function SimilarCard({ movie }: { movie: Movie }) {
  const { hasPreview } = usePrototype();
  const destination = hasPreview
    ? `/details/${movie.id}`
    : `/player/${movie.id}`;

  return (
    <Link to={destination} className="group">
      <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-xs text-gray-400 mt-1 line-clamp-1">{movie.title}</p>
    </Link>
  );
}