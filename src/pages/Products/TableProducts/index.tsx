import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { colors } from '../../../theme.ts';
import { StyledTableCellHead } from '../../../components/StyledTableCellHead';
import { ProductsData } from '../../../data/ProductsData.ts';
import { ActionButtons } from '../../../components/ActionButtons';

export const TableProducts = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const color = colors(theme.palette.mode);

  return (
    <>
      <Box mt={3}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: color.primary['400'], borderRadius: 15 }}>
              <TableRow>
                <StyledTableCellHead align={'center'}>ID</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('Image')}</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('Product Name')}</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('Category')}</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('Price')}</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('Count')}</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('Available Color')}</StyledTableCellHead>
                <StyledTableCellHead align={'center'}>{t('Action')}</StyledTableCellHead>
              </TableRow>
            </TableHead>
            <TableBody sx={{ backgroundColor: color.primary['500'], borderRadius: 15 }}>
              {ProductsData.map((row, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 76, cursor: 'pointer' }}
                  >
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">
                      <Box component={'img'} width={60} height={60} src={row.image} sx={{ objectFit: 'contain' }} />
                    </TableCell>
                    <TableCell align="center">{row.productName}</TableCell>
                    <TableCell align="center">{row.category}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">{row.count}</TableCell>
                    <TableCell align="center">
                      <Stack flexDirection="row" gap={1} width="100%" justifyContent="center">
                        {row.availableColor.map((color, index) => {
                          return (
                            <Box
                              key={index}
                              sx={{ backgroundColor: color, width: 20, height: 20, borderRadius: '50%' }}
                            />
                          );
                        })}
                      </Stack>
                    </TableCell>
                    <TableCell align="center">
                      <ActionButtons />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
