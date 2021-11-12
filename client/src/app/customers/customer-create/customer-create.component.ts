import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { customer } from 'src/app/_models/customer';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css'],
})
export class CustomerCreateComponent implements OnInit {
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
    this.initializeForm();
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  updateCustomer() {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.customerservice
        .createCustomer(this.reactiveForm.value)
        .subscribe((e) => {
          this.root.navigateByUrl(`customers/`);
        });
    });
  }
}
