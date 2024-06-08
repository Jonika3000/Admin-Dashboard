import { InputAdornment, OutlinedInput, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from '../../../theme.ts';

export const SearchProduct = () => {
  const [value, setValue] = useState<string>('');
  const { t } = useTranslation();
  const theme = useTheme();
  const color = colors(theme.palette.mode);

  return (
    <>
      <OutlinedInput
        id="input-search-header"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder={t('Search product name')}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        inputProps={{ 'aria-label': 'weight', sx: { pl: 0.5 } }}
        sx={{
          width: { md: 150, lg: 250 },
          px: 2,
          border: 0,
          borderRadius: '19px',
          height: '38px',
          backgroundColor: color.primary[500],
        }}
      />
    </>
  );
};
