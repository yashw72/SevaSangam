import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

/**
 * Neo-Brutalist Register Page — SevaSangam
 * Registration interface for Customers and Cooperative Workers.
 */
const Register = () => {
  const [role, setRole] = useState('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cooperative, setCooperative] = useState('');
  const [error, setError] = useState('');

  const { register, login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const regFunc = register || login;
      await regFunc({
        email,
        password,
        role,
        full_name: name,
        name,
        phone,
        cooperative: role === 'worker' ? cooperative : null,
      });
      navigate(`/${role}`, { replace: true });
    } catch (err) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <Badge variant="primary" size="sm" className="mb-2">
          🏛️ Cooperative Membership
        </Badge>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Create an Account
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Join the fair and verified digital trade network
        </p>
      </div>

      {/* Role Selection Tabs */}
      <div className="flex rounded-xl bg-slate-100 p-1 mb-6 border border-slate-200">
        <button
          type="button"
          onClick={() => setRole('customer')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            role === 'customer'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          👤 Customer
        </button>
        <button
          type="button"
          onClick={() => setRole('worker')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
            role === 'worker'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          👷 Trade Worker
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs font-medium text-rose-700">
            ⚠️ {error}
          </div>
        )}

        <Input
          label="Full Name"
          placeholder="e.g. Rahul Sharma"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="+91 9876543210"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        {role === 'worker' && (
          <Input
            label="Labour Cooperative Society Name"
            placeholder="e.g. Maharashtra Labour Cooperative Federation"
            value={cooperative}
            onChange={(e) => setCooperative(e.target.value)}
            helperText="Your registered cooperative society for welfare benefits"
            required
          />
        )}

        <Input
          label="Create Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button type="submit" variant="primary" fullWidth size="lg" disabled={loading} className="font-semibold mt-2">
          {loading ? 'Creating Account...' : `Register as ${role === 'customer' ? 'Customer' : 'Trade Worker'}`}
        </Button>
      </form>

      <div className="mt-6 text-center text-xs text-slate-500">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-teal-600 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
