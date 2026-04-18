import { ComparisonTable } from '@/components/quiz/comparison-table';
import { devices } from '@/lib/data/devices';

export default function ComparePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Compare Devices</h1>
      <ComparisonTable devices={devices.slice(0, 3)} />
    </div>
  );
}
