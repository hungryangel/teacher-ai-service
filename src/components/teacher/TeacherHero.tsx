"use client";

import { Container, Button, Section, HeadingXL, BodyLG, Badge } from "@/components/ui";
import { useRouter } from "next/navigation";

export function TeacherHero() {
  const router = useRouter();

  return (
    <Section background="gradient" className="relative overflow-hidden">
      <Container className="py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="primary" className="animate-fade-in">
              ✨ 2024 표준보육과정 완벽 반영
            </Badge>
            
            <div className="space-y-4">
              <HeadingXL className="animate-fade-in animation-delay-200">
                보육교사의 일상을
                <span className="text-gradient"> AI가 혁신</span>합니다
              </HeadingXL>
              <BodyLG className="animate-fade-in animation-delay-400">
                평가서 작성 시간을 90% 단축하고, 아이들과 더 많은 시간을 보내세요. 
                따뜻하고 전문적인 평가서를 30초 만에 완성합니다.
              </BodyLG>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row animate-fade-in animation-delay-600">
              <Button
                variant="primary"
                size="lg"
                onClick={() => router.push('/onboarding')}
                className="transform hover:scale-105"
              >
                🚀 지금 무료로 시작하기
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('/demo')}
              >
                📺 데모 영상 보기
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-500 animate-fade-in animation-delay-800">
              <span className="flex items-center gap-2">
                <span className="text-green-500">✅</span> 신용카드 불필요
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✅</span> 3분 만에 체험
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✅</span> 개인정보 안전
              </span>
            </div>
          </div>

          {/* Right Content - Preview */}
          <div className="relative animate-fade-in animation-delay-1000">
            <PreviewCard />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PreviewCard() {
  return (
    <div className="card-elevated">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-500">AI 평가서 미리보기</span>
        </div>
        
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
          <div className="h-20 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
            <span className="text-primary-600 font-medium animate-bounce-gentle">30초 만에 완성! ⚡</span>
          </div>
        </div>
        
        {/* Floating Elements */}
        <Badge variant="success" className="absolute -top-4 -right-4">
          시간 90% 절약
        </Badge>
        <Badge variant="warning" className="absolute -bottom-4 -left-4">
          전문성 200% UP
        </Badge>
      </div>
    </div>
  );
}
