import { Component, Inject, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  toast = inject(MatSnackBarRef)

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:{message:string; type:string})
  {}

  
}
