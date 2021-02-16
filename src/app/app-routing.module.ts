import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreadepagamentoComponent } from './components/areadepagamento/areadepagamento/areadepagamento.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutodetalhesComponent } from './components/produtos/produtodetalhes/produtodetalhes.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'produtos', 
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'produtodetalhes',
    component: ProdutodetalhesComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'areadepagamento',
    component: AreadepagamentoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
