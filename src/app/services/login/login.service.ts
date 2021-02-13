import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService } from '../alerts/alert.service';
import { ApiService } from '../url/api.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient, 
    private api: ApiService,
    private alert: AlertService,
    private router: Router) {}


  
  login(accessKeyId: string, secretKey: string) {

    const options: any = {
      headers: new HttpHeaders({'Content-type': 'application/json; charset=UTF-8'}),
      observe: 'response' as 'response'
    };

    return this.http.post<any>(`${this.api.base+this.api.login}`, { accessKeyId, secretKey}, options)
    .subscribe((res: HttpResponse<any>) => {
      if(res && res.headers.get('ACCESS_TOKEN')) {
        window.localStorage.setItem('token', res.headers.get('ACCESS_TOKEN'));
        this.alert.alertaSnackBar("Login efetuado com sucesso!!!", "OK");
      } 
    });
  }

  getAuthToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }


}
