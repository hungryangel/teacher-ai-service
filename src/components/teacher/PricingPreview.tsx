"use client";

import React from 'react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "기본",
    price: "무료",
    period: "",
    features: [
      "기본 AI 피드백",
      "월 10회 분석",
      "표준 템플릿"
    ]
  },
  {
    name: "프로",
    price: "₩29,900",
    period: "/월",
    features: [
      "고급 AI 분석",
      "무제한 분석",
      "맞춤형 템플릿",
      "상세 리포트",
      "우선 지원"
    ],
    highlighted: true
  },
  {
    name: "엔터프라이즈",
    price: "문의",
    period: "",
    features: [
      "전용 AI 모델",
      "학교 전체 분석",
      "API 접근",
      "전담 지원",
      "커스텀 개발"
    ]
  }
];

export function PricingPreview() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            간단하고 투명한 요금제
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            필요에 맞는 플랜을 선택하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                tier.highlighted ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    추천
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>
                <div className="text-4xl font-bold text-gray-900">
                  {tier.price}
                  <span className="text-lg font-medium text-gray-600">
                    {tier.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  tier.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {tier.price === '문의' ? '문의하기' : '시작하기'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
