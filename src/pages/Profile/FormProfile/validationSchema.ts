import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  photo: Yup.mixed().nullable(),
  name: Yup.string(),
  position: Yup.string(),
  email: Yup.string().email('Invalid email address'),
  currentPassword: Yup.string(),
});
