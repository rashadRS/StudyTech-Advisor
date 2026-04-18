import { Laptop, Sparkles, GraduationCap } from 'lucide-react';

export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <div className={`${className} relative rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-md`}>
      <Laptop size={16} className="absolute top-2 left-2" />
      <GraduationCap size={12} className="absolute bottom-1 right-1" />
      <Sparkles size={10} className="absolute top-1 right-1" />
    </div>
  );
}
