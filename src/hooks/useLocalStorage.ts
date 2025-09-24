import { useState, useEffect } from 'react';
import { memoryStorage } from '@/lib/utils/storage';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = memoryStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Storage read error:', error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      memoryStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn('Storage write error:', error);
    }
  };

  return [storedValue, setValue] as const;
}
