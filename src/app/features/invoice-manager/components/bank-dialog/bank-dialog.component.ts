import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BankPageComponent } from '../../pages/bank-page/bank-page.component';
import { InvoiceService } from '../../services/invoice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestStatus } from 'src/app/auth/models/model.interface';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bank-dialog',
  templateUrl: './bank-dialog.component.html',
  styleUrls: ['./bank-dialog.component.css']
})
export class BankDialogComponent {

  bankRequestStatus:RequestStatus = 'init'

  constructor(
    private invService:InvoiceService,
    private toastRef: MatSnackBar,
    private bankDialog: MatDialogRef<BankDialogComponent>

  ){

  }


  bankForm: FormGroup = new FormGroup ({
    name: new FormControl<string> ("",[Validators.required])
  })

  openToast(message:string,type:string){
    this.toastRef.openFromComponent(ToastComponent,{
      data:{ message, type },
      duration:3000,
      verticalPosition: 'top',
      horizontalPosition:'right'
     })
  }

  addBank(){
    this.bankForm.markAllAsTouched();
    if(this.bankForm.invalid) return;
    this.bankRequestStatus = 'loading'
    const { name} = this.bankForm.value
    this.invService.addBank({id:0,nombre:name}).subscribe({
      next:()=> {
        this.bankRequestStatus = 'sucess'
        this.bankDialog.close();
        this.openToast('se creo banco de manera exitosa','');

      },
      error:()=> {
        this.bankRequestStatus = 'failed'
        this.openToast('Hubo un error al guardar los datos intentelo de nuevo','');
      }
    })
  }
}
