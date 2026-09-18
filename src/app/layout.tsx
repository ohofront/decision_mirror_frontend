import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Aperture } from 'lucide-react';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = { title: 'Decision Mirror — 선택의 미래를 미리 보다', description: 'AI로 선택의 1개월, 6개월, 1년, 3년 후를 시뮬레이션하세요.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><Providers><div className="app-shell"><header className="site-header"><Link href="/" className="brand" aria-label="Decision Mirror 홈"><span className="brand-mark"><Aperture size={18}/></span>decision<span>mirror</span><span className="brand-dot">.</span></Link><nav><Link href="/analyze">시뮬레이션 시작 <ArrowUpRight size={15}/></Link></nav></header>{children}<footer className="site-footer"><span>DECISION MIRROR <span className="muted">/ 생각의 다음 장면</span></span><span>미래를 예언하지 않습니다. 더 나은 질문을 만듭니다.</span></footer></div></Providers></body></html>;
}
