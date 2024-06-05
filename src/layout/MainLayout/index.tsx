import { AppBar, Box, Toolbar, useTheme } from '@mui/material';
import { Header } from './Header';
import { useContext, useState } from 'react';
import { ThemeModeContext, colors } from '../../theme.ts';
import { Sidebar } from './Sidebar';

export const MainLayout = () => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const colorMode = useContext(ThemeModeContext);
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <Box display="flex">
        {/*sidebar*/}
        <Sidebar drawerToggle={() => {}} open={open} />
        {/*header*/}
        <Box sx={{ flexGrow: 1 }}>
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
              <Header
                collapseClick={() => {
                  setOpen(!open);
                }}
              />
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
    </>
  );
};
