export interface SidebarItemConfig {
  label: string;
  navigateToPath: string;
  icon?: string;
  disabled: boolean;
}

export interface SidebarItemsGroupConfig extends Omit<SidebarItemConfig, 'navigateToPath'> {
  items: SidebarItemConfig[];
  opened: boolean;
}

export const sidebarConfig: (SidebarItemConfig | SidebarItemsGroupConfig)[] = [
  {
    label: 'Dashboard',
    navigateToPath: '/dashboard',
    icon: '📊',
    disabled: false
  },
  {
    label: 'Parts online',
    icon: '⚙',
    opened: true,
    disabled: false,
    items: [
      {
        label: 'Catalogue',
        navigateToPath: '/catalogue',
        disabled: false
      },
      {
        label: 'In stock',
        navigateToPath: '/in-stock',
        disabled: true
      },
      {
        label: 'Orders',
        navigateToPath: '/orders',
        disabled: true
      }
    ]
  },
  {
    label: 'Documents',
    navigateToPath: '/documents',
    icon: '📄',
    disabled: true
  },
  {
    label: 'Warranty claims',
    navigateToPath: '/warranty',
    icon: '🛡️',
    disabled: true
  }
]

export function isSidebarGroup(item: SidebarItemConfig | SidebarItemsGroupConfig): item is SidebarItemsGroupConfig {
  return 'items' in item;
}
