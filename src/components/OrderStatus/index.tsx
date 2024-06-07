import { Status } from '../../utils/types.ts';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const getStatusColor = (status: Status) => {
  switch (status) {
    case Status.Completed:
      return '#00B69B';
    case Status.Processing:
      return '#6226EF';
    case Status.Rejected:
      return '#EF3826';
    default:
      return 'black';
  }
};

export const OrderStatus = ({ status }: { status: Status }) => {
  const color = getStatusColor(status);
  const { t } = useTranslation();

  return (
    <>
      <Box width={'100%'} display="flex" justifyContent="center" alignItems="center">
        <Box
          sx={{
            width: 93,
            backgroundColor: color,
            borderRadius: 4.5,
            height: 27,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography>{t(status)}</Typography>
        </Box>
      </Box>
    </>
  );
};
