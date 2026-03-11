import {StatCard} from './DashboardStatCard.tsx';
import {useGetCommentsQuery, useGetPostsQuery, useGetProductsQuery,} from '../api/dashboard-api.ts';

export const DashboardStatsGrid = () => {
  const {data: posts, isLoading: loadingPosts} = useGetPostsQuery(1);
  const {data: reviews, isLoading: loadingReviews} = useGetCommentsQuery(1);
  const {data: categories, isLoading: loadingCategories} = useGetProductsQuery(0);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 flex-1">
      <StatCard label="Time on website" value="14.7" trend="2%" loading={false}/>
      <StatCard label="Visitors" value="620" trend="10%" loading={false}/>
      <StatCard label="Covers" value="340" trend="20%" loading={false}/>
      <StatCard label="Categories" value={categories?.total || 0} loading={loadingCategories}/>
      <StatCard label="Comments" value={reviews?.total || 0} trend="8%" loading={loadingReviews}/>
      <StatCard label="Articles" value={posts?.total || 0} loading={loadingPosts}/>
    </div>
  );
};
