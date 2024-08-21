'use client';

import SidebarItemComponent from '@/components/sidebar-item/sidebar-item.component';
import { Library, Users } from 'lucide-react';

export default function SidebarMenuComponent() {
  return (
    <aside className={'px-4 pt-12 flex flex-col gap-4 min-h-full bg-slate-900'}>
      <SidebarItemComponent path={'/'} icon={Users} />
      <SidebarItemComponent path={'/books'} icon={Library} />
    </aside>
  );
}
