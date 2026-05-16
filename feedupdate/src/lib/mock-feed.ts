export type AvatarSeed = {
  initials: string;
  bg: string;
};

export type Story = {
  id: string;
  name: string;
  avatar: AvatarSeed;
  hasUnseen: boolean;
};

export type Post = {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: AvatarSeed;
    verified?: boolean;
  };
  hub?: { name: string };
  timeAgo: string;
  body: string;
  media?: { kind: 'gradient'; from: string; to: string; label?: string };
  hearts: number;
  comments: number;
  shares: number;
};

const palette = ['#7B4FD8', '#9C4FE0', '#4F46E5', '#6366F1', '#A855F7', '#8B5CF6', '#EC4899'];
const seed = (i: string, initials: string): AvatarSeed => ({
  initials,
  bg: palette[i.charCodeAt(0) % palette.length],
});

export const stories: Story[] = [
  { id: 'you', name: 'Your story', avatar: seed('Y', 'AM'), hasUnseen: false },
  { id: 's1', name: 'Sarah K.', avatar: seed('S', 'SK'), hasUnseen: true },
  { id: 's2', name: 'Emma R.', avatar: seed('E', 'ER'), hasUnseen: true },
  { id: 's3', name: 'Diego A.', avatar: seed('D', 'DA'), hasUnseen: true },
  { id: 's4', name: 'Mia C.', avatar: seed('M', 'MC'), hasUnseen: true },
  { id: 's5', name: 'Liam P.', avatar: seed('L', 'LP'), hasUnseen: false },
  { id: 's6', name: 'Noa F.', avatar: seed('N', 'NF'), hasUnseen: true },
  { id: 's7', name: 'Ravi S.', avatar: seed('R', 'RS'), hasUnseen: false },
];

export const posts: Post[] = [
  {
    id: 'p1',
    author: { name: 'Sarah Kim', handle: 'sarahk', avatar: seed('S', 'SK'), verified: true },
    hub: { name: 'UI/UX Masters' },
    timeAgo: '2h',
    body: "Just shipped a redesign of our onboarding flow — drop-off went from 38% to 11% in two weeks. Happy to share the before/after if anyone's curious 🦋",
    hearts: 1284,
    comments: 84,
    shares: 22,
  },
  {
    id: 'p2',
    author: { name: 'Diego Alvarez', handle: 'diegoa', avatar: seed('D', 'DA') },
    timeAgo: '4h',
    body: "Hot take: 'best practices' are usually 'practices that were best for a specific context that no longer applies to yours'. Read your own data.",
    media: { kind: 'gradient', from: '#7B4FD8', to: '#4F46E5', label: 'Design systems · talk replay' },
    hearts: 642,
    comments: 47,
    shares: 14,
  },
  {
    id: 'p3',
    author: { name: 'Emma Reyes', handle: 'emmar', avatar: seed('E', 'ER'), verified: true },
    hub: { name: 'Product Design' },
    timeAgo: '6h',
    body: "Looking for designers who've worked on community products. Doing research for a piece on how to make 'professional' feel warm. DMs open.",
    hearts: 318,
    comments: 56,
    shares: 8,
  },
  {
    id: 'p4',
    author: { name: 'Mia Chen', handle: 'miac', avatar: seed('M', 'MC') },
    hub: { name: 'Side Projects' },
    timeAgo: '1d',
    body: "Three months into building my SaaS solo — finally hit $1k MRR last week. AMA about marketing as a designer who hates marketing.",
    media: { kind: 'gradient', from: '#A855F7', to: '#9C4FE0', label: '$0 → $1k MRR in 90 days' },
    hearts: 2104,
    comments: 189,
    shares: 76,
  },
  {
    id: 'p5',
    author: { name: 'Ravi Shah', handle: 'ravis', avatar: seed('R', 'RS') },
    timeAgo: '1d',
    body: "Reminder that 'I don't know yet' is a complete answer in a design review. Stop reaching for explanations you don't believe.",
    hearts: 891,
    comments: 32,
    shares: 41,
  },
];
