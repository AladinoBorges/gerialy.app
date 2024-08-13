'use client';

import { DashboardNavigation } from '@/components/Navigation/Dashboard';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardNavigation>{children}</DashboardNavigation>;
}
