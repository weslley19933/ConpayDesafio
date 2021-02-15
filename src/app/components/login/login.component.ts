import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alerts/alert.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  img ='/assets/img/logo-conpay.png'

  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private loginService: LoginService,
    private alert: AlertService,
    private router: Router) { 

    this.fGroup = fBuilder.group({
      accessKeyId: ["", Validators.compose([Validators.required])],
      secretKey: ["", Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.fGroup.controls; }

  onSubmit() {
    if (this.fGroup.invalid) {
      if (this.f.accessKeyId.value == "") {
        this.alert.alertaSnackBar("Por favor, informe um usuário válido", "Ok");
        return;
      } else if(this.f.secretKey.value == "") {
        this.alert.alertaSnackBar("Por favor, informe uma senha válida", "Ok");
        return;
      } 
    } else {
      this.loginService.login(this.f.accessKeyId.value, this.f.secretKey.value);
    }

    this.router.navigate(['/produtos']);
  }

}
