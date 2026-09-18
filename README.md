# Decision Mirror

선택지별 1개월, 6개월, 1년, 3년 후를 비교하는 AI 의사결정 시뮬레이터입니다.

## 실행

```bash
npm install
npm run dev
```

`http://localhost:3000`에서 실행됩니다. API 키가 없으면 자동으로 데모 응답을 반환합니다.

## 실제 AI 분석

`.env.example`을 참고해 `.env.local`을 만들고 `NEXT_PUBLIC_DEMO_MODE=false`와 사용할 제공자의 API 키를 설정하세요. `AI_PROVIDER`는 `openai`, `upstage`, `gemini` 중 하나입니다. 모델 이름은 제공자별 환경변수로 변경할 수 있습니다.

## 검증

```bash
npm run lint
npm run build
```

결과는 브라우저 LocalStorage에 저장되며 로그인이나 데이터베이스는 사용하지 않습니다. 데모 모드의 시나리오는 입력 선택지 이름을 반영하지만 예시 내용은 고정되어 있습니다.
