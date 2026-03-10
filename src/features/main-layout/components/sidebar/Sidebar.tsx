import { ReactNode } from 'react';
import { SidebarLogo } from './components/Sidebar-logo.tsx';

interface SidebarProps {
  children: ReactNode;
  footer: ReactNode;
}

export const Sidebar = ({ children, footer }: SidebarProps) => {
  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200 flex flex-col shrink-0">
      <SidebarLogo />

      <nav className="flex-1 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
        {children}
      </nav>

      {footer}
    </aside>
  );
};
