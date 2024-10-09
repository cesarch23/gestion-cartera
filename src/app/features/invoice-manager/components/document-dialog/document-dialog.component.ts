import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../models/portfolio.interface';

@Component({
  selector: 'app-document-dialog',
  templateUrl: './document-dialog.component.html',
  styleUrls: ['./document-dialog.component.css']
})
export class DocumentDialogComponent {

  constructor(
    private invoiceServ:InvoiceService,
    
  ){}
  billForm:FormGroup = new FormGroup({
    valorNominal:new FormControl<number | null>(null,[Validators.required, Validators.min(0)]),
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

  addBill(){
    if(this.billForm.invalid){
      this.billForm.markAllAsTouched()
      return;
    }
    // agregamo dato y cerrramos
    const {} = this.billForm.value;
    
  }
  addPromissory(){
    if(this.promissoryForm.invalid){
      this.promissoryForm.markAllAsTouched()
      return;
    }
  }
}
