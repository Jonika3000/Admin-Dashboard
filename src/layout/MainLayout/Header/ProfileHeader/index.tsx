import {
  Avatar,
  Box,
  ClickAwayListener,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRef, useState } from 'react';
import { colors } from '../../../../theme.ts';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslation } from 'react-i18next';
import PersonIcon from '@mui/icons-material/Person';

const userAvatarUrl =
  'https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg?w=500';

export const ProfileHeader = () => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const { t } = useTranslation();
  const handleClickAway = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Stack
        gap={1}
        flexDirection="row"
        alignItems="center"
        ref={anchorRef}
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Avatar alt="avatar" src={userAvatarUrl} />
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          <Typography variant="h5">Admin Admin</Typography>
          <Typography variant="h6">admin</Typography>
        </Box>
        <ArrowDropDownIcon sx={{color: color.primary[0]}} />
      </Stack>
      <Popper
        placement="bottom-end"
        open={open}
        role={undefined}
        disablePortal
        anchorEl={anchorRef.current}
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 5],
              },
            },
          ],
        }}
      >
        <Paper sx={{ backgroundColor: color.primary[600] }}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <List>
              <ListItemButton sx={{ borderRadius: '10px' }}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="h6">{t('profile')}</Typography>} />
              </ListItemButton>
              <ListItemButton sx={{ borderRadius: '10px' }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={<Typography variant="h6">{t('logout')}</Typography>} />
              </ListItemButton>
            </List>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};
