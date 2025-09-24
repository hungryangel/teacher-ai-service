import { useRouter } from "next/navigation";
import { Container } from "@/components/ui";

export function CTASection() {
  const router = useRouter();

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <Container>
        <div className="text-center text-white">
          <h2 className="heading-lg mb-6">
            지금 시작하면 평생 50% 할인 혜택!
          </h2>
          <p className="body-lg mb-8 text-primary-100">
            베타 테스터로 참여하고 런칭 후에도 특별 혜택을 받으세요
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => router.push('/onboarding')}
              className="rounded-lg bg-white px-12 py-4 text-primary-700 font-bold text-lg hover:bg-gray-50 transition-colors"
            >
              🎁 무료로 시작하기
            </button>
            <p className="body-sm text-primary-200">
              신용카드 불필요 • 언제든 해지 가능 • 3분 만에 체험
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
