import type { ReactNode } from 'react';
import { AppSidebar } from './app-sidebar';
import { TopBar } from './top-bar';

export function AdminShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
      <div className="flex h-screen w-full bg-background text-foreground">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar title={title} />
        <main className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin px-6 py-6 md:px-8 md:py-8">
          {children}
          <footer className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
            <div className="flex items-center justify-between">
              <span>
                © 2026 NimbusLink Telecom Pvt. Ltd. All rights reserved.
              </span>
              <span>Version 1.0.0</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
