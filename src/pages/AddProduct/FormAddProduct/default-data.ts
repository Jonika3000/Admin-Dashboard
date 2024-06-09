import { ProductPost } from '../../../utils/types.ts';

export const defaultData: ProductPost = {
  id: 0,
  images: null,
  productName: '',
  category: { id: 0, name: '' },
  price: 0,
  colors: [],
  count: 0,
  sizes: [],
  description: '',
  discount: 0,
};
