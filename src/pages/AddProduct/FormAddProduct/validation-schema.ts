import * as yup from 'yup';
import { TFunction } from 'i18next';

export const validationSchema = (t: TFunction) => {
  return yup.object().shape({
    images: yup.array().of(yup.mixed()).nullable().required(t('Images is required')),
    productName: yup.string().required(t('Product name is required')),
    category: yup.object().required(t('Category name is required')),
    price: yup
      .number()
      .typeError(t('Price must be a valid number'))
      .required(t('Price is required'))
      .positive(t('Price must be a positive number')),
    count: yup
      .number()
      .typeError(t('Count must be a valid number'))
      .required(t('Count is required'))
      .integer(t('Count must be an integer'))
      .positive(t('Count must be a positive number')),
    description: yup.string().required(t('Description is required')),
    discount: yup
      .number()
      .typeError(t('Discount must be a valid number'))
      .positive(t('Discount must be a positive number')),
  });
};
