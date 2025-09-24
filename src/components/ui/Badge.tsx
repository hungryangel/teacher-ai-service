interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ children, variant = 'primary', size = 'sm', className = '' }: BadgeProps) {
  const variantClasses = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800', 
    error: 'bg-red-100 text-red-800'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm'
  };

  return (
    <span className={`
      inline-flex items-center rounded-full font-medium 
      ${variantClasses[variant]} ${sizeClasses[size]} ${className}
    `}>
      {children}
    </span>
  );
}
