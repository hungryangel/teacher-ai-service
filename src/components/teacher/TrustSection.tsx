import { Container, Section, HeadingLG, BodyLG, Card, Grid } from "@/components/ui";

export function TrustSection() {
  const trustFactors = [
    {
      icon: "🛡️",
      title: "개인정보 보호", 
      description: "최소 수집, 암호화 저장"
    },
    {
      icon: "📋",
      title: "표준 준수",
      description: "2024 개정 표준보육과정 반영"
    },
    {
      icon: "⭐",
      title: "검증된 품질",
      description: "1000+ 교사 검증 완료"
    },
    {
      icon: "🔄", 
      title: "지속 업데이트",
      description: "현장 피드백 반영 개선"
    }
  ];

  const reviews = [
    {
      name: "김○○ 교사",
      role: "5년차 · 만3세반",
      comment: "평가서 작성 시간이 정말 놀랍게 줄었어요. 아이들과 놀 시간이 더 생겼습니다!",
      rating: 5
    },
    {
      name: "박○○ 원장", 
      role: "12년차 · 원장",
      comment: "선생님들의 야근이 줄고, 평가서 품질은 오히려 더 좋아졌어요.",
      rating: 5
    },
    {
      name: "이○○ 교사",
      role: "신입 · 만2세반", 
      comment: "초보 교사인 저도 경력자 수준의 평가서를 쓸 수 있게 되었어요.",
      rating: 5
    }
  ];

  return (
    <Section background="gray">
      <Container>
        <div className="text-center mb-16">
          <HeadingLG className="mb-4">
            안전하고 신뢰할 수 있는 서비스
          </HeadingLG>
          <BodyLG>
            교육 현장에서 검증된 전문성과 보안
          </BodyLG>
        </div>

        <Grid cols={4} gap="md" className="mb-16">
          {trustFactors.map((factor, index) => (
            <Card 
              key={index}
              variant="elevated" 
              className={`text-center p-6 animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-3xl mb-3">{factor.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{factor.title}</h3>
              <p className="body-sm">{factor.description}</p>
            </Card>
          ))}
        </Grid>

        {/* 후기 섹션 */}
        <ReviewSection reviews={reviews} />
      </Container>
    </Section>
  );
}

function ReviewSection({ reviews }: { reviews: any[] }) {
  return (
    <Card variant="elevated" className="p-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          현직 보육교사들의 생생한 후기
        </h3>
        <div className="flex justify-center items-center gap-1 text-yellow-500">
          {"★".repeat(5)} 
          <span className="ml-2 text-gray-600">4.9/5.0</span>
        </div>
      </div>

      <Grid cols={3} gap="md">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} index={index} />
        ))}
      </Grid>
    </Card>
  );
}

function ReviewCard({ review, index }: { review: any; index: number }) {
  return (
    <Card 
      className={`bg-gray-50 p-4 animate-fade-in`}
      style={{ animationDelay: `${(index + 4) * 150}ms` }}
    >
      <p className="text-gray-700 mb-3 italic">"{review.comment}"</p>
      <div>
        <p className="font-medium text-gray-900">{review.name}</p>
        <p className="body-sm">{review.role}</p>
      </div>
    </Card>
  );
}
