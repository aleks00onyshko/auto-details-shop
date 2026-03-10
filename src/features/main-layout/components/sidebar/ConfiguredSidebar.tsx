import {memo, useCallback} from 'react';
import {useAppDispatch} from '@store/hooks.ts';
import {setOpen} from '@features/chat/store';

import {isSidebarGroup, sidebarConfig} from '../sidebar/configs/sidebar-config.ts';
import {SidebarBottomActions} from './components/Sidebar-bottom-actions.tsx';
import {SidebarGroup} from "./components/Sidebar-group.tsx";
import {SidebarItem} from "./components/Sidebar-item.tsx";
import {Sidebar} from "./Sidebar.tsx";

export interface ConfiguredSidebarProps {
  onItemClicked: () => void;
}

export const ConfiguredSidebar = memo(({onItemClicked}: ConfiguredSidebarProps) => {
  const dispatch = useAppDispatch();

  const handleChatOpen = useCallback(() => dispatch(setOpen(true)), [dispatch]);

  return (
    <Sidebar footer={<SidebarBottomActions onCLicked={handleChatOpen}/>}>
      {sidebarConfig.map(item => {
        if (isSidebarGroup(item)) {
          return (
            <SidebarGroup key={item.label} label={item.label} icon={item.icon} openByDefault={item.opened}>
              {item.items.map(sidebarItem => (
                <SidebarItem
                  key={sidebarItem.label}
                  disabled={sidebarItem.disabled}
                  icon={sidebarItem.icon}
                  label={sidebarItem.label}
                  navigateToPath={sidebarItem.navigateToPath}
                  onClick={sidebarItem.disabled ? undefined : onItemClicked}
                />
              ))}
            </SidebarGroup>
          );
        }

        return (
          <SidebarItem
            key={item.label}
            disabled={item.disabled}
            icon={item.icon}
            label={item.label}
            navigateToPath={item.navigateToPath}
            onClick={item.disabled ? undefined : onItemClicked}
          />
        );
      })}
    </Sidebar>
  );
});
