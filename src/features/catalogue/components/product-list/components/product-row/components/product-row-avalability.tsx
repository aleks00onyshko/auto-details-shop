import { Product } from '../../../../../models';

export type ProductRowAvailability = Pick<Product, 'availabilityStatus' | 'shippingInformation'>;

export const ProductRowAvailability = ({
  availabilityStatus,
  shippingInformation,
}: ProductRowAvailability) => (
  <div className="flex flex-col items-start lg:items-center lg:w-32">
    <span
      className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full border ${
        availabilityStatus === 'In Stock'
          ? 'text-green-600 border-green-200 bg-green-50'
          : 'text-orange-600 border-orange-200 bg-orange-50'
      }`}
    >
      {availabilityStatus}
    </span>
    <span className="text-[9px] text-gray-400 mt-1 hidden lg:block">{shippingInformation}</span>
  </div>
);
