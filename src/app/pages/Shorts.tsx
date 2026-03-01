import { Play, Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";
import { useState } from "react";

export function Shorts() {
  const [activeTab, setActiveTab] = useState<'browse' | 'foryou'>('foryou');

  return (
    <div className="bg-black min-h-screen text-white pb-20 relative">
      {/* Top Tabs */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center gap-8 pt-4 pb-12 bg-gradient-to-b from-black/50 to-transparent">
        <button 
          onClick={() => setActiveTab('browse')}
          className={`text-lg font-medium transition ${activeTab === 'browse' ? 'text-white border-b-2 border-[#F4BD39] pb-1' : 'text-gray-400'}`}
        >
          Browse
        </button>
        <button 
          onClick={() => setActiveTab('foryou')}
          className={`text-lg font-medium transition ${activeTab === 'foryou' ? 'text-white border-b-2 border-[#F4BD39] pb-1' : 'text-gray-400'}`}
        >
          For You
        </button>
      </div>

      {/* Video Container (Vertical Scroll Snap) */}
      <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar">
        {/* Mock Video Items */}
        <ShortItem 
          title="She Loves My Brother — So I Became..." 
          desc="After her husband's sudden death, Ye Zhixia is confronted..."
          likes="12.5K"
          comments="432"
          image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop"
        />
        <ShortItem 
          title="Romantic Getaway in Seoul" 
          desc="The best places to visit for couples in Korea this winter."
          likes="8.2K"
          comments="156"
          image="https://images.unsplash.com/photo-1517154421773-052f79edd189?q=80&w=1887&auto=format&fit=crop"
        />
        <ShortItem 
          title="Delicious Street Food" 
          desc="Trying the spicy tteokbokki in Myeongdong!"
          likes="45K"
          comments="1.2K"
          image="https://images.unsplash.com/photo-1580651315530-69c8e0026377?q=80&w=1974&auto=format&fit=crop"
        />
      </div>
    </div>
  );
}

function ShortItem({ title, desc, likes, comments, image }: { title: string, desc: string, likes: string, comments: string, image: string }) {
  return (
    <div className="h-screen w-full snap-center relative bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Play size={64} className="text-white/80 fill-white/80" />
      </div>

      {/* Right Sidebar Actions */}
      <div className="absolute right-4 bottom-32 flex flex-col gap-6 items-center z-10">
        <ActionButton icon={<Heart size={28} />} label={likes} />
        <ActionButton icon={<MessageCircle size={28} />} label={comments} />
        <ActionButton icon={<Share2 size={28} />} label="Share" />
        <ActionButton icon={<MoreVertical size={28} />} label="" />
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-20 left-4 right-16 z-10 text-left">
        <h3 className="text-lg font-bold mb-1 drop-shadow-md">{title}</h3>
        <p className="text-sm text-gray-200 line-clamp-2 drop-shadow-md">{desc}</p>
        
        <div className="mt-4 flex gap-3">
             <button className="flex-1 bg-gray-800/80 backdrop-blur-sm border border-gray-600 text-white py-2 rounded-full text-sm font-semibold">
                Watch Now
            </button>
            <button className="p-2 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-lg text-white">
                <Play size={20} />
            </button>
        </div>
      </div>
      
      {/* Progress Bar */}
       <div className="absolute bottom-[4.5rem] left-0 right-0 h-1 bg-gray-600">
          <div className="h-full w-1/3 bg-[#F4BD39]"></div>
       </div>
    </div>
  );
}

function ActionButton({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <button className="p-2 bg-black/20 rounded-full backdrop-blur-sm hover:bg-black/40 transition">
        {icon}
      </button>
      {label && <span className="text-xs font-medium drop-shadow-md">{label}</span>}
    </div>
  );
}
