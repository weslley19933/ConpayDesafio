import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'conpayPagamentos';

  constructor(
    private loginService: LoginService,
    private router: Router) {
  }

  
}
