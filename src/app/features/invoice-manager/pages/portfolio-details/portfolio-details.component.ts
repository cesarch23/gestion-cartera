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
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';

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
    private dialog:MatDialog,
    private toastRef: MatSnackBar,
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
          error:()=> {
            this.documentsStatus='failed'
            this.documents.data = []
          }
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
  openToast(message:string,type:string){
    this.toastRef.openFromComponent(ToastComponent,{
      data:{ message, type },
      duration:5000,
      verticalPosition: 'top',
      horizontalPosition:'right'
     })
  }

  calculateTcea(){
    if(this.documents.data.length === 0){
      this.openToast('No hay documentos para calcular la TCEA', 'error');
      return;
    }
    
    let productTceaValorNominal = 0;
    let totalValorNominal = 0;
    this.documents.data.forEach(element => {
      productTceaValorNominal += element.valor_nominal * element.tcea;
      totalValorNominal += element.valor_nominal
    })
   const tcea = productTceaValorNominal / totalValorNominal;
   const tceaFormatted = tcea.toFixed(2);
   this.openToast(`TCEA: ${tceaFormatted}`, 'success');
  }

}
