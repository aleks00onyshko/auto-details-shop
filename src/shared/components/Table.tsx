import { ReactNode } from 'react';

export interface TableHeader {
  label: string;
  width?: string;
}

export interface TableProps<T> {
  data: T[];
  headers: TableHeader[];
  renderRow: (data: T, index: number) => ReactNode;
  isLoading: boolean;
}

export const Table = <T,>({ data, headers, renderRow, isLoading = false }: TableProps<T>) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="hidden lg:flex items-center gap-6 px-5 py-3 bg-gray-50 border-b border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        {headers.map((header, index) => (
          <div key={index} className={header.width ?? 'flex-1'}>
            {header.label}
          </div>
        ))}
      </div>

      <div
        className={`divide-y divide-gray-100 ${isLoading ? 'opacity-50 transition-opacity' : ''}`}
      >
        {data?.length > 0 ? (
          data.map((item, index) => renderRow(item, index))
        ) : (
          <div className="p-5 text-center text-gray-500">No items found.</div>
        )}
      </div>
    </div>
  );
};
