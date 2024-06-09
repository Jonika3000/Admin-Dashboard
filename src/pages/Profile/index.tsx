import { Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {Formik} from "formik";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <>
      <Stack
        sx={{ width: '100%', height: '100%' }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={5}
        gap={3}
        flexWrap="wrap"
      >
          <Formik initialValues={} onSubmit={}>

          </Formik>
        <Button color="info" size="medium" variant="contained">
          <Typography variant="h6">{t('Save')}</Typography>
        </Button>
      </Stack>
    </>
  );
};

export default Profile;
