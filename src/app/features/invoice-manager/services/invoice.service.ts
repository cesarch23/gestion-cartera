import { Injectable } from '@angular/core';
import { Bank, BillForm, Client, DocumentResponse, FinancialDocument, Portfolio,PortfolioForm,Rol } from '../models/portfolio.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import * as moment from 'moment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from 'src/app/environments/environment';
import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private BASE_URL = enviroment.BASE_URL

  private clientAll = new BehaviorSubject<Client[]>([])
  clientAll$ = this.clientAll.asObservable()

  private portfolios= new BehaviorSubject<Portfolio[]>([]);
  portfolios$ = this.portfolios.asObservable();

  private clientList = new BehaviorSubject<Client[]>([]);
  clientList$ =  this.clientList.asObservable();

  private businessList = new BehaviorSubject<Client[]>([]); 
  businessList$ = this.businessList.asObservable();

  private bankList = new BehaviorSubject<Bank[]>([]);
  bankList$ = this.bankList.asObservable();

  private documents = new BehaviorSubject<DocumentResponse[]>([]);
  documents$ = this.documents.asObservable();
  
  constructor(
    private http:HttpClient,
    private authServ:AuthService,

  ) { }
  private refreshClientList(){
     
  }

  
  addPortfolio({nombre, moneda, fechaDescuento,banco,tipoTasa,periodo,tasa,capitalizacion}:PortfolioForm){
    const estado = 'pendiente';
    const ruc = this.authServ.getUser();
    const date = moment(fechaDescuento).format('DD/MM/YYYY');
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    const portfolio = {
      nombre,
      tipo_moneda: moneda, 
      fecha_descuento: date,
      id_banco:banco.id,
      estado,
      tcea:0,
      tipo_tasa:tipoTasa,
      periodo,
      tasa,
      capitalizacion,
      ruc_user: ruc
    };
    return this.http.post(`${this.BASE_URL}wallet`,portfolio,{headers})
      .pipe(tap(()=> this.getPortfolio().subscribe()))
  }


  addPerson(person:{nombre:string; apellido:string;ruc:string;direccion:string}){
    const { nombre, apellido, ruc, direccion } = person
    const rucCompany = this.authServ.getUser();
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const client = { 
      ruc_company:rucCompany,
      ruc,
      direccion, 
      nombre,
      apellido, 
      nombre_comercial:'',
      razon_social:'',
      rol:'persona'
    }
    return this.http.post(`${this.BASE_URL}client`,client, {headers})
      .pipe(tap(resp=>{
        this.getClients('persona').subscribe()
      })) 
  }
  addBusiness(business:{ruc:string; direccion:string;nombreComercial:string;razonSocial:string}){
    const { ruc, direccion, nombreComercial: nombre_comercial, razonSocial: razon_social} = business
    const rucCompany = this.authServ.getUser();
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    const company = { 
      ruc_company:rucCompany,
      ruc,
      direccion, 
      nombre_comercial, 
      razon_social,
      rol:'empresa', 
      nombre:null,
      apellido:null,
    }
    return this.http.post(`${this.BASE_URL}client`,company, {headers})
                  .pipe(tap((resp)=>{
                    this.getClients('empresa').subscribe();
                  }))

  }
  getClients(rol:Rol){
    const headers = new HttpHeaders ({'Content-Type':'application/json'})
    const ruc = this.authServ.getUser()
    return this.http.get<Client[]>(`${this.BASE_URL}client/${ruc}/${rol}`,{headers})
                    .pipe(tap((resp)=>{
                        if(rol==='persona')  this.clientList.next(resp)
                        if(rol=== 'empresa') this.businessList.next(resp)
                    }))

  }
  getBanks(){
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.get<Bank[]>(`${this.BASE_URL}banks`,{headers})
      .pipe(tap(banks=> this.bankList.next(banks)))

  }
  addBank(bank:Bank){
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post(`${this.BASE_URL}bank`,{nombre: bank.nombre},{headers})
      .pipe( tap(()=> this.getBanks().subscribe() ))
  }
  getPortfolio(){
    const ruc = this.authServ.getUser();
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.get<Portfolio[]>(`${this.BASE_URL}walletr/${ruc}`,{headers})
      .pipe( tap( resp => this.portfolios.next(resp) ))
  }
  getPortfolioById(id:number){
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.get<Portfolio[]>(`${this.BASE_URL}wallet/${id}`,{headers})
  }
  getAllClients(){
    const headers = new HttpHeaders ({'Content-Type':'application/json'})
    const ruc = this.authServ.getUser()
    return this.http.get<Client[]>(`${this.BASE_URL}client/${ruc}`,{headers})
      .pipe(tap(resp=>this.clientAll.next(resp)))
  }
  getDocumentsById(idCartera:number){
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    return this.http.get<DocumentResponse[]>(`${this.BASE_URL}documents`,{headers})
      .pipe(tap(resp=>this.documents.next(resp)))
  }
  addDocument(document:FinancialDocument){
    const  headers = new HttpHeaders({'Content-Type':'application/json'})
    //const ruc = this.authServ.getUser();
    const fechaEmision = moment(document.fecha_emision).format('DD/MM/YYYY');
    const fechaVencimiento = moment(document.fecha_vencimiento).format('DD/MM/YYYY');
    const financialDocument = {
      ...document, 
      fecha_emision:fechaEmision, 
      fecha_vencimiento:fechaVencimiento,  
      estado:'pendiente'
    }
    console.log("dedes inv",financialDocument)
    return this.http.post(`${this.BASE_URL}document`,financialDocument,{headers})
      .pipe(tap(()=> this.getDocumentsById(document.id_cartera).subscribe()))
  }
  
}
