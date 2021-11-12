import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'customer/:id', component: CustomerDetailsComponent },
  { path: 'customer/edit/:id', component: CustomerEditComponent },
  { path: 'create', component: CustomerCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
