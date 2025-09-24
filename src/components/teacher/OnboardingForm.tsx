// src/components/teacher/OnboardingForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface OnboardingData {
  teacherType: string;
  experience: string;
  ageGroup: string;
  interests: string[];
  workplaceSize: string;
  email: string;
}

export function OnboardingForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    teacherType: "",
    experience: "",
    ageGroup: "",
    interests: [],
    workplaceSize: "",
    email: ""
  });

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // 완료 시 체험 페이지로 이동
      router.push('/experience');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">진행률</span>
          <span className="text-sm font-medium text-primary-600">
            {currentStep}/{totalSteps}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="space-y-6">
        {currentStep === 1 && (
          <QuestionCard
            title="어떤 유형의 교사이신가요?"
            options={[
              { value: "childcare", label: "보육교사", description: "어린이집 근무" },
              { value: "kindergarten", label: "유치원교사", description: "유치원 근무" },
              { value: "director", label: "원장/관리자", description: "관리 업무 중심" },
              { value: "other", label: "기타", description: "학부모, 학생 등" }
            ]}
            value={data.teacherType}
            onChange={(value) => setData(prev => ({ ...prev, teacherType: value }))}
          />
        )}

        {currentStep === 2 && (
          <QuestionCard
            title="보육/교육 경력은 얼마나 되시나요?"
            options={[
              { value: "beginner", label: "신입~1년", description: "갓 시작한 새내기" },
              { value: "junior", label: "2~4년", description: "경험을 쌓아가는 중" },
              { value: "senior", label: "5~9년", description: "베테랑 수준" },
              { value: "expert", label: "10년 이상", description: "전문가 레벨" }
            ]}
            value={data.experience}
            onChange={(value) => setData(prev => ({ ...prev, experience: value }))}
          />
        )}

        {currentStep === 3 && (
          <QuestionCard
            title="주로 담당하는 연령대는 어디인가요?"
            options={[
              { value: "infant", label: "0-1세", description: "영아반" },
              { value: "toddler", label: "2세", description: "걸음마반" },
              { value: "preschool", label: "3-5세", description: "유아반" },
              { value: "mixed", label: "혼합연령", description: "여러 연령대" }
            ]}
            value={data.ageGroup}
            onChange={(value) => setData(prev => ({ ...prev, ageGroup: value }))}
          />
        )}

        {currentStep === 4 && (
          <InterestSelectionCard
            title="어떤 기능에 가장 관심이 있으신가요? (중복선택 가능)"
            options={[
              { value: "report", label: "발달평가서 작성", icon: "📝" },
              { value: "observation", label: "관찰일지 작성", icon: "👀" },
              { value: "planning", label: "수업계획안 작성", icon: "📋" },
              { value: "communication", label: "학부모 소통", icon: "💬" },
              { value: "analysis", label: "발달분석 리포트", icon: "📊" }
            ]}
            selectedValues={data.interests}
            onChange={(values) => setData(prev => ({ ...prev, interests: values }))}
          />
        )}

        {currentStep === 5 && (
          <QuestionCard
            title="근무하시는 기관의 규모는 어느 정도인가요?"
            options={[
              { value: "small", label: "소규모 (20명 이하)", description: "가정어린이집 등" },
              { value: "medium", label: "중규모 (21-100명)", description: "일반적인 어린이집" },
              { value: "large", label: "대규모 (101명 이상)", description: "대형 어린이집/유치원" },
              { value: "franchise", label: "프랜차이즈", description: "체인형 기관" }
            ]}
            value={data.workplaceSize}
            onChange={(value) => setData(prev => ({ ...prev, workplaceSize: value }))}
          />
        )}

        {currentStep === 6 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">
              거의 다 완료되었어요! 🎉
            </h2>
            {/* 구글 폼 삽입 지점 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-medium text-blue-900 mb-3">
                📋 추가 정보 입력 (선택사항)
              </h3>
              <p className="text-blue-700 text-sm mb-4">
                더욱 맞춤화된 서비스를 위해 구글 폼으로 추가 정보를 입력해주세요.
              </p>
              <div className="bg-white rounded-lg border-2 border-dashed border-blue-300 p-8 text-center">
                <p className="text-blue-600 font-medium mb-2">구글 폼 삽입 지점</p>
                <p className="text-sm text-blue-500">
                  iframe으로 구글 폼을 여기에 삽입합니다
                </p>
                {/* 실제 구현시:
                <iframe 
                  src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
                  width="100%" 
                  height="400"
                  frameBorder="0"
                >
                  로드 중...
                </iframe>
                */}
              </div>
            </div>
            <EmailInputCard
              value={data.email}
              onChange={(email) => setData(prev => ({ ...prev, email }))}
            />
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            currentStep === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
          }`}
        >
          ← 이전
        </button>
        <button
          onClick={handleNext}
          disabled={!isStepValid(currentStep, data)}
          className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
            isStepValid(currentStep, data)
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentStep === totalSteps ? '🚀 체험하기' : '다음 →'}
        </button>
      </div>
    </div>
  );
}

function QuestionCard({ 
  title, 
  options, 
  value, 
  onChange 
}: {
  title: string;
  options: Array<{ value: string; label: string; description?: string; }>;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="grid gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              value === option.value
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="font-medium text-gray-900">{option.label}</div>
            {option.description && (
              <div className="text-sm text-gray-600 mt-1">{option.description}</div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function InterestSelectionCard({ 
  title, 
  options, 
  selectedValues, 
  onChange 
}: {
  title: string;
  options: Array<{ value: string; label: string; icon: string; }>;
  selectedValues: string[];
  onChange: (values: string[]) => void;
}) {
  const toggleValue = (value: string) => {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter(v => v !== value));
    } else {
      onChange([...selectedValues, value]);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => toggleValue(option.value)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              selectedValues.includes(option.value)
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{option.icon}</span>
              <span className="font-medium text-gray-900">{option.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function EmailInputCard({ value, onChange }: { value: string; onChange: (email: string) => void }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">
        체험 결과와 특별 혜택을 받을 이메일을 입력해주세요
      </h3>
      <div className="space-y-2">
        <input
          type="email"
          placeholder="your-email@example.com"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
        <p className="text-sm text-gray-500">
          ✨ 베타 테스터 특별 혜택과 체험 결과를 이메일로 보내드립니다
        </p>
      </div>
    </div>
  );
}

function isStepValid(step: number, data: OnboardingData): boolean {
  switch (step) {
    case 1: return !!data.teacherType;
    case 2: return !!data.experience;
    case 3: return !!data.ageGroup;
    case 4: return data.interests.length > 0;
    case 5: return !!data.workplaceSize;
    case 6: return !!data.email && data.email.includes('@');
    default: return false;
  }
}
