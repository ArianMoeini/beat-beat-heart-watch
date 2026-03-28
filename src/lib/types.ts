export interface HeartRateReading {
  id: string;
  bpm: number;
  note: string;
  timestamp: string; // ISO string
  status: 'normal' | 'elevated' | 'anomaly';
}

export interface UserSettings {
  onboarded: boolean;
  age: number;
  restingBpmLow: number;
  restingBpmHigh: number;
  anomalyThreshold: number; // percentage deviation
  notificationsEnabled: boolean;
}

export const DEFAULT_SETTINGS: UserSettings = {
  onboarded: false,
  age: 30,
  restingBpmLow: 60,
  restingBpmHigh: 100,
  anomalyThreshold: 20,
  notificationsEnabled: true,
};
