import { colors } from '../../theme.ts';

export const styleModal = (theme: any) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  p: 4,
  bgcolor: colors(theme.palette.mode).primary[500],
  borderRadius: 2,
});
