import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth-context';
import {
  LayoutDashboard,
  Settings2,
  MessageSquare,
  Radio,
  Image as ImageIcon,
  Users,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import { BrandLogo } from './brand-logo';
import { cn } from '@/lib/utils';

const mainItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Website Configuration', url: '/website-configuration', icon: Settings2, hasChildren: true },
  { title: 'Contact Us', url: '/contact-us', icon: MessageSquare },
  { title: 'New Connection', url: '/new-connection', icon: Radio },
];

const otherItems = [
  { title: 'Media Library', url: '/media-library', icon: ImageIcon },
  { title: 'Users', url: '/users', icon: Users },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const isActive = (url: string) => url === '/' ? pathname === '/' : pathname.startsWith(url);

  return (
    <aside className="flex h-screen w-[260px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-[72px] items-center border-b border-sidebar-border px-5">
        <BrandLogo />
      </div>

      <nav className="flex-1 px-3 py-5">
        {isAuthenticated ? (
          <>
            <ul className="space-y-1">
              {mainItems.map((item) => (
                <NavItem key={item.url} url={item.url} title={item.title} Icon={item.icon} active={isActive(item.url)} hasChildren={item.hasChildren} />
              ))}
            </ul>
            <div className="mt-7 mb-2 px-3 text-[10px] font-semibold tracking-[0.14em] text-muted-foreground/70">OTHERS</div>
            <ul className="space-y-1">
              {otherItems.map((item) => (
                <NavItem key={item.url} url={item.url} title={item.title} Icon={item.icon} active={isActive(item.url)} />
              ))}
              <li>
                <button type="button" onClick={logout} className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/80 transition hover:bg-sidebar-accent hover:text-foreground">
                  <LogOut className="h-[18px] w-[18px]" />
                  Logout
                </button>
              </li>
            </ul>
          </>
      ) : (
        <div className="px-3">
          <button onClick={() => navigate('/login')} className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground transition hover:brightness-110 active:scale-[0.98]">
            Log In
          </button>
        </div>
      )}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        {isAuthenticated ? (
          <button className="flex w-full items-center gap-3 rounded-lg bg-sidebar-accent/50 px-3 py-2.5 text-left transition hover:bg-sidebar-accent">
            <div className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-panel-2 text-sidebar-foreground dark:bg-[image:var(--gradient-brand)] dark:text-brand-foreground">{user?.name?.charAt(0) ?? 'A'}</div>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-sidebar bg-success" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-foreground">{user?.name ?? 'Admin'}</div>
              <div className="truncate text-[11px] text-muted-foreground">{user?.role ?? 'Super Admin'}</div>
            </div>
          </button>
        ) : (
          <button onClick={() => navigate('/login')} className="flex w-full items-center gap-3 rounded-lg bg-sidebar-accent/30 px-3 py-2.5 text-left transition hover:bg-sidebar-accent">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-panel-2 text-sidebar-foreground dark:bg-[image:var(--gradient-brand)] dark:text-brand-foreground">?</div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-semibold text-muted-foreground">Not signed in</div>
              <div className="truncate text-[11px] text-muted-foreground/70">Tap here to log in</div>
            </div>
          </button>
        )}
      </div>
    </aside>
  );
}

function NavItem({ url, title, Icon, active, hasChildren }: {
  url: string;
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  active: boolean;
  hasChildren?: boolean;
}) {
  return (
    <li>
      <Link to={url} className={cn(
        'group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition',
        active
          ? 'bg-brand/15 text-brand dark:bg-[image:var(--gradient-brand)] dark:text-brand-foreground dark:shadow-[var(--shadow-glow)]'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground',
      )}>
        <Icon className="h-[18px] w-[18px]" />
        <span className="flex-1">{title}</span>
        {hasChildren && <ChevronRight className={cn('h-4 w-4 opacity-70', active && 'opacity-90')} />}
      </Link>
    </li>
  );
}
