import { DashboardAtAGlanceSkeleton } from './dashboard-at-glance-skeleton.tsx';
import {
  useGetCommentsQuery,
  useGetPostsQuery,
  useGetProductsQuery,
} from '../../store/dashboard-api.ts';

export const AtAGlance = () => {
  const { data: posts, isLoading: loadingPosts } = useGetPostsQuery(1);
  const { data: reviews, isLoading: loadingReviews } = useGetCommentsQuery(1);
  const { data: categories, isLoading: loadingCategories } = useGetProductsQuery(0);

  const isLoading = loadingPosts || loadingReviews || loadingCategories;

  if (isLoading) {
    return <DashboardAtAGlanceSkeleton />;
  }

  const data = [
    { label: 'posts', count: posts?.total || 0 },
    { label: 'reviews', count: reviews?.total || 0 },
    { label: 'categories', count: categories?.total || 0 },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800 mb-6">At a glance</h3>

      <div className="flex flex-col">
        {data.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center justify-between py-3 ${
              index !== data.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <span className="text-sm font-medium text-slate-600 capitalize">{item.label}</span>
            <span className="text-sm font-bold text-slate-900">
              {item.count} {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
