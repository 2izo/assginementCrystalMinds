import { Component, Input, OnInit } from '@angular/core';
import { customer } from 'src/app/_models/customer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css'],
})
export class CustomerCardComponent implements OnInit {
  @Input() customer!: customer;
  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {}
  deleteUser(customer: customer) {
    this.customerService.deleteUser(customer).subscribe((e) => console.log(e));
  }
}
