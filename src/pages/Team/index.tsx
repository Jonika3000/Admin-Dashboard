import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { EmployeesData } from '../../data/EmployeeData.ts';
import { EmployeeCard } from './EmployeeCard';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Box p={3}>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography variant="h2" fontWeight={600}>
            {t('Team')}
          </Typography>
          <Button
            color="info"
            size="medium"
            variant="contained"
            sx={{ marginLeft: 2, maxHeight: 40 }}
            onClick={() => {
              navigate('/add-employee');
            }}
          >
            <Typography variant="h6">{t('Add employee')}</Typography>
          </Button>
        </Stack>
        <Grid container spacing={2} mt={2} justifyContent="space-between">
          {EmployeesData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center" key={index}>
              <EmployeeCard employee={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Team;
