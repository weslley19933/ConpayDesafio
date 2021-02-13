import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //URL base
  readonly base: string = 'https://sandbox.conpay.com.br/'

  public login = 'v2/auth/token';
  public pagar = 'ecommerce/charges/charge'
  constructor() { }
}
