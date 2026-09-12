import { Link } from 'react-router-dom';

/**
 * Neo-Brutalist Footer Component — SevaSangam
 * Bold border, high contrast yellow band, and punchy cooperative mission badges.
 */
const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-400 mt-auto py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-white flex items-center justify-center font-bold text-base">
                ⚡
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Seva<span className="text-teal-400">Sangam</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Democratizing the digital gig economy through worker-owned Labour Cooperative Federations. 
              Fair wages, verified skills, and collective social security.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs font-medium bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                🏛️ Ministry of Cooperation
              </span>
              <span className="text-xs font-medium bg-teal-950/70 text-teal-300 px-2.5 py-1 rounded-md border border-teal-800/60">
                🛡️ NSDC Certified
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Platform
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/services" className="hover:text-white transition-colors">
                Explore Services
              </Link>
              <Link to="/workers" className="hover:text-white transition-colors">
                Find Workers
              </Link>
              <Link to="/register" className="hover:text-white transition-colors">
                Join Cooperative
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">
              Portals
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <Link to="/login" className="hover:text-white transition-colors">
                Customer Portal
              </Link>
              <Link to="/login" className="hover:text-white transition-colors">
                Worker Portal
              </Link>
              <Link to="/login" className="hover:text-white transition-colors">
                Admin & Operations
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SevaSangam Cooperative Federation. Built for Smart India Hackathon.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">Fair Work Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors">Privacy</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors">Open Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
