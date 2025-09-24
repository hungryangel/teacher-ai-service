interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  hover?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false 
}: CardProps) {
  const variantClasses = {
    default: 'bg-white rounded-xl',
    elevated: 'bg-white rounded-xl shadow-lg',
    bordered: 'bg-white rounded-xl border border-gray-200'
  };

  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : '';

  return (
    <div className={`${variantClasses[variant]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
