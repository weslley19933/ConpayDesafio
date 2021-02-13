import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../url/api.service';

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
    private api: ApiService) { }

  pagar(allProdutoObj: any) {

    const options: any = {
      headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'})
    };

    return this.http.post<any>(`${this.api.base+this.api.pagar}`, JSON.stringify(allProdutoObj))
    .subscribe((res: any) => {
      console.log(res);
    });
  }

}
