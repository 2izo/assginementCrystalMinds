import { address } from './address';

export interface customer {
  customerID: number;
  customerFirstName: string;
  customerLastName: string;
  customerGender: string;
  customerDateOfBirth: Date;
  customerEmail: string;
  addresses: address[];
}
