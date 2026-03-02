import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Sidebar, SidebarBottomActions, SidebarGroup, SidebarItem } from './components';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { logout, selectCurrentUser } from '@features/authentication/store';
import { selectIsOpen, setOpen } from '@features/chat/store';
import { Chat } from '@features/chat';

export const MainLayout = () => {
  const user = useAppSelector(selectCurrentUser)!;
  const isChatOpen = useAppSelector(selectIsOpen);

  const dispatch = useAppDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {isChatOpen && <Chat />}

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
        <Sidebar footer={<SidebarBottomActions onCLicked={() => dispatch(setOpen(true))} />}>
          <SidebarItem
            label="Dashboard"
            navigateToPath="/dashboard"
            icon="📊"
            disabled={false}
            onClick={() => setIsSidebarOpen(false)}
          />
          <SidebarGroup label="Parts online" icon="⚙️" openByDefault>
            <SidebarItem
              label="Catalogue"
              navigateToPath="/catalogue"
              disabled={false}
              onClick={() => setIsSidebarOpen(false)}
            />
            <SidebarItem label="In stock" navigateToPath="/in-stock" disabled={true} />
            <SidebarItem label="Orders" navigateToPath="/orders" disabled={true} />
          </SidebarGroup>
          <SidebarItem label="Documents" navigateToPath="/documents" icon="📄" disabled={true} />
          <SidebarItem
            label="Warranty claims"
            navigateToPath="/warranty"
            icon="🛡️"
            disabled={true}
          />
        </Sidebar>
      </div>

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header
          user={user}
          logout={() => dispatch(logout())}
          onMenuToggle={() => setIsSidebarOpen((prev) => !prev)}
        />
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
