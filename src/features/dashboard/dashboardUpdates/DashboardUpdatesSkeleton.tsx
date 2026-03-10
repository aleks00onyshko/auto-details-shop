import {Skeleton} from '@shared';

export const DashboardUpdatesSkeleton = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col gap-8">
      <Skeleton className="h-6 w-24"/> {/* Title: Updates */}
      <section>
        <Skeleton className="h-3 w-32 mb-4"/>
        <div className="flex justify-between items-center">
          <Skeleton className="h-3 w-20"/>
          <Skeleton className="h-4 flex-1 ml-4"/>
        </div>
      </section>
      <section>
        <Skeleton className="h-3 w-24 mb-4"/>
        <div className="space-y-3">
          <Skeleton className="h-3 w-full"/>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 space-y-2">
            <Skeleton className="h-2 w-10"/>
            <Skeleton className="h-3 w-full"/>
            <Skeleton className="h-3 w-3/4"/>
          </div>
        </div>
      </section>
      <section className="pt-4 border-t border-gray-100">
        <Skeleton className="h-3 w-20 mb-4"/>
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-3 w-12"/>
          ))}
        </div>
      </section>
    </div>
  );
};
