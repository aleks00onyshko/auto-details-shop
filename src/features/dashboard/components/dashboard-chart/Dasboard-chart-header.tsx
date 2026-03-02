export const DashboardChartHeader = () => (
  <div className="bg-white border-gray-200 p-2">
    <div className="flex justify-between items-center">
      <h3 className="text-xl font-bold text-slate-900">Activity</h3>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <span className="text-xs font-medium text-slate-500">New visitors</span>
      </div>
    </div>
  </div>
);
