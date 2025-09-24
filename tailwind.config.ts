// tailwind.config.ts - 개선된 설정
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 통일된 브랜드 컬러 팔레트
        primary: {
          50: "#F6FBFF",
          100: "#EAF6FF", 
          200: "#D4EBFE",
          300: "#B5DCFD",
          400: "#7EC1FA",
          500: "#55A9F3", // 메인 브랜드 컬러
          600: "#3D8DD5",
          700: "#2F6FA8",
          800: "#295C88",
          900: "#234B6E"
        },
        secondary: {
          50: "#E8FBF4",
          100: "#D1F7E9", 
          200: "#BDF3E0",
          300: "#A3EFDC",
          400: "#7EE8CD",
          500: "#64D7B0", // 보조 컬러
          600: "#4FC596",
          700: "#3FB37C",
          800: "#329062",
          900: "#286D4A"
        },
        // 상태별 컬러
        success: {
          50: "#F0FDF4",
          500: "#10B981",
          600: "#059669"
        },
        warning: {
          50: "#FFFBEB", 
          500: "#F59E0B",
          600: "#D97706"
        },
        error: {
          50: "#FEF2F2",
          500: "#EF4444", 
          600: "#DC2626"
        },
        // 그레이 스케일
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB", 
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827"
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont', 
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif'
        ]
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], 
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem', 
        '3xl': '1.5rem'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'medium': '0 20px 40px rgba(0, 0, 0, 0.1)',
        'strong': '0 25px 50px rgba(0, 0, 0, 0.15)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
} satisfies Config;

// src/app/globals.css - 개선된 글로벌 스타일
@tailwind base;
@tailwind components; 
@tailwind utilities;

@layer base {
  * {
    @apply border-border;
  }
  
  html {
    @apply scroll-smooth;
  }
  
  body {
    @apply bg-white text-gray-900 font-sans antialiased;
    font-feature-settings: "rlig" 1, "calt" 1;
  }

  /* 개선된 기본 요소 스타일 */
  h1, h2, h3, h4, h5, h6 {
    @apply font-bold text-gray-900;
  }

  p {
    @apply text-gray-600 leading-relaxed;
  }

  a {
    @apply text-primary-600 hover:text-primary-700 transition-colors;
  }

  button {
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
  }
}

@layer components {
  /* 재사용 가능한 컴포넌트 스타일 */
  .btn-primary {
    @apply bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold 
           hover:bg-primary-700 focus:ring-primary-500 
           transition-all duration-200 transform hover:scale-105;
  }

  .btn-secondary {
    @apply bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold 
           hover:bg-gray-200 focus:ring-gray-500 
           transition-all duration-200;
  }

  .btn-outline {
    @apply border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold 
           hover:bg-gray-50 focus:ring-gray-500 
           transition-all duration-200;
  }

  .card-elevated {
    @apply bg-white rounded-xl shadow-lg p-6 
           hover:shadow-xl hover:-translate-y-1 
           transition-all duration-300;
  }

  .feature-card {
    @apply relative rounded-2xl bg-gray-50 p-8 
           hover:shadow-xl transition-all duration-300 hover:-translate-y-1
           group;
  }

  .hero-gradient {
    @apply bg-gradient-to-br from-primary-50 to-secondary-50;
  }

  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-secondary-600 
           bg-clip-text text-transparent;
  }

  /* 타이포그래피 유틸리티 */
  .heading-xl {
    @apply text-4xl lg:text-5xl font-bold text-gray-900 leading-tight;
  }

  .heading-lg {
    @apply text-3xl lg:text-4xl font-bold text-gray-900 leading-tight;
  }

  .heading-md {
    @apply text-xl lg:text-2xl font-semibold text-gray-900 leading-tight;
  }

  .body-lg {
    @apply text-lg text-gray-600 leading-relaxed;
  }

  .body-sm {
    @apply text-sm text-gray-500 leading-relaxed;
  }
}

@layer utilities {
  /* 커스텀 유틸리티 */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }

  .animate-slide-up {
    animation: slideUp 0.4s ease-out forwards;
  }

  .text-balance {
    text-wrap: balance;
  }

  /* 접근성 개선 */
  .sr-only {
    position: absolute;
    width: 1px; 
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* 반응형 컨테이너 */
  .container-responsive {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
}

/* 다크 모드 지원 (향후 확장) */
@media (prefers-color-scheme: dark) {
  :root {
    --tw-prose-body: theme(colors.gray.300);
    --tw-prose-headings: theme(colors.gray.100);
  }
}
