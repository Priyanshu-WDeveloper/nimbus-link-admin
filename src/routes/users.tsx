import { UserPlus } from 'lucide-react';
import { AdminShell } from '@/components/admin/admin-shell';
import {
  StatusBadge,
  type Status,
} from '@/components/admin/status-badge';

type User = {
  name: string;
  email: string;
  role: string;
  status: Status;
  last: string;
};

const users: User[] = [
  { name: 'Admin', email: 'admin@nimbuslink.net', role: 'Super Admin', status: 'Active', last: '30 May, 2026' },
  { name: 'John Doe', email: 'john.doe@nimbuslink.net', role: 'Manager', status: 'Active', last: '29 May, 2026' },
  { name: 'Priya Nair', email: 'priya.nair@nimbuslink.net', role: 'Support', status: 'Active', last: '29 May, 2026' },
  { name: 'Amit Verma', email: 'amit.verma@nimbuslink.net', role: 'Engineer', status: 'Active', last: '28 May, 2026' },
  { name: 'Simran Kaur', email: 'simran.kaur@nimbuslink.net', role: 'Support', status: 'Inactive', last: '20 May, 2026' },
];

export default function UsersPage() {
  return (
    <AdminShell title="Users & Roles">
      <div className="panel-surface">
        <div className="flex items-center justify-between border-b border-border px-4 pt-4 pb-3">
          <div className="relative flex items-center gap-1">
            <button className="relative px-3 py-1.5 text-xs font-medium text-foreground transition hover:text-foreground">All Users<span className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-brand" /></button>
            <button className="relative px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:text-foreground">Roles</button>
          </div>
          <button className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[image:var(--gradient-brand)] px-3 text-xs font-semibold text-brand-foreground shadow-[var(--shadow-glow)] transition active:scale-[0.97]">
            <UserPlus className="h-4 w-4" /> Add User
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-2 py-3 font-medium">Name</th>
                <th className="px-2 py-3 font-medium">Email</th>
                <th className="px-2 py-3 font-medium">Role</th>
                <th className="px-2 py-3 font-medium">Status</th>
                <th className="px-2 py-3 font-medium">Last Active</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u.email} className="border-t border-border transition hover:bg-panel-2">
                  <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-[image:var(--gradient-brand)] text-xs font-semibold text-brand-foreground">{u.name[0]}</div>
                      <span className="font-medium text-foreground">{u.name}</span>
                    </div>
                  </td>
                  <td className="px-2 py-3 text-muted-foreground">{u.email}</td>
                  <td className="px-2 py-3">
                    <span className="rounded-md bg-panel-2 px-2 py-0.5 text-[11px] font-semibold text-foreground ring-1 ring-border">{u.role}</span>
                  </td>
                  <td className="px-2 py-3"><StatusBadge status={u.status} /></td>
                  <td className="px-2 py-3 text-muted-foreground">{u.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t border-border p-4 text-xs text-muted-foreground">Showing 1 to 5 of 5 users</div>
      </div>
    </AdminShell>
  );
}
