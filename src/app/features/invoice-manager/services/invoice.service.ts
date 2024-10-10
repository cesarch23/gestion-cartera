import { Injectable } from '@angular/core';
import { Client, Portfolio,financialDocument } from '../models/portfolio.interface';
import { BehaviorSubject, Observable } from 'rxjs';


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


const arrPortfolio: Portfolio[] = [
  {
    id: 1,
    nombre: 'cartera 1',
    moneda: 'soles',
    estado: 'pendiente',
    fechaDescuento: '12-12-2020',
    tipoTasa: 'nominal',
    periodo: 'mensual',
    banco: 'BCP',
    documentos: [
      {
        id: 1,
        cliente: { nombre: "Juan", apellidos: "Pérez", dni: "12345678", direccion: "Av. Siempre Viva 123" },
        estado: "pendiente de pago",
        tipo: "letra",
        moneda: "PEN",
        valorNominal: 10000.123,
        tasaDescuento: 0.12,
        montoRecibido: 123.34,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-10-01"),
        fechaDescuento: new Date("2024-11-01"),
        fechaVencimiento: new Date("2025-01-01"),
        banco: "BCP"
      },
      {
        id: 2,
        cliente: { nombre: "María", apellidos: "Gómez", dni: "87654321", direccion: "Calle Falsa 456" },
        estado: "pendiente de pago",
        tipo: "factura",
        moneda: "USD",
        valorNominal: 5000.567,
        tasaDescuento: 0.12,
        montoRecibido: 223.45,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-09-15"),
        fechaDescuento: new Date("2024-10-15"),
        fechaVencimiento: new Date("2024-12-15"),
        banco: "BCP"
      },
    ]
  },
  {
    id: 2,
    nombre: 'cartera 2',
    moneda: 'dólares',
    estado: 'cancelado',
    fechaDescuento: '15-01-2021',
    tipoTasa: 'efectiva',
    periodo: 'trimestral',
    banco: 'Interbank',
    documentos: [
      {
        id: 3,
        cliente: { nombre: "Luis", apellidos: "Ramírez", dni: "65432189", direccion: "Jr. Los Sauces 789" },
        estado: "pendiente de pago",
        tipo: "letra",
        moneda: "PEN",
        valorNominal: 15000.789,
        tasaDescuento: 0.12,
        montoRecibido: 345.67,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-08-01"),
        fechaDescuento: new Date("2024-09-01"),
        fechaVencimiento: new Date("2024-12-01"),
        banco: "BCP"
      },
      {
        id: 4,
        cliente: { nombre: "Ana", apellidos: "Sánchez", dni: "65498732", direccion: "Calle Principal 987" },
        estado: "pendiente de pago",
        tipo: "factura",
        moneda: "USD",
        valorNominal: 7000.234,
        tasaDescuento: 0.12,
        montoRecibido: 456.78,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-07-10"),
        fechaDescuento: new Date("2024-08-10"),
        fechaVencimiento: new Date("2024-11-10"),
        banco: "BCP"
      },
    ]
  },
  {
    id: 3,
    nombre: 'cartera 3',
    moneda: 'soles',
    estado: 'pendiente',
    fechaDescuento: '22-02-2021',
    tipoTasa: 'nominal',
    periodo: 'anual',
    banco: 'Scotiabank',
    documentos: [
      {
        id: 5,
        cliente: { nombre: "Carlos", apellidos: "López", dni: "98765432", direccion: "Av. Los Álamos 234" },
        estado: "pendiente de pago",
        tipo: "letra",
        moneda: "PEN",
        valorNominal: 9000.456,
        tasaDescuento: 0.12,
        montoRecibido: 567.89,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-06-01"),
        fechaDescuento: new Date("2024-07-01"),
        fechaVencimiento: new Date("2024-10-01"),
        banco: "BCP"
      },
      {
        id: 6,
        cliente: { nombre: "Lucía", apellidos: "Fernández", dni: "43215678", direccion: "Jr. Primavera 654" },
        estado: "pendiente de pago",
        tipo: "factura",
        moneda: "USD",
        valorNominal: 4000.890,
        tasaDescuento: 0.12,
        montoRecibido: 678.90,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-05-05"),
        fechaDescuento: new Date("2024-06-05"),
        fechaVencimiento: new Date("2024-09-05"),
        banco: "BCP"
      },
    ]
  },
  {
    id: 4,
    nombre: 'cartera 4',
    moneda: 'soles',
    estado: 'cancelado',
    fechaDescuento: '30-03-2021',
    tipoTasa: 'efectiva',
    periodo: 'mensual',
    banco: 'BBVA',
    documentos: [
      {
        id: 7,
        cliente: { nombre: "Miguel", apellidos: "Torres", dni: "34567890", direccion: "Av. Las Flores 123" },
        estado: "pendiente de pago",
        tipo: "letra",
        moneda: "PEN",
        valorNominal: 12000.234,
        tasaDescuento: 0.12,
        montoRecibido: 789.01,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-04-15"),
        fechaDescuento: new Date("2024-05-15"),
        fechaVencimiento: new Date("2024-08-15"),
        banco: "BCP"
      },
      {
        id: 8,
        cliente: { nombre: "Diana", apellidos: "García", dni: "87654321", direccion: "Calle La Luna 654" },
        estado: "pendiente de pago",
        tipo: "factura",
        moneda: "USD",
        valorNominal: 3000.123,
        tasaDescuento: 0.12,
        montoRecibido: 890.12,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-03-20"),
        fechaDescuento: new Date("2024-04-20"),
        fechaVencimiento: new Date("2024-07-20"),
        banco: "BCP"
      },
    ]
  },
  {
    id: 5,
    nombre: 'cartera 5',
    moneda: 'dólares',
    estado: 'pendiente',
    fechaDescuento: '05-04-2021',
    tipoTasa: 'nominal',
    periodo: 'semestral',
    banco: 'BCP',
    documentos: [
      {
        id: 9,
        cliente: { nombre: "Pedro", apellidos: "Cruz", dni: "12349876", direccion: "Jr. El Sol 876" },
        estado: "pendiente de pago",
        tipo: "letra",
        moneda: "PEN",
        valorNominal: 11000.345,
        tasaDescuento: 0.12,
        montoRecibido: 912.34,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-01-10"),
        fechaDescuento: new Date("2024-02-10"),
        fechaVencimiento: new Date("2024-05-10"),
        banco: "BCP"
      },
      {
        id: 10,
        cliente: { nombre: "Gabriela", apellidos: "Martínez", dni: "65478912", direccion: "Av. La Paz 432" },
        estado: "pendiente de pago",
        tipo: "factura",
        moneda: "USD",
        valorNominal: 6000.234,
        tasaDescuento: 0.12,
        montoRecibido: 456.78,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-02-15"),
        fechaDescuento: new Date("2024-03-15"),
        fechaVencimiento: new Date("2024-06-15"),
        banco: "BCP"
      },
    ]
  },
];
const arrClients: Client[] = [
  { nombre: 'Juan', apellidos: 'Pérez', dni: '12345678A', direccion: 'Calle Falsa 1' },
  { nombre: 'Ana', apellidos: 'Gómez', dni: '87654321B', direccion: 'Avenida Siempre Viva 742' },
  { nombre: 'Luis', apellidos: 'Martínez', dni: '23456789C', direccion: 'Plaza Mayor 456' },
  { nombre: 'María', apellidos: 'López', dni: '34567890D', direccion: 'Paseo del Río 89' },
  { nombre: 'Carlos', apellidos: 'Sánchez', dni: '45678901E', direccion: 'Camino de Santiago 12' },
  { nombre: 'Laura', apellidos: 'Hernández', dni: '56789012F', direccion: 'Calle del Sol 34' },
  { nombre: 'Fernando', apellidos: 'Ramírez', dni: '67890123G', direccion: 'Calle Luna 56' },
  { nombre: 'Isabel', apellidos: 'Díaz', dni: '78901234H', direccion: 'Calle de la Paz 78' },
  { nombre: 'Javier', apellidos: 'Torres', dni: '89012345I', direccion: 'Avenida del Libertador 90' },
  { nombre: 'Patricia', apellidos: 'Flores', dni: '90123456J', direccion: 'Calle Nueva 11' },
  { nombre: 'Pedro', apellidos: 'Martín', dni: '01234567K', direccion: 'Calle Real 22' },
  { nombre: 'Elena', apellidos: 'Cruz', dni: '12345679L', direccion: 'Calle Verde 33' },
  { nombre: 'Ricardo', apellidos: 'Reyes', dni: '23456780M', direccion: 'Avenida del Mar 44' },
  { nombre: 'Sofía', apellidos: 'Mendoza', dni: '34567891N', direccion: 'Paseo de la Flora 55' },
  { nombre: 'Diego', apellidos: 'Castro', dni: '45678902O', direccion: 'Calle de la Luna 66' },
  { nombre: 'Gabriela', apellidos: 'Salas', dni: '56789013P', direccion: 'Plaza del Sol 77' },
  { nombre: 'Andrés', apellidos: 'García', dni: '67890124Q', direccion: 'Calle de la Tierra 88' },
  { nombre: 'Natalia', apellidos: 'Mora', dni: '78901235R', direccion: 'Avenida de los Árboles 99' },
  { nombre: 'Víctor', apellidos: 'Pineda', dni: '89012346S', direccion: 'Calle del Viento 100' },
  { nombre: 'Cecilia', apellidos: 'Vega', dni: '90123457T', direccion: 'Calle del Agua 200' },
];
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private portfoliosList = new BehaviorSubject<Portfolio[]>(arrPortfolio);

  private clientList = new BehaviorSubject<Client[]>(arrClients);
  clientList$ =  this.clientList.asObservable();

  constructor(
  ) { }
  

  get portfolios(): Observable<Portfolio[]>{
    return this.portfoliosList.asObservable();
  }
  addPortfolio({nombre, moneda, fechaDescuento, banco, tipoTasa,periodo}:any){
    const estado = 'pendiente';
    const id=arrPortfolio.length+1;
    const portfolio:Portfolio = {id,nombre,moneda,estado, banco,tipoTasa,periodo, fechaDescuento,documentos:[]}
    arrPortfolio.unshift(portfolio);
    this.portfoliosList.next(arrPortfolio);

  }
  getDetailsById(id:number):Portfolio{
    const result = arrPortfolio.find(portfolio=>portfolio.id===id);
    return result!;
  }
  addDocumentToPortfolio(portfolioId:number,{tipo,valorNominal,fechaEmision,fechaVencimiento,client}:any){
    let clientSelected:Client=client;
    arrPortfolio.map(portf=>{
      if(portf.id===portfolioId){
        const id = arrPortfolio.length+1;
        const estado = 'pendiente de pago'
        const newDocument:financialDocument = { 
          id,
          cliente: clientSelected,
          estado,
          tipo,
          moneda:portf.moneda,
          valorNominal,
          tasaDescuento:12.5,
          montoRecibido:5000.0,
          tcea:500,
          tipoTasa:'nominal',
          fechaEmision,
          fechaDescuento: new Date(),
          fechaVencimiento,
          banco:portf.banco
         }
         //agregar al portfolio
         //return portf; 
        }
        return portf;
    })
    //emitir el nuevo arreglo
    /**
     * id: 9,
        cliente: { nombre: "Pedro", apellidos: "Cruz", dni: "12349876", direccion: "Jr. El Sol 876" },
        estado: "pendiente de pago",
        tipo: "letra",
        moneda: "PEN",
        valorNominal: 11000.345,
        tasaDescuento: 0.12,
        montoRecibido: 912.34,
        tcea: 0.12,
        tipoTasa: "nominal",
        fechaEmision: new Date("2024-01-10"),
        fechaDescuento: new Date("2024-02-10"),
        fechaVencimiento: new Date("2024-05-10"),
        banco: "BCP"
     */
  }

  addClient(client:Client){
    arrClients.push(client);
    this.clientList.next(arrClients);

  }

}
