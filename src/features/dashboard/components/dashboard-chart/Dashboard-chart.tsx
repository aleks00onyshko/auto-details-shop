import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ReactNode } from 'react';
import { DashboardChartSkeleton } from './Dashboard-chart-skeleton.tsx';
import {
  useGetCommentsQuery,
  useGetPostsQuery,
  useGetProductsQuery,
} from '../../store/dashboard-api.ts';

export interface DashboardChartProps {
  header: ReactNode;
}

const data = [
  { name: '0', value: 18000 },
  { name: '10', value: 16000 },
  { name: '20', value: 5000 },
  { name: '30', value: 12000 },
  { name: '40', value: 9000 },
  { name: '50', value: 35000 },
  { name: '60', value: 18000 },
  { name: '70', value: 18000 },
];

export const DashboardChart = ({ header }: DashboardChartProps) => {
  const { isLoading: loadingPosts } = useGetPostsQuery(1);
  const { isLoading: loadingReviews } = useGetCommentsQuery(1);
  const { isLoading: loadingCategories } = useGetProductsQuery(0);

  const loading = loadingPosts || loadingReviews || loadingCategories;

  if (loading) {
    return <DashboardChartSkeleton />;
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
      {header}

      <div className="h-[300px] w-full mt-8">
        <ResponsiveContainer width="100%" height="100%" className="min-w-0">
          <AreaChart data={data} margin={{ left: -20 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="#f1f5f9" strokeWidth={2} />

            <XAxis dataKey="name" hide />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#94a3b8', fontWeight: 500 }}
              ticks={[0, 10000, 20000, 30000, 40000, 50000]}
              tickFormatter={(value) => `${value / 1000}k`}
              domain={[0, 50000]}
            />

            <Tooltip
              contentStyle={{
                borderRadius: '12px',
                border: 'none',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                fontSize: '12px',
              }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#colorValue)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
