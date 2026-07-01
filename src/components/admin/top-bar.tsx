import { Bell, ChevronDown, Menu, Search } from 'lucide-react';

export function TopBar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center gap-4 border-b border-border bg-background/80 px-6 backdrop-blur-md md:px-8">
      <button className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-accent hover:text-foreground">
        <Menu className="h-5 w-5" />
      </button>
      <h1 className="text-[22px] font-semibold tracking-tight text-foreground">
        {title}
      </h1>

      <div className="ml-auto flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Search…"
            className="h-10 w-64 rounded-lg border border-border bg-panel pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <button className="relative grid h-10 w-10 place-items-center rounded-lg border border-border bg-panel text-muted-foreground transition hover:text-foreground">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[10px] font-semibold text-brand-foreground">
            3
          </span>
        </button>

        <button className="flex items-center gap-3 rounded-lg border border-border bg-panel px-2.5 py-1.5 text-left transition hover:bg-panel-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] text-sm font-semibold text-brand-foreground">
            A
          </div>
          <div className="hidden pr-1 leading-tight sm:block">
            <div className="text-sm font-semibold text-foreground">
              Admin
            </div>
            <div className="text-[11px] text-muted-foreground">
              Super Admin
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
