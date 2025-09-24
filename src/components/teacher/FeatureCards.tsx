import { Container, Section, HeadingLG, BodyLG, Card, Grid } from "@/components/ui";

export function FeatureCards() {
  const features = [
    {
      icon: "🤖",
      title: "스마트 AI 분석",
      description: "아동의 행동 관찰을 전문적인 발달평가 문장으로 자동 변환",
      highlight: "30초 완성",
      color: "primary"
    },
    {
      icon: "📈", 
      title: "표준과정 준수",
      description: "2024 개정 표준보육과정과 누리과정을 100% 반영한 정확한 평가",
      highlight: "100% 준수",
      color: "success"
    },
    {
      icon: "💝",
      title: "따뜻한 어조",
      description: "차가운 AI가 아닌 따뜻하고 전문적인 교사의 시선으로 작성",
      highlight: "학부모 만족", 
      color: "warning"
    }
  ];

  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-16">
          <HeadingLG className="mb-4">
            왜 수천 명의 보육교사가 선택했을까요?
          </HeadingLG>
          <BodyLG>
            복잡한 평가서 작성, 이제 AI가 도와드릴게요
          </BodyLG>
        </div>

        <Grid cols={3} gap="lg">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const colorClasses = {
    primary: "from-primary-500 to-primary-600",
    success: "from-success-500 to-success-600", 
    warning: "from-warning-500 to-warning-600"
  };

  return (
    <Card 
      hover 
      className={`feature-card animate-fade-in`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className={`absolute -top-4 right-6 bg-gradient-to-r ${colorClasses[feature.color]} rounded-full px-3 py-1`}>
        <span className="text-sm text-white font-medium">
          {feature.highlight}
        </span>
      </div>
      
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="heading-md mb-3">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
      
      <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
        자세히 보기 →
      </div>
    </Card>
  );
}
