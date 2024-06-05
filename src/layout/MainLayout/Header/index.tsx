import MenuIcon from '@mui/icons-material/Menu';
import { Box, ButtonBase, useTheme } from '@mui/material';
import { SearchHeader } from './SearchHeader';
import { useState } from 'react';

export const Header = () => {
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
        <ButtonBase sx={{ overflow: 'hidden' }}>
          <MenuIcon />
        </ButtonBase>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      {/*search*/}
      <SearchHeader value={value} setValue={setValue} />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />
    </>
  );
};
