import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderNewComponent } from './order-new/order-new.component';

// material
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    OrderListComponent,
    OrderNewComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTabsModule
  ]
})
export class OrdersModule { }
