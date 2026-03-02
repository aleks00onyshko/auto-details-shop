export interface ProductListHeaderProps {
  category: string;
  onNavigate: () => void;
  text: string;
}

export const ProductListHeader = ({ category, onNavigate, text }: ProductListHeaderProps) => (
  <div className="flex justify-between items-center">
    <h2 className="text-2xl font-bold capitalize">{category?.replace(/-/g, ' ')}</h2>
    <button
      onClick={onNavigate}
      className="text-xs font-bold text-blue-600 uppercase tracking-widest hover:underline"
    >
      {text}
    </button>
  </div>
);
