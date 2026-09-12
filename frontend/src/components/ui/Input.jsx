/**
 * Neo-Brutalist Input Component — SevaSangam
 * Bold black borders, tactile focus lift, and high readability.
 */
const Input = ({
  label,
  id,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  error = '',
  helperText = '',
  disabled = false,
  required = false,
  leftIcon = null,
  rightIcon = null,
  className = '',
  ...props
}) => {
  const inputId = id || name;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-slate-700 mb-1.5"
        >
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            {leftIcon}
          </div>
        )}

        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`
            w-full rounded-xl border text-sm font-normal transition-colors duration-150
            focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600
            disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed
            ${leftIcon ? 'pl-10' : 'pl-3.5'}
            ${rightIcon ? 'pr-10' : 'pr-3.5'}
            py-2.5 bg-white text-slate-900 placeholder-slate-400
            ${
              error
                ? 'border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-rose-500/20 text-rose-900'
                : 'border-slate-200 hover:border-slate-300'
            }
            ${className}
          `}
          {...props}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-700">
            {rightIcon}
          </div>
        )}
      </div>

      {error ? (
        <p className="mt-1.5 text-xs font-bold text-rose-600 flex items-center gap-1">
          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      ) : helperText ? (
        <p className="mt-1.5 text-xs font-medium text-slate-600">{helperText}</p>
      ) : null}
    </div>
  );
};

export default Input;
