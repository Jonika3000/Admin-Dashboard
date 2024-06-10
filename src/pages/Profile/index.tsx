import { Stack } from '@mui/material';
import { Form, Formik } from 'formik';
import { defaultData } from './FormProfile/default-data.ts';
import { ProfilePost } from '../../utils/types.ts';
import { FormProfile } from './FormProfile';
import { validationSchema } from './FormProfile/validationSchema.ts';

const Profile = () => {
  const onSubmit = (data: ProfilePost) => {
    console.log(data);
  };

  return (
    <>
      <Stack
        sx={{ width: '100%', height: '100%' }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={5}
        gap={3}
        flexWrap="wrap"
      >
        <Formik initialValues={defaultData} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            <FormProfile />
          </Form>
        </Formik>
      </Stack>
    </>
  );
};

export default Profile;
