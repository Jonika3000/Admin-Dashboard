import {Product, Size} from "../../../utils/types.ts";

export const defaultData: Product = {
    id: 0,
    image: '',
    productName: '',
    category: {id: 0, name: ""},
    price: 0,
    count: 0,
    availableColor: [''],
    size: Size.XS,
    description: '',
    discount: 0,
};
