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
import { useTranslation } from 'react-i18next';
import { colors } from '../../theme.ts';
import { ListOrdersData } from '../../data/ListOrders.ts';
import { OrderStatus } from '../../components/OrderStatus';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import moment from 'moment/moment.js'


const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 700,
  border: 0,
}));

const StyledButtonPage = styled(Button)(() => ({
  minWidth: 30,
  height: 30,
  borderRight: 0,
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
        {/*filters*/}
        <Stack flexDirection="row" mt={3}  flexWrap="wrap">
          <Box
            height={60}
            sx={{
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 8,
              borderRight: '1px solid #979797',
              borderBottomLeftRadius: 8,
              backgroundColor: color.primary['500'],
              justifyContent: 'center',
              width: 70,
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <FilterAltIcon sx={{ color: color.primary[0], height: 30, width: 30 }} />
          </Box>
          <Box
            sx={{
              borderRight: '1px solid #979797',
              backgroundColor: color.primary['500'],
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: 100,
            }}
          >
            <Typography variant="h5" fontWeight={500}>{t("Filter By")}</Typography>
          </Box>
          <Box
            sx={{
              borderRight: '1px solid #979797',
              backgroundColor: color.primary['500'],
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: 127,
              gap: 2
            }}
          >
            <Typography variant="h5" fontWeight={500}>{t("Date")}</Typography>
            <KeyboardArrowDownIcon sx={{ color: color.primary[0]}}/>
          </Box>
          <Box
            sx={{
              borderRight: '1px solid #979797',
              backgroundColor: color.primary['500'],
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: 160,
              gap: 2
            }}
          >
            <Typography variant="h5" fontWeight={500}>{t("Order Status")}</Typography>
            <KeyboardArrowDownIcon sx={{ color: color.primary[0]}}/>
          </Box>
          <Box
            sx={{
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: color.primary['500'],
              justifyContent: 'center',
              width: 160,
              gap: 1,
              alignItems: 'center',
              display: 'flex',
            }}
            height={60}
          >
            <RotateLeftIcon sx={{ color: '#FF8743'}} />
            <Typography variant='h5' sx={{color: '#FF8743'}}>{t("Reset Filter")}</Typography>
          </Box>
        </Stack>
        {/*orders table*/}
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
              <StyledButtonPage
                sx={{
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  backgroundColor: color.primary['400'],
                }}
              >
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
