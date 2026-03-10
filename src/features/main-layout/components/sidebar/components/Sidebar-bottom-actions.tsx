import {memo} from "react";

export interface SidebarBottomActionsProps {
  onCLicked: () => void;
}

export const SidebarBottomActions = memo(({onCLicked}: SidebarBottomActionsProps) => (
  <div className="p-6 border-t border-gray-100 cursor-pointer" onClick={onCLicked}>
    <div className="flex items-center text-sm font-medium text-gray-400 group">
      <span className="mr-3 text-lg transition-transform group-hover:scale-110">💬</span>
      Support
    </div>
  </div>
));
