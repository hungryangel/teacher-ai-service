// src/app/page.tsx - 스타일링 이슈 해결 버전
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white" style={{ backgroundColor: '#ffffff', color: '#1f2937' }}>
      {/* Navigation - 명시적 스타일 적용 */}
      <nav className="container mx-auto px-4 py-6" style={{ backgroundColor: 'transparent' }}>
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-blue-600 nav-brand" 
            style={{ color: '#2563eb' }}
          >
            보육교사 AI 서비스
          </div>
          <div className="flex space-x-6">
            <Link 
              href="/onboarding" 
              className="text-gray-600 hover:text-blue-600 transition nav-link"
              style={{ color: '#4b5563' }}
            >
              시작하기
            </Link>
            <Link 
              href="/experience" 
              className="text-gray-600 hover:text-blue-600 transition nav-link"
              style={{ color: '#4b5563' }}
            >
              체험하기
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16" style={{ backgroundColor: 'transparent' }}>
        <div className="text-center">
          {/* Hero Title - 강제 스타일 적용 */}
          <h1 
            className="text-5xl font-bold text-gray-900 mb-6 hero-title" 
            style={{ color: '#111827', fontSize: '3rem', fontWeight: '700' }}
          >
            보육교사의 일상을 AI가 혁신합니다
          </h1>
          
          <p 
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto hero-subtitle" 
            style={{ color: '#4b5563', fontSize: '1.25rem' }}
          >
            평가서 작성 시간을 90% 단축하고, 아이들과 더 많은 시간을 보내세요. 
            따뜻하고 전문적인 평가서를 30초 만에 완성합니다.
          </p>

          {/* 3-Stage Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Stage 1: Landing */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition card-bg" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#dbeafe' }}>
                <span className="text-2xl font-bold text-blue-600" style={{ color: '#2563eb' }}>1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 card-title" style={{ color: '#111827' }}>
                🏠 랜딩
              </h3>
              <p className="text-gray-600 mb-4 card-text" style={{ color: '#4b5563' }}>
                보육교사 전용 AI 평가서 서비스를 소개합니다. 2024 개정 표준보육과정을 완벽 반영한 전문 도구입니다.
              </p>
              <Link 
                href="/" 
                className="inline-block text-blue-600 font-semibold hover:text-blue-700"
                style={{ color: '#2563eb' }}
              >
                현재 페이지 →
              </Link>
            </div>

            {/* Stage 2: Onboarding */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition card-bg" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#dcfce7' }}>
                <span className="text-2xl font-bold text-green-600" style={{ color: '#16a34a' }}>2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 card-title" style={{ color: '#111827' }}>
                📝 온보딩 설문
              </h3>
              <p className="text-gray-600 mb-4 card-text" style={{ color: '#4b5563' }}>
                교사 유형, 경력, 담당 연령대 등 6단계 맞춤형 설문을 통해 개인화된 서비스를 준비합니다.
              </p>
              <Link 
                href="/onboarding" 
                className="inline-block text-green-600 font-semibold hover:text-green-700"
                style={{ color: '#16a34a' }}
              >
                시작하기 →
              </Link>
            </div>

            {/* Stage 3: Experience */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition card-bg" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#e9d5ff' }}>
                <span className="text-2xl font-bold text-purple-600" style={{ color: '#9333ea' }}>3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 card-title" style={{ color: '#111827' }}>
                ⚡ 즉시 체험
              </h3>
              <p className="text-gray-600 mb-4 card-text" style={{ color: '#4b5563' }}>
                간단한 아동 정보만 입력하면 30초 만에 전문적인 평가서가 완성됩니다. 바로 체험해보세요!
              </p>
              <Link 
                href="/experience" 
                className="inline-block text-purple-600 font-semibold hover:text-purple-700"
                style={{ color: '#9333ea' }}
              >
                체험하기 →
              </Link>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16 card-bg" style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ color: '#111827' }}>
              🚀 핵심 기능
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center" style={{ color: '#111827' }}>
                  <span className="mr-3" style={{ fontSize: '1.5rem' }}>🤖</span> 
                  스마트 AI 분석
                </h4>
                <p className="text-gray-600" style={{ color: '#4b5563' }}>
                  아동의 행동 관찰을 전문적인 발달평가 문장으로 자동 변환합니다.
                </p>
              </div>
              
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center" style={{ color: '#111827' }}>
                  <span className="mr-3" style={{ fontSize: '1.5rem' }}>📊</span> 
                  표준과정 준수
                </h4>
                <p className="text-gray-600" style={{ color: '#4b5563' }}>
                  2024 개정 표준보육과정과 누리과정을 100% 반영한 정확한 평가입니다.
                </p>
              </div>
              
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center" style={{ color: '#111827' }}>
                  <span className="mr-3" style={{ fontSize: '1.5rem' }}>💝</span> 
                  따뜻한 어조
                </h4>
                <p className="text-gray-600" style={{ color: '#4b5563' }}>
                  차가운 AI가 아닌 따뜻하고 전문적인 교사의 시선으로 작성합니다.
                </p>
              </div>
              
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center" style={{ color: '#111827' }}>
                  <span className="mr-3" style={{ fontSize: '1.5rem' }}>⏰</span> 
                  시간 90% 단축
                </h4>
                <p className="text-gray-600" style={{ color: '#4b5563' }}>
                  3시간 걸리던 평가서 작성을 30초 만에. 아이들과 더 많은 시간을 보내세요.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/onboarding"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
              >
                🚀 지금 무료로 시작하기
              </Link>
              <Link 
                href="/experience"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
                style={{ borderColor: '#2563eb', color: '#2563eb' }}
              >
                ⚡ 바로 체험하기
              </Link>
            </div>
            <p className="text-sm text-gray-500" style={{ color: '#6b7280' }}>
              ✨ 신용카드 불필요 • 3분 만에 체험 • 개인정보 안전
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600" style={{ color: '#4b5563' }}>
            © 2025 보육교사 AI 서비스. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
