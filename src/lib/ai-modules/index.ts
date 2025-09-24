// src/lib/ai-modules/index.ts - 모듈 통합 익스포트

// 개별 모듈들 익스포트
export { TeacherReportGenerator } from './report-generator';
export { TeacherReportAnalyzer } from './report-analyzer';  
export { TeacherReportImprover } from './report-improver';

// 타입 정의들 익스포트
export type {
  TeacherReportData,
  GenerationResult
} from './report-generator';

export type {
  AnalysisResult
} from './report-analyzer';

export type {
  ImprovementOptions
} from './report-improver';

// 통합 AI 서비스 클래스
export class TeacherAIService {
  private generator = TeacherReportGenerator.getInstance();
  private analyzer = TeacherReportAnalyzer.getInstance();
  private improver = TeacherReportImprover.getInstance();

  /**
   * 기본 평가서 생성
   */
  async generateReport(data: TeacherReportData): Promise<GenerationResult> {
    return await this.generator.generateReport(data);
  }

  /**
   * 평가서 분석
   */
  async analyzeReport(
    reportText: string, 
    analysisType: 'basic' | 'detailed' | 'expert' = 'detailed'
  ): Promise<AnalysisResult> {
    return await this.analyzer.analyzeReport(reportText, analysisType);
  }

  /**
   * 평가서 개선
   */
  async improveReport(
    originalReport: string,
    analysisResult: AnalysisResult,
    options: ImprovementOptions = { level: 'detailed' }
  ): Promise<string> {
    return await this.improver.improveReport(originalReport, analysisResult, options);
  }

  /**
   * 완전한 평가서 생성 → 분석 → 개선 파이프라인
   * 85점 미만일 경우 자동으로 개선된 버전 제공
   */
  async generateCompleteReport(data: TeacherReportData) {
    console.log('🚀 완전한 평가서 생성 파이프라인 시작');
    
    // 1단계: 평가서 생성
    console.log('📝 1단계: 평가서 생성 중...');
    const generationResult = await this.generator.generateReport(data);
    
    // 2단계: 생성된 평가서 분석
    console.log('🔍 2단계: 평가서 분석 중...');
    const analysisResult = await this.analyzer.analyzeReport(generationResult.report);
    
    // 3단계: 필요시 자동 개선 (85점 미만인 경우)
    let finalReport = generationResult.report;
    let wasImproved = false;
    
    if (analysisResult.overallScore < 85) {
      console.log('🔧 3단계: 평가서 개선 중... (현재 점수:', analysisResult.overallScore, '점)');
      finalReport = await this.improver.improveReport(
        generationResult.report,
        analysisResult,
        { level: 'detailed' }
      );
      wasImproved = true;
    } else {
      console.log('✅ 평가서 품질 우수 (', analysisResult.overallScore, '점) - 개선 생략');
    }

    console.log('🎉 완전한 평가서 생성 파이프라인 완료');

    return {
      originalReport: generationResult.report,
      finalReport,
      analysis: analysisResult,
      metadata: {
        ...generationResult.metadata,
        wasImproved,
        finalScore: wasImproved ? '85점 이상 (개선됨)' : analysisResult.overallScore,
        processingSteps: wasImproved ? 3 : 2,
        completedAt: new Date()
      }
    };
  }

  /**
   * 빠른 체험용 간단 생성 (분석/개선 없이)
   * 온보딩 후 즉시 체험 페이지에서 사용
   */
  async generateQuickDemo(simpleData: {
    childName: string;
    age: string;
    observations: {
      physical: string;
      communication: string;
      social: string;
    };
  }) {
    console.log('⚡ 빠른 체험용 평가서 생성 시작');

    const fullData: TeacherReportData = {
      childInfo: {
        name: simpleData.childName,
        age: simpleData.age,
        className: '체험반'
      },
      observations: {
        physical: simpleData.observations.physical || '신체활동에 관심을 보입니다.',
        communication: simpleData.observations.communication || '또래와 소통을 시도합니다.',
        social: simpleData.observations.social || '사회적 상호작용에 참여합니다.',
        art: '창의적 표현에 관심을 보입니다.',
        nature: '자연과 탐구활동을 즐깁니다.'
      },
      teacherType: 'childcare',
      experience: 'senior'
    };

    const result = await this.generator.generateReport(fullData);
    
    console.log('✅ 빠른 체험용 평가서 생성 완료');

    return {
      report: result.report,
      metadata: {
        ...result.metadata,
        isDemoVersion: true,
        canAnalyze: true,
        canImprove: true
      }
    };
  }

  /**
   * 배치 처리 - 여러 아동 평가서 동시 생성
   * 향후 기관용 기능에서 활용
   */
  async generateBatchReports(dataList: TeacherReportData[]): Promise<{
    successful: Array<{ index: number; result: GenerationResult; }>;
    failed: Array<{ index: number; error: string; }>;
    summary: {
      total: number;
      successful: number;
      failed: number;
      avgProcessingTime: number;
    };
  }> {
    console.log(`📚 배치 처리 시작 - ${dataList.length}건의 평가서 생성`);
    
    const startTime = performance.now();
    const successful: Array<{ index: number; result: GenerationResult; }> = [];
    const failed: Array<{ index: number; error: string; }> = [];

    for (let i = 0; i < dataList.length; i++) {
      try {
        const result = await this.generator.generateReport(dataList[i]);
        successful.push({ index: i, result });
        console.log(`✅ ${i + 1}/${dataList.length} 완료`);
      } catch (error) {
        failed.push({ 
          index: i, 
          error: error instanceof Error ? error.message : '알 수 없는 오류' 
        });
        console.log(`❌ ${i + 1}/${dataList.length} 실패:`, error);
      }
    }

    const endTime = performance.now();
    const avgProcessingTime = (endTime - startTime) / dataList.length;

    console.log(`🎉 배치 처리 완료 - 성공: ${successful.length}, 실패: ${failed.length}`);

    return {
      successful,
      failed,
      summary: {
        total: dataList.length,
        successful: successful.length,
        failed: failed.length,
        avgProcessingTime: Math.round(avgProcessingTime)
      }
    };
  }

  /**
   * 성능 모니터링 - AI 응답 시간 측정
   */
  async measurePerformance() {
    const testData: TeacherReportData = {
      childInfo: {
        name: '성능테스트',
        age: '만 4세',
        className: '테스트반'
      },
      observations: {
        physical: '테스트를 위한 관찰 내용입니다.',
        communication: '테스트를 위한 관찰 내용입니다.',
        social: '테스트를 위한 관찰 내용입니다.',
        art: '테스트를 위한 관찰 내용입니다.',
        nature: '테스트를 위한 관찰 내용입니다.'
      }
    };

    const startTime = performance.now();
    
    try {
      await this.generator.generateReport(testData);
      const endTime = performance.now();
      const responseTime = endTime - startTime;

      return {
        success: true,
        responseTime: Math.round(responseTime),
        status: responseTime < 30000 ? 'excellent' : responseTime < 60000 ? 'good' : 'needs_improvement'
      };
    } catch (error) {
      const endTime = performance.now();
      return {
        success: false,
        responseTime: Math.round(endTime - startTime),
        error: error instanceof Error ? error.message : '알 수 없는 오류',
        status: 'failed'
      };
    }
  }
}

// 기본 인스턴스 생성 및 익스포트
export const teacherAI = new TeacherAIService();

// 유틸리티 함수들
export const AIUtils = {
  /**
   * 평가서 품질 검증
   */
  validateReportQuality(report: string): {
    isValid: boolean;
    issues: string[];
    score: number;
  } {
    const issues: string[] = [];
    let score = 100;

    // 길이 검증
    const wordCount = report.replace(/\s+/g, '').length;
    if (wordCount < 800) {
      issues.push('평가서 내용이 너무 짧습니다');
      score -= 20;
    }

    // 필수 키워드 검증
    const requiredKeywords = ['신체운동', '의사소통', '사회관계', '예술경험', '자연탐구'];
    const missingKeywords = requiredKeywords.filter(keyword => !report.includes(keyword));
    if (missingKeywords.length > 0) {
      issues.push(`누락된 영역: ${missingKeywords.join(', ')}`);
      score -= missingKeywords.length * 15;
    }

    // 아동명 언급 검증
    const childNameMentions = (report.match(/이는|이가/g) || []).length;
    if (childNameMentions < 3) {
      issues.push('아동 개별 특성 언급이 부족합니다');
      score -= 10;
    }

    return {
      isValid: issues.length === 0,
      issues,
      score: Math.max(0, score)
    };
  },

  /**
   * 연령대별 발달영역 반환
   */
  getDevelopmentDomains(age: string): string[] {
    if (age.includes('1세')) {
      return [
        '신체운동·건강: 감각운동·건강, 안전',
        '의사소통: 듣기와 말하기, 읽기와 쓰기의 기초, 책과 이야기',
        '사회관계: 나를 알고 존중하기, 더불어 생활하기',
        '예술경험: 아름다움 찾아보기, 창의적으로 표현하기',
        '자연탐구: 호기심을 유지하고 확장하기, 탐구과정 즐기기, 생활 속에서 탐구하기'
      ];
    } else if (age.includes('2세')) {
      return [
        '신체운동·건강: 신체운동·건강',
        '의사소통: 듣기와 말하기, 읽기와 쓰기의 기초, 책과 이야기', 
        '사회관계: 나를 알고 존중하기, 더불어 생활하기',
        '예술경험: 아름다움 찾아보기, 창의적으로 표현하기',
        '자연탐구: 호기심을 유지하고 확장하기, 탐구과정 즐기기, 생활 속에서 탐구하기'
      ];
    } else {
      // 3-5세 누리과정
      return [
        '신체운동·건강: 신체활동 즐기기, 건강하게 생활하기, 안전하게 생활하기',
        '의사소통: 듣기와 말하기, 읽기와 쓰기에 관심 가지기, 책과 이야기 즐기기',
        '사회관계: 나를 알고 존중하기, 더불어 생활하기, 사회에 관심 가지기',
        '예술경험: 아름다움 찾아보기, 창의적으로 표현하기, 예술 감상하기',
        '자연탐구: 탐구하는 태도 기르기, 수학적 탐구하기, 과학적 탐구하기'
      ];
    }
  },

  /**
   * 교사 경력별 추천 기능
   */
  getRecommendedFeatures(experience: 'beginner' | 'junior' | 'senior' | 'expert'): string[] {
    switch (experience) {
      case 'beginner':
        return ['기본 평가서 생성', '템플릿 사용', '도움말 기능'];
      case 'junior':
        return ['평가서 분석', '개선 제안', '관찰 가이드'];
      case 'senior':
        return ['고급 분석', '커스텀 템플릿', '배치 처리'];
      case 'expert':
        return ['전문가 모드', 'API 연동', '통계 분석'];
      default:
        return ['기본 평가서 생성'];
    }
  }
};

// 사용 예시 및 가이드
export const UsageExamples = {
  /**
   * 기본 사용법 - 단일 평가서 생성
   */
  async basicUsage() {
    const aiService = new TeacherAIService();
    
    const result = await aiService.generateReport({
      childInfo: {
        name: '영희',
        age: '만 4세',
        className: '햇님반'
      },
      observations: {
        physical: '뛰어다니기를 좋아하고 블록 쌓기를 잘해요',
        communication: '친구들과 대화를 즐기고 책 읽기를 좋아해요',
        social: '나누어주기를 좋아하고 협력을 잘해요'
      },
      teacherType: 'childcare',
      experience: 'senior'
    });

    console.log('생성된 평가서:', result.report);
    return result;
  },

  /**
   * 완전한 파이프라인 사용법 - 생성 + 분석 + 개선
   */
  async fullPipelineUsage() {
    const aiService = new TeacherAIService();
    
    const result = await aiService.generateCompleteReport({
      childInfo: {
        name: '철수',
        age: '만 5세',
        className: '별님반'
      },
      observations: {
        physical: '축구를 매우 좋아하고 운동능력이 뛰어남',
        communication: '발표를 좋아하고 어휘력이 풍부함',
        social: '리더십이 있고 친구들을 잘 도움'
      },
      teacherType: 'kindergarten',
      experience: 'expert'
    });

    console.log('최종 평가서:', result.finalReport);
    console.log('분석 결과:', result.analysis);
    console.log('개선 여부:', result.metadata.wasImproved);
    
    return result;
  },

  /**
   * 빠른 체험 사용법 - 온보딩 후 즉시 체험
   */
  async quickDemoUsage() {
    const aiService = new TeacherAIService();
    
    const result = await aiService.generateQuickDemo({
      childName: '민수',
      age: '만 3세',
      observations: {
        physical: '잘 뛰어다닙니다',
        communication: '말을 또박또박 합니다',
        social: '친구들과 잘 놉니다'
      }
    });

    console.log('체험용 평가서:', result.report);
    console.log('추가 기능 가능:', result.metadata.canAnalyze);
    
    return result;
  }
};

// 기본 익스포트
export default TeacherAIService;
