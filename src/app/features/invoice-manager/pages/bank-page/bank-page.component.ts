import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bank } from '../../models/portfolio.interface';
import { InvoiceService } from '../../services/invoice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BankDialogComponent } from '../../components/bank-dialog/bank-dialog.component';

@Component({
  selector: 'app-bank-page',
  templateUrl: './bank-page.component.html',
  styleUrls: ['./bank-page.component.css']
})
export class BankPageComponent implements OnInit, AfterViewInit {
  
  bankColumns = ['orden', 'nombre']
  banks = new MatTableDataSource<Bank>([])
  
  constructor(
    private invService:InvoiceService,
    private bankDialog: MatDialog

  ){}
  
  ngOnInit(): void {
    this.invService.bankList$.subscribe(banks => this.banks.data = banks)
    this.invService.getBanks().subscribe();
  }
  
  @ViewChild('bankPaginator') bankPaginator?: MatPaginator;
  
  ngAfterViewInit(): void {
    this.banks.paginator = this.bankPaginator? this.bankPaginator: null;
  }
  
  openBankForm(){

    this.bankDialog.open(BankDialogComponent,{
       maxWidth:527
    })
  }
}
