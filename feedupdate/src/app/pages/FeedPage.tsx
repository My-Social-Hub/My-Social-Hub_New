import { useState } from 'react';
import { FeedTopBar } from '../components/feed/FeedTopBar';
import { FeedTabs, type FeedTab } from '../components/feed/FeedTabs';
import { StoriesRail } from '../components/feed/StoriesRail';
import { ComposerTrigger } from '../components/feed/ComposerTrigger';
import { PostCard } from '../components/feed/PostCard';
import { posts, stories } from '@/lib/mock-feed';

const ME = { initials: 'AM', bg: '#7B4FD8' };

export function FeedPage() {
  const [tab, setTab] = useState<FeedTab>('foryou');

  return (
    <div className="min-h-full max-w-[640px] mx-auto bg-bg">
      <FeedTopBar />
      <FeedTabs active={tab} onChange={setTab} />
      <StoriesRail stories={stories} />
      <ComposerTrigger me={ME} />

      <div className="bg-surface mt-2 border-y border-border divide-y divide-border">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="py-10 text-center text-[13px] text-muted">
        <span aria-hidden className="text-[18px] block mb-1">🦋</span>
        You&rsquo;re all caught up
      </div>
    </div>
  );
}
