import {
  Box,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { ListOrdersData } from '../../../data/ListOrders.ts';
import moment from 'moment';
import { OrderStatus } from '../../../components/OrderStatus';
import { colors } from '../../../theme.ts';
import { useTranslation } from 'react-i18next';
import { ModalOrderInfo } from '../ModalOrderInfo';
import { useState } from 'react';
import { Order } from '../../../utils/types.ts';

const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 700,
  border: 0,
}));

export const TableOrders = () => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>(ListOrdersData[0]);

  const handleRowClick = (order: Order) => {
    setSelectedOrder(order);
    setOpenModal(true);
  };

  return (
    <>
      <Box mt={3}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: color.primary['400'], borderRadius: 15 }}>
              <TableRow>
                <StyledTableCellHead align={'center'}>ID</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('TableNAME')}</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('TableADDRESS')}</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('TableDATE')}</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('TableSTATUS')}</StyledTableCellHead>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: color.primary['500'], borderRadius: 15 }}>
              {ListOrdersData.map((row, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 76, cursor: 'pointer' }}
                    onClick={() => {
                      handleRowClick(row);
                    }}
                  >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.address}</TableCell>
                    <TableCell align="center">{moment(row.date).format('YYYY-MM-DD')}</TableCell>
                    <TableCell>
                      <OrderStatus status={row.status} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/*modal order info*/}
      {openModal && (
        <ModalOrderInfo
          open={openModal}
          handleClose={() => {
            setOpenModal(false);
          }}
          order={selectedOrder}
        />
      )}
    </>
  );
};
