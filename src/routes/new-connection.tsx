import { useState } from 'react';
import { Download, Search } from 'lucide-react';
import { AdminShell } from '@/components/admin/admin-shell';
import {
  StatusBadge,
  type Status,
} from '@/components/admin/status-badge';

type Row = {
  name: string;
  phone: string;
  service: string;
  area: string;
  date: string;
  status: Status;
};

const rows: Row[] = [
  { name: 'Rahul Sharma', phone: '98765 43210', service: 'Home Internet', area: 'Ranjit Avenue', date: '30 May, 2026', status: 'New' },
  { name: 'Priya Verma', phone: '98711 22334', service: 'Fiber Broadband', area: 'Model Town', date: '30 May, 2026', status: 'In Progress' },
  { name: 'Aman Kumar', phone: '98123 45678', service: 'Business Internet', area: 'Civil Lines', date: '29 May, 2026', status: 'Pending' },
  { name: 'Neha Singh', phone: '98765 66778', service: 'Home Internet', area: 'Amritsar Cantt', date: '29 May, 2026', status: 'Completed' },
  { name: 'Karan Patel', phone: '98221 33445', service: 'Fiber Broadband', area: 'Green Avenue', date: '28 May, 2026', status: 'New' },
  { name: 'Pooja Rani', phone: '98722 77889', service: 'Home Internet', area: 'Raja Sansi', date: '28 May, 2026', status: 'In Progress' },
  { name: 'Gaurav Bansal', phone: '98790 12345', service: 'Business Internet', area: 'Hall Bazaar', date: '27 May, 2026', status: 'Pending' },
];

export default function NewConnectionPage() {
  const [tab, setTab] = useState<'all' | 'assigned'>('all');

  return (
    <AdminShell title="New Connection">
      <div className="panel-surface">
        <div className="flex items-center gap-2 border-b border-border px-4 pt-4">
          <TabBtn active={tab === 'all'} onClick={() => setTab('all')}>All Requests</TabBtn>
          <TabBtn active={tab === 'assigned'} onClick={() => setTab('assigned')}>Assigned</TabBtn>
        </div>
        <div className="flex flex-wrap items-center gap-3 border-b border-border p-4">
          <select className="h-9 rounded-lg border border-border bg-panel-2 px-3 text-sm text-foreground focus:border-brand focus:outline-none">
            <option>All Status</option>
            <option>New</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
          <input defaultValue="01 May, 2026 – 31 May, 2026" className="h-9 w-56 rounded-lg border border-border bg-panel-2 px-3 text-sm text-foreground focus:border-brand focus:outline-none" />
          <div className="relative min-w-[220px] flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Search by name, phone or area…" className="h-9 w-full rounded-lg border border-border bg-panel-2 pl-9 pr-3 text-sm text-foreground focus:border-brand focus:outline-none" />
          </div>
          <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-panel-2 px-3 text-sm font-medium text-foreground hover:bg-panel">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-2 py-3 font-medium">Name</th>
                <th className="px-2 py-3 font-medium">Phone</th>
                <th className="px-2 py-3 font-medium">Service</th>
                <th className="px-2 py-3 font-medium">Area</th>
                <th className="px-2 py-3 font-medium">Date</th>
                <th className="px-2 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.phone} className="border-t border-border transition hover:bg-panel-2">
                  <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                  <td className="px-2 py-3 font-medium text-foreground">{r.name}</td>
                  <td className="px-2 py-3 text-muted-foreground">{r.phone}</td>
                  <td className="px-2 py-3">{r.service}</td>
                  <td className="px-2 py-3 text-muted-foreground">{r.area}</td>
                  <td className="px-2 py-3 text-muted-foreground">{r.date}</td>
                  <td className="px-2 py-3"><StatusBadge status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-border p-4 text-xs text-muted-foreground">
          <span>Showing 1 to 7 of 128 entries</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5, '…', 19].map((n, i) => (
              <button key={i} className={`h-8 min-w-8 rounded-md px-2 text-xs font-medium ${n === 1 ? 'bg-brand text-brand-foreground' : 'border border-border bg-panel-2 text-foreground hover:bg-panel'}`}>{n}</button>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function TabBtn({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`relative pb-3 pt-1 text-sm font-medium transition ${active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
      {children}
      {active && <span className="absolute -bottom-px left-0 right-0 h-0.5 rounded-full bg-brand" />}
    </button>
  );
}
