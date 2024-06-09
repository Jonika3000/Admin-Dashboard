import { Box, Grid, InputAdornment, OutlinedInput, Stack, TextField, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { colors } from '../../../theme.ts';
import { useFormikContext } from 'formik';
import { Product } from '../../../utils/types.ts';
import { StyledOutlinedInput } from '../../../components/StyledOutlinedInput';
import { ColorPicker } from '../../../components/ColorPicker';
import { SizePicker } from '../../../components/SizePicker';

export const FormAddProduct = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const formik = useFormikContext<Product>();

  const colorsChange = (newColors: string[]) => {
    formik.setFieldValue('colors', newColors);
  };

  const sizesChange = (newSizes: string[]) => {
    formik.setFieldValue('sizes', newSizes);
  };

  return (
    <>
      <Grid container spacing={2} mt={3} ml={1}>
        <Grid container direction="column" spacing={2}>
          <Grid item sx={{ padding: 2, backgroundColor: color.primary[500], borderRadius: 5 }} xs={12} md={6}>
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
          <Grid item xs={12} md={6}>
            ...
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>...</Box>
        </Grid>
      </Grid>
    </>
  );
};
