import { Outlet, Link, useLocation } from "react-router";
import { Home, Search, User, PlaySquare } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans pb-16 md:pb-0">
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between px-8 py-4 bg-black/80 sticky top-0 z-50 backdrop-blur-md border-b border-gray-800">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-[#F4BD39]">VIU</Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className={`text-sm hover:text-[#F4BD39] transition ${isActive('/') ? 'text-[#F4BD39] font-medium' : 'text-gray-300'}`}>Home</Link>
            <Link to="/search" className={`text-sm hover:text-[#F4BD39] transition ${isActive('/search') ? 'text-[#F4BD39] font-medium' : 'text-gray-300'}`}>Search</Link>
            <Link to="/originals" className="text-sm text-gray-300 hover:text-[#F4BD39] transition">Viu Originals</Link>
            <Link to="/drama" className="text-sm text-gray-300 hover:text-[#F4BD39] transition">Asian Drama</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#F4BD39] text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#dca625] transition">
            Premium
          </button>
          <Link to="/account" className="p-2 hover:bg-gray-800 rounded-full transition">
            <User size={20} />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800 z-50">
        <div className="flex justify-around items-center py-3">
          <NavItem to="/" icon={<Home size={24} />} label="Home" active={isActive('/')} />
          <NavItem to="/shorts" icon={<PlaySquare size={24} />} label="Shorts" active={isActive('/shorts')} />
          <NavItem to="/search" icon={<Search size={24} />} label="Search" active={isActive('/search')} />
          <NavItem to="/account" icon={<User size={24} />} label="Profile" active={isActive('/account')} />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label, active }: { to: string; icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <Link to={to} className={`flex flex-col items-center gap-1 ${active ? 'text-[#F4BD39]' : 'text-gray-500'} transition`}>
      {icon}
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}