export function ExperienceForm() {
  const [formData, setFormData] = useState({
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
        body: JSON.stringify(formData)
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

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            📝 아동 정보 및 관찰 내용
          </h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                아동 이름
              </label>
              <input
                type="text"
                placeholder="예: 영희"
                value={formData.childName}
                onChange={(e) => setFormData(prev => ({ ...prev, childName: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                나이
              </label>
              <select
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="">선택해주세요</option>
                <option value="만1세">만1세</option>
                <option value="만2세">만2세</option>
                <option value="만3세">만3세</option>
                <option value="만4세">만4세</option>
                <option value="만5세">만5세</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                신체발달 관찰 (간단히)
              </label>
              <textarea
                placeholder="예: 뛰기를 좋아하고, 블록 쌓기를 잘해요"
                value={formData.observations.physical}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  observations: { ...prev.observations, physical: e.target.value }
                }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                사회성 관찰 (간단히)
              </label>
              <textarea
                placeholder="예: 친구들과 잘 어울리고, 나누어주기를 좋아해요"
                value={formData.observations.social}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  observations: { ...prev.observations, social: e.target.value }
                }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                의사소통 관찰 (간단히)
              </label>
              <textarea
                placeholder="예: 또래보다 어휘력이 풍부하고, 책 읽기를 즐겨해요"
                value={formData.observations.communication}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  observations: { ...prev.observations, communication: e.target.value }
                }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                rows={3}
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !formData.childName || !formData.age}
              className={`w-full py-4 rounded-lg font-semibold text-white transition-colors ${
                isGenerating || !formData.childName || !formData.age
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700'
              }`}
            >
              {isGenerating ? '🤖 AI가 평가서를 작성중...' : '⚡ 평가서 생성하기'}
            </button>
          </div>
        </div>

        {/* Result Display */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            📋 생성된 평가서 미리보기
          </h2>
          
          {!result && !isGenerating && (
            <div className="flex items-center justify-center h-96 text-gray-500">
              <div className="text-center">
                <div className="text-6xl mb-4">📝</div>
                <p>왼쪽 폼을 작성하고<br/>"평가서 생성하기"를 클릭해주세요</p>
              </div>
            </div>
          )}

          {isGenerating && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="animate-spin text-4xl mb-4">🤖</div>
                <p className="text-primary-600 font-medium">AI가 열심히 작성중입니다...</p>
                <p className="text-sm text-gray-500 mt-2">약 30초 정도 소요됩니다</p>
              </div>
            </div>
          )}

          {result && (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-800 font-medium">
                  <span>✅</span> 평가서 생성 완료!
                </div>
                <p className="text-green-700 text-sm mt-1">
                  전문적인 평가서가 30초 만에 완성되었습니다.
                </p>
              </div>
              
              <div className="max-h-96 overflow-y-auto border rounded-lg p-4 text-sm leading-relaxed">
                {result.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-3 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700">
                  📊 평가서 분석하기
                </button>
                <button className="flex-1 py-3 px-4 bg-secondary-600 text-white rounded-lg font-medium hover:bg-secondary-700">
                  ✨ 개선 제안 받기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
