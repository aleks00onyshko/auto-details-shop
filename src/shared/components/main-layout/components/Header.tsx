import { UserMenu } from '@shared/components/main-layout';
import { User } from '@core/models';

export interface HeaderProps {
  user: User;
  logout: () => void;
  onMenuToggle: () => void;
}

export const Header = ({ user, logout, onMenuToggle }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 h-16">
      <button
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={onMenuToggle}
      >
        <span className="text-gray-600 text-xl">☰</span>
      </button>

      <div className="flex items-center gap-3">
        <div className="bg-gray-100 p-2 rounded-full">
          <span className="text-blue-600">🛒</span>
        </div>
        <div className="h-6 w-[1px] bg-gray-200 mx-1" />
        <UserMenu user={user} logout={logout} />
      </div>
    </header>
  );
};
