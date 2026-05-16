import { cn } from '@/lib/utils';
import type { AvatarSeed } from '@/lib/mock-feed';

type Props = {
  seed: AvatarSeed;
  size?: number;
  className?: string;
  ring?: boolean;
};

export function Avatar({ seed, size = 40, className, ring }: Props) {
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center text-white font-bold select-none shrink-0',
        ring && 'ring-2 ring-white',
        className,
      )}
      style={{
        width: size,
        height: size,
        background: seed.bg,
        fontSize: Math.round(size * 0.38),
      }}
    >
      {seed.initials}
    </div>
  );
}
