import {Skeleton} from '@shared';

export const DashboardAtAGlanceSkeleton = () => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
    <Skeleton className="h-6 w-32 mb-6"/>
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-3">
          <Skeleton className="h-4 w-20"/>
          <Skeleton className="h-4 w-24"/>
        </div>
      ))}
    </div>
  </div>
);
