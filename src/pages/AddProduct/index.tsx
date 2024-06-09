import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { defaultData } from './FormAddProduct/default-data.ts';
import { ProductPost } from '../../utils/types.ts';
import { FormAddProduct } from './FormAddProduct';
import { validationSchema } from './FormAddProduct/validation-schema.ts';

const AddProduct = () => {
  const { t } = useTranslation();

  const handleSubmit = (data: ProductPost) => {
    console.log('product data', data);
  };

  return (
    <>
      <Box p={3}>
        {/*header*/}

        {/*add product form*/}
        <Box>
          <Formik initialValues={defaultData} onSubmit={handleSubmit} validationSchema={validationSchema(t)}>
            <Form>
              <Stack spacing={2} justifyContent="space-between" flexWrap="wrap" flexDirection="row" alignItems="center">
                <Typography variant="h2" fontWeight={600}>
                  {t('Add new product')}
                </Typography>
                <Button color="info" size="medium" variant="contained" type="submit" sx={{ marginLeft: 2 }}>
                  <Typography variant="h6">{t('Add product')}</Typography>
                </Button>
              </Stack>
              <FormAddProduct />
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default AddProduct;
