'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    teacherName: '',
    schoolName: '',
    subject: '',
    experienceLevel: 'beginner',
    assessmentPreferences: {
      automated: false,
      manual: false,
      mixed: true
    },
    goals: []
  });

  const totalSteps = 4;

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      localStorage.setItem('teacherOnboarding', JSON.stringify(formData));
      router.push('/experience');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                기본 정보를 알려주세요
              </h2>
              <p className="text-gray-600">
                개인화된 AI 교육 경험을 위해 몇 가지 정보가 필요합니다.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  선생님 성함
                </label>
                <input
                  type="text"
                  value={formData.teacherName}
                  onChange={(e) => handleInputChange('teacherName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="성함을 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  학교명
                </label>
                <input
                  type="text"
                  value={formData.schoolName}
                  onChange={(e) => handleInputChange('schoolName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="학교명을 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  담당 과목
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">과목을 선택해주세요</option>
                  <option value="korean">국어</option>
                  <option value="english">영어</option>
                  <option value="math">수학</option>
                  <option value="science">과학</option>
                  <option value="social">사회</option>
                  <option value="art">예술</option>
                  <option value="pe">체육</option>
                  <option value="other">기타</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                교육 경험을 알려주세요
              </h2>
              <p className="text-gray-600">
                AI 도구 사용 경험에 따라 맞춤형 가이드를 제공합니다.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  AI 교육 도구 사용 경험
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'beginner', label: '초보자 (AI 도구를 처음 사용)', icon: '🌱' },
                    { value: 'intermediate', label: '중급자 (몇 번 사용해봤음)', icon: '🌿' },
                    { value: 'advanced', label: '숙련자 (자주 사용하고 있음)', icon: '🌳' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="experience"
                        value={option.value}
                        checked={formData.experienceLevel === option.value}
                        onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                        className="mr-3"
                      />
                      <span className="text-2xl mr-3">{option.icon}</span>
                      <span className="text-gray-900">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                평가 방식을 선택해주세요
              </h2>
              <p className="text-gray-600">
                선호하는 평가 방식에 따라 AI 시스템을 조정합니다.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4">
                {[
                  { 
                    key: 'automated', 
                    label: '자동 평가', 
                    description: 'AI가 자동으로 평가하고 피드백 제공',
                    icon: '🤖'
                  },
                  { 
                    key: 'manual', 
                    label: '수동 평가', 
                    description: '선생님이 직접 평가하되 AI가 보조 정보 제공',
                    icon: '👨‍🏫'
                  },
                  { 
                    key: 'mixed', 
                    label: '혼합 평가', 
                    description: 'AI 자동 평가 + 선생님 최종 검토',
                    icon: '🤝'
                  }
                ].map(option => (
                  <label key={option.key} className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={formData.assessmentPreferences[option.key as keyof typeof formData.assessmentPreferences]}
                      onChange={(e) => {
                        const newPrefs = { ...formData.assessmentPreferences };
                        newPrefs[option.key as keyof typeof newPrefs] = e.target.checked;
                        handleInputChange('assessmentPreferences', newPrefs);
                      }}
                      className="mr-3 mt-1"
                    />
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">{option.icon}</span>
                        <span className="font-medium text-gray-900">{option.label}</span>
                      </div>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                교육 목표를 선택해주세요
              </h2>
              <p className="text-gray-600">
                AI가 목표에 맞는 최적의 교육 솔루션을 제안합니다.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'engagement', label: '학생 참여도 향상', icon: '🙋‍♂️' },
                  { value: 'assessment', label: '평가 효율성 증대', icon: '📊' },
                  { value: 'personalization', label: '개인화 학습 제공', icon: '🎯' },
                  { value: 'feedback', label: '즉시 피드백 제공', icon: '💬' },
                  { value: 'analytics', label: '학습 데이터 분석', icon: '📈' },
                  { value: 'workload', label: '업무 부담 감소', icon: '⚡' }
                ].map(goal => (
                  <label key={goal.value} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={formData.goals.includes(goal.value)}
                      onChange={(e) => {
                        const newGoals = e.target.checked
                          ? [...formData.goals, goal.value]
                          : formData.goals.filter(g => g !== goal.value);
                        handleInputChange('goals', newGoals);
                      }}
                      className="mr-3"
                    />
                    <span className="text-2xl mr-3">{goal.icon}</span>
                    <span className="text-gray-900">{goal.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Teacher AI
          </Link>
          <div className="text-sm text-gray-600">
            {currentStep}/{totalSteps} 단계
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">진행률</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                이전
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                {currentStep === totalSteps ? '체험 시작하기' : '다음'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2025 Teacher AI Service. 온보딩 과정을 통해 맞춤형 AI 교육 경험을 설정하세요.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
