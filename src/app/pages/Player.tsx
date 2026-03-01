import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { X, Play, Pause, Volume2, VolumeX, SkipForward } from "lucide-react";
import { MOCK_MOVIES } from "../data/mock";

export function Player() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = MOCK_MOVIES.find((m) => m.id === id) || MOCK_MOVIES[0];

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [adTimer, setAdTimer] = useState(15);
  const [showSkip, setShowSkip] = useState(false);
  const [isAd, setIsAd] = useState(false); // Start with content, ad triggers on demand
  const [skipTimer, setSkipTimer] = useState(5);
  const [showAdPrompt, setShowAdPrompt] = useState(true); // Top-right "30 sec ad" indicator
  const [adPromptTimer, setAdPromptTimer] = useState(30); // seconds before ad interrupts

  // Ad prompt countdown (top-right indicator before ad plays)
  useEffect(() => {
    if (!showAdPrompt || isAd) return;
    const interval = setInterval(() => {
      setAdPromptTimer((prev) => {
        if (prev <= 1) {
          // Auto-trigger ad when countdown reaches 0
          setShowAdPrompt(false);
          setIsAd(true);
          setAdTimer(15);
          setSkipTimer(5);
          setShowSkip(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [showAdPrompt, isAd]);

  // User taps ad prompt to watch ad now
  const handleWatchAdNow = () => {
    setShowAdPrompt(false);
    setIsAd(true);
    setAdTimer(15);
    setSkipTimer(5);
    setShowSkip(false);
  };

  // Ad Countdown
  useEffect(() => {
    if (!isPlaying || !isAd) return;

    const interval = setInterval(() => {
      setAdTimer((prev) => {
        if (prev <= 1) {
          setIsAd(false);
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
  }, [isPlaying, isAd]);

  const handleSkip = () => {
    setIsAd(false);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Mock Video Content */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="w-full h-full flex items-center justify-center text-gray-500 bg-black relative overflow-hidden">
          {isAd ? (
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 flex flex-col items-center justify-center">
              <span className="text-5xl md:text-7xl font-black text-yellow-500/20 uppercase tracking-widest">
                Advertisement
              </span>
              <span className="text-xl md:text-2xl text-white mt-4 font-bold">
                Ad Video Placeholder
              </span>
            </div>
          ) : (
            <div className="absolute inset-0">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-6xl font-black text-white/20 uppercase tracking-widest">
                  {movie.title}
                </span>
                <span className="text-lg md:text-2xl text-white mt-4 font-bold">
                  Main Content Playing
                </span>
              </div>
            </div>
          )}

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            {/* Progress bar */}
            <div className="w-full h-1 bg-gray-600 rounded-full mb-4 overflow-hidden cursor-pointer group">
              <div
                className="h-full bg-[#F4BD39] transition-all duration-1000"
                style={{
                  width: isAd
                    ? `${((15 - adTimer) / 15) * 100}%`
                    : "25%",
                }}
              />
            </div>
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <Pause fill="white" size={24} />
                  ) : (
                    <Play fill="white" size={24} />
                  )}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:scale-110 transition-transform"
                >
                  {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
                </button>
                {!isAd && (
                  <span className="text-sm text-gray-300 ml-2">
                    {movie.title}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium text-gray-300">
                {isAd
                  ? `00:${String(15 - adTimer).padStart(2, "0")} / 00:15`
                  : "12:34 / 45:00"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top Right: Ad Prompt (before ad plays) - "Video 30" style */}
      {showAdPrompt && !isAd && (
        <button
          onClick={handleWatchAdNow}
          className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-2 bg-[#F5C542]/90 backdrop-blur-sm text-black pl-3 pr-3 py-2 rounded-xl shadow-lg hover:bg-[#F5C542] transition cursor-pointer group z-30"
        >
          <span className="text-sm font-medium">Video</span>
          <div className="flex items-center gap-1 bg-black/20 rounded-lg px-2 py-1">
            <span className="text-sm font-bold">{adPromptTimer}</span>
            <Play size={12} fill="black" />
          </div>
        </button>
      )}

      {/* Top Right: Ad Playing Overlay */}
      {isAd && (
        <div className="absolute top-6 right-6 md:top-8 md:right-8 flex flex-col items-end gap-3 z-30">
          {/* Ad countdown badge */}
          <div className="bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg border border-white/10">
            <span className="text-sm">Ad</span>
            <span className="bg-[#F4BD39] text-black px-2 py-0.5 rounded text-sm font-bold min-w-[28px] text-center">
              {adTimer}
            </span>
          </div>

          {/* Skip button (appears after 5 seconds) */}
          {showSkip ? (
            <button
              onClick={handleSkip}
              className="bg-white/90 backdrop-blur-md text-black px-6 py-2.5 rounded-md flex items-center gap-2 hover:bg-white transition font-bold shadow-xl cursor-pointer"
            >
              Skip Ad <SkipForward size={16} />
            </button>
          ) : (
            <div className="bg-black/50 backdrop-blur-md text-gray-400 px-5 py-2 rounded-md text-sm border border-gray-600">
              Skip in {skipTimer}s
            </div>
          )}
        </div>
      )}

      {/* Back/Close Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 md:top-8 md:left-8 text-white p-2.5 bg-black/40 backdrop-blur-sm hover:bg-black/60 rounded-full transition z-50"
      >
        <X size={24} />
      </button>
    </div>
  );
}
