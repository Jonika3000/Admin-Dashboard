import { Box, Drawer, List, Typography, useMediaQuery, useTheme } from '@mui/material';
import { MenuList } from './MenuList';
import { colors } from '../../../theme.ts';
import { useNavigate } from 'react-router-dom';

export const Sidebar = ({ drawerToggle, open }: { drawerToggle: () => void; open: boolean }) => {
  const theme = useTheme();
  const matchMd = useMediaQuery(theme.breakpoints.up('md'));
  const container = document.body;
  const color = colors(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <>
      <Box component="nav" sx={{ width: open ? 270 : '0' }} aria-label="mailbox folders">
        <Drawer
          container={container}
          variant={matchMd ? 'persistent' : 'temporary'}
          anchor="left"
          open={open}
          onClose={drawerToggle}
          sx={{
            '& .MuiDrawer-paper': {
              width: 240,
              background: color.primary[500],
              color: theme.palette.text.primary,
              borderRight: 'none',
            },
          }}
          ModalProps={{ keepMounted: true }}
        >
          <Typography
            onClick={() => {
              navigate('/dashboard');
            }}
            variant={'h1'}
            fontFamily={'Lily Script One'}
            sx={{ cursor: 'pointer' }}
            textAlign={'center'}
            mb={2}
          >
            J
          </Typography>
          <List>
            <MenuList />
          </List>
        </Drawer>
      </Box>
    </>
  );
};
