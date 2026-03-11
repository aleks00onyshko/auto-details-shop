import {useNavigate, useParams, useSearchParams} from 'react-router-dom';

import {Table} from '@shared';

import {useGetProductsQuery} from '../../api/catalogue-api.ts';
import {ProductListHeader} from './ProductListHeader.tsx';
import {Product} from '../../types';
import {ProductRow} from './productRow/ProductRow.tsx';

export interface ProductListProps {
  category?: string;
  headerText: string;
  headerNavigatePath: string;
}

export const ProductList = ({category, headerText, headerNavigatePath}: ProductListProps) => {
  const {category: routeCategory} = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const {
    data: products = [],
    isFetching,
    error,
  } = useGetProductsQuery({
    category: routeCategory,
    queryParams: searchParams.toString(),
  });

  if (error) return <div className="p-4 text-red-500">Failed to load parts.</div>;

  return (
    <div className="flex flex-col gap-6">
      <ProductListHeader
        category={category!}
        text={headerText}
        onNavigate={() => {
          navigate(headerNavigatePath);
        }}
      />

      <Table
        data={products ?? []}
        headers={[
          {label: 'Item', width: 'w-20'},
          {label: 'Description'},
          {label: 'Availability', width: 'w-32'},
          {label: 'Price', width: 'w-28'},
        ]}
        isLoading={isFetching}
        renderRow={(product: Product) => <ProductRow key={product.id} product={product}/>}
      />
    </div>
  );
};
