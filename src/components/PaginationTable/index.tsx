import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { colors } from '../../theme.ts';
import { useTranslation } from 'react-i18next';

export const PaginationTable = ({ maxPages, nowPages }: { maxPages: number; nowPages: string }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const color = colors(theme.palette.mode);

  return (
    <>
      <Stack flexDirection="row" justifyContent="space-between" mt={3} alignItems="center">
        <Typography variant="h6" sx={{ color: color.primary[300] }}>
          {t('Showing')} {nowPages} {t('of')} {maxPages}
        </Typography>
        <Box>
          <Button
            sx={{
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              borderRight: '1px solid #979797',
              backgroundColor: color.primary['400'],
              minWidth: 30,
              height: 30,
            }}
          >
            <KeyboardArrowLeftIcon sx={{ color: color.primary[0] }} />
          </Button>
          <Button
            sx={{
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: color.primary['400'],
              minWidth: 30,
              height: 30,
              borderRight: 0,
            }}
          >
            <KeyboardArrowRightIcon sx={{ color: color.primary[0] }} />
          </Button>
        </Box>
      </Stack>
    </>
  );
};
