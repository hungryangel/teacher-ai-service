import { NextRequest, NextResponse } from 'next/server';
import { TeacherReportGenerator, TeacherReportData } from '@/lib/ai-modules';

export async function POST(request: NextRequest) {
  console.log('🚀 보육교사 AI 평가서 생성 API 시작');
  
  try {
    const requestData: TeacherReportData = await request.json();
    
    // 입력 검증
    if (!requestData.childInfo?.name || !requestData.childInfo?.age) {
      return NextResponse.json(
        { error: '아동 이름과 나이는 필수입니다.' },
        { status: 400 }
      );
    }
    
    // 관찰 내용 기본값 설정
    const completeData: TeacherReportData = {
      ...requestData,
      observations: {
        physical: requestData.observations.physical || '신체활동을 적극적으로 참여합니다.',
        communication: requestData.observations.communication || '또래와 원활한 소통을 합니다.',
        social: requestData.observations.social || '친구들과 협력하는 모습을 보입니다.',
        art: requestData.observations.art || '창의적 표현에 관심을 보입니다.',
        nature: requestData.observations.nature || '자연과 과학에 호기심을 가집니다.'
      }
    };
    
    const generator = TeacherReportGenerator.getInstance();
    const result = await generator.generateReport(completeData);
    
    console.log(`✅ 평가서 생성 완료 - ${result.metadata.wordCount}자`);
    
    return NextResponse.json({
      success: true,
      report: result.report,
      metadata: result.metadata
    });
    
  } catch (error) {
    console.error('❌ 평가서 생성 오류:', error);
    
    return NextResponse.json(
      { 
        error: '평가서 생성 중 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : '알 수 없는 오류'
      },
      { status: 500 }
    );
  }
}
