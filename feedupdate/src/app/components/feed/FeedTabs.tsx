import { cn } from '@/lib/utils';

export type FeedTab = 'foryou' | 'following' | 'hubs';

const TABS: { id: FeedTab; label: string }[] = [
  { id: 'foryou', label: 'For you' },
  { id: 'following', label: 'Following' },
  { id: 'hubs', label: 'Hubs' },
];

type Props = {
  active: FeedTab;
  onChange: (tab: FeedTab) => void;
};

export function FeedTabs({ active, onChange }: Props) {
  return (
    <div className="sticky top-14 z-20 h-11 bg-surface/95 backdrop-blur-xl border-b border-border flex items-center px-4 gap-1">
      {TABS.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative flex-1 h-9 text-[13px] font-semibold transition-colors',
              isActive ? 'text-primary' : 'text-muted',
            )}
          >
            {tab.label}
            {isActive && (
              <span className="absolute left-3 right-3 -bottom-px h-[2.5px] rounded-full bg-primary" />
            )}
          </button>
        );
      })}
    </div>
  );
}
