import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Story } from '@/lib/mock-feed';

type Props = { stories: Story[] };

export function StoriesRail({ stories }: Props) {
  return (
    <div className="relative">
      <div className="flex gap-3 overflow-x-auto px-4 py-3 scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {stories.map((story, i) => (
          <StoryItem key={story.id} story={story} isFirst={i === 0} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}

function StoryItem({ story, isFirst }: { story: Story; isFirst: boolean }) {
  return (
    <button
      type="button"
      className="flex flex-col items-center gap-1.5 w-[68px] shrink-0"
    >
      <div
        className={cn(
          'w-16 h-16 rounded-full p-[2px] flex items-center justify-center',
          isFirst
            ? 'bg-wisteria'
            : story.hasUnseen
              ? 'bg-gradient-to-tr from-primary via-accent to-secondary'
              : 'bg-border',
        )}
      >
        <div className="w-full h-full rounded-full bg-surface p-[2px]">
          {isFirst ? (
            <div className="w-full h-full rounded-full bg-wisteria flex items-center justify-center text-primary">
              <Plus size={22} strokeWidth={2.4} />
            </div>
          ) : (
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-[14px]"
              style={{ background: story.avatar.bg }}
            >
              {story.avatar.initials}
            </div>
          )}
        </div>
      </div>
      <span className="text-[11px] font-semibold text-ink truncate w-full text-center leading-tight">
        {story.name}
      </span>
    </button>
  );
}
