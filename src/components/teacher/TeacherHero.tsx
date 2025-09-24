"use client";

import { Container } from "@/components/ui";
import { useRouter } from "next/navigation";

export function TeacherHero() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50">
      <Container className="py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
              ✨ 2024 표준보육과정 완벽 반영
            </div>
            
            <div className="space-y-4">
              <h1 className="heading-xl text-gray-900 lg:text-5xl">
                보육교사의 일상을
                <span className="text-primary-600"> AI가 혁신</span>합니다
              </h1>
              <p className="body-lg text-gray-600">
                평가서 작성 시간을 90% 단축하고, 아이들과 더 많은 시간을 보내세요. 
                따뜻하고 전문적인 평가서를 30초 만에 완성합니다.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => router.push('/onboarding')}
                className="rounded-lg bg-primary-600 px-8 py-4 text-white font-semibold hover:bg-primary-700 transition-colors"
              >
                🚀 지금 무료로 시작하기
              </button>
              <button
                onClick={() => router.push('/demo')}
                className="rounded-lg border-2 border-gray-300 px-8 py-4 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
              >
                📺 데모 영상 보기
              </button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-500">
              <span>✅ 신용카드 불필요</span>
              <span>✅ 3분 만에 체험</span>
              <span>✅ 개인정보 안전</span>
            </div>
          </div>

          {/* Right Content - Preview */}
          <div className="relative">
            <div className="rounded-2xl bg-white p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-500">AI 평가서 미리보기</span>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-20 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 font-medium">30초 만에 완성! ⚡</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 rounded-lg bg-success-500 px-3 py-2 text-white text-sm font-medium">
              시간 90% 절약
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-lg bg-secondary-500 px-3 py-2 text-white text-sm font-medium">
              전문성 200% UP
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
