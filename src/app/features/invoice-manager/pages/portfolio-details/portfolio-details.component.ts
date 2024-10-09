import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Portfolio, financialDocument } from '../../models/portfolio.interface';
import { InvoiceService } from '../../services/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { DocumentDialogComponent } from '../../components/document-dialog/document-dialog.component';
import { MatDialog } from '@angular/material/dialog';

// }
// const portfoDta: PortfolioDetails[] = [
//   {
//     id: 1,
//     cliente: { nombre: "Juan", apellidos: "Pérez", dni: "12345678", direccion: "Av. Siempre Viva 123" },
//     estado: "pendiente de pago",
//     tipo: "letra",
//     moneda: "PEN",
//     valorNominal: 10000.123,
//     tasaDescuento: 0.12,
//     montoRecibido: 123.34,
//     tcea: 0.12,
//     tipoTasa: "nominal",
//     fechaEmision: new Date("2024-10-01"),
//     fechaDescuento: new Date("2024-11-01"),
//     fechaVencimiento: new Date("2025-01-01"),
//     banco: "BCP"
//   },
//   {
//     id: 2,
//     cliente: { nombre: "María", apellidos: "Gómez", dni: "87654321", direccion: "Calle Falsa 456" },
//     estado: "pendiente de pago",
//     tipo: "factura",
//     moneda: "USD",
//     valorNominal: 5000.567,
//     tasaDescuento: 0.12,
//     montoRecibido: 223.45,
//     tcea: 0.12,
//     tipoTasa: "nominal",
//     fechaEmision: new Date("2024-09-15"),
//     fechaDescuento: new Date("2024-10-15"),
//     fechaVencimiento: new Date("2024-12-15"),
//     banco: "BCP"
//   },
//   {
//     id: 3,
//     cliente: { nombre: "Luis", apellidos: "Ramírez", dni: "65432189", direccion: "Jr. Los Sauces 789" },
//     estado: "pendiente de pago",
//     tipo: "letra",
//     moneda: "PEN",
//     valorNominal: 15000.789,
//     tasaDescuento: 0.12,
//     montoRecibido: 345.67,
//     tcea: 0.12,
//     tipoTasa: "nominal",
//     fechaEmision: new Date("2024-08-01"),
//     fechaDescuento: new Date("2024-09-01"),
//     fechaVencimiento: new Date("2024-12-01"),
//     banco: "BCP"
//   },
//   {
//     id: 4,
//     cliente: { nombre: "Ana", apellidos: "Sánchez", dni: "65498732", direccion: "Calle Principal 987" },
//     estado: "pendiente de pago",
//     tipo: "factura",
//     moneda: "USD",
//     valorNominal: 7000.234,
//     tasaDescuento: 0.12,
//     montoRecibido: 456.78,
//     tcea: 0.12,
//     tipoTasa: "nominal",
//     fechaEmision: new Date("2024-07-10"),
//     fechaDescuento: new Date("2024-08-10"),
//     fechaVencimiento: new Date("2024-11-10"),
//     banco: "BCP"
//   },
//   {
//     id: 5,
//     cliente: { nombre: "Carlos", apellidos: "López", dni: "98765432", direccion: "Av. Los Álamos 234" },
//     estado: "pendiente de pago",
//     tipo: "letra",
//     moneda: "PEN",
//     valorNominal: 9000.456,
//     tasaDescuento: 0.12,
//     montoRecibido: 567.89,
//     tcea: 0.12,
//     tipoTasa: "nominal",
//     fechaEmision: new Date("2024-06-01"),
//     fechaDescuento: new Date("2024-07-01"),
//     fechaVencimiento: new Date("2024-10-01"),
//     banco: "BCP"
//   },
//   {
//     id: 6,
//     cliente: { nombre: "Lucía", apellidos: "Fernández", dni: "43215678", direccion: "Jr. Primavera 654" },
//     estado: "pendiente de pago",
//     tipo: "factura",
//     moneda: "USD",
//     valorNominal: 4000.890,
//     tasaDescuento: 0.12,
//     montoRecibido: 678.90,
//     tcea: 0.12,
//     tipoTasa: "nominal",
//     fechaEmision: new Date("2024-05-05"),
//     fechaDescuento: new Date("2024-06-05"),
//     fechaVencimiento: new Date("2024-09-05"),
//     banco: "BCP"
//   },
//   {
//     id: 7,
//     cliente: { nombre: "Miguel", apellidos: "Torres", dni: "34567890", direccion: "Av. Las Flores 123" },
//     estado: "pendiente de pago",
//     tipo: "letra",
//     moneda: "PEN",
//     valorNominal: 12000.234,
//     tasaDescuento: 0.12,
//     montoRecibido: 789.01,
//     tcea: 0.12,
//     tipoTasa: "nominal",
//     fechaEmision: new Date("2024-04-15"),
//     fechaDescuento: new Date("2024-05-15"),
//     fechaVencimiento: new Date("2024-08-15"),
//     banco: "BCP"
//   },
//   {
//     id: 8,
//     cliente: { nombre: "Diana", apellidos: "García", dni: "87654321", direccion: "Calle La Luna 654" },
//     estado: "pendiente de pago",
//     tipo: "factura",
//     moneda: "USD",
//     valorNominal: 3000.123,
//     tasaDescuento: 0.12,
//     montoRecibido: 890.12,
//     tcea: 0.12,
//     tipoTasa: "nominal",
//     fechaEmision: new Date("2024-03-20"),
//     fechaDescuento: new Date("2024-04-20"),
//     fechaVencimiento: new Date("2024-07-20"),
//     banco: "BCP"
//   },
//   {
//     id: 9,
//     cliente: { nombre: "Pedro", apellidos: "Cruz", dni: "12349876", direccion: "Jr. El Sol 876" },
//     estado: "pendiente de pago",
//     tipo: "letra",
//     moneda: "PEN",
//     valorNominal: 5000.567,
//     tasaDescuento: 0.12,
//     montoRecibido: 345.67,
//     tcea: 0.12,
//     tipoTasa: "nominal",
//     fechaEmision: new Date("2024-02-01"),
//     fechaDescuento: new Date("2024-03-01"),
//     fechaVencimiento: new Date("2024-06-01"),
//     banco: "BCP"
//   },
//   {
//     id: 10,
//     cliente: { nombre: "Sofía", apellidos: "Hernández", dni: "54321987", direccion: "Av. Los Rosales 321" },
//     estado: "pendiente de pago",
//     tipo: "factura",
//     moneda: "USD",
//     valorNominal: 2500.789,
//     tasaDescuento: 0.12,
//     montoRecibido: 567.89,
//     tcea: 0.12,
//     tipoTasa: "nominal",
//     fechaEmision: new Date("2024-01-15"),
//     fechaDescuento: new Date("2024-02-15"),
//     fechaVencimiento: new Date("2024-05-15"),
//     banco: "BCP"
//   }
// ];

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements AfterViewInit, OnInit {

  detailsColumns = ['id','editar','cliente','estado','tipo','moneda','valorNominal','tasaDescuento','montoRecibido'
                    ,'tcea','tipoTasa','fechaEmision','fechaDescuento','fechaVencimiento','banco']

  
  portfolio?:Portfolio;
  documents:any;
  
  constructor(
    private invoiceServ:InvoiceService,
    private route:ActivatedRoute,
    private dialog:MatDialog
  ){

  }

  @ViewChild('paginator') paginator?:MatPaginator
  @ViewChild(MatSort) sort?:MatSort 

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || "0");
    console.log(id)
    this.portfolio = this.invoiceServ.getDetailsById(id)
    this.documents= new MatTableDataSource <financialDocument>(this.portfolio.documentos);
  }

  ngAfterViewInit(): void {
    this.documents.paginator = this.paginator ? this.paginator : null;
    this.documents.sort= this.sort ? this.sort : null;
  }

  openDocumentDlg(){
    this.dialog.open(DocumentDialogComponent,{
      maxWidth: 527
    })
  }

}
