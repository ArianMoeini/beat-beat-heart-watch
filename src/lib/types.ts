export type ScanResultType = 'normal' | 'clear_classification' | 'inconclusive' | 'emergency' | 'try_again';

export interface ScanRecord {
  id: string;
  recording_id: string | null;
  result: ScanResultType;
  result_title: string;
  result_description: string;
  condition_name: string | null;
  recommended_steps: string | null;
  created_at: string;
  sent_to_kry: boolean;
}

export interface UserSettings {
  onboarded: boolean;
  age: number;
  sex: string;
  knownConditions: string[];
  notificationsEnabled: boolean;
}

export const DEFAULT_SETTINGS: UserSettings = {
  onboarded: false,
  age: 30,
  sex: '',
  knownConditions: [],
  notificationsEnabled: true,
};
