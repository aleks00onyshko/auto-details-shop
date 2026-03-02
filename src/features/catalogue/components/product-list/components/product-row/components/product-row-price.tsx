import { Product } from '../../../../../models';

export type ProductRowPrice = Pick<Product, 'price'>;

export const ProductRowPrice = ({ price }: ProductRowPrice) => (
  <div className="flex flex-col items-end gap-1 lg:w-28">
    <span className="text-lg lg:text-xl font-bold text-gray-900">${price}</span>
    <button className="bg-blue-600 text-white px-3 lg:w-full py-1.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm whitespace-nowrap">
      Select Part
    </button>
  </div>
);
