import { ImageIcon, Video, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar } from './Avatar';
import type { AvatarSeed } from '@/lib/mock-feed';

type Props = { me: AvatarSeed };

export function ComposerTrigger({ me }: Props) {
  return (
    <Link
      to="/app/studio/post"
      className="mx-4 mt-3 mb-2 flex items-center gap-3 bg-surface rounded-xl border border-border px-3.5 py-3 shadow-card hover:shadow-lifted transition-shadow"
    >
      <Avatar seed={me} size={36} />
      <span className="flex-1 text-[14px] text-muted font-medium">
        What&rsquo;s on your mind?
      </span>
      <div className="flex items-center gap-1 text-muted">
        <span className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-wisteria transition-colors">
          <ImageIcon size={18} strokeWidth={2.2} />
        </span>
        <span className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-wisteria transition-colors">
          <Video size={18} strokeWidth={2.2} />
        </span>
        <span className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-wisteria transition-colors">
          <Smile size={18} strokeWidth={2.2} />
        </span>
      </div>
    </Link>
  );
}
