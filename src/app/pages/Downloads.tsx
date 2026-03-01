
import { Download } from "lucide-react";

export function Downloads() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen flex flex-col items-center justify-center text-white pb-20">
      <div className="bg-gray-800 p-8 rounded-full mb-4">
        <Download size={48} className="text-[#F4BD39]" />
      </div>
      <h2 className="text-xl font-bold mb-2">No Downloads Yet</h2>
      <p className="text-gray-400 text-sm max-w-xs text-center">
        Movies and shows you download will appear here so you can watch them offline.
      </p>
      <button className="mt-8 bg-[#F4BD39] text-black px-8 py-3 rounded-full font-bold hover:bg-[#dca625] transition">
        Find Something to Download
      </button>
    </div>
  );
}
