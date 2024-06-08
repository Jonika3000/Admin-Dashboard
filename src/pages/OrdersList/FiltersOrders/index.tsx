import {Box, Chip, ClickAwayListener, Paper, Popper, Stack, Typography, useTheme} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import {colors} from "../../../theme.ts";
import {useRef, useState} from "react";
import {DateCalendar} from "@mui/x-date-pickers/DateCalendar";
import {useTranslation} from "react-i18next";

export const FiltersOrders = () => {
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
    )
}
