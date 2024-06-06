import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StatisticCard } from '../../components/Cards/StatisticCard';
import PeopleIcon from '@mui/icons-material/People';
import { colors } from '../../theme.ts';
import { StatisticCards } from '../../data/StatisticCards.ts';
import React from "react";

const Dashboard = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const color = colors(theme.palette.mode);

  return (
    <>
      <Box p={3}>
        <Typography variant="h2" fontWeight={600}>
          {t('dashboard')}
        </Typography>
        <Stack flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="space-between" mt={3}>
          {StatisticCards.map((item, index)=>{
            return <StatisticCard
              name={t(item.name)}
              data={item.data}
              statisticUp={item.statisticUp}
              statisticPercent={item.statisticPercent}
              statisticTime={item.statisticTime}
              icon={React.createElement(item.icon)}
              colorIcon={item.iconColor}
            />
          })}
        </Stack>
      </Box>
    </>
  );
};

export default Dashboard;
