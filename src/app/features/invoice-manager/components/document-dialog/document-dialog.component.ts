import { Component, Inject, inject, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bank, BillForm, Client } from '../../models/portfolio.interface';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-dialog',
  templateUrl: './document-dialog.component.html',
  styleUrls: ['./document-dialog.component.css']
})
export class DocumentDialogComponent implements OnInit  {

  public clients:Client[]=[];
  public banks:Bank[] = [];

  constructor(
    private invoiceServ:InvoiceService,
    private documentDialog:DialogRef<DocumentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{id:number, navigate: boolean},
    private router:Router
  ){}
  billForm:FormGroup = new FormGroup({
    valorNominal:new FormControl<number | null>(null,[Validators.required, Validators.min(0)]),
    tipoTasa:new FormControl<string | null>(null,[Validators.required]),
    periodo:new FormControl<string | null>(null,[Validators.required]),
    fechaEmision:new FormControl<Date | null>(null,[Validators.required]),
    fechaVencimiento:new FormControl<Date | null>(null,[Validators.required]),
    cliente:new FormControl<Client | null>(null,[Validators.required])
  })

  promissoryForm:FormGroup = new FormGroup({
    valorNominal:new FormControl<number | null>(null,[Validators.required, Validators.min(0)]),
    tipoTasa:new FormControl<string | null>(null,[Validators.required]),
    periodo:new FormControl<string | null>(null,[Validators.required]),
    fechaEmision:new FormControl<Date | null>(null,[Validators.required]),
    fechaVencimiento:new FormControl<Date | null>(null,[Validators.required]),
    cliente:new FormControl<Client | null>(null,[Validators.required])
  })

  ngOnInit(): void {
    this.invoiceServ.clientList$.subscribe(resp=> this.clients = resp);
    this.invoiceServ.bankList$.subscribe(resp=>this.banks=resp);

  }

  addBill(){
    // if(this.billForm.invalid){
    //   this.billForm.markAllAsTouched()
    //   return;
    // }
    // const {valorNominal, tipoTasa, fechaEmision, fechaVencimiento, cliente, periodo }:BillForm = this.billForm.value;
    // this.invoiceServ.addBillToPortfolio(this.data.id,{valorNominal,tipoTasa,fechaEmision,fechaVencimiento,cliente,periodo})
    // console.log(this.billForm)
    // console.log(fechaVencimiento)
    // this.documentDialog.close();  
    // if(this.data.navigate) this.router.navigateByUrl(`/app/portfolio/${this.data.id}`);
  }
  addPromissory(){
    // if(this.promissoryForm.invalid){
    //   this.promissoryForm.markAllAsTouched()
    //   return;
    // }
    // const {
    //   valorNominal, 
    //   tipoTasa,
    //   fechaEmision,
    //   fechaVencimiento,
    //   cliente,
    //   periodo
    // }: BillForm = this.promissoryForm.value;
    // this.invoiceServ.addPromissoryToPortfolio(this.data.id, {valorNominal, tipoTasa,fechaEmision, fechaVencimiento, cliente, periodo})
    // this.documentDialog.close();
    // if(this.data.navigate) this.router.navigateByUrl(`/app/portfolio/${this.data.id}`)
  }
}
