import { Category } from '../../models';

export interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category: { title, imageUrl, itemCount } }: CategoryCardProps) => {
  return (
    <div
      className="
        group relative flex flex-col items-center justify-center
        p-8 bg-white border border-gray-100 rounded-2xl
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:border-blue-200 hover:-translate-y-1
        cursor-pointer
      "
    >
      <div
        className="
        w-20 h-20 mb-6 flex items-center justify-center
        bg-gray-50 rounded-full transition-colors duration-300
        group-hover:bg-blue-50
      "
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-12 h-12 opacity-70 group-hover:opacity-100 transition-opacity"
        />
      </div>

      <h3 className="text-lg font-bold text-gray-800 capitalize mb-1 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>

      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {itemCount.toLocaleString()} Items
        </span>
        <span className="text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
          →
        </span>
      </div>

      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="text-4xl font-bold italic">#</span>
      </div>
    </div>
  );
};
