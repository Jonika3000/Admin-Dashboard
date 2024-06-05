import { AppBar, Toolbar, useTheme } from '@mui/material';
import { Header } from './Header';
import { useContext } from 'react';
import { ThemeModeContext, colors } from '../../theme.ts';

export const MainLayout = () => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const colorMode = useContext(ThemeModeContext);

  return (
    <>
      {/*header*/}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          backgroundColor: color.primary[500],
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
    </>
  );
};
