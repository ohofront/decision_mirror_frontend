# AI 해커톤 프로젝트 개발 명세서

# 프로젝트명
## **Decision Mirror — AI 의사결정 시뮬레이터**

> "중요한 결정을 내리기 전에, 그 선택의 결과를 AI로 미리 살아본다."

---

# 1. 프로젝트 개요

Decision Mirror는 사용자가 고민 중인 선택지를 입력하면 AI가 각 선택의 **단기·중기·장기 결과를 시뮬레이션**하고,  
숨겨진 리스크·기회비용·추가 질문을 분석하여 더 나은 판단을 돕는 AI 의사결정 지원 서비스다.

예를 들어 사용자가 아래처럼 입력한다.

- 지금 회사에 남을지 이직할지 고민 중
- 월세가 저렴한 외곽으로 이사할지 회사 근처에 살지 고민 중
- 사이드 프로젝트를 계속할지 자격증 공부에 집중할지 고민 중
- 구독형 서비스를 출시할지 일회성 결제로 출시할지 고민 중

서비스는 단순히 "A가 좋다 / B가 좋다"라고 답하지 않는다.

각 선택지를 선택했을 때 예상되는 미래를 여러 관점에서 시뮬레이션하고,
사용자가 미처 고려하지 못한 변수와 트레이드오프를 시각적으로 보여준다.

---

# 2. 문제 정의

사람들은 중요한 결정을 할 때 다음과 같은 문제를 겪는다.

1. 선택의 결과를 장기적으로 상상하기 어렵다.
2. 본인이 중요하게 생각하는 기준이 명확하지 않다.
3. 감정이나 현재 상황에 지나치게 영향을 받는다.
4. 검색을 많이 해도 정보는 많지만 결론은 내리기 어렵다.
5. AI에게 물어봐도 대부분 일반적인 조언으로 끝난다.

Decision Mirror는 AI를 단순 답변 도구가 아니라
**"미래 시뮬레이션 엔진"**으로 활용한다.

---

# 3. 핵심 가치

## 기존 AI 상담과 다른 점

일반 AI:

> "이직에는 장단점이 있습니다."

Decision Mirror:

> "이직을 선택했을 때 3개월 후에는 적응 스트레스가 증가할 수 있지만,
> 1년 후에는 연봉과 기술 성장 측면에서 현재 직장보다 유리할 가능성이 있습니다.
> 다만 당신이 입력한 '워라밸 중요도 9/10'을 기준으로 보면
> 초기 6개월의 업무 강도가 핵심 리스크입니다."

즉,

**Advice → Simulation**

으로 AI 사용 방식을 바꾼다.

---

# 4. 핵심 사용자 경험

전체 흐름은 3분 안에 끝나야 한다.

## STEP 1. 고민 입력

사용자 입력 예시:

> "현재 회사에 계속 다닐지 스타트업으로 이직할지 고민 중이다."

---

## STEP 2. 선택지 입력

### Option A
현재 회사 유지

### Option B
스타트업 이직

선택지는 최대 3개까지 지원한다.

---

## STEP 3. 판단 기준 설정

사용자가 중요하게 생각하는 항목을 선택한다.

기본 항목:

- 돈
- 성장
- 안정성
- 워라밸
- 스트레스
- 인간관계
- 시간
- 커리어
- 행복

각 항목 중요도를 1~10으로 설정할 수 있다.

---

## STEP 4. AI 미래 시뮬레이션

AI가 각 선택지를 다음 시점으로 분석한다.

### 1개월 후
즉각적인 변화

### 6개월 후
적응 이후 변화

### 1년 후
중기 결과

### 3년 후
장기적인 영향

---

# 5. Killer Feature

## 5.1 Future Timeline

각 선택의 미래를 타임라인으로 보여준다.

예:

### Option A — 현재 회사 유지

**1개월**
- 생활 안정성 유지
- 새로운 적응 비용 없음

**6개월**
- 업무 익숙함 증가
- 성장 정체감 발생 가능

**1년**
- 안정적인 커리어
- 기술 스택 변화 제한 가능

**3년**
- 조직 내 전문성 증가
- 외부 시장 경쟁력은 추가 관리 필요

---

## 5.2 Butterfly Effect

AI가 사용자가 놓친 변수를 찾아준다.

예:

> "당신은 연봉 차이를 중요하게 보고 있지만,
> 실제로는 통근 시간이 매일 80분 증가합니다.
> 1년으로 환산하면 약 320시간입니다."

이 기능은 시각적으로 강조한다.

---

## 5.3 Regret Simulator

사용자가 각 선택을 했을 때
**가장 후회할 가능성이 높은 상황**을 AI가 생성한다.

예:

### Option A의 최대 후회 시나리오

> "1년 뒤 동료들이 새로운 기술 경험을 쌓는 동안
> 현재 역할에 머무르며 성장 기회를 놓쳤다고 느낄 수 있습니다."

### Option B의 최대 후회 시나리오

> "연봉은 상승했지만 업무 강도가 예상보다 높아
> 개인 시간이 크게 줄어들 수 있습니다."

---

## 5.4 Hidden Question

AI가 결정 전에 반드시 답해야 할 질문을 생성한다.

예:

- 연봉이 15% 높아도 야근이 주 3회라면 선택할 것인가?
- 새로운 회사가 1년 안에 성장하지 않아도 괜찮은가?
- 현재 회사에서 역할 확장이 가능하다면 이직 이유가 사라지는가?

사용자가 질문에 답하면 분석을 다시 업데이트할 수 있다.

---

## 5.5 Decision Map

최종 결과를 Radar Chart로 시각화한다.

예:

| 항목 | Option A | Option B |
|---|---:|---:|
| 돈 | 6 | 9 |
| 안정성 | 9 | 5 |
| 성장 | 5 | 9 |
| 워라밸 | 8 | 5 |
| 스트레스 | 8 | 4 |

Chart.js 또는 Recharts 사용.

---

# 6. AI 활용 방식

AI는 아래 역할을 수행한다.

### 1. 상황 이해
사용자의 고민을 구조화한다.

### 2. 시나리오 생성
선택별 미래 시나리오를 생성한다.

### 3. Risk 분석
숨겨진 위험 요소를 찾는다.

### 4. Opportunity 분석
선택지별 잠재적인 기회를 찾는다.

### 5. Trade-off 분석
한 선택으로 얻는 것과 잃는 것을 분석한다.

### 6. 질문 생성
결정을 위해 필요한 추가 질문을 만든다.

### 7. 사용자 기준 반영
사용자가 중요하게 생각하는 가치의 가중치를 적용한다.

---

# 7. AI 응답 JSON Schema

AI 응답은 반드시 JSON으로 반환한다.

```json
{
  "summary": "현재 선택에서 가장 중요한 변수는 성장과 워라밸의 균형입니다.",
  "options": [
    {
      "name": "현재 회사 유지",
      "timeline": {
        "1month": [
          "업무 환경 변화 없음",
          "생활 패턴 유지"
        ],
        "6months": [
          "안정성 유지",
          "성장 정체 가능성"
        ],
        "1year": [
          "도메인 전문성 증가",
          "기술 변화 제한 가능"
        ],
        "3years": [
          "조직 전문성 증가",
          "시장 경쟁력 관리 필요"
        ]
      },
      "scores": {
        "money": 6,
        "growth": 5,
        "stability": 9,
        "workLifeBalance": 8,
        "stress": 8
      },
      "risks": [
        "성장 정체 가능성",
        "기술 스택 다양성 부족"
      ],
      "opportunities": [
        "조직 내 영향력 증가",
        "안정적인 커리어"
      ],
      "regretScenario": "3년 뒤 새로운 기술 경험 부족을 아쉬워할 수 있습니다."
    }
  ],
  "hiddenFactors": [
    {
      "title": "통근 시간",
      "description": "새 회사로 이동하면 하루 통근 시간이 약 40분 증가할 수 있습니다."
    }
  ],
  "questions": [
    "연봉 상승보다 워라밸을 더 중요하게 생각합니까?",
    "현재 회사에서 역할 변경이 가능합니까?"
  ]
}
```

---

# 8. 기술 스택

## Frontend

- Next.js 16+
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand
- TanStack Query
- Recharts 또는 Chart.js

## AI

우선순위:

1. OpenAI API
2. Upstage Solar API
3. Gemini API

환경변수로 교체 가능하게 구성한다.

---

# 9. 권장 구조

```text
src/
├── app/
│   ├── page.tsx
│   ├── analyze/
│   │   └── page.tsx
│   ├── result/
│   │   └── page.tsx
│   └── api/
│       └── analyze/
│           └── route.ts
│
├── components/
│   ├── decision/
│   │   ├── DecisionForm.tsx
│   │   ├── OptionInput.tsx
│   │   └── CriteriaSelector.tsx
│   │
│   ├── result/
│   │   ├── FutureTimeline.tsx
│   │   ├── DecisionRadar.tsx
│   │   ├── ButterflyEffect.tsx
│   │   ├── RegretCard.tsx
│   │   └── HiddenQuestion.tsx
│   │
│   └── common/
│
├── lib/
│   ├── ai.ts
│   ├── prompts.ts
│   └── schemas.ts
│
├── store/
│   └── decisionStore.ts
│
└── types/
    └── decision.ts
```

---

# 10. 페이지 구성

# `/`

Landing Page

Hero:

> **결정하기 전에, 그 선택의 미래를 먼저 살아보세요.**

Sub Copy:

> AI가 각 선택의 1개월, 6개월, 1년, 3년 후를 시뮬레이션합니다.

CTA:

**내 선택 시뮬레이션하기**

Sample cards:

- 이직 vs 현 직장 유지
- 서울 거주 vs 지방 이사
- 창업 vs 직장 유지
- 대학원 vs 경력 유지

---

# `/analyze`

입력 화면.

### 고민

textarea

### 선택지

Option A
Option B

"+ 선택지 추가"

최대 3개.

### 중요 가치

slider UI

예:

돈
`1 ───────── 10`

성장
`1 ───────── 10`

워라밸
`1 ───────── 10`

---

# `/result`

가장 중요한 데모 페이지.

구성:

## Header

Decision Mirror

---

## AI Summary

> "현재 결정에서 가장 큰 트레이드오프는
> 안정성과 성장 가능성입니다."

---

## Future Timeline

Option A / Option B 탭

1개월
↓
6개월
↓
1년
↓
3년

---

## Decision Radar

Radar Chart

Option 비교

---

## Butterfly Effect

강조 카드

"당신이 놓친 변수"

---

## Regret Simulator

"가장 후회할 수 있는 미래"

Option A

Option B

---

## Hidden Question

"결정하기 전에 이것만은 답해보세요."

3개 질문 표시.

---

# 11. 디자인 방향

전체적인 느낌:

**Linear + Arc + Apple Intelligence**

원칙:

- Dark Mode 기본
- minimal
- 과도한 gradient 금지
- 카드 기반 UI
- large typography
- 숫자와 결과 강조
- AI 분석 중 애니메이션 사용

메인 색:

Neutral / White

강조:

Purple 또는 Blue Gradient

---

# 12. AI 분석 Loading UX

AI 분석에는 약간의 시간이 걸린다.

단순 Spinner 사용 금지.

다음 문구를 단계적으로 표시한다.

```text
당신의 선택을 이해하고 있습니다...

각 선택의 미래를 시뮬레이션하고 있습니다...

숨겨진 리스크를 찾고 있습니다...

기회비용을 계산하고 있습니다...

결정 지도를 만들고 있습니다...
```

progress UI 사용.

---

# 13. Demo Mode

API 실패 또는 API 키가 없는 경우를 대비해
반드시 Demo Mode를 만든다.

환경변수:

```text
NEXT_PUBLIC_DEMO_MODE=true
```

Demo Mode에서는 사전에 정의된 JSON을 반환한다.

데모 질문:

> "현재 회사를 계속 다닐지,
> 더 높은 연봉을 주는 스타트업으로 이직할지 고민 중이다."

---

# 14. AI System Prompt

```text
You are Decision Mirror, an AI decision simulation engine.

Your job is NOT to tell the user what decision to make.

Instead, simulate the potential consequences of each option.

Analyze:

- short-term impact
- medium-term impact
- long-term impact
- risks
- opportunities
- hidden variables
- opportunity costs
- potential regret scenarios

Use the user's stated priorities as weights.

Avoid absolute predictions.

Use probabilistic language such as:

- may
- likely
- could
- possible

Do not claim certainty about the future.

Output valid JSON only.

The JSON must follow the provided schema.
```

---

# 15. 추가 Prompt

```text
User Decision:

{problem}

Options:

{options}

User Priorities:

{criteria}

Analyze each option.

Generate:

1. 1 month scenario
2. 6 month scenario
3. 1 year scenario
4. 3 year scenario
5. key risks
6. opportunities
7. regret scenario
8. hidden factors
9. 3 questions the user should answer before deciding

Score each option from 1-10 based on each priority.

Return JSON only.
```

---

# 16. MVP 우선순위

시간이 부족하면 아래 기능만 구현한다.

## P0

- 고민 입력
- 선택지 입력
- AI 분석
- Future Timeline
- Radar Chart
- Butterfly Effect
- Regret Simulator
- 배포

## P1

- 사용자 중요도 설정
- Hidden Question
- 결과 재분석

## P2

- 결과 공유
- 결과 이미지 저장
- 결과 히스토리
- 로그인

---

# 17. 구현 제외

해커톤 기간에는 아래 기능 구현하지 않는다.

- 회원가입
- OAuth
- 복잡한 DB
- 결제
- 관리자
- 모바일 앱
- 커뮤니티
- 복잡한 사용자 관리

가능하면 LocalStorage만 사용한다.

---

# 18. 배포

우선:

Vercel

환경변수:

```text
AI_PROVIDER=openai
OPENAI_API_KEY=
OPENAI_MODEL=
NEXT_PUBLIC_DEMO_MODE=false
```

또는

```text
AI_PROVIDER=upstage
UPSTAGE_API_KEY=
```

---

# 19. 해커톤 제출 문구

## 해결하고자 한 문제

사람들은 중요한 결정을 내릴 때 수많은 정보를 검색하지만,
정작 각각의 선택이 자신의 미래에 어떤 영향을 줄지 구조적으로 비교하기 어렵다.

Decision Mirror는 AI가 선택별 미래를 여러 시간축과 관점으로 시뮬레이션하여
사용자가 더 깊이 생각하고 스스로 판단할 수 있도록 돕는다.

---

## AI 활용 방식

생성형 AI를 활용해 사용자의 고민과 선택지를 구조화하고,
각 선택의 단기·중기·장기 결과를 시뮬레이션한다.

또한 AI가 숨겨진 리스크, 기회비용, 후회 가능성이 높은 시나리오,
결정 전에 반드시 확인해야 할 질문을 생성한다.

---

## AI가 필요한 이유

이 프로젝트의 핵심 기능은 고정된 규칙으로 구현하기 어렵다.

사용자의 상황, 선택지, 가치 기준이 매번 다르기 때문에
AI가 자연어 맥락을 이해하고 각각의 상황에 맞는 시나리오를 생성해야 한다.

AI는 단순 보조 기능이 아니라
서비스의 핵심 의사결정 시뮬레이션 엔진으로 사용된다.

---

# 20. 심사 데모 시나리오

Demo Day에서 아래 질문을 사용한다.

```text
고민:

현재 회사에서 안정적으로 일할지,
연봉이 20% 높은 스타트업으로 이직할지 고민 중이다.

Option A:
현재 회사 유지

Option B:
스타트업 이직

중요도:

연봉 7
성장 9
안정성 6
워라밸 8
```

분석 버튼 클릭.

화면:

```text
당신의 선택을 시뮬레이션하고 있습니다...
```

결과:

Future Timeline

↓

Radar Chart

↓

Butterfly Effect

> "이직할 경우 하루 통근 시간이 40분 증가한다면
> 1년 기준 약 320시간이 추가됩니다."

↓

Regret Simulator

↓

Hidden Question

이 흐름이 데모의 핵심이다.

---

# 21. Codex 구현 지침

아래 요구사항을 기준으로 프로젝트를 생성한다.

## 필수

- Next.js App Router
- TypeScript strict
- Tailwind
- responsive
- desktop / mobile 모두 지원
- dark theme
- 접근성 고려
- loading / error state 구현
- TypeScript any 금지
- reusable component 구조

---

# 22. Codex 작업 순서

아래 순서로 진행한다.

### Step 1

Next.js 프로젝트 구조 분석

필요한 dependencies 설치

---

### Step 2

Landing Page 구현

---

### Step 3

Decision Form 구현

---

### Step 4

Zustand store 구현

---

### Step 5

AI API Route 구현

`/api/analyze`

---

### Step 6

AI response schema 정의

Zod validation 적용

---

### Step 7

Result Page 구현

Future Timeline

---

### Step 8

Radar Chart 구현

---

### Step 9

Butterfly Effect 구현

---

### Step 10

Regret Simulator 구현

---

### Step 11

AI Loading UX 구현

---

### Step 12

Demo Mode 구현

---

### Step 13

Responsive UI 확인

---

### Step 14

lint

```bash
npm run lint
```

---

### Step 15

build

```bash
npm run build
```

오류가 발생하면 모두 수정한다.

---

# 23. 완료 조건

아래 조건을 모두 만족해야 한다.

- 사용자가 고민을 입력할 수 있다.
- 최소 2개의 선택지를 입력할 수 있다.
- AI 분석 요청이 정상 동작한다.
- AI 결과가 JSON schema에 맞게 검증된다.
- 결과 페이지에서 Future Timeline이 표시된다.
- Radar Chart가 표시된다.
- Butterfly Effect가 표시된다.
- Regret Simulator가 표시된다.
- Hidden Question이 표시된다.
- API 실패 시 오류 처리가 된다.
- Demo Mode가 존재한다.
- 모바일에서도 정상 동작한다.
- lint 통과
- build 통과

---

# 24. 가장 중요한 구현 원칙

이 프로젝트의 목표는 기능 수가 아니다.

심사위원이 서비스를 처음 보는 순간

> "AI를 이렇게 활용할 수도 있구나."

라는 느낌을 받아야 한다.

따라서

**Future Timeline**
+
**Butterfly Effect**
+
**Regret Simulator**

이 3개 기능의 UX 완성도를 가장 높게 구현한다.

불필요한 기능을 추가하지 말고
핵심 경험을 완성하는 데 집중한다.
