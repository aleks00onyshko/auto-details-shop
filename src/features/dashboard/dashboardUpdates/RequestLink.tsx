import {memo} from "react";

export interface RequestLinkProps {
  label: string;
  count: number;
  active?: boolean;
}

export const RequestLink = memo(({label, count, active}: RequestLinkProps) => (
  <div className="flex items-center gap-1 text-[11px]">
    <button
      className={`${active ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'} transition-colors`}
    >
      {label} ({count})
    </button>
    <span className="text-slate-200 last:hidden">|</span>
  </div>
));
