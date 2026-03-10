export interface FilterPanelHeaderProps {
  activeFilterCounter: number;
  clearAll: () => void;
}

export const FilterPanelHeader = ({ activeFilterCounter, clearAll }: FilterPanelHeaderProps) => {
  return (
    <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
      <h2 className="text-lg font-bold text-gray-800 tracking-tight">Filters</h2>

      {activeFilterCounter > 0 && (
        <div className="flex items-center gap-3">
          <button
            onClick={clearAll}
            className="text-xs text-blue-600 hover:text-blue-800 font-semibold transition-colors hover:underline underline-offset-2"
          >
            Clear all
          </button>

          <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold tabular-nums">
            {activeFilterCounter}
          </span>
        </div>
      )}
    </div>
  );
};
