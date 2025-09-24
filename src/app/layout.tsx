import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Navigation } from '@/components/layout/Navigation';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'AI 아동발달 평가서 생성기',
  description: 'AI-powered teacher service with modular assessment system - 2024 개정 표준보육과정 기반',
  keywords: ['아동발달', '평가서', 'AI', '표준보육과정', '누리과정', '보육교사'],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AI 아동발달 평가서 생성기',
    description: '2024 개정 표준보육과정 기반 전문가 수준의 아동발달 평가서를 AI로 간편하게 생성하세요',
    type: 'website',
    locale: 'ko_KR',
  }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-responsive">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-4">AI 평가서 도구</h3>
            <p className="text-gray-400 text-sm">
              2024 개정 표준보육과정을 기반으로 한 전문적인 아동발달 평가서 생성 서비스
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/generate" className="hover:text-white transition-colors">AI평가서 작성</a></li>
              <li><a href="/feedback" className="hover:text-white transition-colors">AI평가서 검토</a></li>
              <li><a href="/templates" className="hover:text-white transition-colors">템플릿</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">지원</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/docs" className="hover:text-white transition-colors">사용가이드</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">자주묻는질문</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">문의하기</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">회사소개</a></li>
              <li><a href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">이용약관</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2024 AI 평가서 도구. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
