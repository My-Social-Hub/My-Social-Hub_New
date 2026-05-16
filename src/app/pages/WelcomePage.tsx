import { Link } from 'react-router-dom';
import { Butterfly } from '@/app/components/Butterfly';

export function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-[#6B3FE0] to-secondary text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center mb-6 shadow-modal">
        <Butterfly size={48} />
      </div>
      <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
        My Social Hub
      </h1>
      <p className="text-white/85 max-w-md text-[15px] leading-relaxed mb-8">
        A professional community platform — global feed, hubs, live streams, marketplace, and creator studio. All in one place.
      </p>
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Link
          to="/app/feed"
          className="h-12 rounded-2xl bg-white text-primary font-bold flex items-center justify-center shadow-lifted hover:bg-white/95 transition-colors"
        >
          Get started
        </Link>
        <Link
          to="/auth/login"
          className="h-12 rounded-2xl border border-white/40 text-white font-semibold flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          I have an account
        </Link>
      </div>
      <p className="mt-10 text-[12px] text-white/60">Foundation scaffold · Wisteria Wash tokens</p>
    </div>
  );
}
