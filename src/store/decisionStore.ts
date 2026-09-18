'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Analysis, DecisionInput } from '@/types/decision';

const initialInput: DecisionInput = { problem: '', options: ['', ''], priorities: { money: 7, growth: 8, stability: 6, workLifeBalance: 8, stress: 6, relationships: 5, time: 7, career: 7, happiness: 8 } };
type DecisionState = { input: DecisionInput; result: Analysis | null; setInput: (input: DecisionInput) => void; setResult: (result: Analysis | null) => void; loadExample: () => void };
export const useDecisionStore = create<DecisionState>()(persist((set) => ({ input: initialInput, result: null, setInput: (input) => set({ input }), setResult: (result) => set({ result }), loadExample: () => set({ input: { ...initialInput, problem: '현재 회사에서 안정적으로 일할지, 연봉이 20% 높은 스타트업으로 이직할지 고민 중이다.', options: ['현재 회사 유지', '스타트업 이직'], priorities: { ...initialInput.priorities, money: 7, growth: 9, stability: 6, workLifeBalance: 8 } }, result: null }) }), { name: 'decision-mirror' }));
