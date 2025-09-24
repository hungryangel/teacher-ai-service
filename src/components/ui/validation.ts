export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export function validateChildInfo(data: {
  name: string;
  age: string;
  className?: string;
}): ValidationResult {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('아동 이름은 최소 2자 이상이어야 합니다.');
  }

  if (!data.age || !data.age.includes('세')) {
    errors.push('연령을 올바르게 선택해주세요.');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export function validateObservations(observations: Record<string, string>): ValidationResult {
  const errors: string[] = [];
  const requiredFields = ['physical', 'communication', 'social'];

  for (const field of requiredFields) {
    if (!observations[field] || observations[field].trim().length < 10) {
      errors.push(`${field} 영역 관찰 내용은 최소 10자 이상 입력해주세요.`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
