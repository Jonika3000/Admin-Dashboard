import {
  Box,
  Button,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from '../../theme.ts';
import { ListOrdersData } from '../../data/ListOrders.ts';
import moment from 'moment';
import { OrderStatus } from '../../components/OrderStatus';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 700,
  border: 0,
}));

const StyledButtonPage = styled(Button)(({ theme }) => ({
  minWidth: 30,
  height: 30,
  borderRight: 0
}));

const OrdersList = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const color = colors(theme.palette.mode);

  return (
    <>
      <Box p={3}>
        <Typography variant="h2" fontWeight={600}>
          {t('Orders List')}
        </Typography>
        {/*orders table*/}
        <Box mt={3}>
          <TableContainer component={Paper}>
            <Table mt={3}>
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
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 76 }}>
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
          {/*bottom*/}
          <Stack flexDirection="row" justifyContent="space-between" mt={3} alignItems="center">
            <Typography variant="h6" sx={{ color: color.primary[300] }}>
              {t('Showing')} 1-09 {t('of')} 100
            </Typography>
            <Box>
              <StyledButtonPage
                sx={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderTopLeftRadius: 8,
                  borderBottomLeftRadius: 8,
                  borderRight: '1px solid #979797',
                  backgroundColor: color.primary['400'],
                }}
              >
                <KeyboardArrowLeftIcon sx={{ color: color.primary[0] }} />
              </StyledButtonPage>
              <StyledButtonPage sx={{
                borderTopRightRadius: 8,
                borderBottomRightRadius: 8,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                backgroundColor: color.primary['400'],
              }}>
                <KeyboardArrowRightIcon sx={{ color: color.primary[0] }} />
              </StyledButtonPage>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default OrdersList;
