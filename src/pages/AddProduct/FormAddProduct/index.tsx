import { Box, Grid, Stack, TextField, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { colors } from '../../../theme.ts';
import { useFormikContext } from 'formik';
import { ProductPost } from '../../../utils/types.ts';
import { StyledOutlinedInput } from '../../../components/StyledOutlinedInput';
import { ColorPicker } from '../../../components/ColorPicker';
import { SizePicker } from '../../../components/SizePicker';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';

export const FormAddProduct = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const formik = useFormikContext<ProductPost>();
  const [images, setImages] = useState<File[]>([]);
  const [selectedImage, setSelectedImage] = useState<File|undefined>(formik.values.images?.[0] || undefined);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const selectedImages = Array.from(files);
      setImages((prevImages) => [...prevImages, ...selectedImages]);
      formik.setFieldValue('images', images);
    }
  };
  const colorsChange = (newColors: string[]) => {
    formik.setFieldValue('colors', newColors);
  };

  const sizesChange = (newSizes: string[]) => {
    formik.setFieldValue('sizes', newSizes);
  };

  return (
    <>
      <Grid container spacing={2} mt={3} ml={1} width='100%'>
        <Grid container gap={1} justifyContent={'space-between'}>
          {/*General Information*/}
          <Grid item sx={{ padding: 2, backgroundColor: color.primary[500], borderRadius: 5 }} xs={12} md={7}>
            <Stack flexDirection="column" gap={2}>
              <Typography variant="h4" mb={1}>
                {t('General Information')}
              </Typography>
              <Typography variant="h5">{t('Product Name')}</Typography>
              <StyledOutlinedInput
                value={formik.values.productName}
                onChange={formik.handleChange}
                placeholder={t('Product Name')}
                name="productName"
                inputProps={{ 'aria-label': 'weight', sx: { pl: 0.5 } }}
              />
              <Typography variant="h5">{t('Product Description')}</Typography>
              <TextField
                placeholder={t('Product Description')}
                multiline
                minRows={6}
                sx={{
                  '& .MuiInputBase-input': {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                }}
                maxRows={7}
              />
              <Typography variant="h5">{t('Product Color')}</Typography>
              <ColorPicker onColorChange={colorsChange} />
              <Typography variant="h5">{t('Product Sizes')}</Typography>
              <SizePicker onSizeChange={sizesChange} />
            </Stack>
          </Grid>
          {/*Photos*/}
          <Grid item sx={{ padding: 2, backgroundColor: color.primary[500], borderRadius: 5 }} xs={12} md={4}>
            <Typography variant="h4">{t('Upload Img')}</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',mt: 1}}>
              <Box
                component="img"
                src={
                  selectedImage
                    ? URL.createObjectURL(selectedImage)
                    : undefined
                }
                sx={{ borderRadius: 5, height: 300, width: 300, border: '2px dashed ' + color.primary[0] }}
              />
            </Box>
            <Stack flexDirection="row" gap={1} mt={2} sx={{ width: '100%', overflowX: 'auto' }}>
              {/*add photo button*/}
              <input
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
                id="button-file"
                multiple
                type="file"
              />
              <label htmlFor="button-file">
                <Box
                  sx={{
                    borderRadius: 2,
                    height: 70,
                    width: 70,
                    border: '2px dashed ' + color.primary[0],
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    mb: 1,
                  }}
                >
                  <AddCircleOutlineIcon sx={{ color: color.primary[0] }} />
                </Box>
              </label>
              {images.map((image, index) => (
                <Box
                    onClick={()=>setSelectedImage(image)}
                  key={index}
                  component="img"
                  src={URL.createObjectURL(image)}
                  sx={{ borderRadius: 5, height: 70, width: 70, cursor: 'pointer' }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>...</Box>
        </Grid>
      </Grid>
    </>
  );
};
