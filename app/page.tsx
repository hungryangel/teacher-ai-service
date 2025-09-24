import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Teacher AI Service
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            AI-powered teacher service with modular assessment system - DalGak 3-stage structure (Landing/Onboarding/Experience)
          </p>
          
          {/* DalGak 3-Stage Structure */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Landing</h3>
              <p className="text-gray-600">
                Welcome to the AI-powered teaching platform. Discover intelligent assessment tools and personalized learning experiences.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Onboarding</h3>
              <p className="text-gray-600">
                Get started with our intuitive setup process. Configure your teaching preferences and assessment criteria.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience</h3>
              <p className="text-gray-600">
                Experience the full power of AI-assisted teaching with modular assessment systems and real-time insights.
              </p>
            </div>
          </div>
          
          {/* Features */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">🤖 AI-Powered Assessments</h4>
                <p className="text-gray-600">Advanced AI algorithms provide intelligent evaluation and feedback for student work.</p>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">📊 Modular System</h4>
                <p className="text-gray-600">Flexible, modular architecture allows for customized assessment workflows.</p>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">🎯 Personalized Learning</h4>
                <p className="text-gray-600">Tailored educational experiences based on individual student needs and progress.</p>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">📈 Real-time Analytics</h4>
                <p className="text-gray-600">Comprehensive dashboards and analytics for tracking student performance.</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
            <p className="text-sm text-gray-500">
              Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
