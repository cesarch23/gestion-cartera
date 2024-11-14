import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Portfolio, FinancialDocument, DocumentResponse } from '../../models/portfolio.interface';
import { InvoiceService } from '../../services/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { DocumentDialogComponent } from '../../components/document-dialog/document-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { RequestStatus } from 'src/app/auth/models/model.interface';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements AfterViewInit, OnInit, OnChanges {

  detailsColumns = ['id','cliente','estado','tipo','moneda','valorNominal','tasaDescuento','montoRecibido','interesDescontado'
                    ,'tcea','tipoTasa','fechaEmision','fechaDescuento','fechaVencimiento']

  
  portfolio:Portfolio | null = null;
  documents = new MatTableDataSource<DocumentResponse>([]);
  documentsStatus:RequestStatus='init';
  private portfolioId:number=0;
  
  constructor(
    private invoiceServ:InvoiceService,
    private route:ActivatedRoute,
    private dialog:MatDialog
  ){

  }
  ngOnChanges(changes: SimpleChanges): void {
  }

  @ViewChild('MatPaginator2') paginator?: MatPaginator
  @ViewChild(MatSort) sort?:MatSort 

  ngOnInit(): void {
    this.portfolioId = parseInt(this.route.snapshot.paramMap.get('id') || "0");
    
    this.invoiceServ.documents$.subscribe();
    this.invoiceServ.documents$.subscribe(resp=> this.documents.data = resp)

    this.documentsStatus='loading';
    this.invoiceServ.getPortfolioById(this.portfolioId).subscribe({
      next:(resp)=>{
        this.portfolio = resp[0]
        this.invoiceServ.getDocumentsById(this.portfolioId).subscribe({
          next:(resp)=>{
            this.documentsStatus='sucess'
            this.documents.data = resp
          },
          error:()=> this.documentsStatus='failed'
        })
      },
      error:()=> {console.log('error') }
    })
  
  }
  
  ngAfterViewInit(): void {
    this.documents.paginator = this.paginator ? this.paginator : null;
    this.documents.sort= this.sort ? this.sort : null;
  }

  openDocumentDlg(){
    this.dialog.open(DocumentDialogComponent,{
      data:{portfolio:this.portfolio, navigate: false},
      maxWidth: 608
    })
    
  }

}
