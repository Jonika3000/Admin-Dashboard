import { OutlinedInput, styled } from '@mui/material';
import { colors } from '../../theme.ts';
export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  width: 250,
  paddingLeft: '10px',
  borderRadius: '19px',
  height: '38px',
  backgroundColor: colors(theme.palette.mode).primary[400],
  [theme.breakpoints.up('md')]: {
    width: 250,
  },
  [theme.breakpoints.up('lg')]: {
    width: 434,
  },
}));
