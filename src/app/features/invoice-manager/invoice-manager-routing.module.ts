import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutInvoiceManagerComponent } from './layout-invoice-manager/layout-invoice-manager.component';
import { PorfolioPageComponent } from './pages/porfolio-page/porfolio-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { PortfolioDetailsComponent } from './pages/portfolio-details/portfolio-details.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutInvoiceManagerComponent,
    children:[
      {
        path:'portfolio',
        component:PorfolioPageComponent,
      },
      {
        path:'portfolio/:id',
        component:PortfolioDetailsComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceManagerRoutingModule { }
