import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { customer } from 'src/app/_models/customer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  routeSub!: Subscription;
  customer!: customer;
  constructor(
    private route: ActivatedRoute,
    private service: CustomerService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.service
        .getCustomerById(params['id'])
        .subscribe((e) => (this.customer = e));
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    console.log(this.customer);
  }
}
