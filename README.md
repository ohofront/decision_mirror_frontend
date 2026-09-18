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

## Netlify 배포

Git 저장소를 Netlify에 연결해 배포하세요. 저장소 루트의 `netlify.toml`이 빌드 명령을 `npm run build`, 게시 디렉터리를 `.next`로 설정합니다. Next.js API 경로를 사용하므로 폴더를 끌어다 놓는 수동 정적 배포 방식은 사용할 수 없습니다.

Netlify의 **Site configuration → Build & deploy**에서 Base directory가 저장소 루트인지 확인하세요. 기존에 `dist`, `build`, `out` 또는 `public`으로 설정한 Publish directory가 있다면 `.next`로 변경하고 새 배포를 실행하세요. 배포 로그에서 Next.js/OpenNext 어댑터가 실행됐는지 확인할 수 있습니다.

실제 AI 분석은 Netlify 환경변수에 `AI_PROVIDER`, 해당 제공자의 API 키, `NEXT_PUBLIC_DEMO_MODE=false`를 설정해야 합니다. 키가 없으면 데모 응답을 반환합니다.
