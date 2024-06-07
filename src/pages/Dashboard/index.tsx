import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StatisticCard } from '../../components/Cards/StatisticCard';
import { colors } from '../../theme.ts';
import { StatisticCards } from '../../data/StatisticCards.ts';
import React from 'react';
import { StatisticChart } from '../../components/Charts/StatisticChart';

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
                {/*Statistic cards*/}
                <Grid container spacing={2} mt={2} justifyContent="space-between">
                    {StatisticCards.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center" key={index}>
                            <StatisticCard
                                name={t(item.name)}
                                data={item.data}
                                statisticUp={item.statisticUp}
                                statisticPercent={item.statisticPercent}
                                statisticTime={item.statisticTime}
                                icon={React.createElement(item.icon)}
                                colorIcon={item.iconColor}
                            />
                        </Grid>
                    ))}
                </Grid>
                {/*StatisticChart*/}
                <StatisticChart />
            </Box>
        </>
    );
};

export default Dashboard;
