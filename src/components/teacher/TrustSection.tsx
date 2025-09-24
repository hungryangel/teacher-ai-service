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

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">
            안전하고 신뢰할 수 있는 서비스
          </h2>
          <p className="body-lg text-gray-600">
            교육 현장에서 검증된 전문성과 보안
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustFactors.map((factor, index) => (
            <div 
              key={index}
              className="rounded-xl bg-white p-6 text-center shadow-sm"
            >
              <div className="text-3xl mb-3">{factor.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{factor.title}</h3>
              <p className="body-sm">{factor.description}</p>
            </div>
          ))}
        </div>

        {/* 후기 섹션 */}
        <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              현직 보육교사들의 생생한 후기
            </h3>
            <div className="flex justify-center items-center gap-1 text-yellow-500">
              {"★".repeat(5)} <span className="ml-2 text-gray-600">4.9/5.0</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "김○○ 교사",
                role: "5년차 · 만3세반",
                comment: "평가서 작성 시간이 정말 놀랍게 줄었어요. 아이들과 놀 시간이 더 생겼습니다!"
              },
              {
                name: "박○○ 원장",
                role: "12년차 · 원장",
                comment: "선생님들의 야근이 줄고, 평가서 품질은 오히려 더 좋아졌어요."
              },
              {
                name: "이○○ 교사",
                role: "신입 · 만2세반",
                comment: "초보 교사인 저도 경력자 수준의 평가서를 쓸 수 있게 되었어요."
              }
            ].map((review, index) => (
              <div key={index} className="rounded-lg bg-gray-50 p-4">
                <p className="text-gray-700 mb-3 italic">"{review.comment}"</p>
                <div>
                  <p className="font-medium text-gray-900">{review.name}</p>
                  <p className="body-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
