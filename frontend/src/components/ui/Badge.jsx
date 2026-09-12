/**
 * Neo-Brutalist Badge Component — SevaSangam
 * High contrast status pills with solid black borders and vibrant fills.
 */
const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  shadow = false,
  className = '',
}) => {
  const variants = {
    // Primary: Elegant Teal
    primary: 'bg-teal-50 text-teal-700 border-teal-200/80',
    // Secondary: Slate
    secondary: 'bg-slate-100 text-slate-700 border-slate-200',
    // Accent: Sky Blue
    accent: 'bg-blue-50 text-blue-700 border-blue-200/80',
    // Orange: Amber / Saffron
    orange: 'bg-amber-50 text-amber-700 border-amber-200/80',
    // Success: Emerald
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    // Warning: Yellow / Amber
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200/80',
    // Danger: Rose
    danger: 'bg-rose-50 text-rose-700 border-rose-200/80',
    // Purple: Violet
    purple: 'bg-purple-50 text-purple-700 border-purple-200/80',
    // Default Clean Gray
    default: 'bg-slate-50 text-slate-700 border-slate-200',
  };

  const dotColors = {
    primary: 'bg-teal-500',
    secondary: 'bg-slate-500',
    accent: 'bg-blue-500',
    orange: 'bg-amber-500',
    success: 'bg-emerald-500',
    warning: 'bg-yellow-500',
    danger: 'bg-rose-500',
    purple: 'bg-purple-500',
    default: 'bg-slate-500',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[11px] font-medium',
    md: 'px-2.5 py-1 text-xs font-medium',
    lg: 'px-3 py-1.5 text-sm font-semibold',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 tracking-tight rounded-full border
        ${variants[variant] || variants.default}
        ${sizes[size] || sizes.md}
        ${className}
      `}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors[variant] || dotColors.default}`}
        />
      )}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
