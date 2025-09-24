interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
}

export function Card({ 
  children, 
  className = '', 
  padding = 'md',
  shadow = 'md',
  hover = false 
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6', 
    lg: 'p-8'
  };

  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg', 
    xl: 'shadow-xl'
  };

  const hoverClass = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : '';

  return (
    <div className={`
      bg-white rounded-xl ${paddingClasses[padding]} ${shadowClasses[shadow]} 
      ${hoverClass} ${className}
    `}>
      {children}
    </div>
  );
}
