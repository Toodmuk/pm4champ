
import { User, LogOut, Download, History, Bookmark, Tv, Mail, FileText } from "lucide-react";
import { Link } from "react-router";

export function Account() {
  return (
    <div className="bg-[#1A1A1A] min-h-screen text-white pt-20 px-4 pb-20">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center border-2 border-[#F4BD39]">
          <User size={32} className="text-[#F4BD39]" />
        </div>
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-sm text-gray-400">john.doe@example.com</p>
          <div className="mt-2 text-xs bg-[#F4BD39] text-black px-2 py-0.5 rounded-full inline-block font-bold uppercase">
             Premium Member
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 mb-6 flex items-center justify-between border border-gray-700">
        <div className="flex items-center gap-2">
            <User size={16} className="text-pink-500" />
            <span className="text-sm font-medium">See Viu Subscription Plans</span>
        </div>
        <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
            Upgrade Now
        </button>
      </div>

      <div className="space-y-4">
        <Section title="My Library">
            <MenuLink icon={<Download size={20} />} label="Downloads" to="/downloads" />
            <MenuLink icon={<History size={20} />} label="History" />
            <MenuLink icon={<Bookmark size={20} />} label="Bookmarks" />
        </Section>

        <Section title="Settings & Support">
            <MenuLink icon={<Tv size={20} />} label="Connect to TV" />
            <MenuLink icon={<FileText size={20} />} label="Terms & Conditions" />
            <MenuLink icon={<Mail size={20} />} label="Contact Us" />
            <MenuLink icon={<LogOut size={20} />} label="Logout" />
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="mb-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase mb-2 tracking-wider">{title}</h3>
            <div className="bg-[#2A2A2A] rounded-lg overflow-hidden divide-y divide-gray-700">
                {children}
            </div>
        </div>
    )
}

function MenuLink({ icon, label, to = "#" }: { icon: React.ReactNode, label: string, to?: string }) {
    return (
        <Link to={to} className="flex items-center gap-3 p-4 hover:bg-gray-700 transition">
            <span className="text-gray-400">{icon}</span>
            <span className="font-medium text-sm">{label}</span>
        </Link>
    )
}
