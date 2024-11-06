import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/environments/environment';
import { registerForm, User } from '../models/model.interface';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = enviroment.BASE_URL;

  constructor(private http:HttpClient) { }


  registerCompany(company:registerForm){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post( `${this.baseUrl}company`,company, {headers});
  }

  login(user:User){
    const header = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.get(`${this.baseUrl}company/${user.ruc}/${user.password}`,{headers: header})
              .pipe(tap(resp=>{
                    if(resp === true) this.saveUser(user.ruc)
                      console.log(resp)
                  }))

  }

  saveUser(ruc:string){
    localStorage.removeItem("ruc");
    localStorage.setItem("ruc", ruc)
  }

  getUser(): string | null{
    return localStorage.getItem("ruc")
  }
  

}
