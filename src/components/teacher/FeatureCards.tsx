import { Container } from "@/components/ui";

export function FeatureCards() {
  const features = [
    {
      icon: "🤖",
      title: "스마트 AI 분석",
      description: "아동의 행동 관찰을 전문적인 발달평가 문장으로 자동 변환",
      highlight: "30초 완성"
    },
    {
      icon: "📈",
      title: "표준과정 준수",
      description: "2024 개정 표준보육과정과 누리과정을 100% 반영한 정확한 평가",
      highlight: "100% 준수"
    },
    {
      icon: "💝",
      title: "따뜻한 어조",
      description: "차가운 AI가 아닌 따뜻하고 전문적인 교사의 시선으로 작성",
      highlight: "학부모 만족"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">
            왜 수천 명의 보육교사가 선택했을까요?
          </h2>
          <p className="body-lg text-gray-600">
            복잡한 평가서 작성, 이제 AI가 도와드릴게요
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl bg-gray-50 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -top-4 right-6">
                <span className="inline-block rounded-full bg-primary-500 px-3 py-1 text-sm text-white font-medium">
                  {feature.highlight}
                </span>
              </div>
              
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="heading-md text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              
              <div className="mt-6 flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                자세히 보기 →
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
