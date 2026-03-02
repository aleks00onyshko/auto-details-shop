import { Product } from '../../../../models';
import { ProductRowThumbnail } from './components/product-row-thumbnail.tsx';
import { ProductRowDescription } from './components/product-row-description.tsx';
import { ProductRowAvailability } from './components/product-row-avalability.tsx';
import { ProductRowPrice } from './components/product-row-price.tsx';

export const ProductRow = ({ product }: { product: Product }) => {
  return (
    <div className="p-4 lg:p-5 bg-white border-b border-gray-100 hover:bg-blue-50/40 transition-all group">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
        <div className="flex gap-3 lg:contents">
          <ProductRowThumbnail
            title={product.title}
            thumbnail={product.thumbnail}
            sku={product.sku}
          />
          <ProductRowDescription
            description={product.description}
            brand={product.brand}
            sku={product.sku}
            warrantyInformation={product.warrantyInformation}
            title={product.title}
          />
        </div>
        <div className="flex items-center justify-between lg:contents">
          <ProductRowAvailability
            availabilityStatus={product.availabilityStatus}
            shippingInformation={product.shippingInformation}
          />
          <ProductRowPrice price={product.price} />
        </div>
      </div>
    </div>
  );
};
