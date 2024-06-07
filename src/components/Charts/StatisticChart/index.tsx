import {Box, NativeSelect, Stack, Typography, useTheme} from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { colors } from '../../../theme.ts';
import { useTranslation } from 'react-i18next';
import {useState} from "react";

export const StatisticChart = () => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const { t } = useTranslation();
  const [month, setMonth] = useState();

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
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography fontWeight={500} variant="h3">
            {t('Sales Details')}
          </Typography>
          <NativeSelect
            id="demo-customized-select-native"
            // value={age}
            // onChange={handleChange}
            // input={<BootstrapInput />}
          >
            <option aria-label="None" value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
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
          width={500}
          height={300}
        />
      </Box>
    </>
  );
};
