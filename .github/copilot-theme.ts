/**
 * GitHub Copilot Theme Definition
 * 
 * Diese Datei dient als visuelle Referenz für GitHub Copilot und andere Tools,
 * um konsistente Design-Entscheidungen im Projekt zu treffen.
 */

export const colors = {
  // Hauptfarben
  primary: {
    base: '#2563eb', // Blauton
    light: '#3b82f6',
    dark: '#1d4ed8',
    text: '#ffffff'
  },
  
  secondary: {
    base: '#4ade80', // Grünton
    light: '#86efac',
    dark: '#22c55e',
    text: '#111827'
  },
  
  // Zusätzliche Farbpalette
  neutrals: {
    white: '#ffffff',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827',
    black: '#000000',
  },
  
  status: {
    success: '#22c55e',
    warning: '#eab308',
    error: '#ef4444',
    info: '#3b82f6',
  }
};

export const typography = {
  fontFamily: {
    primary: 'Poppins, sans-serif',
    system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  },
  
  fontWeight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },
  
  lineHeight: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  }
};

export const spacing = {
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem',    // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem',     // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem',    // 12px
  3.5: '0.875rem', // 14px
  4: '1rem',       // 16px
  5: '1.25rem',    // 20px
  6: '1.5rem',     // 24px
  7: '1.75rem',    // 28px
  8: '2rem',       // 32px
  9: '2.25rem',    // 36px
  10: '2.5rem',    // 40px
  12: '3rem',      // 48px
  14: '3.5rem',    // 56px
  16: '4rem',      // 64px
  20: '5rem',      // 80px
  24: '6rem',      // 96px
  28: '7rem',      // 112px
  32: '8rem',      // 128px
  36: '9rem',      // 144px
  40: '10rem',     // 160px
  44: '11rem',     // 176px
  48: '12rem',     // 192px
  52: '13rem',     // 208px
  56: '14rem',     // 224px
  60: '15rem',     // 240px
  64: '16rem',     // 256px
  72: '18rem',     // 288px
  80: '20rem',     // 320px
  96: '24rem',     // 384px
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',     // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  '3xl': '1.5rem',    // 24px
  full: '9999px',
};

export const mediaQueries = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

/**
 * Komponententhemen basierend auf shadcn/ui
 */
export const componentThemes = {
  // Button-Varianten
  button: {
    primary: {
      backgroundColor: colors.primary.base,
      textColor: colors.primary.text,
      hoverBackgroundColor: colors.primary.dark,
      focusRingColor: `${colors.primary.light}50` // 50% Transparenz
    },
    secondary: {
      backgroundColor: colors.secondary.base,
      textColor: colors.secondary.text,
      hoverBackgroundColor: colors.secondary.dark,
      focusRingColor: `${colors.secondary.light}50` // 50% Transparenz
    },
    outline: {
      backgroundColor: 'transparent',
      textColor: colors.primary.base,
      borderColor: colors.primary.base,
      hoverBackgroundColor: `${colors.primary.base}10` // 10% Transparenz
    },
    ghost: {
      backgroundColor: 'transparent',
      textColor: colors.neutrals.gray700,
      hoverBackgroundColor: colors.neutrals.gray100,
    }
  },
  
  // Input-Styling
  input: {
    backgroundColor: colors.neutrals.white,
    textColor: colors.neutrals.gray900,
    borderColor: colors.neutrals.gray300,
    placeholderColor: colors.neutrals.gray400,
    focusBorderColor: colors.primary.base,
    errorBorderColor: colors.status.error,
  },
  
  // Card-Styling
  card: {
    backgroundColor: colors.neutrals.white,
    borderColor: colors.neutrals.gray200,
    borderRadius: borderRadius.lg,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
  }
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  mediaQueries,
  componentThemes
};