import type { Analysis, DecisionInput } from '@/types/decision';
import { analysisSchema } from './schemas';
import { systemPrompt, userPrompt } from './prompts';

export async function analyzeWithAI(input: DecisionInput): Promise<Analysis> {
  const provider = process.env.AI_PROVIDER || 'openai';
  const config = provider === 'upstage'
    ? { url: 'https://api.upstage.ai/v1/solar/chat/completions', key: process.env.UPSTAGE_API_KEY, model: process.env.UPSTAGE_MODEL || 'solar-pro2' }
    : provider === 'gemini'
      ? { url: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', key: process.env.GEMINI_API_KEY, model: process.env.GEMINI_MODEL || 'gemini-2.5-flash' }
      : { url: 'https://api.openai.com/v1/chat/completions', key: process.env.OPENAI_API_KEY, model: process.env.OPENAI_MODEL || 'gpt-4.1-mini' };
  if (!config.key) throw new Error('AI API 키가 설정되지 않았습니다. 데모 모드를 켜거나 서버 환경변수를 확인해 주세요.');
  const response = await fetch(config.url, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${config.key}` }, body: JSON.stringify({ model: config.model, temperature: 0.6, response_format: { type: 'json_object' }, messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt(input) }] }), signal: AbortSignal.timeout(45000), cache: 'no-store' });
  if (!response.ok) throw new Error(`AI 분석 요청에 실패했습니다. (${response.status})`);
  const data: unknown = await response.json();
  const content = (data as { choices?: { message?: { content?: string } }[] }).choices?.[0]?.message?.content;
  if (!content) throw new Error('AI 응답이 비어 있습니다. 다시 시도해 주세요.');
  let parsed: unknown;
  try { parsed = JSON.parse(content); } catch { throw new Error('AI 응답을 읽을 수 없습니다. 다시 시도해 주세요.'); }
  const result = analysisSchema.parse(parsed);
  if (result.options.length !== input.options.length || result.options.some((option, i) => option.name !== input.options[i])) throw new Error('AI가 선택지를 정확히 분석하지 못했습니다. 다시 시도해 주세요.');
  return result;
}
