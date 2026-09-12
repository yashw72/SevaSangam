import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLanguage from '../../hooks/useLanguage';
import Button from '../ui/Button';

/**
 * Neo-Brutalist Navbar Component — SevaSangam
 * Bold black borders, vibrant badges, and tactile interactive controls.
 */
const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-xs group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <div>
            <span className="text-lg font-bold text-slate-900 tracking-tight">
              Seva<span className="text-teal-600">Sangam</span>
            </span>
            <span className="hidden sm:block text-[10px] text-slate-400 font-medium tracking-wide">
              Cooperative Gig Network
            </span>
          </div>
        </Link>

        {/* Public Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/workers"
            className="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 transition-colors"
          >
            Find Workers
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Language Selector */}
          <select
            value={currentLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            className="text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer transition-colors"
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.nativeName}
              </option>
            ))}
          </select>

          {/* Auth State */}
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Link
                to={`/${user?.role || 'customer'}`}
                className="text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/80 rounded-lg px-3 py-1.5 hover:bg-teal-100 transition-colors"
              >
                Dashboard
              </Link>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              <Button variant="primary" size="sm" onClick={() => navigate('/register')}>
                Get Started
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
