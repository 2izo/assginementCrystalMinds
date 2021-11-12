import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { customer } from 'src/app/_models/customer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css'],
})
export class CustomerEditComponent implements OnInit {
  routeSub!: Subscription;
  customer!: customer;
  reactiveForm!: FormGroup;
  initializeForm() {
    this.reactiveForm = new FormGroup({
      customerEmail: new FormControl('', Validators.required),
      customerGender: new FormControl('Male'),
      customerFirstName: new FormControl('', Validators.required),
      customerLastName: new FormControl('', Validators.required),
      customerDateOfBirth: new FormControl('', Validators.required),
      customerCity: new FormControl('', Validators.required),
      customerCountry: new FormControl('', Validators.required),
    });
  }
  constructor(
    private customerservice: CustomerService,
    private route: ActivatedRoute,
    private root: Router
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.customerservice
        .getCustomerById(params['id'])
        .subscribe((e) => (this.customer = e));
    });
    this.initializeForm();
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  updateCustomer() {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.customerservice
        .updateCustoemr(this.reactiveForm.value, params['id'])
        .subscribe((e) => {
          this.root.navigateByUrl(`customer/` + params['id']);
        });
    });
  }
}
