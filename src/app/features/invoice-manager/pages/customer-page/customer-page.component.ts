import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientDialogComponent } from '../../components/client-dialog/client-dialog.component';
export interface Client {
  nombre: string;
  apellidos: string;
  dni: string;
  direccion: string;
}
export interface Business {
  id: number;
  ruc:string;
  nombreComercial: string;
  razonSocial: string;
  direccion: string;
}

const ELEMENT_DATA: Client[] = [
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

const businessArr: Business[] = [
  { id: 1, nombreComercial: 'Tech Solutions', razonSocial: 'Tecnologías Avanzadas S.L.', direccion: 'Calle de la Innovación 12', ruc: 'B12345678' },
  { id: 2, nombreComercial: 'Green Energy', razonSocial: 'Energía Verde S.A.', direccion: 'Avenida de la Sostenibilidad 56', ruc: 'A87654321' },
  { id: 3, nombreComercial: 'Biosfera Natural', razonSocial: 'Biosfera Natural S.L.', direccion: 'Calle del Medio Ambiente 21', ruc: 'R99987654' },
  { id: 4, nombreComercial: 'ElectroMatic', razonSocial: 'ElectroMatic S.A.', direccion: 'Calle de la Tecnología 89', ruc: 'D23456789' },
  { id: 5, nombreComercial: 'Construcción y Obras', razonSocial: 'Construcción y Obras S.L.', direccion: 'Calle del Pilar 135', ruc: 'C34567890' },
  { id: 6, nombreComercial: 'Innovative Consulting', razonSocial: 'Consultoría Innovadora S.A.', direccion: 'Avenida de la Consultoría 42', ruc: 'E45678901' },
  { id: 7, nombreComercial: 'CiberTech', razonSocial: 'CiberTecnología S.L.', direccion: 'Calle del Software 78', ruc: 'F56789012' },
  { id: 8, nombreComercial: 'Marketing Solutions', razonSocial: 'Soluciones de Marketing S.A.', direccion: 'Avenida del Marketing 5', ruc: 'G67890123' },
  { id: 9, nombreComercial: 'AutoParts', razonSocial: 'AutoPiezas S.L.', direccion: 'Calle del Motor 9', ruc: 'H78901234' },
  { id: 10, nombreComercial: 'Digital Designs', razonSocial: 'Diseños Digitales S.A.', direccion: 'Calle de la Creatividad 67', ruc: 'I89012345' },
  { id: 11, nombreComercial: 'Global Transport', razonSocial: 'Transporte Global S.L.', direccion: 'Avenida del Transporte 23', ruc: 'J90123456' },
  { id: 12, nombreComercial: 'Luxury Homes', razonSocial: 'Viviendas de Lujo S.A.', direccion: 'Calle del Elegante 18', ruc: 'K01234567' },
  { id: 13, nombreComercial: 'Farmacia 24h', razonSocial: 'Farmacia 24h S.L.', direccion: 'Calle de la Salud 14', ruc: 'L12345678' },
  { id: 14, nombreComercial: 'SuperMart', razonSocial: 'Supermercados Mart S.A.', direccion: 'Calle del Comercio 122', ruc: 'M23456789' },
  { id: 15, nombreComercial: 'Media Corp', razonSocial: 'Corporación de Medios S.L.', direccion: 'Avenida de la Comunicación 89', ruc: 'N34567890' },
  { id: 16, nombreComercial: 'Global Shipping', razonSocial: 'Envíos Globales S.A.', direccion: 'Calle del Puerto 27', ruc: 'O45678901' },
  { id: 17, nombreComercial: 'Gourmet Foods', razonSocial: 'Alimentos Gourmet S.L.', direccion: 'Calle de la Gastronomía 11', ruc: 'P56789012' },
  { id: 18, nombreComercial: 'AutoCare', razonSocial: 'Servicios Automotrices S.A.', direccion: 'Calle de la Reparación 45', ruc: 'Q67890123' },
  { id: 19, nombreComercial: 'HealthTech', razonSocial: 'Tecnología en Salud S.L.', direccion: 'Avenida de la Salud 56', ruc: 'R78901234' },
  { id: 20, nombreComercial: 'RetailExpress', razonSocial: 'Ventas Express S.A.', direccion: 'Calle del Comercio 87', ruc: 'S89012345' },
  { id: 21, nombreComercial: 'Smart Solutions', razonSocial: 'Soluciones Inteligentes S.L.', direccion: 'Calle de la Innovación 34', ruc: 'T90123456' },
  { id: 22, nombreComercial: 'Mobile World', razonSocial: 'Mundo Móvil S.A.', direccion: 'Avenida de la Tecnología 90', ruc: 'U01234567' },
  { id: 23, nombreComercial: 'Cultural Events', razonSocial: 'Eventos Culturales S.L.', direccion: 'Calle de la Cultura 12', ruc: 'V12345678' },
  { id: 24, nombreComercial: 'EcoFarm', razonSocial: 'Granja Ecológica S.A.', direccion: 'Calle del Campo 50', ruc: 'W23456789' },
  { id: 25, nombreComercial: 'FastFoods', razonSocial: 'Comida Rápida S.L.', direccion: 'Avenida de los Restaurantes 39', ruc: 'X34567890' },
];


@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements AfterViewInit {

  displayedColumns: string[] = ['nombre', 'apellidos', 'dni', 'direccion'];
  dataCustomer = new MatTableDataSource<Client>(ELEMENT_DATA);
  
  businessColumns: string[] = ['ruc', 'comercial', 'social', 'direccion'];
  dataBusiness = new MatTableDataSource<Business>(businessArr);


  constructor(private dialog:MatDialog ){}

  @ViewChild('paginatorCustomer') paginatorCustomer?: MatPaginator;
  @ViewChild('paginatorBusiness') paginatorBusiness?: MatPaginator;

  ngAfterViewInit() {
    this.dataCustomer.paginator = this.paginatorCustomer? this.paginatorCustomer: null;
    this.dataBusiness.paginator = this.paginatorBusiness? this.paginatorBusiness: null;
  }
  addClient(){
    this.dialog.open(ClientDialogComponent,{
      maxWidth:527
    })
  }

}
