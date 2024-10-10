import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';


const CUSTOM_FORMAT = {
  parse: {
    dateInput: 'dd MMM yyyy',
  },
  display: {
    dateInput: 'dd MMM yyyy',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'dd MMM yyyy',
    monthYearA11yLabel: 'MMMM yyyy',
  },
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatMomentDateModule,

   
  ],
  providers: [ 
    { provide: MAT_DATE_FORMATS, useValue:CUSTOM_FORMAT },
    { provide: MAT_DATE_LOCALE, useValue:'es-ES' },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
