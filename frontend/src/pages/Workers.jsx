import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import WorkerCard from '../components/cards/WorkerCard';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { workers as defaultWorkers } from '../mock/data/workers';

/**
 * Neo-Brutalist Workers Page — SevaSangam
 * Browse and find verified cooperative workers with search & filters.
 */
const Workers = () => {
  const [workersList] = useState(defaultWorkers);
  const [searchSkill, setSearchSkill] = useState('');
  const navigate = useNavigate();

  const filteredWorkers = workersList.filter((worker) => {
    if (!searchSkill) return true;
    return (
      worker.name.toLowerCase().includes(searchSkill.toLowerCase()) ||
      worker.skills?.some((s) => s.toLowerCase().includes(searchSkill.toLowerCase())) ||
      worker.cooperative?.toLowerCase().includes(searchSkill.toLowerCase())
    );
  });

  const handleBook = (worker) => {
    navigate(`/booking?workerId=${worker.id}`);
  };

  const handleViewProfile = (worker) => {
    navigate(`/workers/${worker.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header Ribbon */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
          <Badge variant="primary" size="sm" className="mb-2">
            🛡️ 100% Identity & Background Verified
          </Badge>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Verified Cooperative Tradespeople
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Directly support skilled tradespeople. 0% private middleman cut, 100% fair cooperative rates.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mb-8">
          <Input
            placeholder="Search by worker name, skill, or trade..."
            value={searchSkill}
            onChange={(e) => setSearchSkill(e.target.value)}
            leftIcon={<span className="text-sm text-slate-400">🔍</span>}
          />
        </div>

        {/* Workers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredWorkers.map((worker) => (
            <WorkerCard
              key={worker.id}
              worker={worker}
              onBook={handleBook}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>

        {filteredWorkers.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-3xl mb-2">👷</div>
            <p className="text-slate-900 font-bold text-base">No cooperative workers found matching your query.</p>
            <p className="text-slate-500 text-xs mt-1">Try searching for generic skills like Electrician, Plumber, or Cleaner.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Workers;
