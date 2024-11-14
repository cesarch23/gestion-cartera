import { Component, Inject, inject, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bank, BillForm, Client, FinancialDocument, Portfolio } from '../../models/portfolio.interface';
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
    @Inject(MAT_DIALOG_DATA) public data:{portfolio:Portfolio, navigate: boolean},
    private router:Router
  ){}
  billForm:FormGroup = new FormGroup({
    valorNominal:new FormControl<number | null>(null,[Validators.required, Validators.min(0)]),
    //tipoTasa:new FormControl<string | null>(null,[Validators.required]),
    //periodo:new FormControl<string | null>(null,[Validators.required]),
    fechaEmision:new FormControl<Date | null>(null,[Validators.required]),
    fechaVencimiento:new FormControl<Date | null>(null,[Validators.required]),
    cliente:new FormControl<Client | null>(null,[Validators.required])
  })

  promissoryForm:FormGroup = new FormGroup({
    valorNominal:new FormControl<number | null>(null,[Validators.required, Validators.min(0)]),
    fechaEmision:new FormControl<Date | null>(null,[Validators.required]),
    fechaVencimiento:new FormControl<Date | null>(null,[Validators.required]),
    cliente:new FormControl<Client | null>(null,[Validators.required])
  })

  ngOnInit(): void {
    this.invoiceServ.clientAll$.subscribe(resp=> this.clients = resp);
    this.invoiceServ.getAllClients().subscribe();
    
    // this.invoiceServ.bankList$.subscribe(resp=>this.banks=resp);

  }

  addBill(){
    console.log(this.data.portfolio)
    this.billForm.markAllAsTouched()
    if(this.billForm.invalid) return;
    const {valorNominal, fechaEmision, fechaVencimiento, cliente }:BillForm = this.billForm.value;
    const financialDocument:FinancialDocument = 
    {
      valor_nominal:valorNominal,
      fecha_emision:fechaEmision, 
      fecha_vencimiento: fechaVencimiento, 
      id_cartera: this.data.portfolio.id, 
      tipo: 'factura',
      tipo_tasa: this.data.portfolio.tipo_tasa,
      periodo: this.data.portfolio.periodo,
      capitalizacion: this.data.portfolio.capitalizacion,
      ruc_cliente:cliente.ruc,
      estado:"pendiente"
    };
      
    this.invoiceServ.addDocument(financialDocument).subscribe({
      next:()=>{
        console.log(this.billForm)
        this.documentDialog.close();
        if(this.data.navigate) this.router.navigateByUrl(`/app/portfolio/${this.data.portfolio.id}`);

      },
      error:()=>{
        console.log('error')
      }
    })
    console.log(fechaVencimiento)
     
     
  }
  addPromissory(){
    this.promissoryForm.markAllAsTouched()
    if(this.promissoryForm.invalid) return;
    const {valorNominal, fechaEmision, fechaVencimiento, cliente }:BillForm = this.promissoryForm.value;
    const financialDocument:FinancialDocument = 
    {
      valor_nominal:valorNominal,
      fecha_emision:fechaEmision, 
      fecha_vencimiento: fechaVencimiento, 
      id_cartera: this.data.portfolio.id, 
      tipo: 'letra',
      tipo_tasa: this.data.portfolio.tipo_tasa,
      periodo: this.data.portfolio.periodo,
      capitalizacion: this.data.portfolio.capitalizacion,
      ruc_cliente:cliente.ruc,
      estado:"pendiente"
    };
      
    this.invoiceServ.addDocument(financialDocument).subscribe({
      next:()=>{
        console.log(this.promissoryForm)
        this.documentDialog.close();
        if(this.data.navigate) this.router.navigateByUrl(`/app/portfolio/${this.data.portfolio.id}`);

      },
      error:()=>{
        console.log('error')
      }
    })
     
  }
}
