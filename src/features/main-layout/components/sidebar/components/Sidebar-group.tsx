import React, {memo, useState} from 'react';

export interface SidebarGroupProps {
  label: string;
  icon?: string;
  children: React.ReactNode;
  openByDefault?: boolean;
}

export const SidebarGroup = memo(({label, children, icon, openByDefault}: SidebarGroupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(!!openByDefault);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-6 py-3 w-full text-sm font-medium transition-colors text-gray-500 hover:bg-gray-50"
      >
        <div className="flex items-center">
          <span className="mr-3 text-lg">{icon}</span>
          <span>{label}</span>
        </div>

        <span
          className={`text-[10px] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && <div className="sidebar-group-children bg-gray-50/50 pb-2">{children}</div>}
    </div>
  );
});
