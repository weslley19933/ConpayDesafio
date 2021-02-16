import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadosPagamento } from 'src/app/interfaces/pagamento';
import { ApiService } from '../url/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalstatusComponent } from 'src/app/components/modalstatus/modalstatus.component';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  allProdutoObj = {
    installments: 0,
    value: 0,
    shippingAmount: 0,
    card: {
      number: '',
      exp_month: '',
      exp_year: '',
      security_code: '',
      holder: {
        name: ''
      }
    },
    split: [],
    client: {
      fullName: '',
      email: '',
      documentNumber: '',
      dateOfBirth: '',
      ddd: '',
      phoneNumber: '',
      address: {
        street: '',
        number: '',
        complement: '',
        postalCode: '',
        district: '',
        city: '',
        federationUnit: ''
      },
      shippingAddress: {
        street: '',
        receiverName: '',
        number: '',
        complement: '',
        postalCode: '',
        district: '',
        city: '',
        federationUnit: ''
      }
    },
    shoppingCart: []
  }

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private matDialog: MatDialog) { }

    finalizarTransacao (allObj: any) {
      const options: any = {
        headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'}),
        observe: 'response' as 'response'
      };
  
      return this.http.post<any>(`${this.api.base+this.api.pagar}`, JSON.stringify(allObj), options)
      .subscribe((data: any) => {
            console.log(data);
            window.localStorage.setItem('status', data.body.status);
            window.localStorage.setItem('message', data.body.message);
            this.openModal();

      })

    }

    
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open( ModalstatusComponent, dialogConfig);
  }

}
