import { Box, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SearchProduct } from './SearchProduct';
import { TableProducts } from './TableProducts';

const Products = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box p={3}>
        {/*header and search*/}
        <Stack
          spacing={2}
          mt={2}
          justifyContent="space-between"
          flexWrap="wrap"
          flexDirection="row"
          alignItems="center"
        >
          <Typography variant="h2" fontWeight={600}>
            {t('Product Stock')}
          </Typography>
          <SearchProduct />
        </Stack>
        <TableProducts />
      </Box>
    </>
  );
};

export default Products;
