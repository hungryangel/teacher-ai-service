// src/app/page.tsx - 메인 랜딩 페이지
"use client";

import { TeacherHero } from "@/components/teacher/TeacherHero";
import { FeatureCards } from "@/components/teacher/FeatureCards";
import { TrustSection } from "@/components/teacher/TrustSection";
import { PricingPreview } from "@/components/teacher/PricingPreview";
import { CTASection } from "@/components/teacher/CTASection";

export default function TeacherLandingPage() {
  return (
    <main className="min-h-screen">
      <TeacherHero />
      <FeatureCards />
      <TrustSection />
      <PricingPreview />
      <CTASection />
    </main>
  );
}
