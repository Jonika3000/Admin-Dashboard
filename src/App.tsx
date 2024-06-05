import { ThemeModeContext, useMode } from './theme.ts';
import { ThemeProvider } from '@mui/material';

function App() {
  const { theme, toggleColorMode } = useMode();

  return (
    <ThemeModeContext.Provider value={{ theme, toggleColorMode }}>
      <ThemeProvider theme={theme}>

      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
