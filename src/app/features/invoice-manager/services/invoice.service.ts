import { Injectable } from '@angular/core';
import { Bank, BillForm, Client, Portfolio,PortfolioForm,Rol,financialDocument } from '../models/portfolio.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import * as moment from 'moment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from 'src/app/environments/environment';
import { AuthService } from 'src/app/auth/services/auth.service';


// const arrPortfolio: Portfolio[] = [
//   {id: 1, nombre: 'cartera 1', moneda: 'soles', estado: 'pendiente', fechaDescuento: '12-12-2020', tipoTasa: 'nominal', periodo: 'mensual', banco: 'BCP'},
//   {id: 2, nombre: 'cartera 2', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '15-01-2021', tipoTasa: 'efectiva', periodo: 'trimestral', banco: 'Interbank'},
//   {id: 3, nombre: 'cartera 3', moneda: 'soles', estado: 'pendiente', fechaDescuento: '22-02-2021', tipoTasa: 'nominal', periodo: 'anual', banco: 'Scotiabank'},
//   {id: 4, nombre: 'cartera 4', moneda: 'soles', estado: 'cancelado', fechaDescuento: '30-03-2021', tipoTasa: 'efectiva', periodo: 'mensual', banco: 'BBVA'},
//   {id: 5, nombre: 'cartera 5', moneda: 'dólares', estado: 'pendiente', fechaDescuento: '05-04-2021', tipoTasa: 'nominal', periodo: 'semestral', banco: 'BCP'},
//   {id: 6, nombre: 'cartera 6', moneda: 'soles', estado: 'cancelado', fechaDescuento: '18-05-2021', tipoTasa: 'efectiva', periodo: 'trimestral', banco: 'Interbank'},
//   {id: 7, nombre: 'cartera 7', moneda: 'soles', estado: 'pendiente', fechaDescuento: '25-06-2021', tipoTasa: 'nominal', periodo: 'mensual', banco: 'Scotiabank'},
//   {id: 8, nombre: 'cartera 8', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '12-07-2021', tipoTasa: 'efectiva', periodo: 'anual', banco: 'BBVA'},
//   {id: 9, nombre: 'cartera 9', moneda: 'soles', estado: 'pendiente', fechaDescuento: '19-08-2021', tipoTasa: 'nominal', periodo: 'mensual', banco: 'BCP'},
//   {id: 10, nombre: 'cartera 10', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '26-09-2021', tipoTasa: 'efectiva', periodo: 'trimestral', banco: 'Interbank'},
//   {id: 11, nombre: 'cartera 11', moneda: 'soles', estado: 'pendiente', fechaDescuento: '03-10-2021', tipoTasa: 'nominal', periodo: 'semestral', banco: 'Scotiabank'},
//   {id: 12, nombre: 'cartera 12', moneda: 'soles', estado: 'cancelado', fechaDescuento: '11-11-2021', tipoTasa: 'efectiva', periodo: 'mensual', banco: 'BBVA'},
//   {id: 13, nombre: 'cartera 13', moneda: 'dólares', estado: 'pendiente', fechaDescuento: '21-12-2021', tipoTasa: 'nominal', periodo: 'anual', banco: 'BCP'},
//   {id: 14, nombre: 'cartera 14', moneda: 'soles', estado: 'cancelado', fechaDescuento: '09-01-2022', tipoTasa: 'efectiva', periodo: 'trimestral', banco: 'Interbank'},
//   {id: 15, nombre: 'cartera 15', moneda: 'soles', estado: 'pendiente', fechaDescuento: '28-02-2022', tipoTasa: 'nominal', periodo: 'mensual', banco: 'Scotiabank'},
//   {id: 16, nombre: 'cartera 16', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '15-03-2022', tipoTasa: 'efectiva', periodo: 'semestral', banco: 'BBVA'},
//   {id: 17, nombre: 'cartera 17', moneda: 'soles', estado: 'pendiente', fechaDescuento: '22-04-2022', tipoTasa: 'nominal', periodo: 'mensual', banco: 'BCP'},
//   {id: 18, nombre: 'cartera 18', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '30-05-2022', tipoTasa: 'efectiva', periodo: 'trimestral', banco: 'Interbank'},
//   {id: 19, nombre: 'cartera 19', moneda: 'soles', estado: 'pendiente', fechaDescuento: '18-06-2022', tipoTasa: 'nominal', periodo: 'anual', banco: 'Scotiabank'},
//   {id: 20, nombre: 'cartera 20', moneda: 'soles', estado: 'cancelado', fechaDescuento: '25-07-2022', tipoTasa: 'efectiva', periodo: 'mensual', banco: 'BBVA'},
//   {id: 21, nombre: 'cartera 21', moneda: 'dólares', estado: 'pendiente', fechaDescuento: '11-08-2022', tipoTasa: 'nominal', periodo: 'trimestral', banco: 'BCP'},
//   {id: 22, nombre: 'cartera 22', moneda: 'soles', estado: 'cancelado', fechaDescuento: '29-09-2022', tipoTasa: 'efectiva', periodo: 'semestral', banco: 'Interbank'},
//   {id: 23, nombre: 'cartera 23', moneda: 'soles', estado: 'pendiente', fechaDescuento: '05-10-2022', tipoTasa: 'nominal', periodo: 'mensual', banco: 'Scotiabank'},
//   {id: 24, nombre: 'cartera 24', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '17-11-2022', tipoTasa: 'efectiva', periodo: 'anual', banco: 'BBVA'},
//   {id: 25, nombre: 'cartera 25', moneda: 'soles', estado: 'pendiente', fechaDescuento: '30-12-2022', tipoTasa: 'nominal', periodo: 'trimestral', banco: 'BCP'}
// ];


// let arrPortfolio: Portfolio[] = [
//   {
//     id: 1,
//     nombre: 'cartera 1',
//     moneda: 'PEN',
//     estado: 'pendiente',
//     fechaDescuento: new Date(),
//     //tipoTasa: 'nominal',
//     //periodo: 'mensual',
//     bancoEnviado: {nombre: "Interbank", tasaEfectivaAnual:0.50 },
//     documentos: [
//       {
//         id: 1,
//         cliente: { nombre: "Juan", apellidos: "Pérez", ruc: "12345678", direccion: "Av. Siempre Viva 123" },
//         estado: "pendiente de pago",
//         tipo: "letra",
//         moneda: "PEN",
//         valorNominal: 10000.123,
//         montoRecibido: 123.34,
//         tcea: 0.12,
//         tipoTasa: "nominal",
//         fechaEmision: new Date("2024-10-01"),
//         fechaDescuento: new Date("2024-11-01"),
//         fechaVencimiento: new Date("2025-01-01"),
//         bancoEnviado: {nombre: "BCP", tasaEfectivaAnual:0.12 },
//         periodo: 'mensual',
//         plazo: 12,
//         tasaDescuento:12,
//         interesDescontado:12
//       },
//       {
//         id: 2,
//         cliente: { nombre: "María", apellidos: "Gómez", ruc: "87654321", direccion: "Calle Falsa 456" },
//         estado: "pendiente de pago",
//         tipo: "factura",
//         moneda: "USD",
//         valorNominal: 5000.567,
//         montoRecibido: 223.45,
//         tcea: 0.12,
//         tipoTasa: "nominal",
//         fechaEmision: new Date("2024-09-15"),
//         fechaDescuento: new Date("2024-10-15"),
//         fechaVencimiento: new Date("2024-12-15"),
//         bancoEnviado: {nombre: "BCP", tasaEfectivaAnual:0.12 },
//         periodo: 'mensual',
//         plazo: 12,
//         tasaDescuento:12,
//         interesDescontado:12,
//       },
//     ]
//   },
//   {
//     id: 2,
//     nombre: 'cartera 2',
//     moneda: 'USD',
//     estado: 'cancelado',
//     fechaDescuento: new Date('15-01-2021'),
//     bancoEnviado: {nombre: "Interbank", tasaEfectivaAnual:0.50 },
//     documentos: [
//       {
//         id: 3,
//         cliente: { nombre: "Luis", apellidos: "Ramírez", ruc: "65432189", direccion: "Jr. Los Sauces 789" },
//         estado: "pendiente de pago",
//         tipo: "letra",
//         moneda: "PEN",
//         valorNominal: 15000.789,
//         montoRecibido: 345.67,
//         tcea: 0.12,
//         tipoTasa: "nominal",
//         fechaEmision: new Date("2024-08-01"),
//         fechaDescuento: new Date("2024-09-01"),
//         fechaVencimiento: new Date("2024-12-01"),
//         bancoEnviado: {nombre: "Interbank", tasaEfectivaAnual:0.50 },
//         periodo: 'mensual',
//         plazo: 12,
//         tasaDescuento:3,
//         interesDescontado:12
//       },
//       {
//         id: 4,
//         cliente: { nombre: "Ana", apellidos: "Sánchez", ruc: "65498732", direccion: "Calle Principal 987" },
//         estado: "pendiente de pago",
//         tipo: "factura",
//         moneda: "USD",
//         valorNominal: 7000.234,
//         montoRecibido: 456.78,
//         tcea: 0.12,
//         tipoTasa: "nominal",
//         fechaEmision: new Date("2024-07-10"),
//         fechaDescuento: new Date("2024-08-10"),
//         fechaVencimiento: new Date("2024-11-10"),
//         bancoEnviado: {nombre: "Interbank", tasaEfectivaAnual:0.50 },
//         periodo: 'mensual',
//         plazo: 12,
//         tasaDescuento:12,
//         interesDescontado:12
//       },
//     ]
//   },
//   {
//     id: 3,
//     nombre: 'cartera 3',
//     moneda: 'PEN',
//     estado: 'pendiente',
//     fechaDescuento: new Date('15-01-2021'),
//     bancoEnviado: {nombre: "Scotiabank", tasaEfectivaAnual:0.13 } ,
//     documentos: [
//       {
//         id: 5,
//         cliente: { nombre: "Carlos", apellidos: "López", ruc: "98765432", direccion: "Av. Los Álamos 234" },
//         estado: "pendiente de pago",
//         tipo: "letra",
//         moneda: "PEN",
//         valorNominal: 9000.456,
//         montoRecibido: 567.89,
//         tcea: 0.12,
//         tipoTasa: "nominal",
//         fechaEmision: new Date("2024-06-01"),
//         fechaDescuento: new Date("2024-07-01"),
//         fechaVencimiento: new Date("2024-10-01"),
//         bancoEnviado: {nombre: "Scotiabank", tasaEfectivaAnual:0.13 } ,
//         periodo: 'mensual',
//         plazo: 12,
//         tasaDescuento: 12,
//         interesDescontado:12
//       },
//       {
//         id: 6,
//         cliente: { nombre: "Lucía", apellidos: "Fernández", ruc: "43215678", direccion: "Jr. Primavera 654" },
//         estado: "pendiente de pago",
//         tipo: "factura",
//         moneda: "USD",
//         valorNominal: 4000.890,
//         montoRecibido: 678.90,
//         tcea: 0.12,
//         tipoTasa: "nominal",
//         fechaEmision: new Date("2024-05-05"),
//         fechaDescuento: new Date("2024-06-05"),
//         fechaVencimiento: new Date("2024-09-05"),
//         bancoEnviado: {nombre: "Scotiabank", tasaEfectivaAnual:0.13 } ,
//         periodo: 'mensual',
//         plazo: 12,
//         tasaDescuento:3,
//         interesDescontado:12
//       },
//     ]
//   },
//   {
//     id: 4,
//     nombre: 'cartera 4',
//     moneda: 'PEN',
//     estado: 'cancelado',
//     fechaDescuento: new Date('30-03-2021'),
//     //tipoTasa: 'efectiva',
//     //periodo: 'mensual',
//     bancoEnviado: {nombre: "Scotiabank", tasaEfectivaAnual:0.13 } ,
//     documentos: [
//       {
//         id: 7,
//         cliente: { nombre: "Miguel", apellidos: "Torres", ruc: "34567890", direccion: "Av. Las Flores 123" },
//         estado: "pendiente de pago",
//         tipo: "letra",
//         moneda: "PEN",
//         valorNominal: 12000.234,
//         montoRecibido: 789.01,
//         tcea: 0.12,
//         tipoTasa: "nominal",
//         fechaEmision: new Date("2024-04-15"),
//         fechaDescuento: new Date("2024-05-15"),
//         fechaVencimiento: new Date("2024-08-15"),
//         bancoEnviado: {nombre: "Scotiabank", tasaEfectivaAnual:0.13 } ,
//         periodo:'mensual',
//         plazo:12,
//         tasaDescuento: 0.12,
//         interesDescontado:12
//       },
//       {
//         id: 8,
//         cliente: { nombre: "Diana", apellidos: "García", ruc: "87654321", direccion: "Calle La Luna 654" },
//         estado: "pendiente de pago",
//         tipo: "factura",
//         moneda: "USD",
//         valorNominal: 3000.123,
//         montoRecibido: 890.12,
//         tcea: 0.12,
//         tipoTasa: "nominal",
//         fechaEmision: new Date("2024-03-20"),
//         fechaDescuento: new Date("2024-04-20"),
//         fechaVencimiento: new Date("2024-07-20"),
//         bancoEnviado: {nombre: "Scotiabank", tasaEfectivaAnual:0.13 } ,
//         periodo:'mensual',
//         plazo:12,
//         tasaDescuento: 0.12,
//         interesDescontado:12,
//       },
//     ]
//   },
//   {
//     id: 5,
//     nombre: 'cartera 5',
//     moneda: 'USD',
//     estado: 'pendiente',
//     fechaDescuento: new Date('05-04-2021'),
//     //tipoTasa: 'nominal',
//     //periodo: 'semestral',
//     bancoEnviado:  {nombre: "Scotiabank", tasaEfectivaAnual:0.13 },
//     documentos: [
//       {
//         id: 9,
//         cliente: { nombre: "Pedro", apellidos: "Cruz", ruc: "12349876", direccion: "Jr. El Sol 876" },
//         estado: "pendiente de pago",
//         tipo: "letra",
//         moneda: "PEN",
//         valorNominal: 11000.345,
//         montoRecibido: 912.34,
//         tcea: 0.12,
//         tipoTasa: "nominal",
//         fechaEmision: new Date("2024-01-10"),
//         fechaDescuento: new Date("2024-02-10"),
//         fechaVencimiento: new Date("2024-05-10"),
//         bancoEnviado:  {nombre: "Scotiabank", tasaEfectivaAnual:0.13 },
//         periodo:'mensual',
//         plazo:12,
//         tasaDescuento: 0.12,
//         interesDescontado:12,
//       },
//       {
//         id: 10,
//         cliente: { nombre: "Gabriela", apellidos: "Martínez", ruc: "65478912", direccion: "Av. La Paz 432" },
//         estado: "pendiente de pago",
//         tipo: "factura",
//         moneda: "USD",
//         valorNominal: 6000.234,
//         montoRecibido: 456.78,
//         tcea: 0.12,
//         tipoTasa: "nominal",
//         fechaEmision: new Date("2024-02-15"),
//         fechaDescuento: new Date("2024-03-15"),
//         fechaVencimiento: new Date("2024-06-15"),
//         bancoEnviado: {nombre: "Scotiabank", tasaEfectivaAnual:0.13 } ,
//         periodo:'mensual',
//         plazo:12,
//         tasaDescuento: 0.12,
//         interesDescontado:12,
//       },
//     ]
//   },
// ];

// const arrClients: Client[] = [
//   { nombre: 'Juan', apellidos: 'Pérez', ruc: '12345678A', direccion: 'Calle Falsa 1' },
//   { nombre: 'Ana', apellidos: 'Gómez', ruc: '87654321B', direccion: 'Avenida Siempre Viva 742' },
//   { nombre: 'Luis', apellidos: 'Martínez', ruc: '23456789C', direccion: 'Plaza Mayor 456' },
   
// ];

 
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private BASE_URL = enviroment.BASE_URL
  private portfoliosList = new BehaviorSubject<Portfolio[]>([]);

  private clientList = new BehaviorSubject<Client[]>([]);
  clientList$ =  this.clientList.asObservable();

  private businessList = new BehaviorSubject<Client[]>([]); 
  businessList$ = this.businessList.asObservable();

  private bankList = new BehaviorSubject<Bank[]>([]);
  bankList$ = this.bankList.asObservable();
  
  constructor(
    private http:HttpClient,
    private authServ:AuthService,

  ) { }
  private refreshClientList(){
     
  }

  get portfolios(): Observable<Portfolio[]>{
    return this.portfoliosList.asObservable();
  }
  addPortfolio({nombre, moneda, fechaDescuento, bancoEnviado}:PortfolioForm){
    const estado = 'pendiente';
    // const id=arrPortfolio.length+1;
    // // const portfolio:Portfolio = {id,nombre,moneda,estado, bancoEnviado, tipoTasa,periodo, fechaDescuento,documentos:[]}
    // const portfolio:Portfolio = {id,nombre,moneda,estado, bancoEnviado, fechaDescuento,documentos:[]}
    // arrPortfolio.unshift(portfolio);
    // this.portfoliosList.next(arrPortfolio);

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
  
}
