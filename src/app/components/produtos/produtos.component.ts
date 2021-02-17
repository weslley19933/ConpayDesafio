import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { AlertService } from 'src/app/services/alerts/alert.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  listaDeProdutos: Produto[] = [];

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
  }

  goTodetalhesByState(produto: Produto) {
    this.router.navigateByUrl('/produtodetalhes', {
      state: produto
    });
  }

}
