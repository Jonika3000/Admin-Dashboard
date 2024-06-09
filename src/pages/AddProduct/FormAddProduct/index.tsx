import {
  Box,
  Grid,
  NativeSelect,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { colors } from '../../../theme.ts';
import {ErrorMessage, useFormikContext} from 'formik';
import { ProductPost } from '../../../utils/types.ts';
import { StyledOutlinedInput } from '../../../components/StyledOutlinedInput';
import { ColorPicker } from '../../../components/ColorPicker';
import { SizePicker } from '../../../components/SizePicker';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React, { useState } from 'react';
import {CategoryData} from "../../../data/CategoryData.ts";

export const FormAddProduct = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const formik = useFormikContext<ProductPost>();
  const [images, setImages] = useState<File[]>([]);
  const [selectedImage, setSelectedImage] = useState<File | undefined>(formik.values.images?.[0] || undefined);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const selectedImages = Array.from(files);
      setImages((prevImages) => {
        const updatedImages = [...prevImages, ...selectedImages];
        formik.setFieldValue('images', updatedImages);
        return updatedImages;
      });
    }
  };

  const colorsChange = (newColors: string[]) => {
    formik.setFieldValue('colors', newColors);
  };

  const sizesChange = (newSizes: string[]) => {
    formik.setFieldValue('sizes', newSizes);
  };

  const handleCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    formik.setFieldValue('category',event.target.value);
  };

  return (
    <>
      <Grid container spacing={2} mt={3} ml={1} width="100%" justifyContent={'space-between'}>
        <Grid container gap={1} justifyContent={'space-between'}>
          {/*General Information*/}
          <Grid item sx={{ padding: 2, backgroundColor: color.primary[500], borderRadius: 5 }} xs={12}  sm={5} md={7}>
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
              <ErrorMessage
                  name="productName"
                  component="label"
                  className="error-message"
              />
              <Typography variant="h5">{t('Product Description')}</Typography>
              <TextField
                placeholder={t('Product Description')}
                multiline
                name={'description'}
                onChange={formik.handleChange}
                minRows={6}
                sx={{
                  '& .MuiInputBase-input': {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                }}
                maxRows={7}
              />
              <ErrorMessage
                  name="description"
                  component="label"
                  className="error-message"
              />
              <Typography variant="h5">{t('Product Color')}</Typography>
              <ColorPicker onColorChange={colorsChange} />
              <ErrorMessage
                  name="colors"
                  component="label"
                  className="error-message"
              />
              <Typography variant="h5">{t('Product Sizes')}</Typography>
              <SizePicker onSizeChange={sizesChange} />
              <ErrorMessage
                  name="sizes"
                  component="label"
                  className="error-message"
              />
            </Stack>
          </Grid>
          {/*Photos*/}
          <Grid item sx={{ padding: 2, backgroundColor: color.primary[500], borderRadius: 5 }} xs={12}  sm={5} md={4}>
            <Typography variant="h4">{t('Upload Img')}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
              <Box
                component="img"
                src={selectedImage ? URL.createObjectURL(selectedImage) : undefined}
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
                  onClick={() => setSelectedImage(image)}
                  key={index}
                  component="img"
                  src={URL.createObjectURL(image)}
                  sx={{ borderRadius: 5, height: 70, width: 70, cursor: 'pointer' }}
                />
              ))}
            </Stack>
            <ErrorMessage
                name="images"
                component="label"
                className="error-message"
            />
          </Grid>
        </Grid>
        {/*Pricing And Stock*/}
        <Grid item xs={12} md={7} mt={1} sx={{ padding: 2, backgroundColor: color.primary[500], borderRadius: 5, flexDirection: 'column', gap: 1 }}>
          <Stack
          >
            <Typography variant="h4" mb={1}>
              {t('Pricing And Stock')}
            </Typography>
            <Typography variant="h5">{t('Base Pricing')}</Typography>
            <OutlinedInput
              name="price"
              sx={{ height: '38px', borderRadius: 19, backgroundColor: colors(theme.palette.mode).primary[400] }}
              onChange={formik.handleChange}
            />
            <ErrorMessage
                name="price"
                component="label"
                className="error-message"
            />
            <Typography variant="h5">{t('Stock')}</Typography>
            <OutlinedInput
              name="count"
              sx={{ height: '38px', borderRadius: 19, backgroundColor: colors(theme.palette.mode).primary[400] }}
              onChange={formik.handleChange}
            />
            <ErrorMessage
                name="count"
                component="label"
                className="error-message"
            />
            <Typography variant="h5">{t('Discount')}</Typography>
            <OutlinedInput
              name="discount"
              sx={{ height: '38px', borderRadius: 19, backgroundColor: colors(theme.palette.mode).primary[400] }}
              onChange={formik.handleChange}
            />
            <ErrorMessage
                name="discount"
                component="label"
                className="error-message"
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4} mt={1} sx={{ padding: 2, backgroundColor: color.primary[500], borderRadius: 5, flexDirection: 'column', gap: 1 }}>
          <Typography variant="h4" mb={1}>
            {t('Category')}
          </Typography>
          <NativeSelect value={formik.values.category} onChange={handleCategoryChange} sx={{width: '100%'}}>
            {CategoryData.map((category, index)=> {
             return <option value={category} key={index}>{category}</option>
            })}
          </NativeSelect>
          <ErrorMessage
              name="category"
              component="label"
              className="error-message"
          />
        </Grid>
      </Grid>
    </>
  );
};
