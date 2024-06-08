import { Product } from '../utils/types.ts';

export const ProductsData: Product[] = [
  {
    id: 1,
    image: 'https://img.jabko.ua/image/cache/catalog/products/2023/09/122300/2-1397x1397.jpg',
    productName: 'Iphone 15 Pro',
    category: 'Iphone',
    price: 10000,
    count: 5,
    availableColor: ['black', 'blue'],
  },
  {
    id: 2,
    image: 'https://www.yamaha.com/en/musical_instrument_guide/common/images/electric_guitar/parts_viewer01.jpg',
    productName: 'Electric Guitar',
    category: 'Guitar',
    price: 2000,
    count: 10,
    availableColor: ['red', 'green', 'yellow'],
  },
];
