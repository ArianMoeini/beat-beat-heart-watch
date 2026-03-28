import { HeartRateReading, UserSettings } from './types';
import { getReadings } from './storage';

export function classifyReading(bpm: number, settings: UserSettings): HeartRateReading['status'] {
  const { restingBpmLow, restingBpmHigh, anomalyThreshold } = settings;
  const mid = (restingBpmLow + restingBpmHigh) / 2;
  const deviation = Math.abs(bpm - mid) / mid * 100;

  if (bpm < restingBpmLow * (1 - anomalyThreshold / 100) || bpm > restingBpmHigh * (1 + anomalyThreshold / 100)) {
    return 'anomaly';
  }
  if (bpm < restingBpmLow || bpm > restingBpmHigh) {
    return 'elevated';
  }
  return 'normal';
}

export function detectSuddenChange(bpm: number): boolean {
  const readings = getReadings();
  if (readings.length === 0) return false;
  const lastBpm = readings[0].bpm;
  const change = Math.abs(bpm - lastBpm) / lastBpm * 100;
  return change > 30;
}

export function getAnomalyCountThisWeek(): number {
  const readings = getReadings();
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  return readings.filter(r => r.status === 'anomaly' && new Date(r.timestamp) >= weekAgo).length;
}

export function sendNotification(bpm: number) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification('⚠️ Beat Beat Alert', {
      body: `Anomaly detected: ${bpm} BPM is outside your normal range.`,
      icon: '/placeholder.svg',
    });
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  const result = await Notification.requestPermission();
  return result === 'granted';
}
