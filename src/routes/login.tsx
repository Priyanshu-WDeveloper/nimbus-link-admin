import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrandLogo } from '@/components/admin/brand-logo';
import { useAuth } from '@/contexts/auth-context';

export default function LoginPage() {
  const { login } = useAuth();
  const [showPw, setShowPw] = useState(false);
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark'),
  );
  const navigate = useNavigate();

  useEffect(() => {
    const onToggle = () =>
      setIsDark(document.documentElement.classList.contains('dark'));
    document.documentElement.addEventListener('toggleclass', onToggle);
    return () =>
      document.documentElement.removeEventListener('toggleclass', onToggle);
  }, []);

  return (
    <div className="flex min-h-dvh w-full">
      <div className="relative hidden w-1/2 lg:block shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
  <img
    src={isDark ? '/nl-link-dark.png' : '/nl-link.png'}
    alt=""
    className="absolute inset-0 h-full w-full object-cover"
  />

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <span className="absolute left-8 top-8 h-16 w-px bg-gradient-to-b from-brand/30 to-transparent" />
          <span className="absolute left-8 top-8 h-px w-16 bg-gradient-to-r from-brand/30 to-transparent" />
          <span className="absolute bottom-8 right-8 h-16 w-px bg-gradient-to-t from-brand/30 to-transparent" />
          <span className="absolute bottom-8 right-8 h-px w-16 bg-gradient-to-l from-brand/30 to-transparent" />
        </div>

        <div className="absolute top-16 left-8 right-8 z-10">
          <h1 className="font-display text-[2rem] font-bold leading-tight text-white mt-8">
            Welcome to{' '}
            <span className="text-gradient-brand">NimbusLink</span>
          </h1>
          <p className="mt-4 max-w-[47%] text-justify text-sm leading-relaxed font-bold text-black/60 dark:text-white">
            Manage your telecom network with confidence. Monitor
            connections, handle enquiries, and keep your services
            running smoothly.
          </p>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center overflow-y-auto px-4 sm:px-8 bg-gradient-to-br from-background via-secondary to-background">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand/[0.04] blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-brand/[0.03] blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 20% 50%, #2563EB 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, #2563EB 0%, transparent 40%)',
            }}
          />
        </div>

        <div
          className="panel-surface relative w-full max-w-md p-6 sm:p-8"
          style={{
            animation: 'fadeIn 0.5s cubic-bezier(0.2,0,0,1) forwards',
          }}
        >
          <div className="space-y-6">
            <div
              className="text-center"
              style={{
                animation:
                  'fadeIn 0.5s cubic-bezier(0.2,0,0,1) 0.1s forwards',
                opacity: 0,
              }}
            >
              <BrandLogo className="justify-center" />
              <h1 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground">
                Welcome back
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Sign in to your NimbusLink admin account.
              </p>
            </div>

            <form
              className="space-y-4"
  onSubmit={(e) => {
    e.preventDefault();
    login({ name: 'Admin', email: 'admin@nimbus.link', role: 'Super Admin' });
    navigate('/');
  }}
              style={{
                animation:
                  'fadeIn 0.5s cubic-bezier(0.2,0,0,1) 0.2s forwards',
                opacity: 0,
              }}
            >
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
        <input
          id="email"
          type="email"
          defaultValue="admin@nimbus.link"
          placeholder="you@example.com"
                    className="h-10 w-full rounded-lg border border-black/[0.08] bg-black/[0.04] pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors transition-shadow duration-200 hover:border-black/[0.15] focus:border-brand/50 focus:ring-2 focus:ring-brand/10 dark:border-white/[0.08] dark:bg-white/[0.06] dark:placeholder:text-white/25 dark:hover:border-white/[0.15]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="pw"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
        <input
          id="pw"
          type={showPw ? 'text' : 'password'}
          defaultValue="password"
          placeholder="••••••••"
                    className="h-10 w-full rounded-lg border border-black/[0.08] bg-black/[0.04] pl-9 pr-10 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors transition-shadow duration-200 hover:border-black/[0.15] focus:border-brand/50 focus:ring-2 focus:ring-brand/10 dark:border-white/[0.08] dark:bg-white/[0.06] dark:placeholder:text-white/25 dark:hover:border-white/[0.15]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground active:scale-[0.96] before:absolute before:-inset-3"
                  >
                    {showPw ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex cursor-pointer items-center gap-2 text-muted-foreground">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-border bg-muted accent-brand"
                  />
                  Remember me
                </label>
                <a
                  href="#"
                  className="font-semibold text-brand transition-colors hover:brightness-110 active:scale-[0.96]"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-info text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,99,235,0.2)] transition-shadow transition-[filter] transition-transform duration-200 hover:shadow-[0_6px_24px_rgba(37,99,235,0.35)] hover:brightness-110 active:scale-[0.96]"
              >
                Sign in
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div
              className="space-y-3"
              style={{
                animation:
                  'fadeIn 0.5s cubic-bezier(0.2,0,0,1) 0.25s forwards',
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  or sign in with
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent" />
              </div>
              <button
                type="button"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background text-sm font-semibold text-foreground transition-all hover:bg-muted active:scale-[0.96]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

            <div
              className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/60"
              style={{
                animation:
                  'fadeIn 0.5s cubic-bezier(0.2,0,0,1) 0.3s forwards',
                opacity: 0,
              }}
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>256-bit encryption. Your data is secure.</span>
            </div>

            <p
              className="text-center text-sm text-muted-foreground"
              style={{
                animation:
                  'fadeIn 0.5s cubic-bezier(0.2,0,0,1) 0.3s forwards',
                opacity: 0,
              }}
            >
              Don&apos;t have an account?{' '}
              <Link
                to="/signup"
                className="font-semibold text-brand transition-colors hover:brightness-110 active:scale-[0.96]"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
