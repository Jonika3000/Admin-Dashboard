import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TableOrders } from './TableOrders';
import { FiltersOrders } from './FiltersOrders';
import { PaginationTable } from '../../components/PaginationTable';

const OrdersList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box p={3}>
        <Typography variant="h2" fontWeight={600}>
          {t('Orders List')}
        </Typography>
        {/*filters*/}
        <FiltersOrders />
        {/*orders table*/}
        <TableOrders />
        {/*bottom pagination*/}
        <PaginationTable maxPages={100} nowPages={'1-09'} />
      </Box>
    </>
  );
};

export default OrdersList;
