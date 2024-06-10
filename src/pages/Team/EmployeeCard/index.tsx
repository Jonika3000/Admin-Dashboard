import { Avatar, Box, Button, Stack, Typography, useTheme } from '@mui/material';
import { Employee } from '../../../utils/types.ts';
import { colors } from '../../../theme.ts';
import { useTranslation } from 'react-i18next';

export const EmployeeCard = ({ employee }: { employee: Employee }) => {
  const theme = useTheme();
  const color = colors(theme.palette.mode);
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          backgroundColor: color.primary[500],
          width: '100%',
          height: '100%',
          borderRadius: 10,
          padding: '46px 50px 36px 50px',
        }}
      >
        <Stack flexDirection="column" gap={2} justifyContent={'center'} alignItems={'center'}>
          <Avatar src={employee.photo} sx={{ width: 100, height: 100 }} />
          <Typography variant="h5" fontWeight={600}>
            {employee.name}
          </Typography>
          <Typography variant="h5">{employee.position}</Typography>
          <Typography variant="h5">{employee.email}</Typography>
          <Button variant="contained" sx={{ backgroundColor: '#A52A2A'}}>
            <Typography variant="h5">
              {t('Delete')}
            </Typography>
          </Button>
        </Stack>
      </Box>
    </>
  );
};
