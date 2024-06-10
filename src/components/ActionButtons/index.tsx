import { Box, Button, useTheme } from '@mui/material';
import { colors } from '../../theme.ts';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { ModalDeleteConfirm } from '../ModalDeleteConfirm';

export const ActionButtons = () => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Button
          sx={{
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderRight: '1px solid #979797',
            backgroundColor: color.primary['400'],
            minWidth: 30,
            height: 30,
          }}
        >
          <EditNoteIcon sx={{ color: color.primary[0] }} />
        </Button>
        <Button
          sx={{
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            backgroundColor: color.primary['400'],
            minWidth: 30,
            height: 30,
            borderRight: 0,
          }}
          onClick={() => {
            setModalDeleteOpen(true);
          }}
        >
          <DeleteIcon sx={{ color: '#EF3826' }} />
        </Button>
      </Box>
      <ModalDeleteConfirm open={modalDeleteOpen} setClose={() => setModalDeleteOpen(false)} />
    </>
  );
};
