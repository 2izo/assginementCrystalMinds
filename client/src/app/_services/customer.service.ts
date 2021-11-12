import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { customer } from '../_models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  url: string = 'https://localhost:5001/api/customer/';
  constructor(private http: HttpClient) {}
  getCustomers() {
    return this.http.get<customer[]>(this.url);
  }
  getCustomerById(id: number) {
    return this.http.get<customer>(this.url + id);
  }
  createCustomer(customer: customer) {
    return this.http.post(this.url + 'addUser', customer);
  }
  updateCustoemr(customer: customer, id: number) {
    console.log(customer);

    return this.http.put(this.url + id, customer);
  }
  deleteUser(customer: customer) {
    return this.http.delete(
      `https://localhost:5001/api/customer/delete-customer/${customer.customerID}`
    );
  }
}
