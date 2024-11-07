import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Portfolio } from '../../models/portfolio.interface';
import { InvoiceService } from '../../services/invoice.service';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDialogComponent } from '../../components/portfolio-dialog/portfolio-dialog.component';
import { DocumentDialogComponent } from '../../components/document-dialog/document-dialog.component';



@Component({
  selector: 'app-porfolio-page',
  templateUrl: './porfolio-page.component.html',
  styleUrls: ['./porfolio-page.component.css']
})
export class PorfolioPageComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['nombre', 'banco', 'estado', 'acciones'];
  dataSource = new MatTableDataSource<Portfolio>([]);

  constructor(
    private router:Router,
    private invoiceServ:InvoiceService,
    private dialog:MatDialog
    
  ){ }
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  
  ngOnInit(): void {
    this.invoiceServ.portfolios$.subscribe(portfolios => this.dataSource.data = portfolios)
    this.invoiceServ.getPortfolio().subscribe();
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator? this.paginator: null;
  }
  showDetails(id:number){
    this.router.navigate(['app/portfolio',id])
  }
  openPortfolioForm(){
    this.dialog.open(PortfolioDialogComponent,{
      maxWidth:527
    })
  }
  openDocumentForm(id:number){
    console.log(id)
    this.dialog.open(DocumentDialogComponent,{
      data:{id, navigate: true},
      maxWidth:608
    })

  }
}
