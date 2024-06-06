import { Box, Stack, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Header } from './Header';
import { useState } from 'react';
import { colors } from '../../theme.ts';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const matchMd = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState<boolean>(matchMd);

  return (
    <>
      <Box display="flex">
        {/*sidebar*/}
        <Sidebar
          drawerToggle={() => {
            setOpen(false);
          }}
          open={open}
        />
        <Stack flexDirection="column" sx={{ flexGrow: 1 }}>
          {/*header*/}
          <Box sx={{ background: color.primary[500] }}>
            <Toolbar>
              <Header
                collapseClick={() => {
                  setOpen(!open);
                }}
              />
            </Toolbar>
          </Box>
          {/*outlet*/}
          <Box sx={{ width: '100%', height: '100%' }}>
            <Outlet />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default MainLayout;
