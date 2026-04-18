import { basics } from '@/data/content';

export default function BasicsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Learn Device Basics</h1>
      <div className="grid md:grid-cols-2 gap-4">{basics.map((b) => <article key={b.key} className="card p-5"><h2 className="font-semibold mb-2">{b.key}</h2><p className="text-sm mb-2">{b.explanation}</p><p className="text-sm"><b>Why it matters:</b> {b.matters}</p><p className="text-sm"><b>Who needs more:</b> {b.needs}</p><p className="text-sm text-teal-600 mt-2">{b.levels}</p></article>)}</div>
    </div>
  );
}
