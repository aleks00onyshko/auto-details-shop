import { NavLink } from 'react-router-dom';

export interface SidebarItemProps {
  disabled: boolean;
  label: string;
  navigateToPath: string;
  icon?: string;
  onClick?: () => void;
}

export const SidebarItem = ({
  disabled,
  label,
  navigateToPath,
  icon,
  onClick,
}: SidebarItemProps) => {
  return (
    <NavLink
      onClick={onClick}
      to={disabled ? '#' : navigateToPath}
      className={({ isActive }) => `
                sidebar-item flex
                items-center px-6 py-3 text-sm font-medium transition-colors w-full
                ${disabled ? 'opacity-30 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'}
                ${isActive && !disabled ? 'text-blue-600 bg-blue-50 border-r-2 border-blue-600' : ''}
            `}
    >
      {icon && <span className="mr-3">{icon}</span>}
      <span className="flex-1 text-left">{label}</span>
    </NavLink>
  );
};
