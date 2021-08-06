import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';


// Material
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerNewComponent,
    CustomerCardComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CustomersModule { }
