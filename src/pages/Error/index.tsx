import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Error = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h1">{t('Something went wrong')}</Typography>
        <Button
          color="info"
          variant="contained"
          onClick={() => {
            navigate('/');
          }}
        >
          <Typography variant="h3">{t('Back home')}</Typography>
        </Button>
      </Box>
    </>
  );
};
