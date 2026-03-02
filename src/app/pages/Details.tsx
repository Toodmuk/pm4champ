import { useState, useRef, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { MOCK_MOVIES } from "../data/mock";
import {
  Play,
  Plus,
  Share2,
  ThumbsUp,
  Download,
  ChevronDown,
  ArrowLeft,
  Volume2,
  VolumeX,
  Pause,
} from "lucide-react";

export function Details() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = MOCK_MOVIES.find((m) => m.id === id) || MOCK_MOVIES[0];
  const [activeTab, setActiveTab] = useState<"episodes" | "similar" | "details">(
    "episodes"
  );
  const hasEpisodes = movie.episodes && movie.episodes.length > 0;

  // Video preview state
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoMuted, setVideoMuted] = useState(true);
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [showVideoFallback, setShowVideoFallback] = useState(true);

  // Find similar movies (same genre)
  const similarMovies = MOCK_MOVIES.filter(
    (m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g))
  ).slice(0, 9);

  // 📹 Reads trailerUrl from the movie database in /src/app/data/mock.ts
  // To add a trailer: set movie.trailerUrl = "/videos/your-trailer.mp4" in mock.ts
  const previewVideoUrl = movie.trailerUrl || null;

  useEffect(() => {
    if (previewVideoUrl && videoRef.current) {
      videoRef.current
        .play()
        .then(() => setShowVideoFallback(false))
        .catch(() => setShowVideoFallback(true));
    }
  }, [previewVideoUrl]);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setVideoPlaying(!videoPlaying);
  };

  return (
    <div className="bg-[#141414] min-h-screen pb-24 text-white">
      {/* Hero Backdrop with Video */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        {/* Video layer (plays when URL is provided) */}
        {previewVideoUrl ? (
          <video
            ref={videoRef}
            src={previewVideoUrl}
            muted={videoMuted}
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
            onCanPlay={() => setShowVideoFallback(false)}
            onError={() => setShowVideoFallback(true)}
          />
        ) : null}

        {/* Fallback poster image (shown when no video or video failed) */}
        {(showVideoFallback || !previewVideoUrl) && (
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover absolute inset-0"
          />
        )}

        {/* "Video Preview" label — shows instructions when no video URL set */}
        {!previewVideoUrl && (
          <div className="absolute inset-0 flex items-center justify-center z-[5]">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl px-6 py-4 flex flex-col items-center gap-2 border border-white/10">
              <Play size={40} className="text-white/60" />
              <span className="text-white/80 text-sm font-medium">Video Preview</span>
              <span className="text-white/40 text-xs text-center max-w-[200px]">
                Set trailerUrl in mock.ts to autoplay a trailer here
              </span>
            </div>
          </div>
        )}

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent z-[6]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/80 via-transparent to-transparent hidden md:block z-[6]" />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 md:top-8 md:left-8 z-20 p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Video controls (mute / pause) — only when video is active */}
        {previewVideoUrl && !showVideoFallback && (
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20 flex items-center gap-2">
            <button
              onClick={toggleVideoPlay}
              className="p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition"
            >
              {videoPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button
              onClick={() => {
                setVideoMuted(!videoMuted);
                if (videoRef.current) videoRef.current.muted = !videoMuted;
              }}
              className="p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-black/60 transition"
            >
              {videoMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>
        )}

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-12 z-10">
          {/* Episode info */}
          {movie.season && (
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <span>
                {movie.season > 1
                  ? `ซีซั่น ${movie.season} • ${movie.totalEpisodes} ตอน`
                  : `${movie.totalEpisodes} Episodes`}
              </span>
            </div>
          )}

          <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            {movie.title}
          </h1>

          {/* Meta info */}
          <div className="flex items-center flex-wrap gap-2 text-sm text-gray-300 mb-4">
            {movie.season && movie.episodes && movie.episodes.length > 0 && (
              <span className="text-white">
                ซีซั่น {movie.season}: ตอน {movie.episodes.length} "
                {movie.episodes[movie.episodes.length - 1]?.title}"
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mb-4">
            <Link
              to={`/player/${movie.id}`}
              className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded-md font-bold hover:bg-gray-200 transition"
            >
              <Play size={20} fill="black" />
              <span>เล่นต่อ</span>
            </Link>
            <button className="flex items-center gap-2 bg-gray-600/60 text-white px-5 py-2.5 md:py-3 rounded-md font-bold hover:bg-gray-600/80 transition backdrop-blur-sm">
              <Download size={18} />
              <span className="hidden md:inline">ดาวน์โหลด</span>
            </button>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="px-4 md:px-12 pt-4">
        {/* Tags row */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="bg-gray-800 px-2 py-0.5 rounded text-xs font-bold text-white">
            {movie.rating}
          </span>
          <span className="text-sm text-gray-400">{movie.year}</span>
          {movie.language && (
            <span className="text-sm text-gray-400">{movie.language}</span>
          )}
          {movie.tags.includes("Premium") && (
            <span className="bg-[#F4BD39] text-black px-2 py-0.5 rounded text-xs font-bold">
              PREMIUM
            </span>
          )}
          {movie.duration && (
            <span className="text-sm text-gray-400">{movie.duration}</span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-2xl">
          {movie.description}
        </p>

        {/* Cast */}
        <div className="mb-4">
          <span className="text-xs text-gray-500">ผู้กำกับ: </span>
          <span className="text-xs text-gray-400">
            {movie.cast.slice(0, 2).join(", ")}
          </span>
        </div>
        <div className="mb-6">
          <span className="text-xs text-gray-500">นักแสดง: </span>
          <span className="text-xs text-gray-400">{movie.cast.join(", ")}</span>
        </div>

        {/* Quick Action Row */}
        <div className="flex items-center gap-8 mb-6 border-b border-gray-800 pb-4">
          <ActionButton icon={<Plus size={24} />} label="รายการของฉัน" />
          <ActionButton icon={<ThumbsUp size={24} />} label="ให้คะแนน" />
          <ActionButton icon={<Share2 size={24} />} label="แชร์" />
          <ActionButton icon={<Download size={24} />} label="ดาวน์โหลดทั้งพัก" />
        </div>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-800 mb-6">
          {hasEpisodes && (
            <TabButton
              active={activeTab === "episodes"}
              onClick={() => setActiveTab("episodes")}
              label="ตอน"
            />
          )}
          <TabButton
            active={activeTab === "similar"}
            onClick={() => setActiveTab("similar")}
            label="เนื้อหาที่คล้ายกัน"
          />
          <TabButton
            active={activeTab === "details"}
            onClick={() => setActiveTab("details")}
            label="รายละเอียด"
          />
        </div>

        {/* Tab Content */}
        {activeTab === "episodes" && hasEpisodes && (
          <div>
            {/* Season selector */}
            <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md mb-4 text-sm">
              ซีซั่น {movie.season} <ChevronDown size={16} />
            </button>

            {/* Episodes list */}
            <div className="space-y-4">
              {movie.episodes?.map((ep) => (
                <Link
                  key={ep.id}
                  to={`/player/${movie.id}`}
                  className="flex gap-4 group hover:bg-gray-800/50 rounded-lg p-2 -mx-2 transition"
                >
                  {/* Episode thumbnail */}
                  <div className="relative w-[140px] md:w-[180px] aspect-video rounded-md overflow-hidden shrink-0 bg-gray-800">
                    <img
                      src={ep.thumbnail}
                      alt={ep.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                      <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play size={18} fill="white" className="ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/70 px-1.5 py-0.5 rounded text-[10px] text-white">
                      {ep.duration}
                    </div>
                  </div>
                  {/* Episode info */}
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-500 text-sm">{ep.number}.</span>
                      <span className="text-white text-sm font-medium line-clamp-1">
                        {ep.title}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                      {ep.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === "similar" && (
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {similarMovies.map((m) => (
              <Link key={m.id} to={`/details/${m.id}`} className="group">
                <div className="aspect-[2/3] bg-gray-800 rounded-lg overflow-hidden relative">
                  <img
                    src={m.poster}
                    alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {m.tags.some((t) =>
                    ["New Episode", "New Season", "New"].includes(t)
                  ) && (
                    <div className="absolute bottom-2 left-2 bg-red-600 px-2 py-0.5 rounded text-[10px] font-bold">
                      {m.tags.find((t) =>
                        ["New Episode", "New Season", "New"].includes(t)
                      )}
                    </div>
                  )}
                </div>
                <p className="text-sm text-white mt-1.5 line-clamp-1">{m.title}</p>
              </Link>
            ))}
          </div>
        )}

        {activeTab === "details" && (
          <div className="max-w-2xl space-y-4">
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase mb-2">
                เรื่องย่อ
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {movie.description}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase mb-2">
                นักแสดง
              </h4>
              <p className="text-sm text-gray-300">{movie.cast.join(", ")}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase mb-2">
                ประเภท
              </h4>
              <div className="flex gap-2 flex-wrap">
                {movie.genre.map((g) => (
                  <span
                    key={g}
                    className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase mb-2">
                ปี
              </h4>
              <p className="text-sm text-gray-300">{movie.year}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ActionButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition">
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

function TabButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 text-sm font-medium transition relative ${
        active ? "text-white" : "text-gray-500 hover:text-gray-300"
      }`}
    >
      {label}
      {active && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F4BD39]" />
      )}
    </button>
  );
}