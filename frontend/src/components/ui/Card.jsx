/**
 * Neo-Brutalist Card Component — SevaSangam
 * Bold black borders, crisp offset drop shadow, and punchy section headers.
 */
export const Card = ({
  children,
  className = '',
  hover = false,
  bordered = true,
  bg = 'bg-white',
  onClick,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${bg} rounded-2xl transition-all duration-200
        ${bordered ? 'border border-slate-200/90' : ''}
        ${
          hover
            ? 'shadow-xs hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 cursor-pointer'
            : 'shadow-xs'
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', bg = 'bg-transparent', ...props }) => (
  <div className={`px-6 py-5 border-b border-slate-100 ${bg} ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-base font-bold text-slate-900 tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-xs text-slate-500 mt-1 ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', bg = 'bg-slate-50/50', ...props }) => (
  <div
    className={`px-6 py-4 border-t border-slate-100 flex items-center justify-between rounded-b-2xl ${bg} ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
