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
