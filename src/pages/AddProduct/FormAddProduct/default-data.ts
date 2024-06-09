import { ProductPost, Size } from '../../../utils/types.ts';

export const defaultData: ProductPost = {
  id: 0,
  images: null,
  productName: '',
  category: { id: 0, name: '' },
  price: 0,
  colors: [],
  count: 0,
  size: Size.XS,
  description: '',
  discount: 0,
};
