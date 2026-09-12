import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';

/**
 * Neo-Brutalist WorkerCard Component — SevaSangam
 * Displays verified Labour Cooperative Society worker information with high contrast.
 */
const WorkerCard = ({
  worker,
  onBook,
  onViewProfile,
  className = '',
  hover = true,
}) => {
  if (!worker) return null;

  const availabilityStatus =
    worker.availability === 'available'
      ? 'online'
      : worker.availability === 'busy'
      ? 'busy'
      : 'offline';

  const distanceText =
    worker.distance ||
    (worker.distanceKm !== undefined ? `${worker.distanceKm} km away` : null);

  return (
    <Card hover={hover} className={`flex flex-col justify-between bg-white border border-slate-200/90 shadow-xs hover:border-teal-300 hover:shadow-md transition-all ${className}`}>
      <CardContent className="p-5">
        <div className="flex items-start gap-3.5">
          {/* Avatar */}
          <div className="relative shrink-0">
            <Avatar
              src={worker.avatar}
              name={worker.name}
              size="lg"
              status={availabilityStatus}
              verified={worker.isVerified}
            />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1.5">
              <h4 className="text-sm font-bold text-slate-900 truncate">
                {worker.name}
              </h4>
              {worker.isVerified && (
                <Badge variant="success" size="sm">
                  ✓ Verified
                </Badge>
              )}
            </div>

            {/* Cooperative Name */}
            {worker.cooperative && (
              <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                🏛️ {worker.cooperative}
              </p>
            )}

            {/* Rating and Distance */}
            <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
              <span className="inline-flex items-center gap-1 font-semibold text-slate-800 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md">
                <span className="text-amber-500">★</span>
                <span>{worker.rating ? worker.rating.toFixed(1) : '5.0'}</span>
                {worker.reviewCount ? (
                  <span className="font-normal text-slate-400">({worker.reviewCount})</span>
                ) : null}
              </span>

              {distanceText && (
                <span className="inline-flex items-center gap-1 font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">
                  📍 {distanceText}
                </span>
              )}

              {worker.hourlyRate && (
                <span className="font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-md">
                  ₹{worker.hourlyRate}<span className="text-slate-500 font-normal">/hr</span>
                </span>
              )}
            </div>

            {/* Emergency Available indicator */}
            {worker.emergencyAvailable && (
              <div className="mt-2">
                <Badge variant="danger" size="sm" dot>
                  ⚡ Emergency Dispatch
                </Badge>
              </div>
            )}

            {/* Skill Tags */}
            {Array.isArray(worker.skills) && worker.skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {worker.skills.slice(0, 4).map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant={skill === worker.primarySkill ? 'primary' : 'default'}
                    size="sm"
                  >
                    {skill}
                  </Badge>
                ))}
                {worker.skills.length > 4 && (
                  <Badge variant="secondary" size="sm">
                    +{worker.skills.length - 4}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>

      {/* Card Footer Actions */}
      <CardFooter className="px-5 py-3 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
        <div className="text-xs text-slate-500">
          <span className="font-semibold text-slate-800">{worker.totalJobs || 0}</span> jobs completed
        </div>

        <div className="flex items-center gap-2">
          {onViewProfile && (
            <Button
              variant="outline"
              size="xs"
              onClick={() => onViewProfile(worker)}
            >
              Profile
            </Button>
          )}
          {onBook && (
            <Button
              variant="primary"
              size="xs"
              onClick={() => onBook(worker)}
            >
              Book Now
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkerCard;
