export interface registerForm{
    ruc:string;
    razon_social:string;
    direccion:string;
    sector:string;
    password:string;
}

export type RequestStatus= 'init' | 'failed' | 'sucess' | 'loading'