import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceManagerRoutingModule } from './invoice-manager-routing.module';
import { LayoutInvoiceManagerComponent } from './layout-invoice-manager/layout-invoice-manager.component';
import { PorfolioPageComponent } from './pages/porfolio-page/porfolio-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { ClientDialogComponent } from './components/client-dialog/client-dialog.component';
import {ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    LayoutInvoiceManagerComponent,
    PorfolioPageComponent,
    CustomerPageComponent,
    ClientDialogComponent
  ],
  imports: [
    CommonModule,
    InvoiceManagerRoutingModule,
    SharedModule,

    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    

  ]
})
export class InvoiceManagerModule { }
