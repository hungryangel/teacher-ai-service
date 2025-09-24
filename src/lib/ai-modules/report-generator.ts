export interface TeacherReportData {
  childInfo: {
    name: string;
    age: string;
    className?: string;
  };
  observations: {
    physical: string;
    communication: string;
    social: string;
    art?: string;
    nature?: string;
  };
  teacherNotes?: string;
  teacherType?: 'childcare' | 'kindergarten' | 'director';
  experience?: 'beginner' | 'junior' | 'senior' | 'expert';
}

export interface GenerationResult {
  report: string;
  metadata: {
    generatedAt: Date;
    estimatedAge: string;
    domains: string[];
    wordCount: number;
  };
}

export class TeacherReportGenerator {
  private static instance: TeacherReportGenerator;

  static getInstance(): TeacherReportGenerator {
    if (!TeacherReportGenerator.instance) {
      TeacherReportGenerator.instance = new TeacherReportGenerator();
    }
    return TeacherReportGenerator.instance;
  }

  /**
   * 2024 개정 표준보육과정 기반 평가서 생성
   */
  async generateReport(data: TeacherReportData): Promise<GenerationResult> {
    const prompt = this.createPrompt(data);
    
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 2000,
          messages: [{ role: "user", content: prompt }]
        })
      });

      if (!response.ok) {
        throw new Error(`API 오류: ${response.status}`);
      }

      const result = await response.json();
      const reportText = result.content[0].text;

      return {
        report: reportText,
        metadata: {
          generatedAt: new Date(),
          estimatedAge: data.childInfo.age,
          domains: this.extractDomains(data),
          wordCount: reportText.replace(/\s+/g, '').length
        }
      };
    } catch (error) {
      console.error('평가서 생성 오류:', error);
      throw new Error('평가서 생성에 실패했습니다.');
    }
  }

  private createPrompt(data: TeacherReportData): string {
    const { name, age } = data.childInfo;
    const firstName = name.replace(/[이가]/g, '');
    const domains = this.getDevelopmentDomains(age);

    return `당신은 **보육교사 AI 어시스턴트**입니다. 2024 개정 표준보육과정에 근거하여 따뜻하고 전문적인 아동발달 평가서를 작성해주세요.

## **아동 기본 정보**
- 이름: ${name} (평가서에서는 "${firstName}" 사용)
- 연령: ${age}
- 담당 교사 유형: ${data.teacherType || 'childcare'}
- 교사 경력: ${data.experience || 'junior'}

## **발달 관찰 내용**
### 신체운동·건강
${data.observations.physical}

### 의사소통  
${data.observations.communication}

### 사회관계
${data.observations.social}

### 예술경험
${data.observations.art || '아름다운 것에 관심을 보이고 창의적 표현을 시도합니다.'}

### 자연탐구
${data.observations.nature || '주변 환경에 호기심을 가지고 탐구하는 모습을 보입니다.'}

## **작성 가이드라인**

### **2024 개정 표준보육과정 ${age} 발달영역**
${domains.map(domain => `- ${domain}`).join('\n')}

### **필수 문장 패턴**
1. "${firstName}이는 [관찰내용]을/를 [정도] [동사]며 [결과]를 보여줍니다."
2. "특히 [구체적사례]하여 [의미해석]합니다."  
3. "이는 ${firstName}이의 [능력]이 [발달수준]함을 보여주는 [평가]입니다."

### **어조 및 표현**
- **따뜻하면서도 전문적인 어조** 유지
- **구체적 행동 사례** 반드시 포함
- **긍정적 재구성**: 도전 행동도 발달과정으로 해석
- **개별적 특성** 강조

### **작성 형식**
**아동명**: ${name}
**연령**: ${age}  
**평가일**: ${new Date().toLocaleDateString('ko-KR')}

#### **1. 전반적인 특성 및 적응**
[${age} 발달 특성에 맞춘 전반적 소개 - 100-150자]

#### **2. 영역별 발달 관찰**

**가. 신체운동·건강**
[신체활동, 건강생활, 안전생활 영역별 구체적 관찰 - 300-400자]

**나. 의사소통**
[듣기말하기, 읽기쓰기관심, 책과이야기 영역별 관찰 - 300-400자]

**다. 사회관계**  
[자아존중, 더불어생활, 사회관심 영역별 관찰 - 300-400자]

**라. 예술경험**
[아름다움탐색, 창의적표현, 예술감상 영역별 관찰 - 300-400자]

**마. 자연탐구**
[탐구과정, 생활속탐구, 자연친화 영역별 관찰 - 300-400자]

#### **3. 가정 연계 지도 방안**
[구체적이고 실용적인 가정에서의 지도 방법 - 200-300자]

---

**총 분량**: 1,500-2,000자
**중요**: 반드시 ${firstName} 호칭을 사용하고, ${age}에 맞는 발달 기준을 적용해주세요.`;
  }

  private getDevelopmentDomains(age: string): string[] {
    if (age.includes('1세')) {
      return [
        '신체운동·건강: 감각운동·건강, 안전',
        '의사소통: 듣기와 말하기, 읽기와 쓰기에 관심 가지기, 책과 이야기 즐기기',
        '사회관계: 나를 알고 존중하기, 더불어 생활하기, 사회에 관심 가지기',
        '예술경험: 아름다움 찾아보기, 창의적으로 표현하기, 예술 감상하기',
        '자연탐구: 탐구하는 태도 기르기, 수학적 탐구하기, 과학적 탐구하기'
      ];
    }
  }

  private extractDomains(data: TeacherReportData): string[] {
    const domains = ['신체운동·건강', '의사소통', '사회관계'];
    
    if (data.observations.art) domains.push('예술경험');
    if (data.observations.nature) domains.push('자연탐구');
    
    return domains;
  }
}
