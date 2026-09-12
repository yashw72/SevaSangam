import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import ServiceCard from '../components/cards/ServiceCard';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import { services as defaultServices } from '../mock/data/services';

/**
 * Neo-Brutalist Services Page — SevaSangam
 * Browse and search available cooperative services with category filters.
 */
const Services = () => {
  const [servicesList] = useState(defaultServices);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const categories = ['All', ...new Set(servicesList.map((s) => s.category))];

  const filteredServices = servicesList.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSelectService = (service) => {
    navigate(`/booking?serviceId=${service.id}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header Ribbon */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs mb-8">
          <Badge variant="primary" size="sm" className="mb-2">
            🏛️ Direct Labour Federation Catalog
          </Badge>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Cooperative Services Directory
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-2xl">
            Transparent pricing, skilled trade guild verification, and collective quality assurance.
          </p>
        </div>

        {/* Search & Category Filter Pills */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="w-full md:w-96">
            <Input
              placeholder="Search services (e.g. electrical, plumbing)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              leftIcon={<span className="text-sm text-slate-400">🔍</span>}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={handleSelectService}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <div className="text-3xl mb-2">🔍</div>
            <p className="text-slate-900 font-bold text-base">No services found matching your criteria.</p>
            <p className="text-slate-500 text-xs mt-1">Try clearing the search filter or selecting another category.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Services;
