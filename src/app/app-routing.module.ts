import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'app',
    loadChildren:()=>import('./features/invoice-manager/invoice-manager.module').then(m=>m.InvoiceManagerModule)
  },
  {
    path:'',
    redirectTo: 'auth',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'auth'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
