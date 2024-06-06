import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Box, Button, ButtonBase, useTheme } from '@mui/material';
import { SearchHeader } from './SearchHeader';
import { useContext, useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { LanguageSelector } from './LanguageSelector';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { colors, ThemeModeContext } from "../../../theme.ts";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const Header = ({ collapseClick }: { collapseClick: () => void }) => {
  const [value, setValue] = useState<string>('');
  const colorMode = useContext(ThemeModeContext);
  const theme = useTheme();
  const color = colors(theme.palette.mode);

  const handleChangeTheme = () => {
    colorMode.toggleColorMode();
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          [theme.breakpoints.down('md')]: {
            width: 'auto',
          },
        }}
      >
        <Button sx={{ overflow: 'hidden' }} onClick={collapseClick}>
          <MenuIcon sx={{color: color.primary[0]}} />
        </Button>
      </Box>
      {/*search*/}
      <SearchHeader value={value} setValue={setValue} />
      <Box sx={{ flexGrow: 1 }} />
      {/*notification*/}
      <ButtonBase onClick={handleChangeTheme}>
        {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
      </ButtonBase>
      <Badge badgeContent={2} color={'error'} sx={{ margin: '0px 30px', cursor: 'pointer' }}>
        <NotificationsIcon sx={{color: color.primary[0]}} />
      </Badge>
      {/*language*/}
      <LanguageSelector />
      {/*profile*/}
      <ProfileHeader />
    </>
  );
};
