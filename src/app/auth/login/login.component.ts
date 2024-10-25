import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RequestStatus } from '../models/model.interface';

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

  ){}
  

  loginForm: FormGroup = new FormGroup({
    ruc: new FormControl<null | string>(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    password: new FormControl < null | string > (null, [Validators.required])
  })

   
  login(){
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid) return;
    const { ruc, password } =  this.loginForm.value;
    this.status = 'loading'
    this.authService.login({ruc, password})
      .subscribe({
        next:(resp)=>{
          if(resp) this.router.navigateByUrl('/app/portfolio')
          if(!resp) alert("su contraseña o ruc es incorecta")
          console.log({resp})
          this.status = 'sucess'
        },
        error:(error)=>{
          console.log({error})
          this.status = 'failed'
        },
        complete:()=>{
          this.status = 'init'
        }
      })
  }
}
