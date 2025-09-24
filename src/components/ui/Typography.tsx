interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function HeadingXL({ children, className = '' }: TypographyProps) {
  return (
    <h1 className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight ${className}`}>
      {children}
    </h1>
  );
}

export function HeadingLG({ children, className = '' }: TypographyProps) {
  return (
    <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 leading-tight ${className}`}>
      {children}
    </h2>
  );
}

export function HeadingMD({ children, className = '' }: TypographyProps) {
  return (
    <h3 className={`text-xl lg:text-2xl font-semibold text-gray-900 leading-tight ${className}`}>
      {children}
    </h3>
  );
}

export function BodyLG({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-lg text-gray-600 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function BodySM({ children, className = '' }: TypographyProps) {
  return (
    <p className={`text-sm text-gray-500 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
