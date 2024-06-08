import { styled, TableCell } from '@mui/material';

export const StyledTableCellHead = styled(TableCell)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(18),
  fontWeight: 700,
  border: 0,
}));
