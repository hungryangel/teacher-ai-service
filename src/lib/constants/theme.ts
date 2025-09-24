export const THEME_COLORS = {
  primary: {
    50: '#F6FBFF',
    100: '#EAF6FF',
    200: '#D4EBFE', 
    300: '#B5DCFD',
    400: '#7EC1FA',
    500: '#55A9F3',
    600: '#3D8DD5',
    700: '#2F6FA8',
    800: '#295C88',
    900: '#234B6E'
  },
  secondary: {
    50: '#E8FBF4',
    100: '#D1F7E9',
    200: '#BDF3E0',
    300: '#A3EFDC',
    400: '#7EE8CD', 
    500: '#64D7B0',
    600: '#4FC596',
    700: '#3FB37C',
    800: '#329062',
    900: '#286D4A'
  }
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem', 
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem'
} as const;
