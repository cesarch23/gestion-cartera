import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutInvoiceManagerComponent } from './layout-invoice-manager/layout-invoice-manager.component';
import { PorfolioPageComponent } from './pages/porfolio-page/porfolio-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutInvoiceManagerComponent,
    children:[
      {
        path:'portfolio',
        component:PorfolioPageComponent
      },
      {
        path:'customer',
        component:CustomerPageComponent
      },
      {
        path:'**',
        redirectTo:'portfolio'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceManagerRoutingModule { }
