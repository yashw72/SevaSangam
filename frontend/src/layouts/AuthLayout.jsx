import { Outlet, Link } from 'react-router-dom';

/**
 * Neo-Brutalist Auth Layout — SevaSangam
 * Centered high contrast layout with dot grid background for Login and Registration.
 */
const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link to="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-xs group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div className="text-left">
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              Seva<span className="text-teal-600">Sangam</span>
            </span>
            <p className="text-[10px] font-medium text-slate-400 tracking-wide">
              Cooperative Gig Platform
            </p>
          </div>
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-2xl border border-slate-200/90 shadow-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
