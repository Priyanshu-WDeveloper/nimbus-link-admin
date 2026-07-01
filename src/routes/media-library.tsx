import { useState } from 'react';
import {
  Upload,
  Image as ImageIcon,
  FileText,
  Film,
  Wifi,
} from 'lucide-react';
import { AdminShell } from '@/components/admin/admin-shell';

const tabs = ['All Media', 'Images', 'Logos', 'Icons', 'Documents', 'Videos'] as const;

const files = [
  { name: 'hero-bg.jpg', size: '1920×1080 · 1.2 MB', tone: 'from-info to-brand' },
  { name: 'about-us.jpg', size: '1280×800 · 890 KB', tone: 'from-warning to-brand' },
  { name: 'services-tech.jpg', size: '1280×800 · 985 KB', tone: 'from-brand to-info' },
  { name: 'fiber-network.jpg', size: '1280×800 · 1.1 MB', tone: 'from-info to-warning' },
  { name: 'team-1.jpg', size: '800×800 · 420 KB', tone: 'from-success to-brand' },
  { name: 'plan-starter.jpg', size: '800×600 · 315 KB', tone: 'from-brand to-info' },
  { name: 'plan-family.jpg', size: '800×600 · 315 KB', tone: 'from-info to-success' },
  { name: 'plan-ultra.jpg', size: '800×600 · 315 KB', tone: 'from-warning to-brand' },
  { name: 'office.jpg', size: '1600×900 · 980 KB', tone: 'from-brand to-warning' },
  { name: 'logo-white.png', size: '512×512 · 132 KB', tone: 'logo' },
];

export default function MediaLibraryPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>('All Media');

  return (
    <AdminShell title="Media Library">
      <div className="panel-surface">
        <div className="flex items-center justify-between border-b border-border px-4 pt-4 pb-3">
          <div className="flex flex-wrap items-center gap-1">
            {tabs.map((t) => (
              <button key={t} onClick={() => setActive(t)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${active === t ? 'bg-brand/15 text-brand' : 'text-muted-foreground hover:bg-panel-2 hover:text-foreground'}`}>{t}</button>
            ))}
          </div>
          <button className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[image:var(--gradient-brand)] px-3 text-xs font-semibold text-brand-foreground shadow-[var(--shadow-glow)]">
            <Upload className="h-4 w-4" /> Upload New
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
          {files.map((f) => (
            <div key={f.name} className="group overflow-hidden rounded-xl border border-border bg-panel-2 transition hover:border-brand/50">
              <div className={`relative aspect-[4/3] w-full ${f.tone === 'logo' ? 'grid place-items-center bg-panel' : `bg-gradient-to-br ${f.tone}`}`}>
                {f.tone === 'logo' ? (
                  <div className="flex items-center gap-2">
                    <Wifi className="h-6 w-6 text-brand" />
                    <span className="font-display text-sm font-semibold text-foreground">NimbusLink</span>
                  </div>
                ) : (
                  <div className="absolute inset-0 grid place-items-center opacity-70">
                    {f.name.endsWith('.jpg') ? <ImageIcon className="h-8 w-8 text-white/60" /> : <FileText className="h-8 w-8 text-white/60" />}
                  </div>
                )}
              </div>
              <div className="px-3 py-2">
                <div className="truncate text-xs font-semibold text-foreground">{f.name}</div>
                <div className="truncate text-[11px] text-muted-foreground">{f.size}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-border p-4 text-xs text-muted-foreground">
          <span>Showing 1 to 10 of 45 files</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} className={`h-8 min-w-8 rounded-md px-2 text-xs font-medium ${n === 1 ? 'bg-brand text-brand-foreground' : 'border border-border bg-panel-2 text-foreground hover:bg-panel'}`}>{n}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <StorageCard icon={ImageIcon} label="Images" value="38 files" />
        <StorageCard icon={FileText} label="Documents" value="5 files" />
        <StorageCard icon={Film} label="Videos" value="2 files" />
      </div>
    </AdminShell>
  );
}

function StorageCard({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="panel-surface flex items-center gap-3 p-4">
      <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand/15 text-brand"><Icon className="h-5 w-5" /></div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-lg font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
}
