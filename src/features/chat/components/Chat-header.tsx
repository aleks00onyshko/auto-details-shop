export interface ChatHeaderProps {
  closeFn: () => void;
}

export const ChatHeader = ({ closeFn }: ChatHeaderProps) => {
  return (
    <div className="p-7 border-b border-gray-50 flex justify-between items-center">
      <div>
        <h3 className="font-extrabold text-2xl text-gray-800 tracking-tight">Support</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Always Active
          </span>
        </div>
      </div>
      <button
        onClick={closeFn}
        className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all"
      >
        ✕
      </button>
    </div>
  );
};
