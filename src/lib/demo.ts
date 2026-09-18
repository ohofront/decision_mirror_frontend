import type { Analysis, DecisionInput, OptionResult } from '@/types/decision';
import { criterionKeys } from './schemas';

const baseScores = [
  [6,5,9,8,7,7,8,6,7], [8,9,5,5,4,6,5,9,7], [7,7,7,6,6,7,6,7,7],
];
export function demoAnalysis(input: DecisionInput): Analysis {
  const options: OptionResult[] = input.options.map((name, index) => {
    const scores = Object.fromEntries(criterionKeys.map((key, i) => [key, baseScores[index][i]])) as OptionResult['scores'];
    const stable = index === 0;
    return { name, scores,
      timeline: {
        '1month': stable ? ['익숙한 환경과 생활 리듬이 이어질 수 있습니다.', '당장 필요한 적응 비용은 낮을 가능성이 큽니다.'] : ['새로운 환경에 적응하면서 에너지 소모가 커질 수 있습니다.', '변화를 선택했다는 기대감도 함께 높아질 수 있습니다.'],
        '6months': stable ? ['기존 관계와 업무 숙련도가 안정감을 줄 수 있습니다.', '변화가 없다면 성장의 속도가 아쉽게 느껴질 수 있습니다.'] : ['초기 적응을 마치고 새로운 기회를 구체적으로 평가할 수 있습니다.', '예상과 다른 업무 강도나 문화가 드러날 수 있습니다.'],
        '1year': stable ? ['쌓인 경험이 조직 내 신뢰로 이어질 수 있습니다.', '새로운 역량을 만들 계획이 없다면 선택의 폭이 좁아질 수 있습니다.'] : ['새 경험이 역량과 시장 가치에 보탬이 될 수 있습니다.', '시간과 에너지 비용을 다시 점검해야 할 수 있습니다.'],
        '3years': stable ? ['깊어진 전문성이 강점이 될 수 있습니다.', '외부 기회와의 간격은 꾸준히 확인할 필요가 있습니다.'] : ['변화에서 얻은 경험이 다음 선택의 폭을 넓힐 수 있습니다.', '초기 기대가 실현되었는지는 성과와 삶의 균형으로 판단해야 합니다.'],
      },
      risks: stable ? ['성장 기회를 미루게 될 가능성', '현재의 편안함을 장기 만족으로 오인할 가능성'] : ['초기 적응 스트레스', '예상하지 못한 시간 비용'],
      opportunities: stable ? ['현재 자원을 활용한 점진적 성장', '안정적인 관계와 생활 리듬'] : ['새로운 역량과 네트워크', '장기 선택지 확대'],
      regretScenario: stable ? `1년 뒤 ${name}을 선택한 이유가 익숙함뿐이었다고 느끼며, 시도하지 않은 기회를 아쉬워할 수 있습니다.` : `변화의 보상은 얻었지만 적응에 드는 시간과 에너지가 예상보다 커서, 일상의 균형을 잃었다고 느낄 수 있습니다.`,
    };
  });
  return { demo: true, summary: `“${input.problem.slice(0, 55)}${input.problem.length > 55 ? '…' : ''}” 이 결정에서 핵심은 눈앞의 이득과 오래 유지할 수 있는 삶의 균형입니다. 각 선택이 주는 변화의 속도와 비용을 함께 살펴보세요.`, options,
    hiddenFactors: [{ title: '시간의 복리 효과', description: '매일 40분의 추가 이동이나 업무가 생긴다면, 주 5일 기준 1년에 약 173시간입니다. 실제 이동 시간과 업무 강도를 확인해 보세요.' }, { title: '되돌릴 수 있는 범위', description: '지금의 선택을 6개월 뒤 수정하려면 어떤 비용이 드는지 미리 계산해 보세요. 되돌리기 쉬운 결정이라면 작은 실험부터 시작할 수 있습니다.' }],
    questions: [`${input.options[1]}의 장점이 예상보다 작아도 선택할 이유가 남아 있나요?`, `${input.options[0]}에서 6개월 안에 바꿀 수 있는 조건은 무엇인가요?`, '1년 뒤의 나에게 가장 중요한 것은 무엇이며, 지금 확인할 수 있는 증거는 무엇인가요?'] };
}
