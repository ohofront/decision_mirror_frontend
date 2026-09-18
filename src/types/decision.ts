export const criteria = [
  { key: 'money', label: '돈' }, { key: 'growth', label: '성장' },
  { key: 'stability', label: '안정성' }, { key: 'workLifeBalance', label: '워라밸' },
  { key: 'stress', label: '스트레스 관리' }, { key: 'relationships', label: '인간관계' },
  { key: 'time', label: '시간' }, { key: 'career', label: '커리어' },
  { key: 'happiness', label: '행복' },
] as const;
export type Criterion = typeof criteria[number]['key'];
export type DecisionInput = { problem: string; options: string[]; priorities: Record<Criterion, number>; answers?: string[] };
export type TimelineKey = '1month' | '6months' | '1year' | '3years';
export type OptionResult = { name: string; timeline: Record<TimelineKey, string[]>; scores: Record<Criterion, number>; risks: string[]; opportunities: string[]; regretScenario: string };
export type Analysis = { summary: string; options: OptionResult[]; hiddenFactors: { title: string; description: string }[]; questions: string[]; demo?: boolean };
