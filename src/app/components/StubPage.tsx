import { Butterfly } from './Butterfly';

type Props = {
  title: string;
  description?: string;
};

export function StubPage({ title, description }: Props) {
  return (
    <div className="min-h-[calc(100vh-0px)] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-wisteria flex items-center justify-center mb-4">
        <Butterfly size={36} />
      </div>
      <h1 className="font-heading text-2xl font-bold mb-2">{title}</h1>
      <p className="text-muted max-w-md text-[14px] leading-relaxed">
        {description ?? 'This screen will be implemented in a follow-up pass from the design handoff.'}
      </p>
      <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-wisteria text-primary text-[12px] font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        Foundation in place — screen pending
      </div>
    </div>
  );
}
