interface ProgressBarProps {
  current: number;
  total: number;
  showText?: boolean;
  className?: string;
}

export function ProgressBar({ current, total, showText = true, className = '' }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className={className}>
      {showText && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">진행률</span>
          <span className="text-sm font-medium text-primary-600">
            {current}/{total} ({percentage}%)
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-primary-600 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
