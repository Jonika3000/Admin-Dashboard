import { ThemeModeContext, useMode } from './theme.ts';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from './layout/AdminLayout';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Loading } from './pages/Loading';
import { ErrorBoundary } from 'react-error-boundary';
import { Error } from './pages/Error';
import {NotFound} from "./pages/NotFound";

const Dashboard = React.lazy(() => import('./pages/Dashboard/index.tsx'));
const OrdersList = React.lazy(() => import('./pages/OrdersList/index.tsx'));
const Products = React.lazy(() => import('./pages/Products/index.tsx'));
const AddProduct = React.lazy(() => import('./pages/AddProduct/index.tsx'));
const TeamPage = React.lazy(() => import('./pages/Team/index.tsx'));
const Profile = React.lazy(() => import('./pages/Profile/index.tsx'));

function App() {
  const { theme, toggleColorMode } = useMode();

  return (
    <ErrorBoundary fallback={<Error />}>
      <ThemeModeContext.Provider value={{ theme, toggleColorMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <React.Suspense fallback={<Loading />}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Routes>
                <Route path={'/'} element={<AdminLayout />}>
                  <Route path={'dashboard'} element={<Dashboard />}/>
                  <Route path={'orders'} element={<OrdersList />}/>
                  <Route path={'products'} element={<Products />}/>
                  <Route path={'add-product'} element={<AddProduct />}/>
                  <Route path={'team'} element={<TeamPage />}/>
                  <Route path={'profile'} element={<Profile />}/>
                </Route>
                <Route path={'*'} element={<NotFound/>}/>
              </Routes>
            </LocalizationProvider>
          </React.Suspense>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
