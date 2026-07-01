import { cn } from '@/lib/utils';

export type Status =
  | 'New'
  | 'In Progress'
  | 'Pending'
  | 'Completed'
  | 'Replied'
  | 'Active'
  | 'Inactive';

const styles: Record<Status, string> = {
  New: 'bg-info/15 text-info ring-info/30',
  'In Progress': 'bg-warning/15 text-warning ring-warning/30',
  Pending: 'bg-warning/15 text-warning ring-warning/30',
  Completed: 'bg-success/15 text-success ring-success/30',
  Replied: 'bg-success/15 text-success ring-success/30',
  Active: 'bg-success/15 text-success ring-success/30',
  Inactive: 'bg-muted text-muted-foreground ring-border',
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset',
        styles[status],
      )}
    >
      {status}
    </span>
  );
}
