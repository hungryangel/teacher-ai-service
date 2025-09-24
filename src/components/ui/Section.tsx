interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
}

export function Section({ 
  children, 
  className = '',
  background = 'white',
  padding = 'lg'
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50'
  };

  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20'
  };

  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </section>
  );
}
