import { DashboardStatCardSkeleton } from './Dashboard-stat-card-skeleton.tsx';

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: string;
  loading: boolean;
}

export const StatCard = ({ label, value, trend, loading }: StatCardProps) => {
  if (loading) {
    return <DashboardStatCardSkeleton />;
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between h-[140px]">
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-900 tracking-tight">{value}</span>
        {trend && (
          <span className="text-[10px] font-bold text-green-500 flex items-center">↑ {trend}</span>
        )}
      </div>
    </div>
  );
};
