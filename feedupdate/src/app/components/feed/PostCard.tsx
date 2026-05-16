import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, BadgeCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar } from './Avatar';
import type { Post } from '@/lib/mock-feed';

const compact = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(n >= 10_000 ? 0 : 1).replace(/\.0$/, '')}k` : `${n}`;

export function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="bg-surface px-4 py-3.5">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2.5">
        <Avatar seed={post.author.avatar} size={40} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[14px] font-bold text-ink leading-tight">{post.author.name}</span>
            {post.author.verified && <BadgeCheck size={14} className="text-primary" />}
          </div>
          <div className="flex items-center gap-1 text-[12px] text-muted leading-tight">
            <span>@{post.author.handle}</span>
            {post.hub && (
              <>
                <span aria-hidden>·</span>
                <span className="text-primary font-semibold truncate">{post.hub.name}</span>
              </>
            )}
            <span aria-hidden>·</span>
            <span>{post.timeAgo}</span>
          </div>
        </div>
        <button
          type="button"
          aria-label="More options"
          className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:bg-wisteria transition-colors"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>

      {/* Body */}
      <p className="text-[15px] leading-relaxed text-ink whitespace-pre-wrap">{post.body}</p>

      {/* Media */}
      {post.media && (
        <div
          className="mt-3 rounded-xl overflow-hidden border border-border aspect-[16/10] flex items-end p-4"
          style={{
            backgroundImage: `linear-gradient(135deg, ${post.media.from} 0%, ${post.media.to} 100%)`,
          }}
        >
          {post.media.label && (
            <span className="text-white text-[13px] font-bold drop-shadow-sm">{post.media.label}</span>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="mt-3 -mx-1 flex items-center justify-between">
        <ActionButton
          icon={
            <Heart
              size={20}
              strokeWidth={2.2}
              className={cn('transition-transform', liked && 'fill-danger text-danger scale-110')}
            />
          }
          label={compact(post.hearts + (liked ? 1 : 0))}
          active={liked}
          onClick={() => setLiked((v) => !v)}
          activeColor="text-danger"
        />
        <ActionButton
          icon={<MessageCircle size={20} strokeWidth={2.2} />}
          label={compact(post.comments)}
        />
        <ActionButton
          icon={<Share2 size={20} strokeWidth={2.2} />}
          label={compact(post.shares)}
        />
        <ActionButton
          icon={
            <Bookmark
              size={20}
              strokeWidth={2.2}
              className={cn(saved && 'fill-primary text-primary')}
            />
          }
          label=""
          active={saved}
          onClick={() => setSaved((v) => !v)}
          activeColor="text-primary"
        />
      </div>
    </article>
  );
}

function ActionButton({
  icon,
  label,
  active,
  onClick,
  activeColor,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  activeColor?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex items-center gap-1.5 px-2 py-1.5 rounded-full text-[13px] font-semibold transition-colors',
        active ? activeColor : 'text-muted hover:bg-wisteria',
      )}
    >
      {icon}
      {label && <span className="tabular-nums">{label}</span>}
    </button>
  );
}
