import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RequestStatus } from '../models/model.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  status:RequestStatus = 'init';
  constructor(
    private router:Router,
    private authService: AuthService,
    private toastRef:MatSnackBar
  ){}
  

  loginForm: FormGroup = new FormGroup({
    ruc: new FormControl<null | string>(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl < null | string > (null, [Validators.required])
  })

  openToast(message:string,type:string){
    this.toastRef.openFromComponent(ToastComponent,{
      data:{ message, type },
      duration:3000,
      verticalPosition: 'top',
      horizontalPosition:'right'
     })
  }
   
  login(){
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid) return;
    const { ruc, password } =  this.loginForm.value;
    this.status = 'loading'
    this.authService.login({ruc, password})
      .subscribe({
        next:(resp)=>{

          if(resp)  this.router.navigateByUrl('/app/portfolio')
          if(!resp) this.openToast('Su RUC o contraseña son incorrectos, vuelva a revisarlos','failed')
          this.status = 'sucess'
        },
        error:(error)=>{
          this.status = 'failed'
          this.openToast('El usuario no existe','failed')
        },
        complete:()=>{
          this.status = 'init'
        }
      })
  }
}
