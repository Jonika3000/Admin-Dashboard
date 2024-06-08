import { Box, Stack, Typography, useTheme } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { colors } from '../../../theme.ts';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

export const StatisticChart = () => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const { t } = useTranslation();
  const [valueDate, setValueDate] = useState<Dayjs>(dayjs());

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 444,
          mt: 3,
          borderRadius: '15px',
          backgroundColor: color.primary['500'],
          padding: 4,
        }}
      >
        <Stack flexDirection="row" justifyContent="space-between" flexWrap="wrap" spacing={1}>
          <Typography fontWeight={500} variant="h3">
            {t('Sales Details')}
          </Typography>
          <DatePicker
            openTo="year"
            views={['year', 'month']}
            label={t('Year and Month')}
            value={valueDate}
            onChange={(newValue) => {
              if (newValue) setValueDate(newValue);
            }}
          />
        </Stack>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          yAxis={[{ data: [1, 1, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          grid={{ vertical: false, horizontal: true }}
          height={300}
        />
      </Box>
    </>
  );
};
