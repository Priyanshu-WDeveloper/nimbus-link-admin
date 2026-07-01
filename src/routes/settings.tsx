import { Save, Shield, Bell, Palette, Globe } from 'lucide-react';
import { AdminShell } from '@/components/admin/admin-shell';

export default function SettingsPage() {
  return (
    <AdminShell title="Settings">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <nav className="panel-surface h-fit p-2">
          {[
            { icon: Shield, label: 'Account & Security', active: true },
            { icon: Bell, label: 'Notifications' },
            { icon: Palette, label: 'Appearance' },
            { icon: Globe, label: 'Localization' },
          ].map((item) => (
            <button key={item.label}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${item.active ? 'bg-brand/15 text-brand' : 'text-muted-foreground hover:bg-panel-2 hover:text-foreground'}`}>
              <item.icon className="h-4 w-4" /> {item.label}
            </button>
          ))}
        </nav>
        <div className="panel-surface p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-foreground">Account & Security</h2>
          <p className="mt-1 text-xs text-muted-foreground">Update your profile and password. Enable two-factor authentication for extra security.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Field label="Full Name" defaultValue="Admin" />
            <Field label="Email" defaultValue="admin@nimbuslink.net" />
            <Field label="Current Password" type="password" defaultValue="········" />
            <Field label="New Password" type="password" defaultValue="" />
          </div>
          <div className="my-6 h-px w-full bg-border" />
          <div className="flex items-center justify-between rounded-lg border border-border bg-panel-2 p-4">
            <div>
              <div className="text-sm font-semibold text-foreground">Two-Factor Authentication</div>
              <div className="text-xs text-muted-foreground">Require a verification code on every sign in.</div>
            </div>
            <Toggle defaultChecked />
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <button className="rounded-lg border border-border bg-panel-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-panel">Cancel</button>
            <button className="inline-flex items-center gap-1.5 rounded-lg bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-glow)]">
              <Save className="h-4 w-4" /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}

function Field({ label, defaultValue, type = 'text' }: { label: string; defaultValue?: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input type={type} defaultValue={defaultValue} className="mt-1.5 h-10 w-full rounded-lg border border-border bg-panel-2 px-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30" />
    </div>
  );
}

function Toggle({ defaultChecked }: { defaultChecked?: boolean }) {
  return (
    <label className="relative inline-flex h-6 w-11 cursor-pointer items-center">
      <input type="checkbox" defaultChecked={defaultChecked} className="peer sr-only" />
      <span className="h-6 w-11 rounded-full bg-panel transition peer-checked:bg-[image:var(--gradient-brand)]" />
      <span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-foreground shadow transition peer-checked:translate-x-5" />
    </label>
  );
}
