
export interface Client {
    nombre: string;
    apellidos: string;
    dni: string;
    direccion: string;
}
export interface financialDocument {
    id:number;
    cliente: Client;
    estado: string;
    tipo: string;
    moneda: "PEN" | "USD";
    valorNominal: number;
    montoRecibido: number;
    tcea:number;
    tipoTasa:"nominal" | "efectiva";
    fechaEmision:Date;
    fechaDescuento:Date; // es el mismo que la de la cartera
    fechaVencimiento:Date;
    bancoEnviado: Bank;
    plazo:number; // duracion de la factura o letra
    periodo: "mensual" | "anual" | "diario"; // mensual, anual, quincenal, etc
    tasaDescuento:number;
}
export interface Bank{
    nombre: string;
    tasaDescuentoRef:number;

}
export interface BillForm {
    valorNominal: number ;
    tipoTasa: "nominal" | "efectiva";
    fechaEmision: Date ;
    fechaVencimiento:Date ;
    cliente: Client ;
    periodo: "mensual" | "anual" | "diario";
}
export interface Portfolio {
    id:number;
    nombre: string;
    moneda: "PEN" | "USD";
    estado: string;
    fechaDescuento: Date; // es la fecha en la que generan las facturas y es unico
    // tipoTasa: string; // todas facturas letra tendran el mismo tipo de tasa???
    // periodo: string;
    bancoEnviado:Bank; // es el banco al que fueron enviados estas facturas o letras todas estan en un mismo banco dentro de una cartera
    documentos:financialDocument[]
  }
  export interface PortfolioForm{
    nombre:string;
    moneda: "PEN" | "USD";
    fechaDescuento:Date;
    bancoEnviado: Bank
  }