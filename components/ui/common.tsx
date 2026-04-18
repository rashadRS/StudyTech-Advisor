'use client';

import { motion } from 'framer-motion';
import { Device } from '@/lib/types';
import Link from 'next/link';

export function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return <motion.div whileHover={{ y: -4 }} className="card p-6"><div className="text-primary mb-3">{icon}</div><h3 className="font-semibold mb-2">{title}</h3><p className="text-sm text-slate-600 dark:text-slate-300">{desc}</p></motion.div>;
}

export function RecommendationCard({ device, match }: { device: Device; match: number }) {
  return <div className="card p-5 space-y-2"><h3 className="font-semibold">{device.brand} {device.model}</h3><p className="text-xs text-teal-600">Match {match}%</p><p className="text-sm">{device.description}</p><p className="text-sm">{device.ram} • {device.cpu} • {device.storage} • {device.gpu}</p><p className="font-semibold">RM {device.price_myr}</p><div className="flex gap-2"><Link href={device.buy_link} className="btn-primary text-xs" target="_blank">View Product</Link><button className="btn-secondary text-xs">Save</button></div></div>;
}

export function DeviceComparisonTable({ selected }: { selected: Device[] }) {
  if (!selected.length) return <EmptyState title="No devices selected" />;
  return <div className="overflow-auto card p-4"><table className="w-full text-sm"><thead><tr className="text-left"><th>Device</th><th>CPU</th><th>RAM</th><th>GPU</th><th>Battery</th><th>Price</th></tr></thead><tbody>{selected.map(d => <tr key={d.id} className="border-t border-slate-200 dark:border-slate-800"><td>{d.brand} {d.model}</td><td>{d.cpu}</td><td>{d.ram}</td><td>{d.gpu}</td><td>{d.battery}</td><td>RM {d.price_myr}</td></tr>)}</tbody></table></div>;
}

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return <div className="space-y-3">{items.map(i => <details className="card p-4" key={i.q}><summary className="font-medium cursor-pointer">{i.q}</summary><p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{i.a}</p></details>)}</div>;
}

export function EmptyState({ title }: { title: string }) { return <div className="card p-10 text-center text-slate-500">{title}</div>; }
export function LoadingState() { return <div className="card p-10 text-center animate-pulse">Loading...</div>; }
