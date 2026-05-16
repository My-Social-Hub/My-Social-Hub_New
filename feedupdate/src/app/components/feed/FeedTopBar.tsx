import { Search, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Butterfly } from '../Butterfly';

export function FeedTopBar() {
  return (
    <header className="sticky top-0 z-30 h-14 bg-surface/95 backdrop-blur-xl border-b border-border px-4 flex items-center gap-3">
      <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-accent to-[#E5D4FF] flex items-center justify-center">
        <Butterfly size={20} />
      </div>
      <div className="flex-1">
        <div className="font-heading text-[15px] font-extrabold text-primary leading-none tracking-tight">
          MySocial<span className="text-accent">Hub</span>
        </div>
      </div>
      <Link
        to="/app/search"
        className="w-9 h-9 rounded-full flex items-center justify-center text-muted hover:bg-wisteria transition-colors"
        aria-label="Search"
      >
        <Search size={20} strokeWidth={2.2} />
      </Link>
      <Link
        to="/app/notifications"
        className="relative w-9 h-9 rounded-full flex items-center justify-center text-muted hover:bg-wisteria transition-colors"
        aria-label="Notifications"
      >
        <Bell size={20} strokeWidth={2.2} />
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-danger ring-2 ring-surface" />
      </Link>
    </header>
  );
}
