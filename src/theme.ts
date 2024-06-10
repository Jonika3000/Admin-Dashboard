import { createTheme, PaletteMode, Theme } from '@mui/material';
import { createContext, useMemo, useState } from 'react';

export const colors = (mode: PaletteMode) => {
  return mode === 'dark'
    ? {
        primary: {
          0: '#F4F4F4',
          50: '#8697B2',
          100: '#7A8CAA',
          200: '#627799',
          300: '#526480',
          400: '#425067',
          500: '#323D4E',
          600: '#1B2431',
        },
        greenAccent: {
          50: '#E2F9ED',
          100: '#D1F5E3',
          200: '#AFEECE',
          300: '#8DE7BA',
          400: '#6CE0A5',
          500: '#4AD991',
          600: '#29C275',
          700: '#1F9459',
          800: '#15653D',
          900: '#0C3721',
          950: '#072013',
        },
        orangeAccent: {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFE9E0',
          300: '#FFCBB8',
          400: '#FFAE8F',
          500: '#FF9066',
          600: '#FF672E',
          700: '#F54300',
          800: '#BD3400',
          900: '#852400',
          950: '#691D00',
        },
        yellowAccent: {
          50: '#FFFCF4',
          100: '#FFF6DF',
          200: '#FFE9B7',
          300: '#FEDD8E',
          400: '#FED166',
          500: '#FEC53D',
          600: '#FEB405',
          700: '#CA8E01',
          800: '#926701',
          900: '#5A4000',
          950: '#3E2C00',
        },
        blueAccent: {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FAFAFF',
          300: '#D2D2FF',
          400: '#AAA9FF',
          500: '#8280FF',
          600: '#4B48FF',
          700: '#1410FF',
          800: '#0300D7',
          900: '#02009F',
          950: '#020083',
        },
      }
    : {
        primary: {
          50: '#F5F6FA',
          100: '#E9E9E9',
          200: '#D5D5D5',
          300: '#B9B9B9',
          400: '#F4F4F4',
          500: '#cacdde',
          600: '#F5F6FA',
          700: '#B9B9B9',
          800: '#2D2D2D',
          900: '#111111',
          950: '#030303',
        },
        greenAccent: {
          50: '#E2F9ED',
          100: '#D1F5E3',
          200: '#AFEECE',
          300: '#8DE7BA',
          400: '#6CE0A5',
          500: '#4AD991',
          600: '#29C275',
          700: '#1F9459',
          800: '#15653D',
          900: '#0C3721',
          950: '#072013',
        },
        orangeAccent: {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFE9E0',
          300: '#FFCBB8',
          400: '#FFAE8F',
          500: '#FF9066',
          600: '#FF672E',
          700: '#F54300',
          800: '#BD3400',
          900: '#852400',
          950: '#691D00',
        },
        yellowAccent: {
          50: '#FFFCF4',
          100: '#FFF6DF',
          200: '#FFE9B7',
          300: '#FEDD8E',
          400: '#FED166',
          500: '#FEC53D',
          600: '#FEB405',
          700: '#CA8E01',
          800: '#926701',
          900: '#5A4000',
          950: '#3E2C00',
        },
        blueAccent: {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FAFAFF',
          300: '#D2D2FF',
          400: '#AAA9FF',
          500: '#8280FF',
          600: '#4B48FF',
          700: '#1410FF',
          800: '#0300D7',
          900: '#02009F',
          950: '#020083',
        },
      };
};

export const themeSettings = (mode: PaletteMode) => {
  const palette = colors(mode);
  const textColor = mode === 'dark' ? 'white' : 'black';

  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: palette.primary[500],
            },
            secondary: {
              main: palette.greenAccent[500],
            },
            neutral: {
              dark: palette.primary[700],
              main: palette.primary[500],
              light: palette.primary[100],
            },
            background: {
              default: palette.primary[600],
            },
            icons: {
              default: palette.primary[0],
            },
          }
        : {
            primary: {
              main: palette.primary[500],
            },
            secondary: {
              main: palette.greenAccent[500],
            },
            neutral: {
              dark: palette.primary[700],
              main: palette.primary[500],
              light: palette.primary[100],
            },
            background: {
              default: palette.primary[50],
            },
            icons: {
              default: palette.primary[950],
            },
          }),
    },
    typography: {
      fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
        color: textColor,
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
        color: textColor,
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
        fontSize: 24,
        color: textColor,
      },
      h4: {
        fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
        fontSize: 20,
        color: textColor,
      },
      h5: {
        fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
        fontSize: 16,
        color: textColor,
      },
      h6: {
        fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
        fontSize: 14,
        color: textColor,
      },
    },
  };
};

export const ThemeModeContext = createContext<{
  theme: Theme;
  toggleColorMode: () => void;
}>({
  theme: createTheme(themeSettings('dark')),
  toggleColorMode: () => {},
});

export const useMode = () => {
  const themeMode = localStorage.getItem('theme') as PaletteMode | null;
  const [mode, setMode] = useState<PaletteMode>(themeMode ?? 'dark');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    localStorage.setItem('theme', mode === 'light' ? 'dark' : 'light');
  };
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, toggleColorMode };
};
