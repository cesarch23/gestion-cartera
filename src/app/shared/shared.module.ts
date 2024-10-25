import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ToastComponent } from './components/toast/toast.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NotfoundComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatSnackBarModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
