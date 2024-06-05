import { ThemeModeContext, useMode } from './theme.ts';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";

function App() {
  const { theme, toggleColorMode } = useMode();

  return (
    <ThemeModeContext.Provider value={{ theme, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={'/'} element={<MainLayout/>}></Route>
        </Routes>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
