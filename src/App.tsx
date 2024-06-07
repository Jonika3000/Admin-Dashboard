import { ThemeModeContext, useMode } from './theme.ts';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

const Dashboard = React.lazy(() => import('./pages/Dashboard/index.tsx'));
const OrdersList = React.lazy(() => import('./pages/OrdersList/index.tsx'));

function App() {
  const { theme, toggleColorMode } = useMode();

  return (
    <ThemeModeContext.Provider value={{ theme, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.Suspense fallback={<>...</>}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Routes>
              <Route path={'/'} element={<AdminLayout />}>
                <Route path={'dashboard'} element={<Dashboard />}></Route>
                <Route path={'orders'} element={<OrdersList />}></Route>
              </Route>
            </Routes>
          </LocalizationProvider>
        </React.Suspense>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
