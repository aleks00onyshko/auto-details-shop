import { RequestLink } from './components/Request-link.tsx';
import { DashboardUpdatesSkeleton } from './Dashboard-updates-skeleton.tsx';
import { useGetCommentsQuery, useGetPostsQuery } from '../../store/dashboard-api.ts';

export const DashboardUpdates = () => {
  const { data: postsData, isLoading: loadingPosts } = useGetPostsQuery(1);
  const { data: reviewsData, isLoading: loadingReviews } = useGetCommentsQuery(1);

  const isLoading = loadingPosts || loadingReviews;

  const news = postsData?.posts?.[0];
  const review = reviewsData?.comments?.[0];

  if (isLoading) {
    return <DashboardUpdatesSkeleton />;
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col gap-8 flex-1">
      <h3 className="text-lg font-bold text-slate-800">Updates</h3>

      {/* 1. Recently Published News */}
      <section>
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
          Recently published news
        </h4>
        <div className="flex justify-between items-start gap-4">
          <span className="text-xs text-slate-500 whitespace-nowrap">Mar 5th, 17:00</span>
          <a href="#" className="text-xs font-bold text-blue-600 hover:underline leading-relaxed">
            {news?.title || 'No recent news'}
          </a>
        </div>
      </section>

      {/* 2. Recent Reviews */}
      <section>
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
          Recent reviews
        </h4>
        <div className="space-y-3">
          <p className="text-xs text-slate-500 leading-relaxed">
            From{' '}
            <span className="text-blue-600 font-semibold cursor-pointer">
              {review?.user.username || 'Anonymous'}
            </span>{' '}
            on
            <span className="text-slate-800 font-medium italic"> {news?.title || 'General'}</span>
          </p>
          <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
            <span className="block font-bold text-slate-400 mb-1 uppercase text-[9px]">Text:</span>
            {review?.body || 'No review text available.'}
          </div>
        </div>
      </section>

      {/* 3. Requests Footer */}
      <section className="pt-4 border-t border-gray-100 mt-auto">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
          Requests
        </h4>
        <div className="flex flex-wrap items-center gap-y-2">
          <RequestLink label="All" count={1} active />
          <span className="text-gray-200 mx-2 text-[10px]">|</span>
          <RequestLink label="Pending" count={0} />
          <span className="text-gray-200 mx-2 text-[10px]">|</span>
          <RequestLink label="Approved" count={1} />
          <span className="text-gray-200 mx-2 text-[10px]">|</span>
          <RequestLink label="Spam" count={0} />
          <span className="text-gray-200 mx-2 text-[10px]">|</span>
          <RequestLink label="Trash" count={0} />
        </div>
      </section>
    </div>
  );
};
