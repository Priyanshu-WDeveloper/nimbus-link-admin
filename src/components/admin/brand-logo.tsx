import { Wifi } from 'lucide-react';
import { cn } from '@/lib/utils';

export function BrandLogo({
  className,
  subtitle = 'Admin Panel',
}: {
  className?: string;
  subtitle?: string;
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] shadow-[var(--shadow-glow)]">
        <Wifi
          className="h-5 w-5 text-brand-foreground"
          strokeWidth={2.5}
        />
      </div>
      <div className="leading-tight">
        <div className="font-display text-[15px] font-semibold text-foreground">
          NimbusLink <span className="text-brand">Fiber</span>
        </div>
        <div className="text-[11px] font-medium text-muted-foreground">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
