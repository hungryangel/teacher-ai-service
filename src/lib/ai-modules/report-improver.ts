export interface ImprovementOptions {
  level: 'basic' | 'detailed' | 'expert';
  focusAreas?: string[];
  targetWordCount?: number;
  customInstructions?: string;
}

export class TeacherReportImprover {
  private static instance: TeacherReportImprover;

  static getInstance(): TeacherReportImprover {
    if (!TeacherReportImprover.instance) {
      TeacherReportImprover.instance = new TeacherReportImprover();
    }
    return TeacherReportImprover.instance;
  }

  /**
   * 분석 결과 기반 평가서 개선
   */
  async improveReport(
    originalReport: string,
    analysisResult: AnalysisResult,
    options: ImprovementOptions = { level: 'detailed' }
  ): Promise<string> {
    const prompt = this.createImprovementPrompt(originalReport, analysisResult, options);
    
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2500,
          messages: [{ role: "user", content: prompt }]
        })
      });

      if (!response.ok) {
        throw new Error(`개선 API 오류: ${response.status}`);
      }

      const result = await response.json();
      return result.content[0].text;
    } catch (error) {
      console.error('평가서 개선 오류:', error);
      throw new Error('평가서 개선에 실패했습니다.');
    }
  }

  private createImprovementPrompt(
    originalReport: string,
    analysisResult: AnalysisResult,
    options: ImprovementOptions
  ): string {
    const { childName, age } = analysisResult.basicInfo;
    const firstName = childName.replace(/[이가]/g, '');
    
    const improvementInstructions = {
      basic: '기본적인 개선사항만 반영하여 읽기 쉽게 정리',
      detailed: '분석 결과의 모든 개선사항을 상세히 반영하여 전문성 강화',
      expert: '최고 수준의 전문성으로 심층적 개선 및 고급 발달 이론 적용'
    };

    return `기존 평가서를 분석 결과에 따라 **2024 개정 표준보육과정에 완벽히 부합하는 개선된 평가서**로 재작성해주세요.

## **기존 평가서**
${originalReport}

## **분석 결과 기반 개선사항**

### **전체 평가**: ${analysisResult.overallScore}점 → 목표: 90점 이상

### **영역별 개선 포인트**
${Object.entries(analysisResult.domainAnalysis).map(([domain, data]) => `
**${domain}** (현재: ${data.score}점)
✓ 유지할 점: ${data.strengths.join(', ')}
⚡ 개선사항: ${data.improvements.join(', ')}
`).join('')}

### **구체적 개선 제안**
${analysisResult.suggestions.map((suggestion, idx) => `${idx + 1}. ${suggestion}`).join('\n')}

### **우수한 부분 (유지)**
${analysisResult.positiveAspects.map(aspect => `- ${aspect}`).join('\n')}

## **개선 수준**: ${improvementInstructions[options.level]}

${options.focusAreas ? `\n## **중점 개선 영역**\n${options.focusAreas.map(area => `- ${area}`).join('\n')}` : ''}

${options.customInstructions ? `\n## **추가 요구사항**\n${options.customInstructions}` : ''}

## **작성 요구사항**

### **필수 개선사항**
1. **누락 영역 보완**: 분석에서 지적된 부족한 영역에 구체적 사례 추가
2. **전문성 강화**: 2024 개정 표준보육과정 용어 및 관점 적극 활용
3. **구체성 향상**: 모든 평가에 실제 관찰 사례 포함
4. **균형성 확보**: 5개 영역이 모두 균등하게 다뤄지도록 조정

### **문체 및 구조 (기존 품질 수준 유지-향상)**
- **따뜻하면서도 전문적인 어조** 유지
- **"${firstName}이는..."** 패턴 사용
- **구체적 행동 사례** 반드시 포함
- **발달적 의미 해석** 전문가 관점으로 제시

### **목표 분량**
- 전체: ${options.targetWordCount || '1,800-2,200'}자
- 각 영역: 300-400자
- 가정연계: 200-300자

## **최종 결과물 형식**

**아동명**: ${childName}
**연령**: ${age}
**평가일**: ${new Date().toLocaleDateString('ko-KR')}

### **1. 전반적인 아동 특성 및 어린이집 적응**
[기존 내용을 바탕으로 더욱 구체적이고 전문적으로 개선]

---

### **2. 영역별 발달 관찰 내용**

#### **가. 신체운동·건강**
[분석 결과의 개선사항을 반영하여 재작성]

#### **나. 의사소통**
[듣기말하기, 읽기쓰기관심, 책과이야기 영역 균형있게 보완]

#### **다. 사회관계**
[자아존중, 더불어생활, 사회관심 영역별 구체적 사례 추가]

#### **라. 예술경험**
[아름다움탐색, 창의적표현, 예술감상 영역 세분화하여 개선]

#### **마. 자연탐구**
[탐구과정, 생활속탐구, 자연친화 영역에 수학적 사고 등 추가]

---

### **3. 가정 연계 지도 방안**
[기존 내용을 바탕으로 더욱 구체적이고 실용적인 가정연계 방안 제시]

---

**중요**: 개선된 평가서만 반환하고, 분석 과정이나 추가 설명은 생략해주세요.`;
  }
}
