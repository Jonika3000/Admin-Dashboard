import { Avatar, Box, Stack, Typography } from '@mui/material';
import { StyledOutlinedInput } from '../../../components/StyledOutlinedInput';
import { useTranslation } from 'react-i18next/index';

const userAvatarUrl =
  'https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg?w=500';

export const FormProfile = () => {
  const { t } = useTranslation();
  return (
    <>
      <Avatar sx={{ width: 100, height: 100, cursor: 'pointer' }} src={userAvatarUrl} />
      <Stack flexDirection="row" gap={3} flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box>
          <Typography variant="h5">{t('Name')}</Typography>
          <StyledOutlinedInput />
        </Box>
        <Box>
          <Typography variant="h5">{t('Email')}</Typography>
          <StyledOutlinedInput />
        </Box>
      </Stack>
      <Stack flexDirection="row" gap={3} flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box>
          <Typography variant="h5">{t('Old password')}</Typography>
          <StyledOutlinedInput />
        </Box>
        <Box>
          <Typography variant="h5">{t('New password')}</Typography>
          <StyledOutlinedInput />
        </Box>
      </Stack>
    </>
  );
};
