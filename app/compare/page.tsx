import { DeviceComparisonTable } from '@/components/ui/common';
import { devices } from '@/data/devices';

export default function ComparePage() {
  return <div><h1 className="text-3xl font-bold mb-6">Compare Devices</h1><DeviceComparisonTable selected={devices.slice(0, 3)} /></div>;
}
