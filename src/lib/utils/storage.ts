class MemoryStorage {
  private storage: Map<string, string> = new Map();

  setItem(key: string, value: string): void {
    this.storage.set(key, value);
  }

  getItem(key: string): string | null {
    return this.storage.get(key) || null;
  }

  removeItem(key: string): void {
    this.storage.delete(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

export const memoryStorage = new MemoryStorage();

// 사용자 데이터 저장 (메모리 기반)
export function saveUserData(key: string, data: any): void {
  try {
    memoryStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.warn('데이터 저장 실패:', error);
  }
}

export function getUserData<T>(key: string): T | null {
  try {
    const data = memoryStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.warn('데이터 불러오기 실패:', error);
    return null;
  }
}
