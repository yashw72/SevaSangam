import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

/**
 * Neo-Brutalist Login Page — SevaSangam
 * Role-based authentication and demo instant access.
 */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('customer');
  const [error, setError] = useState('');

  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const loggedUser = await login({ email, password, role: selectedRole });
      const targetRole = loggedUser?.role || selectedRole;
      const redirectPath =
        location.state?.from?.pathname && location.state.from.pathname.startsWith(`/${targetRole}`)
          ? location.state.from.pathname
          : `/${targetRole}`;
      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.message || 'Invalid email or password');
    }
  };

  const handleQuickLogin = async (role) => {
    setSelectedRole(role);
    setError('');
    try {
      let demoEmail = 'customer@sevasangam.org';
      let demoPassword = 'password123';
      
      if (role === 'worker') {
        demoEmail = 'suresh@sevasangam.org';
      } else if (role === 'admin') {
        demoEmail = 'admin@sevasangam.org';
        demoPassword = 'admin123';
      }

      setEmail(demoEmail);
      setPassword(demoPassword);

      const loggedUser = await login({ email: demoEmail, password: demoPassword, role });
      const targetRole = loggedUser?.role || role;
      navigate(`/${targetRole}`, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <Badge variant="primary" size="sm" className="mb-2">
          ⚡ Secure Member Portal
        </Badge>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Welcome back
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Sign in to your SevaSangam account or select a demo role
        </p>
      </div>

      {/* Role Quick Selector for Demo */}
      <div className="mb-6 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 text-center">
          1-Click Instant Demo Access
        </span>
        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handleQuickLogin('customer')}
            className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              selectedRole === 'customer'
                ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            👤 Customer
          </button>
          <button
            type="button"
            onClick={() => handleQuickLogin('worker')}
            className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              selectedRole === 'worker'
                ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            👷 Worker
          </button>
          <button
            type="button"
            onClick={() => handleQuickLogin('admin')}
            className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              selectedRole === 'admin'
                ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            🏛️ Admin
          </button>
        </div>
      </div>

      <div className="relative my-5 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200" />
        </div>
        <span className="relative bg-white px-3 text-[11px] font-medium text-slate-400">
          Or with credentials
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-medium text-rose-700">
            ⚠️ {error}
          </div>
        )}

        <Input
          label="Email Address"
          type="email"
          placeholder="e.g. customer@sevasangam.org"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" variant="primary" fullWidth size="lg" disabled={loading} className="font-semibold mt-2">
          {loading ? 'Signing In...' : 'Sign In'}
        </Button>
      </form>

      <div className="mt-6 text-center text-xs text-slate-500">
        New to SevaSangam?{' '}
        <Link to="/register" className="font-semibold text-teal-600 hover:underline">
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
