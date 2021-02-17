import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { httpInterceptorProviders } from './interceptors';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutodetalhesComponent } from './components/produtos/produtodetalhes/produtodetalhes.component';
import { AreadepagamentoComponent } from './components/areadepagamento/areadepagamento/areadepagamento.component';
import { ModalstatusComponent } from './components/modalstatus/modalstatus.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    AreadepagamentoComponent,
    LoginComponent,
    ProdutosComponent,
    ProdutodetalhesComponent,
    ModalstatusComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  providers: [
    httpInterceptorProviders,
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalstatusComponent]
})
export class AppModule { }
