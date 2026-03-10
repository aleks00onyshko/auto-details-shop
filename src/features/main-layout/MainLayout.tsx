import {ReactNode, useCallback, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '@store/hooks.ts';
import {logout, selectCurrentUser} from '@features/authentication';

import {Header} from './components';
import {ConfiguredSidebar} from "./components/sidebar/ConfiguredSidebar.tsx";

export interface MainLayoutProps {
  chat: ReactNode;
}

export const MainLayout = ({chat}: MainLayoutProps) => {
  const user = useAppSelector(selectCurrentUser)!;

  const dispatch = useAppDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);
  const toggleSidebar = useCallback(() => setIsSidebarOpen(prev => !prev), []);
  const handleLogout = useCallback(() => dispatch(logout()), []);

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {chat}

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div
        className={`
        fixed inset-y-0 left-0 z-50 transition-transform duration-300
        lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
      >
        <ConfiguredSidebar onItemClicked={closeSidebar}/>
      </div>

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header
          user={user}
          logout={handleLogout}
          onMenuToggle={toggleSidebar}
        />
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet/>
          </div>
        </main>
      </div>
    </div>
  );
};
