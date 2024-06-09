import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SearchProduct } from './SearchProduct';
import { TableProducts } from './TableProducts';
import { PaginationTable } from '../../components/PaginationTable';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
          <Box>
            <SearchProduct />
            <Button
              color="info"
              size="medium"
              variant="contained"
              sx={{ marginLeft: 2 }}
              onClick={() => {
                navigate('/add-product');
              }}
            >
              <Typography variant="h6">{t('Add product')}</Typography>
            </Button>
          </Box>
        </Stack>
        {/*table*/}
        <TableProducts />
        {/*pagination*/}
        <PaginationTable maxPages={100} nowPages={'1-09'} />
      </Box>
    </>
  );
};

export default Products;
