import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { AlertService } from 'src/app/services/alerts/alert.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  listaDeProdutos: Produto[] = [];
  isUserLoggedIn: boolean;
  public intervalTimer = interval(300000);
  private subscription;

  logo = '/assets/img/logo-conpay.png'


  icones = {
    detalhes: '/assets/icons/detalhes.svg',
    addCart: '/assets/icons/addCart.svg',
    logo: '/assets/img/conpaycolor.svg',
    carrinho: '/assets/img/logo-carrinho.png'
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private cartService: CartService,
    public loginService: LoginService,
    private alert: AlertService) { }

  ngOnInit() {
    this.listaDeProdutos = this.produtoService.getProduto();
    this.verificaLogin();
    this.subscription = this.intervalTimer.subscribe(() => {
      this.verificaLogin();
      console.log("Verificando funcao");
      console.log(this.isUserLoggedIn);
    })
  }

  addToCart(produto) {
    this.cartService.addToCart(produto);
  }

  gotoCart() {
    this.router.navigate(['/carrinho']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.loginService.logout();
    window.location.reload();
  }

  goTodetalhesByState(produto: Produto) {
    this.router.navigateByUrl('/produtodetalhes', {
      state: produto
    });
  }


  verificaLogin() {
    if (this.loginService.isUserLoggedIn()) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
  }

}
