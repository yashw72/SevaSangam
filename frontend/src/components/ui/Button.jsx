/**
 * Neo-Brutalist Button Component — SevaSangam
 * Bold borders, high tactile spring animations, hard box-shadows, and punchy colorways.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  isLoading = false,
  leftIcon = null,
  rightIcon = null,
  fullWidth = false,
  onClick,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-normal rounded-xl select-none cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-[0.98]';

  const variants = {
    // Primary: Elegant Emerald/Teal
    primary:
      'bg-teal-600 text-white shadow-sm hover:bg-teal-700 hover:shadow focus:ring-teal-500',
    // Secondary: Dark Slate
    secondary:
      'bg-slate-900 text-white shadow-sm hover:bg-slate-800 hover:shadow focus:ring-slate-900',
    // Orange / Warm accent
    orange:
      'bg-amber-600 text-white shadow-sm hover:bg-amber-700 hover:shadow focus:ring-amber-500',
    // Accent / Blue
    accent:
      'bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow focus:ring-blue-500',
    // Outline / Clean white
    outline:
      'bg-white text-slate-700 border border-slate-200 shadow-xs hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 focus:ring-slate-300',
    'outline-primary':
      'bg-teal-50/50 text-teal-700 border border-teal-200 hover:bg-teal-100/70 hover:border-teal-300 focus:ring-teal-400',
    // Ghost
    ghost:
      'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-200',
    // Success State
    success:
      'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 hover:shadow focus:ring-emerald-500',
    // Destructive Actions
    danger:
      'bg-rose-600 text-white shadow-sm hover:bg-rose-700 hover:shadow focus:ring-rose-500',
  };

  const sizes = {
    xs: 'px-2.5 py-1 text-xs gap-1 rounded-lg',
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 rounded-lg',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-5 py-2.5 text-base gap-2',
    xl: 'px-6 py-3.5 text-base gap-2.5 rounded-xl font-semibold',
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;
