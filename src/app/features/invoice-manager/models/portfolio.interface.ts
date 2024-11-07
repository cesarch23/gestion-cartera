type Period = "mensual" | "anual" | "diario";
type TipoTasa = "nominal" | "efectiva";
type Moneda =  "PEN" | "USD";
export type Rol= 'persona' | 'empresa'
export interface Business {
    id: number;
    ruc:string;
    nombreComercial: string;
    razonSocial: string;
    direccion: string;
}
/**
 {
    "direccion": "persuasdf",
    "id": 4,
    "apellido": "felixxx",
    "razon_social": "string",
    "ruc": "12345678903",
    "nombre": "felix",
    "ruc_company": "12345678901",
    "nombre_comercial": "string",
    "rol": "persona"
  }  

 */
export interface Client {
    id:number;
    direccion:string,
    apellidos: string;
    razon_social:string;
    ruc: string;
    nombre: string;
    ruc_company:string;
    nombre_comercial:String;
    rol: Rol;
}
export interface financialDocument {
    id:number;
    cliente: Client;
    estado: string;
    tipo: string;
    moneda:Moneda;
    valorNominal: number;
    montoRecibido: number;
    tcea:number;
    tipoTasa: TipoTasa;
    fechaEmision:Date;
    fechaDescuento:Date; // es el mismo que la de la cartera
    fechaVencimiento:Date;
    bancoEnviado: Bank;
    plazo:number; // duracion de la factura o letra
    periodo: Period  // mensual, anual, quincenal, etc
    tasaDescuento:number;
    interesDescontado:number;
}
export interface Bank{
    id:number;
    nombre: string;

}
export interface BillForm {
    valorNominal: number ;
    tipoTasa: TipoTasa;
    fechaEmision: Date ;
    fechaVencimiento:Date ;
    cliente: Client ;
    periodo: Period;
}
export interface Portfolio {
    id:number;
    nombre: string;
    moneda:Moneda;
    estado: string;
    fechaDescuento: Date; // es la fecha en la que generan las facturas y es unico
    // tipoTasa: string; // todas facturas letra tendran el mismo tipo de tasa???
    // periodo: string;
    bancoEnviado:Bank; // es el banco al que fueron enviados estas facturas o letras todas estan en un mismo banco dentro de una cartera
    documentos:financialDocument[]
  }
  export interface PortfolioForm{
    nombre:string;
    moneda:Moneda;
    fechaDescuento:Date;
    bancoEnviado: Bank
  }