import {Link} from 'react-router-dom';
import {useGetCategoriesQuery} from '../../api/catalogue-api.ts';
import {CategoryCard} from './CategoryCard.tsx';

export const CatalogueGrid = () => {
  const {data: categories, isLoading} = useGetCategoriesQuery();

  if (isLoading) return <div>Loading Categories...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr overflow-y-auto">
      {categories?.map((category) => (
        <Link key={category.id} to={category.slug}>
          <CategoryCard category={category}/>
        </Link>
      ))}
    </div>
  );
};
