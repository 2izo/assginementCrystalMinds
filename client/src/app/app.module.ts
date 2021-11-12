import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { HomeComponent } from './home/home.component';
import { CustomerCardComponent } from './customers/customer-card/customer-card.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MomentPipe } from './_pipe/date-to-string.pipe';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    HomeComponent,
    CustomerCardComponent,
    CustomerEditComponent,
    MomentPipe,
    CustomerCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
