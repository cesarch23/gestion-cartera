import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpStatusCode } from '@angular/common/http';
import { RequestStatus } from 'src/app/auth/models/model.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
 

@Component({
  selector: 'app-client-dialog',
  templateUrl: './client-dialog.component.html',
  styleUrls: ['./client-dialog.component.css']
})
export class ClientDialogComponent {
  personFormStatus:RequestStatus = 'init';
  constructor(
    private invService:InvoiceService,
    private clientDialog:MatDialogRef<ClientDialogComponent>,
    private toastRef: MatSnackBar,


  ){}

  personForm:FormGroup = new FormGroup({
    ruc: new FormControl<string> ("", [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    nombre: new FormControl<string>("",[Validators.required]),
    apellidos: new FormControl<string>("", [Validators.required, Validators.minLength(2)]),
    direccion: new FormControl<string> ("",[Validators.required])
  })

  businessForm:FormGroup = new FormGroup({
    ruc: new FormControl<string>  ("",[Validators.required]),
    nombreComercial: new FormControl<string>  ("",[Validators.required]),
    razonSocial: new FormControl<string>  ("",[Validators.required]),
    direccion: new FormControl<string>  ("",[Validators.required])
  })

  addPerson(){
    this.personForm.markAllAsTouched();
    if(this.personForm.invalid) return;
    this.personFormStatus='loading';
    const { ruc, nombre,apellidos:apellido,direccion } =  this.personForm.value
    this.invService.addPerson({ruc, nombre, apellido, direccion})
      .subscribe({
        next:()=>{
          this.personFormStatus='sucess'
          this.clientDialog.close();
          this.openToast('El cliente fue creado exitosamente','success')
        },
        error:()=>this.personFormStatus='failed',
        complete:()=> this.personFormStatus='init'
      }      )
    console.log("cliente envido", this.personForm)
  }

  
  openToast(message:string,type:string){
    this.toastRef.openFromComponent(ToastComponent,{
      data:{ message, type },
      duration:3000,
      verticalPosition: 'top',
      horizontalPosition:'right'
     })
  }

}
