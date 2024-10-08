import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  exports:[
    NavbarComponent
  ]
})
export class SharedModule { }
