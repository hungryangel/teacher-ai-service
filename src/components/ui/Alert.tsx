import React, { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
}

export function Alert({ children, variant = 'info', className = '' }: AlertProps) {
  const variantConfig = {
    info: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: 'ℹ️' },
    success: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', icon: '✅' },
    warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', icon: '⚠️' },
    error: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: '❌' }
  };

  const config = variantConfig[variant];

  return (
    <div className={`
      ${config.bg} ${config.border} ${config.text} 
      border rounded-lg p-4 ${className}
    `}>
      <div className="flex items-start">
        <span className="text-lg mr-3">{config.icon}</span>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
