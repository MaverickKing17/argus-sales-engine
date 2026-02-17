
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface CalculatorState {
  avgPrice: number;
  missedCalls: number;
}

export interface TerritoryStatus {
  name: string;
  status: 'Locked' | 'Waitlist' | 'Limited' | 'Open';
}

export type AppView = 'home' | 'privacy' | 'terms' | 'cookies' | 'dmca' | 'accessibility';
