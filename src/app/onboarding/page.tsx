"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui";
import { OnboardingForm } from "@/components/teacher/OnboardingForm";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Container className="py-12">
        <div className="max-w-2xl mx-auto">
          <OnboardingHeader />
          <OnboardingForm />
        </div>
      </Container>
    </main>
  );
}

function OnboardingHeader() {
  return (
    <div className="text-center mb-8">
      <h1 className="heading-lg text-gray-900 mb-4">
        맞춤형 AI 서비스를 위한 간단한 설문
      </h1>
      <p className="body-lg text-gray-600">
        더 정확하고 개인화된 평가서 작성을 위해 몇 가지만 알려주세요
      </p>
    </div>
  );
}
