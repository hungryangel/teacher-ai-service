export interface AnalysisResult {
  basicInfo: {
    childName: string;
    age: string;
    className: string;
  };
  overallScore: number;
  domainAnalysis: Record<string, {
    score: number;
    strengths: string[];
    improvements: string[];
  }>;
  suggestions: string[];
  positiveAspects: string[];
  metadata: {
    analyzedAt: Date;
    analysisType: 'basic' | 'detailed' | 'expert';
    wordCount: number;
  };
}

export class TeacherReportAnalyzer {
  private static instance: TeacherReportAnalyzer;

  static getInstance(): TeacherReportAnalyzer {
    if (!TeacherReportAnalyzer.instance) {
      TeacherReportAnalyzer.instance = new TeacherReportAnalyzer();
    }
    return TeacherReportAnalyzer.instance;
  }

  /**
   * 평가서 전문 분석 실행
   */
  async analyzeReport(
    reportText: string, 
    analysisType: 'basic' | 'detailed' | 'expert' = 'detailed'
  ): Promise<AnalysisResult> {
    const prompt = this.createAnalysisPrompt(reportText, analysisType);
    
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          messages: [{ role: "user", content: prompt }]
        })
      });

      if (!response.ok) {
        throw new Error(`분석 API 오류: ${response.status}`);
      }

      const result = await response.json();
      const analysisData = this.parseAnalysisResult(result.content[0].text);

      return {
        ...analysisData,
        metadata: {
          analyzedAt: new Date(),
          analysisType,
          wordCount: reportText.replace(/\s+/g, '').length
        }
      };
    } catch (error) {
      console.error('평가서 분석 오류:', error);
      throw new Error('평가서 분석에 실패했습니다.');
    }
  }

  private createAnalysisPrompt(reportText: string, analysisType: string): string {
    const ageMatch = reportText.match(/만\s*(\d+)세|(\d+)세/);
    const estimatedAge = ageMatch ? `${ageMatch[1] || ageMatch[2]}세` : '3-5세';
    
    return `당신은 **아동발달 전문가**입니다. 업로드된 평가서를 2024 개정 표준보육과정 기준으로 ${analysisType === 'expert' ? '심층' : '상세히'} 분석해주세요.

## **분석 대상 평가서**
${reportText}

## **분석 기준 - 2024 개정 표준보육과정 ${estimatedAge} 발달영역**
- 신체운동·건강: 기본운동능력, 건강한 생활습관, 안전의식
- 의사소통: 언어 이해와 표현, 읽기쓰기 기초, 문학적 소양
- 사회관계: 자아정체성, 사회성 발달, 사회적 관심
- 예술경험: 심미적 탐색, 창의적 표현, 예술 감상
- 자연탐구: 탐구 태도, 수학적 사고, 과학적 사고

## **분석 요구사항**
다음 JSON 형식으로 분석 결과를 제공해주세요:

\`\`\`json
{
  "basicInfo": {
    "childName": "평가서에서 추출된 아동명",
    "age": "평가서에서 추출된 연령",
    "className": "평가서에서 추출된 반명 (없으면 '확인 필요')"
  },
  "overallScore": 85,
  "domainAnalysis": {
    "신체운동·건강": {
      "score": 80,
      "strengths": ["구체적 강점 1", "구체적 강점 2"],
      "improvements": ["개선점 1", "개선점 2"]
    },
    "의사소통": {
      "score": 90,
      "strengths": ["언어 표현력 우수", "책 읽기 관심 높음"],
      "improvements": ["듣기 능력 향상 필요"]
    }
  },
  "suggestions": [
    "2024 개정 표준보육과정 기준 추가 반영사항",
    "각 영역별 구체적 행동 사례 보완 필요",
    "발달 단계별 세부 기준 적용 권장"
  ],
  "positiveAspects": [
    "아동의 개별적 특성이 잘 부각됨",
    "따뜻하고 전문적인 어조로 작성됨",
    "부모 친화적 내용 구성"
  ]
}
\`\`\`

**중요**: 반드시 유효한 JSON 형식으로만 응답해주세요.`;
  }

  private parseAnalysisResult(responseText: string): Omit<AnalysisResult, 'metadata'> {
    try {
      // JSON 추출 및 파싱
      const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[1]);
      }
      
      // 직접 JSON 파싱 시도
      const cleanedResponse = responseText.replace(/```json|```/g, '').trim();
      return JSON.parse(cleanedResponse);
    } catch (error) {
      console.error('분석 결과 파싱 오류:', error);
      
      // 기본 분석 결과 반환
      return {
        basicInfo: {
          childName: '분석된 아동',
          age: '만 4세',
          className: '확인 필요'
        },
        overallScore: 75,
        domainAnalysis: {
          '전체적 평가': {
            score: 75,
            strengths: ['관찰 내용 포함'],
            improvements: ['더 구체적인 사례 필요']
          }
        },
        suggestions: ['구체적 행동 사례 추가 권장'],
        positiveAspects: ['기본적인 관찰 내용 포함']
      };
    }
  }
}
