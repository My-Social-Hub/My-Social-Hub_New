import { cn } from '@/lib/utils';

type Props = {
  size?: number;
  white?: boolean;
  className?: string;
};

/**
 * Brand mark: speech-bubble + silhouette butterfly on deep purple.
 * The official logo is a PNG (never recreate as inline SVG — per design handoff).
 */
export function Butterfly({ size = 32, white = false, className }: Props) {
  return (
    <img
      src={white ? '/butterfly-white.png' : '/butterfly.png'}
      alt="My Social Hub"
      width={size}
      height={size}
      className={cn('inline-block select-none', className)}
      draggable={false}
    />
  );
}
