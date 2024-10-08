import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Portfolio } from '../../models/portfolio.interface';
import { InvoiceService } from '../../services/invoice.service';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioDialogComponent } from '../../components/portfolio-dialog/portfolio-dialog.component';



@Component({
  selector: 'app-porfolio-page',
  templateUrl: './porfolio-page.component.html',
  styleUrls: ['./porfolio-page.component.css']
})
export class PorfolioPageComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['nombre', 'banco', 'estado', 'acciones'];
  dataSource!:MatTableDataSource<Portfolio>;
  @ViewChild(MatPaginator)
  paginator?: MatPaginator;
  arrayPortfolio!:Portfolio[];
  constructor(
    private router:Router,
    private invoiceServ:InvoiceService,
    private dialog:MatDialog
    
  ){ }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.invoiceServ.portfolios.subscribe(values => {
      this.dataSource = new MatTableDataSource<Portfolio>(values);
    });
    
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
}
