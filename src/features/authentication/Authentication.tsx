import { Outlet } from 'react-router-dom';

export const Authentication = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      <div className="absolute top-10 left-10">
        <h2 className="text-2xl font-black text-slate-900 tracking-tighter">
          AUTO<span className="text-blue-600">PARTS</span>
        </h2>
      </div>

      <Outlet />

      <footer className="absolute bottom-6 text-slate-400 text-xs font-medium">
        © 2026 Pro Catalogue System
      </footer>
    </div>
  );
};
