import { NextRequest, NextResponse } from 'next/server';
import { TeacherReportAnalyzer } from '@/lib/ai-modules';

interface AnalysisRequest {
  reportText: string;
  analysisType?: 'basic' | 'detailed' | 'expert';
}

export async function POST(request: NextRequest) {
  console.log('🔍 보육교사 평가서 분석 API 시작');
  
  try {
    const { reportText, analysisType = 'detailed' }: AnalysisRequest = await request.json();
    
    if (!reportText || reportText.length < 100) {
      return NextResponse.json(
        { error: '분석할 평가서 내용이 너무 짧습니다. 최소 100자 이상 입력해주세요.' },
        { status: 400 }
      );
    }
    
    const analyzer = TeacherReportAnalyzer.getInstance();
    const analysisResult = await analyzer.analyzeReport(reportText, analysisType);
    
    console.log(`✅ 분석 완료 - 전체 점수: ${analysisResult.overallScore}점`);
    
    return NextResponse.json({
      success: true,
      analysis: analysisResult
    });
    
  } catch (error) {
    console.error('❌ 평가서 분석 오류:', error);
    
    return NextResponse.json(
      { 
        error: '평가서 분석 중 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : '알 수 없는 오류'
      },
      { status: 500 }
    );
  }
}
