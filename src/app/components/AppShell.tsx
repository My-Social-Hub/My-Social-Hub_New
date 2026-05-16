import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  Home,
  Search,
  Users,
  Zap,
  Store,
  Radio,
  MessageCircle,
  Bell,
  User,
  Crown,
  Settings as SettingsIcon,
  Plus,
} from 'lucide-react';
import { Butterfly } from './Butterfly';
import { cn } from '@/lib/utils';

type NavItem = {
  to: string;
  label: string;
  icon: typeof Home;
  badge?: string;
  dot?: boolean;
  count?: number;
  gold?: boolean;
};

const SIDEBAR_ITEMS: NavItem[] = [
  { to: '/app/feed', label: 'Global Feed', icon: Home },
  { to: '/app/search', label: 'Discover', icon: Search },
  { to: '/app/my-communities', label: 'My Hubs', icon: Users },
  { to: '/app/studio/clips', label: 'Hub Clips', icon: Zap, badge: 'PREMIUM' },
  { to: '/app/tradehub', label: 'TradeHub', icon: Store },
  { to: '/app/hub-live', label: 'Hub Live', icon: Radio, dot: true },
  { to: '/app/messages', label: 'Messages', icon: MessageCircle, count: 12 },
  { to: '/app/notifications', label: 'Notifications', icon: Bell, count: 8 },
  { to: '/profile/me', label: 'Profile', icon: User },
  { to: '/app/premium', label: 'Premium', icon: Crown, gold: true },
  { to: '/app/settings', label: 'Settings', icon: SettingsIcon },
];

const MOBILE_TABS: NavItem[] = [
  { to: '/app/feed', label: 'Home', icon: Home },
  { to: '/app/search', label: 'Discover', icon: Search },
  { to: '/app/studio/post', label: '', icon: Plus },
  { to: '/app/messages', label: 'Inbox', icon: MessageCircle },
  { to: '/profile/me', label: 'Profile', icon: User },
];

export function AppShell() {
  return (
    <div className="min-h-screen bg-bg text-ink font-body">
      {/* Desktop: sidebar + content */}
      <div className="hidden md:flex">
        <DesktopSidebar />
        <main className="flex-1 min-w-0 min-h-screen">
          <Outlet />
        </main>
      </div>

      {/* Mobile: content + bottom tab bar */}
      <div className="md:hidden flex flex-col min-h-screen">
        <main className="flex-1 pb-24">
          <Outlet />
        </main>
        <MobileTabBar />
      </div>
    </div>
  );
}

function DesktopSidebar() {
  return (
    <aside className="w-[244px] shrink-0 bg-surface border-r border-border px-3.5 pt-5 pb-4 flex flex-col min-h-screen sticky top-0">
      <div className="px-2 pb-5 flex items-center gap-2.5">
        <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-accent to-[#E5D4FF] flex items-center justify-center">
          <Butterfly size={22} />
        </div>
        <div>
          <div className="font-heading text-[16px] font-extrabold text-primary leading-none tracking-tight">
            MySocial<span className="text-accent">Hub</span>
          </div>
          <div className="text-[9.5px] text-muted mt-0.5 tracking-wider font-semibold">NETWORK</div>
        </div>
      </div>

      <nav className="flex flex-col gap-0.5">
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarLink key={item.to} item={item} />
        ))}
      </nav>

      <div className="flex-1" />

      <div className="rounded-[14px] p-3 mb-2.5 text-white bg-gradient-to-br from-primary to-[#6B1FAA]">
        <div className="flex items-center gap-1.5 text-[11px] font-bold">
          <Crown size={13} className="text-accent" /> Upgrade to Pro
        </div>
        <div className="text-[11px] opacity-90 mt-1">
          Unlock Hub Clips, advanced analytics &amp; verified badge.
        </div>
        <button className="mt-2 h-7 w-full rounded-full bg-white text-primary text-[11px] font-bold">
          See plans
        </button>
      </div>

      <div className="pt-2 px-1.5 flex items-center gap-2 border-t border-border">
        <div className="w-8 h-8 rounded-full bg-wisteria flex items-center justify-center text-primary font-bold text-[12px]">
          AM
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[12px] font-bold truncate">Alex Morgan</div>
          <div className="text-[10.5px] text-muted truncate">@alexmorg</div>
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ item }: { item: NavItem }) {
  const Icon = item.icon;
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) =>
        cn(
          'flex items-center gap-2.5 px-2.5 py-[9px] rounded-[10px] text-[13px] transition-colors',
          isActive
            ? 'bg-accent-soft text-primary font-bold'
            : 'text-ink hover:bg-wisteria font-medium',
        )
      }
    >
      {({ isActive }) => (
        <>
          <span className={cn('flex', isActive ? 'text-primary' : 'text-muted')}>
            <Icon size={17} strokeWidth={isActive ? 2.4 : 2} />
          </span>
          <span className="flex-1">{item.label}</span>
          {item.badge && (
            <span className="px-[5px] py-px rounded-[4px] bg-accent text-white text-[8.5px] font-extrabold tracking-wider">
              {item.badge}
            </span>
          )}
          {item.dot && <span className="w-[7px] h-[7px] rounded-full bg-danger" />}
          {item.count != null && (
            <span className="min-w-[18px] h-[18px] px-[5px] rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
              {item.count}
            </span>
          )}
        </>
      )}
    </NavLink>
  );
}

function MobileTabBar() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 inset-x-0 h-[84px] bg-surface/95 backdrop-blur-xl border-t border-border flex px-2 pt-2 pb-6">
      {MOBILE_TABS.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname.startsWith(tab.to);
        const isBig = !tab.label;

        if (isBig) {
          return (
            <div key={tab.to} className="flex-1 flex justify-center">
              <NavLink
                to={tab.to}
                className="w-[50px] h-[50px] rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-[0_8px_18px_rgba(79,70,229,0.3)]"
              >
                <Icon size={22} />
              </NavLink>
            </div>
          );
        }

        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={cn(
              'flex-1 flex flex-col items-center justify-center gap-0.5 p-1.5',
              isActive ? 'text-primary' : 'text-muted',
            )}
          >
            <Icon size={22} strokeWidth={isActive ? 2.4 : 2} />
            <span className={cn('text-[9.5px] tracking-wide', isActive ? 'font-bold' : 'font-semibold')}>
              {tab.label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
}
