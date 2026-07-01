import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Moon,
  Search,
  Sun,
  User,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/auth-context';

export function TopBar({ title }: { title: string }) {
  const { user, isAuthenticated, logout } = useAuth();
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    const keydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', keydown);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('keydown', keydown);
    };
  }, [menuOpen]);

  const initial = user?.name?.charAt(0) ?? 'A';
  const displayName = isAuthenticated
    ? (user?.name ?? 'Admin')
    : 'Sign In';
  const displayRole = isAuthenticated
    ? (user?.role ?? 'Super Admin')
    : 'Not signed in';

  return (
    <header className="sticky top-0 z-20 flex h-[72px] items-center gap-4 border-b border-border bg-background/80 px-6 shadow-[0_1px_2px_rgba(0,0,0,.04)] backdrop-blur-md md:px-8">
      <button className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-accent hover:text-foreground active:scale-[0.97]">
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

        <button
          onClick={() => setIsDark((d) => !d)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-panel text-muted-foreground transition hover:text-foreground active:scale-[0.97]"
        >
          {isDark ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>

        <button className="relative grid h-10 w-10 place-items-center rounded-lg border border-border bg-panel text-muted-foreground transition hover:text-foreground active:scale-[0.97]">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[10px] font-semibold text-brand-foreground">
            3
          </span>
        </button>

        <div ref={menuRef} className="relative">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex items-center gap-3 rounded-xl border border-border bg-panel px-3 py-2 text-left transition hover:bg-panel-2 active:scale-[0.97]"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] text-sm font-semibold text-brand-foreground ring-1 ring-brand/30">
              {initial}
            </div>
            <div className="hidden pr-1 leading-tight sm:block">
              <div className="text-sm font-semibold text-foreground">
                {displayName}
              </div>
              <div className="text-[11px] text-muted-foreground">
                {displayRole}
              </div>
            </div>
            <ChevronDown
              className={`h-4 w-4 hidden sm:block text-muted-foreground transition-transform ${menuOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full z-30 mt-2 min-w-[200px] rounded-xl border border-border bg-panel p-1.5 shadow-lg">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/settings"
                    onClick={() => setMenuOpen(false)}
                    className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-foreground transition hover:bg-panel-2"
                  >
                    <User className="h-[18px] w-[18px] text-muted-foreground" />{' '}
                    Profile
                  </Link>
                  <div className="my-1 border-t border-border" />
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      logout();
                    }}
                    className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-destructive transition hover:bg-destructive/15"
                  >
                    <LogOut className="h-[18px] w-[18px]" /> Logout
                    {/* <ChevronDown
                      className={`h-4 w-4 hidden sm:block text-muted-foreground transition-transform ${menuOpen ? 'rotate-180' : ''}`}
                    /> */}
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-foreground transition hover:bg-panel-2"
                >
                  <User className="h-[18px] w-[18px] text-muted-foreground" />{' '}
                  Sign In
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
