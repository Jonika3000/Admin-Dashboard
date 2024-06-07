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
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { colors } from '../../theme.ts';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 700,
  border: 0,
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
                  <StyledTableCell align={'center'}>ID</StyledTableCell>
                  <StyledTableCell align={'center'}>{t('TableNAME')}</StyledTableCell>
                  <StyledTableCell align={'center'}>{t('TableADDRESS')}</StyledTableCell>
                  <StyledTableCell align={'center'}>{t('TableDATE')}</StyledTableCell>
                  <StyledTableCell align={'center'}>{t('TableSTATUS')}</StyledTableCell>
                </TableRow>
                <TableBody></TableBody>
              </TableHead>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default OrdersList;
