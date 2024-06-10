import { Box, Button, Grid, Modal, NativeSelect, Stack, Typography, useTheme } from '@mui/material';
import { Order, Status } from '../../../utils/types.ts';
import { colors } from '../../../theme.ts';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { styleModal } from '../../../components/StyledModal';

export const ModalOrderInfo = ({
  open,
  handleClose,
  order,
}: {
  open: boolean;
  handleClose: () => void;
  order: Order;
}) => {
  const theme = useTheme();
  const [status, setStatus] = useState<Status>(order.status);
  const { t } = useTranslation();

  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as Status);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-order-info"
        aria-describedby="modal-modal-order-info"
      >
        <Box sx={styleModal(theme)}>
          <Stack flexDirection="column" alignItems="flex-start" gap={1}>
            <Typography variant="h4" fontWeight={600}>
              ID
            </Typography>
            <Typography variant="h6">{order.id}</Typography>
            <Typography variant="h4" fontWeight={600}>
              {t('Status')}
            </Typography>
            <NativeSelect value={status} onChange={handleStatusChange}>
              <option value={Status.Completed}>{t(Status.Completed)}</option>
              <option value={Status.Processing}>{t(Status.Processing)}</option>
              <option value={Status.Rejected}>{t(Status.Rejected)}</option>
            </NativeSelect>
            <Typography variant="h4" fontWeight={600}>
              {t('Name')}
            </Typography>
            <Typography variant="h6">{order.name}</Typography>
            <Typography variant="h4" fontWeight={600}>
              {t('Address')}
            </Typography>
            <Typography variant="h6">{order.address}</Typography>
            <Typography variant="h4" fontWeight={600}>
              {t('Date')}
            </Typography>
            <Typography variant="h6">{moment(order.date).format('YYYY-MM-DD')}</Typography>
            <Typography variant="h4" fontWeight={600}>
              {t('Cost')}
            </Typography>
            <Typography variant="h6">${order.cost.toFixed(2)}</Typography>
            <Typography variant="h4" fontWeight={600}>
              {t('Zip Code')}
            </Typography>
            <Typography variant="h6">{order.zipCode}</Typography>
            <Typography variant="h4" fontWeight={600}>
              {t('Country')}
            </Typography>
            <Typography variant="h6">{order.country}</Typography>
            <Typography variant="h4" fontWeight={600}>
              {t('Number')}
            </Typography>
            <Typography variant="h6">{order.number}</Typography>
          </Stack>
          <Grid container justifyContent="flex-end" mt={2}>
            <Button color="info" size="medium" variant="contained">
              <Typography variant="h6">{t('Save')}</Typography>
            </Button>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};
