
export interface Client {
    nombre: string;
    apellidos: string;
    dni: string;
    direccion: string;
}
export interface PortfolioDetails {
    id:number;
    cliente: Client;
    estado: string;
    tipo: string;
    moneda: string;
    valorNominal: number;
    tasaDescuento: number;
    montoRecibido: number;
    tcea:number;
    tipoTasa:string;
    fechaEmision:Date;
    fechaDescuento:Date;
    fechaVencimiento:Date;
    banco:String;
    
}
export interface Portfolio {
    id:number;
    nombre: string;
    moneda: string;
    estado: string;
    fechaDescuento: string;
    tipoTasa: string;
    periodo: string;
    banco: string;
    documentos:PortfolioDetails[]
  }