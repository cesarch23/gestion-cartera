import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bank } from '../../models/portfolio.interface';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-bank-page',
  templateUrl: './bank-page.component.html',
  styleUrls: ['./bank-page.component.css']
})
export class BankPageComponent implements OnInit {
  
  bankColumns = ['orden', 'nombre']
  banks = new MatTableDataSource<Bank>([])
  
  constructor(
    private invService:InvoiceService,

  ){}
  
  ngOnInit(): void {
    this.invService.bankList$.subscribe(banks => this.banks.data = banks)
    this.invService.getBanks().subscribe();
  }
  openBankForm(){


  }
}
