import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreadepagamentoComponent } from './components/areadepagamento/areadepagamento/areadepagamento.component';
import { CarrinhodecomprasComponent } from './components/carrinhodecompras/carrinhodecompras.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutodetalhesComponent } from './components/produtos/produtodetalhes/produtodetalhes.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login', 
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
    path: 'carrinhodecompras',
    component: CarrinhodecomprasComponent
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
