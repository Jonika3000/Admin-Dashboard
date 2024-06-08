export enum Status {
  Completed = 'Completed',
  Processing = 'Processing',
  Rejected = 'Rejected',
}

export type Order = {
  id: number;
  name: string;
  address: string;
  date: Date;
  status: Status;
  cost: number;
  zipCode: number;
  country: string;
  number: string;
};

export type Product = {
  id: number;
  image: string;
  productName: string;
  category: Category;
  price: number;
  count: number;
  availableColor: string[];
  size: Size;
  description: string;
  discount: number;
};

export type Category = {
  id: number;
  name: string;
}

export enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL"
}
