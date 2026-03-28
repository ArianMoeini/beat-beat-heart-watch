import { HeartRateReading, UserSettings, DEFAULT_SETTINGS } from './types';

const READINGS_KEY = 'beatbeat_readings';
const SETTINGS_KEY = 'beatbeat_settings';

export function getReadings(): HeartRateReading[] {
  try {
    const data = localStorage.getItem(READINGS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveReading(reading: HeartRateReading): void {
  const readings = getReadings();
  readings.unshift(reading);
  localStorage.setItem(READINGS_KEY, JSON.stringify(readings));
}

export function deleteReading(id: string): void {
  const readings = getReadings().filter(r => r.id !== id);
  localStorage.setItem(READINGS_KEY, JSON.stringify(readings));
}

export function clearAllReadings(): void {
  localStorage.removeItem(READINGS_KEY);
}

export function getSettings(): UserSettings {
  try {
    const data = localStorage.getItem(SETTINGS_KEY);
    return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: UserSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export function clearAllData(): void {
  localStorage.removeItem(READINGS_KEY);
  localStorage.removeItem(SETTINGS_KEY);
}
