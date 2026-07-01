import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LogoutPage() {
  return (
    <div className="flex min-h-dvh w-full items-center justify-center overflow-y-auto px-4 sm:px-8 bg-gradient-to-br from-background via-secondary to-background">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand/[0.04] blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-brand/[0.03] blur-[100px]" />
      </div>

      <div className="relative w-full max-w-sm text-center">
        <div className="rounded-2xl border border-border/50 bg-card/80 p-8 shadow-lg backdrop-blur-2xl" style={{ animation: 'fadeIn 0.5s cubic-bezier(0.2,0,0,1)' }}>
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card text-success">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="text-xl font-bold tracking-tight text-foreground">You've been logged out</h1>
          <p className="mt-2 text-sm text-muted-foreground">Your session has been ended. Sign back in to continue.</p>

          <Link
            to="/login"
            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-info text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,99,235,0.2)] transition-all duration-200 hover:shadow-[0_6px_24px_rgba(37,99,235,0.35)] hover:brightness-110 active:scale-[0.98]"
          >
            <LogIn className="h-4 w-4" />
            Sign back in
          </Link>

          <p className="mt-8 text-xs text-muted-foreground">&copy; 2026 NimbusLink Telecom</p>
        </div>
      </div>
    </div>
  );
}
