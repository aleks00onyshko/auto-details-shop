import { useRef, useState } from 'react';
import { User } from '../../../../core/models/user.ts';
import { useClickOutside } from '../../../hooks/use-click-outside.ts';

export interface UserMenuProps {
  user: User;
  logout: () => void;
}

// Note: overlay can be split into separate component, duplicated to not overcomplicate things
export const UserMenu = ({ user, logout }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={menuRef}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all cursor-pointer group select-none"
      >
        <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-[9px] font-bold text-white uppercase">
          {user.username?.charAt(0) || 'G'}
        </div>
        <span className="text-xs font-semibold text-slate-100">{user.username || 'Guest'}</span>
        <svg
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-2xl z-[200] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 origin-top-right">
          <div className="p-3 bg-gray-50/50 border-b border-gray-100">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
              Session
            </span>
            <span className="text-xs font-bold text-slate-800 truncate block">{user.username}</span>
          </div>

          <div className="p-1">
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-500 hover:bg-red-50 rounded-lg transition-colors group"
            >
              <svg
                className="w-4 h-4 opacity-70 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
