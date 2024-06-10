import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { StyledOutlinedInput } from '../../../components/StyledOutlinedInput';
import { useTranslation } from 'react-i18next';
import { ErrorMessage, useFormikContext } from 'formik';
import { ProfilePost } from '../../../utils/types.ts';
import React, { useState } from 'react';

const userAvatarUrl =
  'https://cdn.britannica.com/53/252953-050-30D00122/Mickey-Mouse-Steamboat-Willie-Walt-Disney-Public-Domain.jpg?w=500';

export const FormProfile = () => {
  const { t } = useTranslation();
  const formik = useFormikContext<ProfilePost>();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      formik.setFieldValue('photo', file);
    }
  };

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
        <input accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} id="button-file" type="file" />
        <label htmlFor="button-file">
          <Avatar
            sx={{ width: 100, height: 100, cursor: 'pointer' }}
            src={selectedImage ? URL.createObjectURL(selectedImage) : userAvatarUrl}
          />
        </label>
        <Stack flexDirection="row" gap={3} flexWrap="wrap" justifyContent="center" alignItems="center">
          <Box>
            <Typography variant="h5">{t('Name')}</Typography>
            <StyledOutlinedInput name="name" onChange={formik.handleChange} />
          </Box>
          <ErrorMessage name="name" component="label" className="error-message" />
          <Box>
            <Typography variant="h5">{t('Email')}</Typography>
            <StyledOutlinedInput name="email" onChange={formik.handleChange} />
          </Box>
          <ErrorMessage name="email" component="label" className="error-message" />
        </Stack>
        <Stack flexDirection="row" gap={3} flexWrap="wrap" justifyContent="center" alignItems="center">
          <Box>
            <Typography variant="h5">{t('Old password')}</Typography>
            <StyledOutlinedInput name="currentPassword" onChange={formik.handleChange} />
          </Box>
          <ErrorMessage name="currentPassword" component="label" className="error-message" />
          <Box>
            <Typography variant="h5">{t('New password')}</Typography>
            <StyledOutlinedInput name="newPassword" onChange={formik.handleChange} />
          </Box>
          <ErrorMessage name="newPassword" component="label" className="error-message" />
        </Stack>
        <Button color="info" type="submit" size="medium" variant="contained">
          <Typography variant="h6">{t('Save')}</Typography>
        </Button>
      </Stack>
    </>
  );
};
