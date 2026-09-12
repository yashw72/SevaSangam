import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

/**
 * Modern Clean Home Landing Page — SevaSangam
 * "Trusted Services. Fair Opportunities. Stronger Communities."
 */
const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const serviceCategories = [
    { name: 'Electrical & Wiring', icon: '⚡', color: 'bg-amber-50 text-amber-600', count: '142 Workers', desc: 'Wiring, MCB setup, switchboards & appliance fitting' },
    { name: 'Plumbing & Sanitary', icon: '🔧', color: 'bg-blue-50 text-blue-600', count: '98 Workers', desc: 'Leak detection, pipe repairs, taps & geyser installation' },
    { name: 'Carpentry & Woodwork', icon: '🪚', color: 'bg-orange-50 text-orange-600', count: '76 Workers', desc: 'Furniture repairs, custom cabinetry, doors & locks' },
    { name: 'Deep Home Cleaning', icon: '✨', color: 'bg-emerald-50 text-emerald-600', count: '115 Workers', desc: 'Sanitization, bathroom deep scrub & sofa shampooing' },
    { name: 'AC & Appliance Repair', icon: '❄️', color: 'bg-cyan-50 text-cyan-600', count: '89 Workers', desc: 'AC gas recharge, servicing, fridge & washing machines' },
    { name: 'Painting & Seepage', icon: '🎨', color: 'bg-purple-50 text-purple-600', count: '64 Workers', desc: 'Interior & exterior painting, texture & waterproofing' },
  ];

  const stats = [
    { label: 'Verified Workers', value: '4,850+', icon: '👷' },
    { label: 'Labour Cooperatives', value: '38', icon: '🏛️' },
    { label: 'Completed Jobs', value: '62,400+', icon: '⚡' },
    { label: 'Fair Wage Guarantee', value: '100%', icon: '⚖️' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/services');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:py-24 bg-gradient-to-b from-teal-50/60 via-white to-slate-50/50 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full mb-6 text-teal-800 font-semibold text-xs tracking-wide shadow-xs">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            <span>India's 1st Cooperative-Owned Digital Service Marketplace</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight md:leading-[1.15]">
            Dignity of Labor.{' '}
            <span className="text-teal-600">
              Fair Earnings.
            </span>{' '}
            Zero Exploitation.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            SevaSangam connects households and businesses directly with certified, insured trade workers 
            from registered Labour Cooperative Federations.
          </p>

          {/* Clean Search Bar */}
          <form onSubmit={handleSearch} className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex-1 flex items-center px-3 gap-2.5">
              <span className="text-slate-400 text-lg">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What service do you need? (e.g. Electrician, Plumbing, AC repair)"
                className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
              />
            </div>
            <Button type="submit" variant="primary" size="md" className="shrink-0 font-semibold">
              Find Services
            </Button>
          </form>

          {/* Quick Action Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link to="/workers">
              <Button variant="outline" size="sm">
                📍 Browse Available Workers
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="secondary" size="sm">
                🏛️ Join as a Cooperative Worker
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-xs">
              🛡️ NSDC Certified Skills
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-xs">
              🏥 Welfare Fund Insured
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-xs">
              💰 100% Direct Worker Payouts
            </span>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-10 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((st, i) => (
              <div
                key={i}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/70 p-4 sm:p-5 text-center transition-all hover:bg-slate-50 hover:border-slate-300"
              >
                <div className="text-2xl mb-1">{st.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  {st.value}
                </div>
                <div className="text-xs font-medium text-slate-500 mt-0.5">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Catalog */}
      <section className="py-14 md:py-18 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <Badge variant="primary" size="sm" className="mb-2">
              Popular Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Verified Cooperative Trade Services
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Book skilled trade professionals with upfront pricing and safety standards.
            </p>
          </div>
          <Link to="/services">
            <Button variant="outline" size="sm">
              View All Categories &rarr;
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCategories.map((cat, idx) => (
            <Link
              key={idx}
              to="/services"
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md hover:border-teal-300 hover:-translate-y-0.5 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className={`w-11 h-11 rounded-xl ${cat.color} flex items-center justify-center text-xl`}>
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">
                    {cat.count}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-600 group-hover:text-teal-700">
                <span>Book Service</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Cooperative Ownership Section */}
      <section className="py-14 md:py-18 bg-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="primary" size="sm" className="mb-2 bg-teal-800 text-teal-200 border-teal-700">
              Cooperative Advantage
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              A Platform Built For Workers, Governed By Workers
            </h2>
            <p className="text-sm text-teal-200 mt-2">
              Unlike private aggregator monopolies charging 25-30% commissions, SevaSangam is owned by registered trade cooperatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="bg-teal-800/60 border border-teal-700/60 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-2xl mb-4">
                🏛️
              </div>
              <h3 className="text-lg font-bold text-white">100% Cooperative Owned</h3>
              <p className="text-xs text-teal-100 mt-2 leading-relaxed font-normal">
                Platform surplus flows back into the worker welfare pool, providing health insurance, pension, and emergency hardship support.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-teal-800/60 border border-teal-700/60 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-2xl mb-4">
                ⚖️
              </div>
              <h3 className="text-lg font-bold text-white">AI Fairness Safeguard</h3>
              <p className="text-xs text-teal-100 mt-2 leading-relaxed font-normal">
                Our smart matching algorithm balances job dispatch across all qualified cooperative members to prevent work monopoly.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-teal-800/60 border border-teal-700/60 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-2xl mb-4">
                🛡️
              </div>
              <h3 className="text-lg font-bold text-white">Skill & Identity Verified</h3>
              <p className="text-xs text-teal-100 mt-2 leading-relaxed font-normal">
                National Skill Development Council (NSDC) certificate verification and transparent peer review for guaranteed workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency & Quick Booking Callout */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="max-w-xl">
            <span className="text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
              ⚡ Rapid Dispatch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3">
              Need an Emergency Electrician or Plumber?
            </h2>
            <p className="text-sm text-teal-100 mt-2 leading-relaxed">
              Our cooperative dispatch engine locates the nearest on-duty verified worker with instant booking confirmation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/workers">
              <Button variant="secondary" size="lg" className="font-semibold">
                🚨 Emergency Dispatch
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold">
                Book Scheduled
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
