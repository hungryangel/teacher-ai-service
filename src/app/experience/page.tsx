"use client";
import { useState } from "react";
import { Container } from "@/components/ui";
import { ExperienceForm } from "@/components/teacher/ExperienceForm";
export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Container className="py-12">
        <ExperienceHeader />
        <ExperienceForm />
      </Container>
    </main>
  );
}
function ExperienceHeader() {
  return (
    <div className="text-center mb-12">
      <h1 className="heading-lg text-gray-900 mb-4">
        🚀 AI 평가서 작성 체험하기
      </h1>
      <p className="body-lg text-gray-600">
        간단한 정보만 입력하면 30초 만에 전문적인 평가서가 완성됩니다
      </p>
      <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
        🎁 무료 체험 • 회원가입 불필요 • 즉시 확인 가능
      </div>
    </div>
  );
}
