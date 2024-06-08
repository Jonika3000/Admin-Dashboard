import {
    Box,
    Button,
    Stack,
    styled,
    Typography,
    useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { colors } from '../../theme.ts';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TableOrders } from './TableOrders';
import {FiltersOrders} from "./FiltersOrders";

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
        <FiltersOrders/>
        {/*orders table*/}
        <TableOrders />
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
    </>
  );
};

export default OrdersList;
