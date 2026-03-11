export interface SelectTriggerButtonProps {
  onClickFn: () => void;
  selectedCount: number;
  isOpen: boolean;
}

export const SelectTriggerButton = ({
  onClickFn,
  selectedCount,
  isOpen,
}: SelectTriggerButtonProps) => {
  return (
    <button
      onClick={onClickFn}
      className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md px-3 py-2 text-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
    >
      <span className="truncate text-gray-700">
        {selectedCount === 0 ? 'Select options...' : `${selectedCount} selected`}
      </span>
      <svg
        className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};
