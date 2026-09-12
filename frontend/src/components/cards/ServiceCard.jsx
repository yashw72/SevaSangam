import Button from '../ui/Button';
import Badge from '../ui/Badge';

/**
 * Neo-Brutalist ServiceCard Component — SevaSangam
 * Displays service catalog item with category badge, base rate, and select action.
 */
const ServiceCard = ({ service, onSelect }) => {
  if (!service) return null;

  const getCategoryColor = (cat = '') => {
    const c = cat.toLowerCase();
    if (c.includes('electric')) return 'bg-amber-50 text-amber-600';
    if (c.includes('plumb')) return 'bg-blue-50 text-blue-600';
    if (c.includes('clean')) return 'bg-emerald-50 text-emerald-600';
    if (c.includes('carpent')) return 'bg-orange-50 text-orange-600';
    if (c.includes('appliance') || c.includes('ac')) return 'bg-cyan-50 text-cyan-600';
    return 'bg-purple-50 text-purple-600';
  };

  const catColor = getCategoryColor(service.category || service.name);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md hover:border-teal-300 hover:-translate-y-0.5 transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-start justify-between gap-2 mb-3.5">
          <div className={`w-11 h-11 rounded-xl ${catColor} flex items-center justify-center font-bold text-xl`}>
            {service.icon || service.name?.charAt(0) || '⚡'}
          </div>
          {service.category && (
            <Badge variant="secondary" size="sm">
              {service.category}
            </Badge>
          )}
        </div>

        <h4 className="text-base font-bold text-slate-900 tracking-tight mb-1.5 group-hover:text-teal-600 transition-colors">
          {service.name}
        </h4>
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
          {service.description}
        </p>

        {service.basePrice && (
          <div className="inline-block bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700 mb-2">
            Starts at <span className="text-teal-700 font-bold">₹{service.basePrice}</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
          ✓ Standardized
        </span>
        <Button variant="primary" size="xs" onClick={() => onSelect?.(service)}>
          Select Service
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
