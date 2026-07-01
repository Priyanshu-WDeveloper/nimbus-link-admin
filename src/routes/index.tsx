import { Link } from 'react-router-dom';
import {
  Users as UsersIcon,
  MessageSquare,
  Eye,
  FileText,
  Settings2,
  Radio,
  Image as ImageIcon,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { AdminShell } from '@/components/admin/admin-shell';
import { StatCard } from '@/components/admin/stat-card';
import {
  StatusBadge,
  type Status,
} from '@/components/admin/status-badge';

const areaData = [
  { day: '1 May', v: 18 },
  { day: '6 May', v: 26 },
  { day: '11 May', v: 22 },
  { day: '16 May', v: 34 },
  { day: '21 May', v: 30 },
  { day: '26 May', v: 40 },
  { day: '31 May', v: 44 },
];

const BRAND = '#3ec9d6';
const INFO = '#8b7cf6';
const WARNING = '#f5b544';
const MUTED = '#6b7a8f';

const pieData = [
  { name: 'New Connection', value: 60, color: INFO },
  { name: 'Contact Us', value: 42, color: BRAND },
  { name: 'Support', value: 30, color: WARNING },
  { name: 'Other', value: 18, color: MUTED },
];

const recentConnections: {
  name: string;
  phone: string;
  service: string;
  status: Status;
  date: string;
}[] = [
  {
    name: 'Rahul Sharma',
    phone: '98765 43210',
    service: 'Home Internet',
    status: 'New',
    date: '30 May, 2026',
  },
  {
    name: 'Priya Verma',
    phone: '98711 22334',
    service: 'Fiber Broadband',
    status: 'In Progress',
    date: '30 May, 2026',
  },
  {
    name: 'Aman Kumar',
    phone: '98123 45678',
    service: 'Business Internet',
    status: 'Pending',
    date: '29 May, 2026',
  },
  {
    name: 'Neha Singh',
    phone: '98765 66778',
    service: 'Home Internet',
    status: 'Completed',
    date: '29 May, 2026',
  },
  {
    name: 'Karan Patel',
    phone: '98221 33445',
    service: 'Fiber Broadband',
    status: 'New',
    date: '28 May, 2026',
  },
];

const messages = [
  {
    initial: 'V',
    name: 'Vikram Singh',
    preview: 'I want to know more about 1 Gbps plan availability…',
    meta: '30 May, 2026 · 11:45 AM',
  },
  {
    initial: 'S',
    name: 'Simran Kaur',
    preview: 'Installation not completed yet. Need support.',
    meta: '30 May, 2026 · 10:30 AM',
  },
  {
    initial: 'A',
    name: 'Amit Jain',
    preview: 'Requesting static IP for our office connection.',
    meta: '29 May, 2026 · 04:20 PM',
  },
  {
    initial: 'R',
    name: 'Ritika Mehra',
    preview: 'Do you provide connection in Model Town area?',
    meta: '29 May, 2026 · 02:15 PM',
  },
];

export default function DashboardPage() {
  return (
    <AdminShell title="Dashboard">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="New Connections"
          value="128"
          delta="18%"
          icon={UsersIcon}
          tone="info"
        />
        <StatCard
          label="Contact Messages"
          value="42"
          delta="12%"
          icon={MessageSquare}
          tone="success"
        />
        <StatCard
          label="Website Visits"
          value="3,245"
          delta="24%"
          icon={Eye}
          tone="brand"
        />
        <StatCard
          label="Total Enquiries"
          value="170"
          delta="16%"
          icon={FileText}
          tone="warning"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="panel-surface">
          <div className="flex items-center justify-between px-6 pt-5">
            <h2 className="text-base font-semibold text-foreground">
              New Connections Overview
            </h2>
            <button className="flex items-center gap-1 rounded-md border border-border bg-panel-2 px-2.5 py-1 text-xs font-medium text-muted-foreground transition hover:text-foreground active:scale-[0.97]">
              This Month{' '}
              <ChevronRight className="h-3 w-3 rotate-90" />
            </button>
          </div>
          <div className="px-4 pb-5 pt-4">
            <div className="h-[240px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={areaData}
                  margin={{ left: -12, right: 8, top: 8, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="areaFill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor={BRAND}
                        stopOpacity={0.55}
                      />
                      <stop
                        offset="100%"
                        stopColor={BRAND}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 6"
                    stroke="var(--color-border)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="day"
                    stroke="var(--color-muted-foreground)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="var(--color-muted-foreground)"
                    fontSize={11}
                    tickLine={false}
                    axisLine={false}
                    width={30}
                  />
                  <Tooltip
                    contentStyle={{
                      background: 'var(--color-panel)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="v"
                    stroke={BRAND}
                    strokeWidth={2.5}
                    fill="url(#areaFill)"
                    dot={{ r: 3, fill: BRAND }}
                    activeDot={{ r: 5 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="panel-surface">
          <div className="px-6 pt-5">
            <h2 className="text-base font-semibold text-foreground">
              Enquiries by Type
            </h2>
          </div>
          <div className="flex items-center gap-3 px-4 pb-5 pt-4">
            <div className="h-[260px] w-[220px] shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((d) => (
                      <Cell key={d.name} fill={d.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="space-y-2 text-xs">
              {pieData.map((d) => {
                const total = pieData.reduce(
                  (a, b) => a + b.value,
                  0,
                );
                const pct = Math.round((d.value / total) * 100);
                return (
                  <li
                    key={d.name}
                    className="flex items-center gap-2"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: d.color }}
                    />
                    <span className="text-foreground">{d.name}</span>
                    <span className="ml-auto tabular-nums text-muted-foreground">
                      {d.value} ({pct}%)
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 panel-surface p-5">
        <h2 className="mb-4 text-base font-semibold text-foreground">
          Quick Actions
        </h2>
        <div className="grid grid-cols-5 gap-3">
          <QuickAction to="/website-configuration" icon={Settings2} title="Website Configuration" tone="brand" />
          <QuickAction to="/contact-us" icon={MessageSquare} title="View Contact Messages" tone="success" />
          <QuickAction to="/new-connection" icon={Radio} title="View New Connections" tone="info" />
          <QuickAction to="/media-library" icon={ImageIcon} title="Media Library" tone="warning" />
          <QuickAction to="#" icon={ExternalLink} title="View Website" tone="accent" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="panel-surface">
          <div className="flex items-center justify-between px-6 pt-5">
            <h2 className="text-base font-semibold text-foreground">
              Recent New Connections
            </h2>
            <Link
              to="/new-connection"
              className="text-xs font-medium text-brand transition hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="mt-4 overflow-x-auto px-2 pb-2">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-4 py-2 font-medium">#</th>
                  <th className="px-2 py-2 font-medium">Name</th>
                  <th className="px-2 py-2 font-medium">Phone</th>
                  <th className="px-2 py-2 font-medium">Service</th>
                  <th className="px-2 py-2 font-medium">Status</th>
                  <th className="px-2 py-2 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {recentConnections.map((r, i) => (
                  <tr key={r.name} className="border-t border-border">
                    <td className="px-4 py-3 text-muted-foreground">
                      {i + 1}
                    </td>
                    <td className="px-2 py-3 font-medium">
                      {r.name}
                    </td>
                    <td className="px-[6px] py-5 text-muted-foreground">
                      {r.phone}
                    </td>
                    <td className="px-2 py-3">{r.service}</td>
                    <td className="px-2 py-3">
                      <StatusBadge status={r.status} />
                    </td>
                    <td className="px-2 py-3 text-muted-foreground">
                      {r.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel-surface flex flex-col">
          <div className="flex items-center justify-between px-6 pt-5">
            <h2 className="text-base font-semibold text-foreground">
              Recent Contact Messages
            </h2>
            <Link
              to="/contact-us"
              className="text-xs font-medium text-brand transition hover:underline"
            >
              View All
            </Link>
          </div>
          <ul className="flex-1 divide-y divide-border px-2 py-2">
            {messages.map((m) => (
              <li key={m.name}>
                <button className="flex w-full items-start gap-3 rounded-lg px-4 py-3 text-left transition hover:bg-panel-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panel-2 text-sm font-semibold text-brand ring-1 ring-border">
                    {m.initial}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="truncate text-sm font-semibold text-foreground">
                        {m.name}
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="mt-0.5 truncate text-xs text-muted-foreground">
                      {m.preview}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground/80">
                      {m.meta}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 panel-surface p-5">
        <h2 className="mb-4 text-base font-semibold text-foreground">
          Website Status
        </h2>
        <dl className="divide-y divide-border">
          <StatusRow
            label="Site Status"
            value={
              <span className="inline-flex items-center gap-1.5 text-success">
                <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px] shadow-success" />{' '}
                Live
              </span>
            }
          />
          <StatusRow
            label="Last Updated"
            value="28 May, 2026 · 03:15 PM"
          />
          <StatusRow label="Total Pages" value="12" />
          <StatusRow label="Active Sections" value="28" />
        </dl>
      </div>
    </AdminShell>
  );
}

function StatusRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between py-3 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-foreground">{value}</dd>
    </div>
  );
}

function QuickAction({
  to,
  icon: Icon,
  title,
  tone,
}: {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tone: 'brand' | 'success' | 'info' | 'warning' | 'accent';
}) {
  const tones = {
    brand: 'bg-brand/15 text-brand',
    success: 'bg-success/15 text-success',
    info: 'bg-info/15 text-info',
    warning: 'bg-warning/15 text-warning',
    accent: 'bg-gradient-to-br from-brand/25 to-info/25 text-brand',
  } as const;
  return (
    <Link
      to={to}
      className="group flex items-center gap-3 rounded-xl border border-border bg-panel-2 p-3 transition-all hover:border-l-2 hover:border-l-brand/30 hover:bg-brand/[0.02] hover:shadow-sm active:scale-[0.97]"
    >
      <div
        className={`grid h-10 w-10 place-items-center rounded-lg text-sm ${tones[tone]}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <span className="text-sm font-semibold text-foreground">{title}</span>
    </Link>
  );
}
