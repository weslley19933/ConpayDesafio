import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhodecomprasComponent } from './components/carrinhodecompras/carrinhodecompras.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { httpInterceptorProviders } from './interceptors';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutodetalhesComponent } from './components/produtos/produtodetalhes/produtodetalhes.component';
import { AreadepagamentoComponent } from './components/areadepagamento/areadepagamento/areadepagamento.component';
import { ModalstatusComponent } from './components/modalstatus/modalstatus.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    CarrinhodecomprasComponent,
    AreadepagamentoComponent,
    LoginComponent,
    ProdutosComponent,
    ProdutodetalhesComponent,
    ModalstatusComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
