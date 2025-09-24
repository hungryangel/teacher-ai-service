import { NextRequest, NextResponse } from 'next/server';
import { TeacherReportImprover, ImprovementOptions } from '@/lib/ai-modules/report-improver';
import { AnalysisResult } from '@/lib/ai-modules/report-analyzer';

interface ImprovementRequest {
  originalReport: string;
  analysisResult: AnalysisResult;
  options?: ImprovementOptions;
}

export async function POST(request: NextRequest) {
  console.log('🔧 보육교사 평가서 개선 API 시작');

  try {
    const { originalReport, analysisResult, options }: ImprovementRequest = await request.json();

    if (!originalReport || !analysisResult) {
      return NextResponse.json(
        { error: '원본 평가서와 분석 결과가 필요합니다.' },
        { status: 400 }
      );
    }

    const improver = TeacherReportImprover.getInstance();
    const improvedReport = await improver.improveReport(
      originalReport, 
      analysisResult, 
      options || { level: 'detailed' }
    );

    console.log('✅ 평가서 개선 완료');

    return NextResponse.json({
      success: true,
      improvedReport,
      originalScore: analysisResult.overallScore,
      improvementLevel: options?.level || 'detailed'
    });

  } catch (error) {
    console.error('❌ 평가서 개선 오류:', error);
    return NextResponse.json(
      { 
        error: '평가서 개선 중 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : '알 수 없는 오류'
      },
      { status: 500 }
    );
  }
}// Empty route handler for improve-teacher-report
