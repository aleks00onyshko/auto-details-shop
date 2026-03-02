import { Skeleton } from '@shared/components';

const heights = ['h-2/5', 'h-4/5', 'h-1/2', 'h-full', 'h-3/5', 'h-4/5', 'h-2/5'];

export const DashboardChartSkeleton = () => (
  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
    <div className="flex justify-between items-center mb-8">
      <Skeleton className="h-7 w-24" />
      <Skeleton className="h-4 w-32" />
    </div>
    <div className="h-[300px] w-full flex items-end gap-2 px-2">
      {heights.map((hClass, i) => (
        <Skeleton key={i} className={`flex-1 ${hClass}`} />
      ))}
    </div>
  </div>
);
