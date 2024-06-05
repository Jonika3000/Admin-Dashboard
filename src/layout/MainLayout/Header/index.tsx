import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Box, Button, useTheme } from '@mui/material';
import { SearchHeader } from './SearchHeader';
import { useState } from 'react';
import { ProfileHeader } from './ProfileHeader';
import { LanguageSelector } from './LanguageSelector';
import NotificationsIcon from '@mui/icons-material/Notifications';

export const Header = ({ collapseClick }: { collapseClick: () => void }) => {
  const theme = useTheme();
  const [value, setValue] = useState<string>('');

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
          <MenuIcon sx={{ color: 'white' }} />
        </Button>
      </Box>
      {/*search*/}
      <SearchHeader value={value} setValue={setValue} />
      <Box sx={{ flexGrow: 1 }} />
      {/*notification*/}
      <Badge badgeContent={2} color={'error'} sx={{ margin: '0px 30px', cursor: 'pointer' }}>
        <NotificationsIcon color="action" />
      </Badge>
      {/*language*/}
      <LanguageSelector />
      {/*profile*/}
      <ProfileHeader />
    </>
  );
};
