import { Avatar, Card, CardContent, Stack, Typography, useTheme } from '@mui/material';
import { colors } from '../../../theme.ts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useTranslation } from 'react-i18next';

export const StatisticCard = ({
  name,
  data,
  colorIcon,
  icon,
  statisticUp,
  statisticPercent,
  statisticTime,
}: {
  name: string;
  data: string;
  colorIcon: string;
  icon: React.ReactNode;
  statisticUp: boolean;
  statisticPercent: string;
  statisticTime: string;
}) => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const { t } = useTranslation();

  return (
    <>
      <Card
        sx={{
          width: 262,
          height: 161,
          borderRadius: '15px',
          backgroundColor: color.primary['500'],
          padding: 2,
        }}
      >
        <CardContent>
          {/*data*/}
          <Stack direction="row" justifyContent={'space-between'}>
            <Stack direction="column" spacing={1}>
              <Typography variant="h5">{name}</Typography>
              <Typography variant="h2" fontWeight={600}>
                {data}
              </Typography>
            </Stack>
            {/*icon*/}
            <Avatar
              variant="rounded"
              sx={{
                borderRadius: 5,
                width: 50,
                height: 50,
                backgroundColor: colorIcon,
                color: '#fff',
              }}
            >
              {icon}
            </Avatar>
          </Stack>
          {/*statistic*/}
          <Stack flexDirection="row" gap={0.5} mt={3}>
            {statisticUp ? (
              <TrendingUpIcon sx={{ color: '#00B69B' }} />
            ) : (
              <TrendingDownIcon sx={{ color: '#F93C65' }} />
            )}
            <Typography sx={{ color: statisticUp ? '#00B69B' : '#F93C65' }}>{statisticPercent}</Typography>
            <Typography fontWeight={600}>{t(statisticTime)}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
