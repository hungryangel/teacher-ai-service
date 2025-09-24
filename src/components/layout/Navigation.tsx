"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui';

const ROUTES = {
  HOME: '/',
  GENERATE: '/generate',
  FEEDBACK: '/feedback',
  DASHBOARD: '/dashboard'
} as const;

const NAV_ITEMS = [
  { href: ROUTES.HOME, label: '홈', description: '서비스 소개' },
  { href: ROUTES.GENERATE, label: 'AI평가서 작성', description: '키워드로 평가서 생성' },
  { href: ROUTES.FEEDBACK, label: 'AI평가서 검토', description: '기존 문서 분석·피드백' },
  { href: ROUTES.DASHBOARD, label: '대시보드', description: '내 활동 관리' }
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href={ROUTES.HOME} className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-gray-900">평가서 도구</span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavItem key={item.href} item={item} pathname={pathname} />
            ))}
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="메뉴 열기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    pathname === item.href 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.description}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

function NavItem({ item, pathname }: { item: any; pathname: string }) {
  const isActive = pathname === item.href;
  
  return (
    <Link
      href={item.href}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
        isActive 
          ? 'bg-primary-100 text-primary-700' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center gap-2">
        <span>{item.label}</span>
        {isActive && (
          <span className="w-2 h-2 rounded-full bg-primary-500"></span>
        )}
      </div>
    </Link>
  );
}
