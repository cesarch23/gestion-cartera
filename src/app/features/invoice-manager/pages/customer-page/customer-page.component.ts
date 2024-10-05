import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface Client {
  nombre: string;
  apellidos: string;
  dni: string;
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
@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements AfterViewInit {
  displayedColumns: string[] = ['nombre', 'apellidos', 'dni', 'direccion'];
  dataSource = new MatTableDataSource<Client>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator?: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator? this.paginator: null;
  }

}
