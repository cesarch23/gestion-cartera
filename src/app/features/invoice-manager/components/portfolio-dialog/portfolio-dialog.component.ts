import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-portfolio-dialog',
  templateUrl: './portfolio-dialog.component.html',
  styleUrls: ['./portfolio-dialog.component.css']
})
export class PortfolioDialogComponent {

  constructor(
    private invoiceServ:InvoiceService,
    private portfolioDialog:DialogRef<PortfolioDialogComponent>

  ){
    
  }
  portfolioForm:FormGroup = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    moneda: new FormControl('',[Validators.required]),
    fechaDescuento:new FormControl('', [Validators.required]),
    banco:new FormControl('', [Validators.required]),
    tipoTasa:new FormControl<string | null>(null,[Validators.required]),
    periodo:new FormControl<string | null>(null,[Validators.required]),
    capitalizacion:new FormControl<number | null>(null,[]),
    tasa:new FormControl < number | null>(null,[Validators.required] )
  });

  addPortfolio(){
    console.log(this.portfolioForm)
    console.log(this.portfolioForm.value.tipoTasa)
    if(this.portfolioForm.invalid)
      {
        this.portfolioForm.markAllAsTouched;
        return;
      }
    // const {nombre, moneda, fechaDescuento, tipoTasa, periodo, bancoEnviado} = this.portfolioForm.value;
    const {nombre, moneda, fechaDescuento, bancoEnviado} = this.portfolioForm.value;
    this.invoiceServ.addPortfolio({nombre, moneda, fechaDescuento,bancoEnviado});
    this.portfolioDialog.close();
  }

}
