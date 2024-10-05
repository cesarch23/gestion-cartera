import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface Portfolio {
  id:number;
  nombre: string;
  moneda: string;
  estado: string;
  fechaDescuento: string;
  tipoTasa: string;
  periodo: string;
  banco: string;
}

const ELEMENT_DATA: Portfolio[] = [
  {id: 1, nombre: 'cartera 1', moneda: 'soles', estado: 'pendiente', fechaDescuento: '12-12-2020', tipoTasa: 'nominal', periodo: 'mensual', banco: 'BCP'},
  {id: 2, nombre: 'cartera 2', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '15-01-2021', tipoTasa: 'efectiva', periodo: 'trimestral', banco: 'Interbank'},
  {id: 3, nombre: 'cartera 3', moneda: 'soles', estado: 'pendiente', fechaDescuento: '22-02-2021', tipoTasa: 'nominal', periodo: 'anual', banco: 'Scotiabank'},
  {id: 4, nombre: 'cartera 4', moneda: 'soles', estado: 'cancelado', fechaDescuento: '30-03-2021', tipoTasa: 'efectiva', periodo: 'mensual', banco: 'BBVA'},
  {id: 5, nombre: 'cartera 5', moneda: 'dólares', estado: 'pendiente', fechaDescuento: '05-04-2021', tipoTasa: 'nominal', periodo: 'semestral', banco: 'BCP'},
  {id: 6, nombre: 'cartera 6', moneda: 'soles', estado: 'cancelado', fechaDescuento: '18-05-2021', tipoTasa: 'efectiva', periodo: 'trimestral', banco: 'Interbank'},
  {id: 7, nombre: 'cartera 7', moneda: 'soles', estado: 'pendiente', fechaDescuento: '25-06-2021', tipoTasa: 'nominal', periodo: 'mensual', banco: 'Scotiabank'},
  {id: 8, nombre: 'cartera 8', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '12-07-2021', tipoTasa: 'efectiva', periodo: 'anual', banco: 'BBVA'},
  {id: 9, nombre: 'cartera 9', moneda: 'soles', estado: 'pendiente', fechaDescuento: '19-08-2021', tipoTasa: 'nominal', periodo: 'mensual', banco: 'BCP'},
  {id: 10, nombre: 'cartera 10', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '26-09-2021', tipoTasa: 'efectiva', periodo: 'trimestral', banco: 'Interbank'},
  {id: 11, nombre: 'cartera 11', moneda: 'soles', estado: 'pendiente', fechaDescuento: '03-10-2021', tipoTasa: 'nominal', periodo: 'semestral', banco: 'Scotiabank'},
  {id: 12, nombre: 'cartera 12', moneda: 'soles', estado: 'cancelado', fechaDescuento: '11-11-2021', tipoTasa: 'efectiva', periodo: 'mensual', banco: 'BBVA'},
  {id: 13, nombre: 'cartera 13', moneda: 'dólares', estado: 'pendiente', fechaDescuento: '21-12-2021', tipoTasa: 'nominal', periodo: 'anual', banco: 'BCP'},
  {id: 14, nombre: 'cartera 14', moneda: 'soles', estado: 'cancelado', fechaDescuento: '09-01-2022', tipoTasa: 'efectiva', periodo: 'trimestral', banco: 'Interbank'},
  {id: 15, nombre: 'cartera 15', moneda: 'soles', estado: 'pendiente', fechaDescuento: '28-02-2022', tipoTasa: 'nominal', periodo: 'mensual', banco: 'Scotiabank'},
  {id: 16, nombre: 'cartera 16', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '15-03-2022', tipoTasa: 'efectiva', periodo: 'semestral', banco: 'BBVA'},
  {id: 17, nombre: 'cartera 17', moneda: 'soles', estado: 'pendiente', fechaDescuento: '22-04-2022', tipoTasa: 'nominal', periodo: 'mensual', banco: 'BCP'},
  {id: 18, nombre: 'cartera 18', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '30-05-2022', tipoTasa: 'efectiva', periodo: 'trimestral', banco: 'Interbank'},
  {id: 19, nombre: 'cartera 19', moneda: 'soles', estado: 'pendiente', fechaDescuento: '18-06-2022', tipoTasa: 'nominal', periodo: 'anual', banco: 'Scotiabank'},
  {id: 20, nombre: 'cartera 20', moneda: 'soles', estado: 'cancelado', fechaDescuento: '25-07-2022', tipoTasa: 'efectiva', periodo: 'mensual', banco: 'BBVA'},
  {id: 21, nombre: 'cartera 21', moneda: 'dólares', estado: 'pendiente', fechaDescuento: '11-08-2022', tipoTasa: 'nominal', periodo: 'trimestral', banco: 'BCP'},
  {id: 22, nombre: 'cartera 22', moneda: 'soles', estado: 'cancelado', fechaDescuento: '29-09-2022', tipoTasa: 'efectiva', periodo: 'semestral', banco: 'Interbank'},
  {id: 23, nombre: 'cartera 23', moneda: 'soles', estado: 'pendiente', fechaDescuento: '05-10-2022', tipoTasa: 'nominal', periodo: 'mensual', banco: 'Scotiabank'},
  {id: 24, nombre: 'cartera 24', moneda: 'dólares', estado: 'cancelado', fechaDescuento: '17-11-2022', tipoTasa: 'efectiva', periodo: 'anual', banco: 'BBVA'},
  {id: 25, nombre: 'cartera 25', moneda: 'soles', estado: 'pendiente', fechaDescuento: '30-12-2022', tipoTasa: 'nominal', periodo: 'trimestral', banco: 'BCP'}
];

@Component({
  selector: 'app-porfolio-page',
  templateUrl: './porfolio-page.component.html',
  styleUrls: ['./porfolio-page.component.css']
})
export class PorfolioPageComponent implements AfterViewInit{
  displayedColumns: string[] = ['nombre', 'banco', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Portfolio>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator?: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator? this.paginator: null;
  }
}
