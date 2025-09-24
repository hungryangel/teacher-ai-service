"use client";

import React, { useState } from 'react';

interface FormData {
  childName: string;
  age: string;
  observations: {
    physical: string;
    social: string;
    communication: string;
  };
}

export function ExperienceForm() {
  const [formData, setFormData] = useState<FormData>({
    childName: '',
    age: '',
    observations: {
      physical: '',
      social: '',
      communication: ''
    }
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  
  const handleGenerate = async () => {
    if (!formData.childName || !formData.age) return;
    
    setIsGenerating(true);
    try {
      // AI API 호출 (기존 모듈 재활용)
      const response = await fetch('/api/teacher-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          childInfo: {
            name: formData.childName,
            age: formData.age,
            className: '체험반'
          },
          observations: formData.observations,
          teacherType: 'childcare',
          experience: 'senior'
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        setResult(data.report);
      }
    } catch (error) {
      console.error('평가서 생성 오류:', error);
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleInputChange = (field: keyof FormData | string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof FormData] as Record<string, any>),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI 평가서 체험하기</h2>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                아동 이름
              </label>
              <input
                type="text"
                value={formData.childName}
                onChange={(e) => handleInputChange('childName', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="아동의 이름을 입력하세요"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                나이
              </label>
              <select
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">나이를 선택하세요</option>
                <option value="만 2세">만 2세</option>
                <option value="만 3세">만 3세</option>
                <option value="만 4세">만 4세</option>
                <option value="만 5세">만 5세</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">관찰 내용</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                신체활동 관찰
              </label>
              <textarea
                value={formData.observations.physical}
                onChange={(e) => handleInputChange('observations.physical', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="신체활동에 대한 관찰 내용을 입력하세요"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                의사소통 관찰
              </label>
              <textarea
                value={formData.observations.communication}
                onChange={(e) => handleInputChange('observations.communication', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="의사소통에 대한 관찰 내용을 입력하세요"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                사회관계 관찰
              </label>
              <textarea
                value={formData.observations.social}
                onChange={(e) => handleInputChange('observations.social', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="사회관계에 대한 관찰 내용을 입력하세요"
              />
            </div>
          </div>
          
          <button
            onClick={handleGenerate}
            disabled={!formData.childName || !formData.age || isGenerating}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? 'AI 평가서 생성 중...' : 'AI 평가서 생성하기'}
          </button>
        </div>
        
        {result && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-4">생성된 평가서</h3>
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
