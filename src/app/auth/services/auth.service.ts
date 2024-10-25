import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'src/app/environments/environment';
import { registerForm, User } from '../models/model.interface';


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
  }
  

}
