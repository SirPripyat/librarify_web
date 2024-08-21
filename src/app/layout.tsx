import SidebarMenuComponent from '@/components/sidebar-menu/sidebar-menu.component';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Librarify'
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-dvh bg-slate-950`}>
        <SidebarMenuComponent />
        {children}
      </body>
    </html>
  );
}
