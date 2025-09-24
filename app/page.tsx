import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            달각 Teacher AI
          </div>
          <div className="flex space-x-6">
            <Link className="text-gray-600 hover:text-blue-600 transition" href="/onboarding">
              시작하기
            </Link>
            <Link className="text-gray-600 hover:text-blue-600 transition" href="/experience">
              체험하기
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI 기반 교육 서비스
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            혁신적인 AI 기반 교육 서비스로 개인화된 학습 경험과 모듈식 평가 시스템을 제공합니다
          </p>

          {/* DalGak 3-Stage Structure */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Landing</h3>
              <p className="text-gray-600 mb-4">
                AI 기반 교육 플랫폼에 오신 것을 환영합니다. 지능적인 평가 도구와 개인화된 학습 경험을 발견하세요.
              </p>
              <Link className="inline-block text-blue-600 font-semibold hover:text-blue-700" href="/">
                현재 페이지 →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Onboarding</h3>
              <p className="text-gray-600 mb-4">
                직관적인 설정 과정으로 시작하세요. 교육 선호도와 평가 기준을 설정할 수 있습니다.
              </p>
              <Link className="inline-block text-green-600 font-semibold hover:text-green-700" href="/onboarding">
                시작하기 →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience</h3>
              <p className="text-gray-600 mb-4">
                AI 보조 교육의 모든 기능을 체험해보세요. 모듈식 평가 시스템과 실시간 인사이트를 경험하세요.
              </p>
              <Link className="inline-block text-purple-600 font-semibold hover:text-purple-700" href="/experience">
                체험하기 →
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">주요 기능</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-3">🤖</span> AI 기반 평가
                </h4>
                <p className="text-gray-600">
                  고급 AI 알고리즘이 학생 작업에 대한 지능적인 평가와 피드백을 제공합니다.
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-3">📊</span> 모듈식 시스템
                </h4>
                <p className="text-gray-600">
                  유연한 모듈식 아키텍처로 맞춤형 평가 워크플로우를 구성할 수 있습니다.
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-3">🎯</span> 개인화 학습
                </h4>
                <p className="text-gray-600">
                  개별 학생의 요구사항과 진도에 기반한 맞춤형 교육 경험을 제공합니다.
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="mr-3">📈</span> 실시간 분석
                </h4>
                <p className="text-gray-600">
                  학생 성과 추적을 위한 포괄적인 대시보드와 분석 도구를 제공합니다.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300" href="/onboarding">
                시작하기
              </Link>
              <Link className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300" href="/experience">
                체험하기
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              Next.js 14, React 18, TypeScript, Tailwind CSS로 구축
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            © 2025 달각 Teacher AI Service. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
