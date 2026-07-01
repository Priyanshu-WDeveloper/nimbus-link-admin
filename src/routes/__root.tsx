import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import { type ReactNode } from 'react';

const queryClient = new QueryClient();

export function RootLayout({ children }: { children?: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        {children ?? <Outlet />}
      </div>
    </QueryClientProvider>
  );
}
