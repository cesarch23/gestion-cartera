import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClientDialogComponent } from '../../components/client-dialog/client-dialog.component';
import { Client } from '../../models/portfolio.interface';
import { InvoiceService } from '../../services/invoice.service';



@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['nombre', 'apellidos', 'ruc', 'direccion'];
  dataCustomer = new MatTableDataSource<Client>([]);
  
  businessColumns: string[] = ['ruc', 'comercial', 'social', 'direccion'];
  dataBusiness = new MatTableDataSource<Client>([]);


  constructor(
    private dialog:MatDialog,
    private invService:InvoiceService,


   ){
  }
  ngOnInit(): void {
    this.invService.businessList$.subscribe(businessArr=> this.dataBusiness.data = businessArr)
    this.invService.clientList$.subscribe(clientArr=> this.dataCustomer.data = clientArr)
    
    this.invService.getClients('persona').subscribe()
    this.invService.getClients('empresa').subscribe();

  }

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
