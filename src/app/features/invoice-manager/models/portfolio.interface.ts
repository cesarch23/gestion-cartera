type Period = "mensual" | "anual" | "diario";
type TipoTasa = "nominal" | "efectiva";
type Moneda =  "PEN" | "USD";
type DocumentType = "factura" | "letra"; 
type Capitalizacion = "anual" | "mensual" | "trimestral" | "semestral" | "diaria";
export type Rol= 'persona' | 'empresa'
export interface Business {
    id: number;
    ruc:string;
    nombreComercial: string;
    razonSocial: string;
    direccion: string;
}

export interface Client {
    id:number;
    direccion:string,
    apellido: string;
    razon_social:string;
    ruc: string;
    nombre: string;
    ruc_company:string;
    nombre_comercial:String;
    rol: Rol;
}

export interface FinancialDocument {
    id_cartera:number;
    tipo: DocumentType;
    valor_nominal: number;
    tipo_tasa: TipoTasa;
    periodo: Period  // mensual, anual, quincenal, etc
    capitalizacion: Capitalizacion;
    fecha_emision:Date;
    fecha_vencimiento:Date;
    //fechaDescuento:Date; // es el mismo que la de la cartera
    ruc_cliente:string;
    estado: string;
    
}
export interface Bank{
    id:number;
    nombre: string;

}
export interface BillForm {
    valorNominal: number;
    fechaEmision: Date ;
    fechaVencimiento:Date ;
    cliente: Client ;
   
}

export interface Portfolio {
    id:number;
    nombre: string;
    tipo_moneda:Moneda;
    estado: string;
    fecha_descuento: Date; // es la fecha en la que generan las facturas y es unico
    tipo_tasa: TipoTasa; // todas facturas letra tendran el mismo tipo de tasa???
    tasa:number;
    ruc_user:string;
    capitalizacion:Capitalizacion;
    periodo: Period;
    tcea:number;
    nombre_banco:string;

    id_banco:number;
    //documentos:financialDocument[]
  }
  export interface PortfolioForm{
    nombre:string;
    moneda:Moneda;
    fechaDescuento:Date;
    banco: Bank
    tipoTasa:TipoTasa;
    periodo:Period;
    tasa:number;
    capitalizacion:string;
  }