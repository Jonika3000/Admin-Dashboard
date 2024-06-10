import { Box, Button, Modal, Stack, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styleModal } from '../StyledModal';

export const ModalDeleteConfirm = ({ open, setClose }: { open: boolean; setClose: () => void }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Modal open={open} onClose={setClose}>
        <Box sx={styleModal(theme)}>
          <Stack flexDirection="column" gap={2}>
            <Typography variant="h3">{t('Delete')}</Typography>
            <Typography>{t('Are you sure to delete this?')}</Typography>
            <Button variant="contained" sx={{ backgroundColor: '#A52A2A' }} onClick={setClose}>
              <Typography variant="h5">{t('Delete')}</Typography>
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
