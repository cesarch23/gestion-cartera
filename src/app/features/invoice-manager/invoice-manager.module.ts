import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceManagerRoutingModule } from './invoice-manager-routing.module';
import { LayoutInvoiceManagerComponent } from './layout-invoice-manager/layout-invoice-manager.component';
import { PorfolioPageComponent } from './pages/porfolio-page/porfolio-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';


@NgModule({
  declarations: [
    LayoutInvoiceManagerComponent,
    PorfolioPageComponent,
    CustomerPageComponent
  ],
  imports: [
    CommonModule,
    InvoiceManagerRoutingModule
  ]
})
export class InvoiceManagerModule { }
