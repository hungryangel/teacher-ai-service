export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export function formatAge(birthDate: string): string {
  const birth = new Date(birthDate);
  const now = new Date();
  
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  return `만 ${years}세 ${months}개월`;
}

export function formatWordCount(text: string): number {
  return text.replace(/\s+/g, '').length;
}

export function formatScore(score: number): string {
  if (score >= 90) return '우수';
  if (score >= 80) return '양호'; 
  if (score >= 70) return '보통';
  if (score >= 60) return '노력 필요';
  return '많은 개선 필요';
}
