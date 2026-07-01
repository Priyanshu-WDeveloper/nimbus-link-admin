import { useState } from 'react';
import { Download, Search } from 'lucide-react';
import { AdminShell } from '@/components/admin/admin-shell';
import {
  StatusBadge,
  type Status,
} from '@/components/admin/status-badge';

type Msg = {
  name: string;
  email: string;
  subject: string;
  date: string;
  status: Status;
};

const messages: Msg[] = [
  { name: 'Vikram Singh', email: 'vikram.singh@email.com', subject: 'Plan Availability', date: '30 May, 2026 · 11:45 AM', status: 'New' },
  { name: 'Simran Kaur', email: 'simran.kaur@email.com', subject: 'Installation Support', date: '30 May, 2026 · 10:30 AM', status: 'In Progress' },
  { name: 'Amit Jain', email: 'amit.jain@email.com', subject: 'Static IP Request', date: '29 May, 2026 · 04:20 PM', status: 'Replied' },
  { name: 'Ritika Mehra', email: 'ritika.mehra@email.com', subject: 'Area Availability', date: '29 May, 2026 · 02:15 PM', status: 'New' },
  { name: 'Karan Arora', email: 'karan.arora@email.com', subject: 'Billing Query', date: '28 May, 2026 · 09:05 PM', status: 'Replied' },
  { name: 'Pooja Sharma', email: 'pooja.sharma@email.com', subject: 'New Connection', date: '28 May, 2026 · 11:20 AM', status: 'New' },
  { name: 'Harpreet Singh', email: 'harpreet.singh@email.com', subject: 'Router Issue', date: '27 May, 2026 · 06:10 PM', status: 'Replied' },
];

export default function ContactUsPage() {
  const [tab, setTab] = useState<'all' | 'archived'>('all');

  return (
    <AdminShell title="Contact Us">
      <div className="panel-surface">
        <div className="flex items-center gap-2 border-b border-border px-4 pt-4">
          <TabBtn active={tab === 'all'} onClick={() => setTab('all')}>All Messages</TabBtn>
          <TabBtn active={tab === 'archived'} onClick={() => setTab('archived')}>Archived</TabBtn>
        </div>
        <div className="flex flex-wrap items-center gap-3 border-b border-border p-4">
          <select className="h-9 rounded-lg border border-border bg-panel-2 px-3 text-sm text-foreground transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30">
            <option>All Status</option>
            <option>New</option>
            <option>In Progress</option>
            <option>Replied</option>
          </select>
          <input defaultValue="01 May, 2026 – 31 May, 2026" className="h-9 w-56 rounded-lg border border-border bg-panel-2 px-3 text-sm text-foreground transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
          <div className="relative flex-1 min-w-[220px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Search by name, email or message…" className="h-9 w-full rounded-lg border border-border bg-panel-2 pl-9 pr-3 text-sm text-foreground transition focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
          </div>
          <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-border bg-panel-2 px-3 text-sm font-medium text-foreground transition hover:bg-panel active:scale-[0.97]">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-2 py-3 font-medium">Name</th>
                <th className="px-2 py-3 font-medium">Email</th>
                <th className="px-2 py-3 font-medium">Subject</th>
                <th className="px-2 py-3 font-medium">Date</th>
                <th className="px-2 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((m, i) => (
                <tr key={m.email} className="border-t border-border transition hover:bg-panel-2">
                  <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                  <td className="px-2 py-3 font-medium text-foreground">{m.name}</td>
                  <td className="px-2 py-3 text-muted-foreground">{m.email}</td>
                  <td className="px-2 py-3 text-foreground">{m.subject}</td>
                  <td className="px-2 py-3 text-muted-foreground">{m.date}</td>
                  <td className="px-2 py-3"><StatusBadge status={m.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-border p-4 text-xs text-muted-foreground">
          <span>Showing 1 to 7 of 42 entries</span>
          <Pagination />
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

function Pagination() {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} className={`h-8 min-w-8 rounded-md px-2 text-xs font-medium transition active:scale-[0.97] ${n === 1 ? 'bg-brand text-brand-foreground' : 'border border-border bg-panel-2 text-foreground hover:bg-panel'}`}>{n}</button>
      ))}
    </div>
  );
}
