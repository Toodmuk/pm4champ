import { useState } from "react";
import { usePrototype, type PrototypeVariant } from "../context/PrototypeContext";
import { Settings, X, FlaskConical } from "lucide-react";

const variants: { key: PrototypeVariant; label: string; description: string; color: string }[] = [
  {
    key: "A",
    label: "A — Plain",
    description: "No Preview page, No Ads delay. Standard streaming experience.",
    color: "bg-blue-500",
  },
  {
    key: "B",
    label: "B — Preview",
    description: "Netflix-style Preview page with video before watching. No Ads delay.",
    color: "bg-green-500",
  },
  {
    key: "C",
    label: "C — Ads Delay",
    description: "\"Watch Ad Now\" delay button on Player. No Preview page.",
    color: "bg-orange-500",
  },
];

export function PrototypeSwitcher() {
  const { variant, setVariant } = usePrototype();
  const [isOpen, setIsOpen] = useState(false);

  const currentVariant = variants.find((v) => v.key === variant)!;

  return (
    <>
      {/* Floating pill button — always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 md:bottom-4 right-4 z-[100] flex items-center gap-2 bg-gray-900/95 backdrop-blur-md border border-gray-700 text-white pl-3 pr-3 py-2 rounded-full shadow-2xl hover:border-gray-500 transition-all cursor-pointer"
      >
        <FlaskConical size={16} className="text-[#F4BD39]" />
        <span className="text-xs font-bold">
          Prototype {variant}
        </span>
        <span className={`w-2 h-2 rounded-full ${currentVariant.color}`} />
      </button>

      {/* Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-[100]"
            onClick={() => setIsOpen(false)}
          />
          {/* Modal */}
          <div className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-md md:rounded-2xl z-[101] bg-[#1C1C1E] border-t md:border border-gray-700 rounded-t-2xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <div className="flex items-center gap-2">
                <Settings size={18} className="text-[#F4BD39]" />
                <h3 className="text-white font-bold">Prototype Switcher</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-gray-700 rounded-full transition"
              >
                <X size={18} className="text-gray-400" />
              </button>
            </div>
            <p className="px-5 text-xs text-gray-500 mb-4">
              Switch between A/B/C test variants. The user will only see one at a time during real testing.
            </p>

            {/* Variant options */}
            <div className="px-5 pb-6 space-y-3">
              {variants.map((v) => {
                const isActive = variant === v.key;
                return (
                  <button
                    key={v.key}
                    onClick={() => {
                      setVariant(v.key);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left rounded-xl p-4 border-2 transition-all cursor-pointer ${
                      isActive
                        ? "border-[#F4BD39] bg-[#F4BD39]/10"
                        : "border-gray-700 bg-gray-800/50 hover:border-gray-500"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${v.color}`} />
                        <span className="text-white font-bold text-sm">{v.label}</span>
                      </div>
                      {isActive && (
                        <span className="text-[10px] font-bold text-[#F4BD39] uppercase bg-[#F4BD39]/20 px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 ml-5">{v.description}</p>
                  </button>
                );
              })}
            </div>

            {/* Current state summary */}
            <div className="px-5 pb-5 pt-3 border-t border-gray-700/50">
              <div className="bg-gray-800/70 rounded-lg p-3 text-xs text-gray-400 space-y-1">
                <div className="flex justify-between">
                  <span>Preview Page</span>
                  <span className={variant === "B" ? "text-green-400 font-bold" : "text-gray-600"}>
                    {variant === "B" ? "ON" : "OFF"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Ads Delay Feature</span>
                  <span className={variant === "C" ? "text-orange-400 font-bold" : "text-gray-600"}>
                    {variant === "C" ? "ON" : "OFF"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Click → Destination</span>
                  <span className="text-white font-medium">
                    {variant === "B" ? "Preview → Player" : "Player directly"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
