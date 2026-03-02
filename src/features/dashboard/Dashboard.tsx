import { AtAGlance } from './components/dashboard-at-glance/Dashboard-at-glance.tsx';
import { DashboardUpdates } from './components/dashboard-updates/Dashboard-updates.tsx';
import { DashboardChart } from './components/dashboard-chart/Dashboard-chart.tsx';
import { DashboardChartHeader } from './components/dashboard-chart/Dasboard-chart-header.tsx';
import { DashboardStatsGrid } from './components/dashboard-stats-grid/Dashboard-stats-grid.tsx';

export const Dashboard = () => {
  return (
    <div className="p-4 lg:p-8 pt-0 bg-[#f8fafc] min-h-full">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch">
        <div className="lg:col-span-4 flex flex-col gap-4 lg:gap-8">
          <AtAGlance />
          <DashboardUpdates />
        </div>

        <div className="lg:col-span-8 flex flex-col gap-4 lg:gap-8">
          <DashboardChart header={<DashboardChartHeader />} />
          <DashboardStatsGrid />
        </div>
      </div>
    </div>
  );
};
