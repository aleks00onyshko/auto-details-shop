import {Product} from '../../../types';

export type ProductRowDescriptionProps = Pick<
  Product,
  'title' | 'description' | 'sku' | 'warrantyInformation' | 'brand'
>;

export const ProductRowDescription = ({
                                        title,
                                        sku,
                                        description,
                                        warrantyInformation,
                                        brand,
                                      }: ProductRowDescriptionProps) => (
  <div className="flex-1 min-w-0">
    <div className="flex items-center gap-2 mb-0.5">
      <h4 className="font-bold text-gray-800 truncate">{title}</h4>
      <span className="text-[10px] text-gray-400 font-mono">#{sku}</span>
    </div>
    <p className="text-xs text-gray-500 line-clamp-1 mb-2">{description}</p>
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
        {brand || 'Generic'}
      </span>
      <span className="text-[10px] text-gray-400 italic">{warrantyInformation}</span>
    </div>
  </div>
);
