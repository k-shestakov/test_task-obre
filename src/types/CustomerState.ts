import { Customer } from "./Customer";

export interface CustomerState {
  customers: Customer[];
  loading: boolean;
  error: string;
}
