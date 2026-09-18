import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
import { analyzeWithAI } from '@/lib/ai';
import { demoAnalysis } from '@/lib/demo';
import { inputSchema } from '@/lib/schemas';

export async function POST(request: Request) {
  try {
    const input = inputSchema.parse(await request.json());
    const provider = process.env.AI_PROVIDER || 'openai';
    const key = provider === 'upstage' ? process.env.UPSTAGE_API_KEY : provider === 'gemini' ? process.env.GEMINI_API_KEY : process.env.OPENAI_API_KEY;
    const result = process.env.NEXT_PUBLIC_DEMO_MODE === 'true' || !key ? demoAnalysis(input) : await analyzeWithAI(input);
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof ZodError ? '입력 내용을 확인해 주세요.' : error instanceof Error ? error.message : '분석 중 문제가 발생했습니다.';
    return NextResponse.json({ error: message }, { status: error instanceof ZodError ? 400 : 500 });
  }
}
