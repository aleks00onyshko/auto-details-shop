import {Product} from '../../../types';

export type ProductRowThumbnailProps = Pick<Product, 'title' | 'thumbnail' | 'sku'>;

export const ProductRowThumbnail = ({thumbnail, title, sku}: ProductRowThumbnailProps) => (
  <div className="relative w-20 h-20 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shrink-0">
    <img
      src={thumbnail}
      alt={title}
      className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform"
    />
    <div
      className="absolute bottom-0 left-0 right-0 bg-black/50 text-[8px] text-white text-center py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
      {sku}
    </div>
  </div>
);
