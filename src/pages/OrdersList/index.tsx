import {
    Box,
    Button, Chip,
    ClickAwayListener,
    Paper,
    Popper,
    Stack,
    styled,
    Typography,
    useTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { colors } from '../../theme.ts';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useRef, useState } from 'react';
import { TableOrders } from './TableOrders';

const StyledButtonPage = styled(Button)(() => ({
  minWidth: 30,
  height: 30,
  borderRight: 0,
}));

const OrdersList = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const anchorRefCalendar = useRef<HTMLDivElement>(null);
  const anchorRefStatusFilter = useRef<HTMLDivElement>(null);
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  const [openStatusFilter, setOpenStatusFilter] = useState<boolean>(false);
  const [filterDate, setFilterDate] = useState();

  const handleClickAwayCalendar = (event: any) => {
    if (anchorRefCalendar.current && anchorRefCalendar.current.contains(event.target)) {
      return;
    }
    setOpenCalendar(false);
  };

  const handleClickAwayStatusFilter = (event: any) => {
    if (anchorRefStatusFilter.current && anchorRefStatusFilter.current.contains(event.target)) {
      return;
    }
      setOpenStatusFilter(false);
  };

  return (
    <>
      <Box p={3}>
        <Typography variant="h2" fontWeight={600}>
          {t('Orders List')}
        </Typography>
        {/*filters*/}
        <Stack flexDirection="row" mt={3} flexWrap="wrap">
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
            <FilterAltIcon sx={{ color: color.primary[0], height: 20, width: 20 }} />
          </Box>
          <Box
            sx={{
              borderRight: '1px solid #979797',
              backgroundColor: color.primary['500'],
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: 60,
              gap: 2,
              cursor: 'pointer',
            }}
            onClick={() => {
              setOpenCalendar(!openCalendar);
            }}
            ref={anchorRefCalendar}
          >
            <CalendarMonthIcon sx={{ color: color.primary[0] }} />
          </Box>
          <Box
            sx={{
              borderRight: '1px solid #979797',
              backgroundColor: color.primary['500'],
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: 100,
              gap: 1,
              cursor: 'pointer',
            }}
            onClick={() => {
                setOpenStatusFilter(!openStatusFilter);
            }}
            ref={anchorRefStatusFilter}
          >
            <Typography variant="h5" fontWeight={500}>
              {t('Status')}
            </Typography>
            <KeyboardArrowDownIcon sx={{ color: color.primary[0] }} />
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
              cursor: 'pointer',
              gap: 1,
              alignItems: 'center',
              display: 'flex',
            }}
            height={60}
          >
            <RotateLeftIcon sx={{ color: '#FF8743' }} />
            <Typography variant="h5" sx={{ color: '#FF8743' }}>
              {t('Reset Filter')}
            </Typography>
          </Box>
        </Stack>
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
      {/*calendar filter*/}
      <Popper
        placement="bottom-start"
        open={openCalendar}
        role={undefined}
        disablePortal
        anchorEl={anchorRefCalendar.current}
      >
        <Paper sx={{ backgroundColor: color.primary[600] }}>
          <ClickAwayListener onClickAway={handleClickAwayCalendar}>
            <DateCalendar value={filterDate} onChange={(newValue) => setFilterDate(newValue)} />
          </ClickAwayListener>
        </Paper>
      </Popper>
      {/*status filter*/}
      <Popper
        placement="bottom-start"
        open={openStatusFilter}
        role={undefined}
        disablePortal
        anchorEl={anchorRefStatusFilter.current}
      >
        <Paper sx={{ backgroundColor: color.primary[600] }}>
          <ClickAwayListener onClickAway={handleClickAwayStatusFilter}>
             <Stack flexDirection='row' gap={1} padding={1} flexWrap='wrap'>
                 <Chip label={t("Completed")} variant="outlined" />
                 <Chip label={t("Processing")} variant="outlined" />
                 <Chip label={t("Rejected")} variant="outlined" />
             </Stack>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  );
};

export default OrdersList;
