import { Box, InputAdornment, OutlinedInput, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { colors } from '../../../../theme.ts';
import { useTranslation } from 'react-i18next';

interface SearchHeaderProps {
  value: string;
  setValue: (value: string) => void;
}

export const SearchHeader = ({ value, setValue }: SearchHeaderProps) => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const { t } = useTranslation();

  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <OutlinedInput
          id="input-search-header"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          placeholder={t('search')}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          aria-describedby="search-helper-text"
          inputProps={{ 'aria-label': 'weight', sx: { pl: 0.5 } }}
          sx={{
            width: { md: 250, lg: 434 },
            ml: 5,
            px: 2,
            borderRadius: '19px',
            height: '38px',
            backgroundColor: color.primary[400],
          }}
        />
      </Box>
    </>
  );
};
