import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Tone = 'brand' | 'success' | 'info' | 'warning';

const toneStyles: Record<Tone, string> = {
  brand: 'bg-brand/15 text-brand',
  success: 'bg-success/15 text-success',
  info: 'bg-info/15 text-info',
  warning: 'bg-warning/15 text-warning',
};

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  tone = 'brand',
}: {
  label: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  tone?: Tone;
}) {
  return (
    <div className="panel-surface flex items-start gap-4 p-5 transition hover:border-brand/30 hover:shadow-md">
      <div
        className={cn(
          'grid h-14 w-14 place-items-center rounded-xl',
          toneStyles[tone],
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 font-display text-3xl font-semibold tracking-tight text-foreground">
          {value}
        </div>
        <div className="mt-1 flex items-center gap-1 text-xs font-medium text-success">
          <ArrowUpRight className="h-3.5 w-3.5" />
          {delta}
          <span className="font-normal text-muted-foreground">
            this month
          </span>
        </div>
      </div>
    </div>
  );
}
