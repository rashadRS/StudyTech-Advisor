import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Device } from '@/lib/data/devices';

export function RecommendationCard({ device, match, reason, onCompare, onFavorite }: { device: Device; match: number; reason: string; onCompare: () => void; onFavorite: () => void }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="text-lg font-semibold">{device.brand} {device.model}</h4>
          <p className="text-sm text-slate-600 dark:text-slate-300">{reason}</p>
        </div>
        <span className="rounded-full bg-teal-100 px-3 py-1 text-sm font-bold text-teal-800 dark:bg-teal-900/30 dark:text-teal-200">{match}%</span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <p><strong>RAM:</strong> {device.ram}</p><p><strong>CPU:</strong> {device.cpu}</p>
        <p><strong>Storage:</strong> {device.storage}</p><p><strong>GPU:</strong> {device.gpu}</p>
        <p><strong>Display:</strong> {device.display}</p><p><strong>Battery:</strong> {device.battery}</p>
        <p><strong>OS:</strong> {device.os}</p><p><strong>Price:</strong> RM {device.price_myr}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button asLink href={device.buy_link} variant="primary">View Product</Button>
        <Button variant="ghost" onClick={onCompare}>Compare</Button>
        <Button variant="secondary" onClick={onFavorite}>Save to Favorites</Button>
      </div>
    </Card>
  );
}
