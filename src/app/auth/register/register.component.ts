import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { registerForm, RequestStatus } from '../models/model.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  requestStatus:RequestStatus = 'init'
  constructor(
    private authService:AuthService,
    private router:Router,
    private toastRef:MatSnackBar
  ){}

  registerForm:FormGroup = new FormGroup({
    ruc: new FormControl<string | null>( null,[Validators.required, Validators.minLength(11)] ),
    razonSocial: new FormControl<string | null>( null,[Validators.required]),
    direccion: new FormControl<string | null>( null,[Validators.required]),
    sector: new FormControl<string | null>( null,[Validators.required]),
    password: new FormControl<string | null>( null,[Validators.required])

  })


  register(){
    this.registerForm.markAllAsTouched();
    if(this.registerForm.invalid) return;
    this.requestStatus = 'loading';
    const { ruc,razonSocial, direccion, sector, password } = this.registerForm.value
    this.authService.registerCompany({ruc,razon_social:razonSocial, direccion, sector, password})
      .subscribe({
        next:()=>{
          this.authService.saveUser(ruc);
          this.router.navigateByUrl("/app/portfolio")
        },
        error:(error)=>{
          this.toastRef.openFromComponent(ToastComponent,{
            data:{message:'Ocurrio un error en nuestro servidor, intentelo más tarde', type:'failed'},
            duration:3000,
            verticalPosition:'top',
            horizontalPosition:'right'
          })
          this.requestStatus = 'failed';
        },
        complete:()=>{
          this.requestStatus = 'init';
        }
      })
  }
}
