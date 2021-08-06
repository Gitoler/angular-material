import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';


// Material
import { MatTabsModule } from '@angular/material/tabs';
import { CustomerNewComponent } from './customer-new/customer-new.component';
@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerNewComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTabsModule
  ]
})
export class CustomersModule { }
