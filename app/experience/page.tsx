'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// 프롬프트 빌더 컴포넌트
function SamplePromptBuilder({ onRun }: { onRun: (text: string) => void }) {
  const [prompt, setPrompt] = useState(
    '학생의 서술형 답안을 평가하고 피드백을 생성해줘. 기준: 논리성, 정확성, 표현력'
  );
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">프롬프트 빌더</h3>
      <textarea
        className="w-full h-28 p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="mt-3 flex justify-end">
        <button
          onClick={() => onRun(prompt)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          실행
        </button>
      </div>
    </div>
  );
}

// 학생 답안 입력 컴포넌트
function SampleStudentAnswer({ onEvaluate }: { onEvaluate: (answer: string) => void }) {
  const [answer, setAnswer] = useState(
    '지구 온난화는 온실가스 증가로 인해 지구 평균 기온이 상승하는 현상입니다...'
  );
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">학생 답안</h3>
      <textarea
        className="w-full h-36 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <div className="mt-3 flex justify-end">
        <button
          onClick={() => onEvaluate(answer)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          평가하기
        </button>
      </div>
    </div>
  );
}

// 결과 컴포넌트 (모의)
function SampleResult({ prompt, answer }: { prompt: string; answer: string }) {
  if (!prompt || !answer) return null;
  const score = 86;
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">AI 평가 결과</h3>
      <div className="text-sm text-gray-600 mb-2">프롬프트: {prompt}</div>
      <div className="text-sm text-gray-600 mb-4">답안 길이: {answer.length}자</div>
      <div className="text-3xl font-bold text-purple-600 mb-2">점수: {score} / 100</div>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>논리성: 우수 — 주장과 근거가 일관됨</li>
        <li>정확성: 양호 — 핵심 개념은 정확하나 예시가 부족</li>
        <li>표현력: 보통 — 문장 구성은 무난하나 어휘 다양성 개선 필요</li>
      </ul>
    </div>
  );
}

export default function ExperiencePage() {
  const [usedPrompt, setUsedPrompt] = useState('');
  const [studentAnswer, setStudentAnswer] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link className="text-2xl font-bold text-purple-600" href="/">
            달각 Teacher AI
          </Link>
          <Link className="text-gray-600 hover:text-purple-600" href="/onboarding">
            온보딩으로 돌아가기
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 pb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">체험 공간</h1>
          <p className="text-gray-600">Claude 설계안의 핵심 흐름: 프롬프트 구성 → 답안 입력 → AI 평가</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <SamplePromptBuilder onRun={(p) => setUsedPrompt(p)} />
          <SampleStudentAnswer onEvaluate={(a) => setStudentAnswer(a)} />
        </div>

        <div className="mt-6">
          <SampleResult prompt={usedPrompt} answer={studentAnswer} />
        </div>

        {/* Tips */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-2">사용 팁</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>평가 기준을 명확히 프롬프트에 포함하면 더 일관된 결과를 얻을 수 있습니다.</li>
            <li>학생 답안 예시는 실제 수업에서 사용한 자료로 바꿔보세요.</li>
            <li>결과는 데모용이며 실제 모델 연동 시 개선됩니다.</li>
          </ul>
        </div>
      </div>

      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">© 2025 달각 Teacher AI Service. Demo experience page.</div>
        </div>
      </footer>
    </div>
  );
}
