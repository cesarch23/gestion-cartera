import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestStatus } from 'src/app/auth/models/model.interface';
import { Bank } from '../../models/portfolio.interface';
import { MatDialog } from '@angular/material/dialog';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';

@Component({
  selector: 'app-portfolio-dialog',
  templateUrl: './portfolio-dialog.component.html',
  styleUrls: ['./portfolio-dialog.component.css']
})
export class PortfolioDialogComponent implements OnInit {

  portfolioFormStatus:RequestStatus = 'init';
  bankList:Bank[] = [];
  constructor(
    private invoiceServ:InvoiceService,
    private portfolioDialog:DialogRef<PortfolioDialogComponent>,
    private toastRef:MatSnackBar

  ){
    
  }
  portfolioForm:FormGroup = new FormGroup({
    nombre: new FormControl < string> ('',[Validators.required]),
    moneda: new FormControl<string>  ('',[Validators.required]),
    fechaDescuento:new FormControl ('', [Validators.required]),
    banco:new FormControl('', [Validators.required]),
    tipoTasa:new FormControl<string >('',[Validators.required]),
    periodo:new FormControl<string >('',[Validators.required]),
    capitalizacion:new FormControl<string>('',[]),
    tasa:new FormControl < number | null>(null,[Validators.required] )
  });

  ngOnInit(): void {
    this.invoiceServ.bankList$.subscribe(banks => this.bankList = banks);
    this.invoiceServ.getBanks().subscribe();
  }
  openToast(message:string,type:string){
    this.toastRef.openFromComponent(ToastComponent,{
      data:{ message, type },
      duration:3000,
      verticalPosition: 'top',
      horizontalPosition:'right'
     })
  }

  addPortfolio(){
    console.log(this.portfolioForm)
    console.log(this.portfolioForm.value.tipoTasa)
    this.portfolioForm.markAllAsTouched();
    if(this.portfolioForm.invalid) return;
    this.portfolioFormStatus = 'loading';
    const {nombre, moneda, fechaDescuento, banco, tipoTasa, periodo, tasa, capitalizacion} = this.portfolioForm.value;
    this.invoiceServ.addPortfolio({nombre, moneda, fechaDescuento,banco,tipoTasa,periodo,tasa,capitalizacion})
      .subscribe({
        next:()=>{
          this.portfolioFormStatus = 'sucess';
          this.openToast('Cartera creada correctamente','success');
          this.portfolioDialog.close();
        },
        error:()=>{
          this.portfolioFormStatus = 'failed';
          this.openToast('Error al crear la cartera','error');
        }
      });
  }

}
