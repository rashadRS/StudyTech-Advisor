import { Device } from '@/lib/data/devices';

export function ComparisonTable({ devices }: { devices: Device[] }) {
  if (devices.length < 2) return null;
  const fields: (keyof Device)[] = ['brand', 'model', 'ram', 'cpu', 'storage', 'gpu', 'battery', 'display', 'weight', 'os', 'price_myr'];
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            <th className="p-3 text-start">Spec</th>
            {devices.map((d) => <th key={d.id} className="p-3 text-start">{d.brand} {d.model}</th>)}
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr key={String(field)} className="border-t border-slate-200 dark:border-slate-700">
              <td className="p-3 font-medium">{field}</td>
              {devices.map((d) => <td key={d.id + String(field)} className="p-3">{String(d[field])}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
