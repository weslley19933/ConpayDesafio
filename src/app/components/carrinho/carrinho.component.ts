import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoginService } from 'src/app/services/login/login.service';
import { PagamentoService } from 'src/app/services/pagamento/pagamento.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  items = this.cartService.getItems();
  value: number = 0;

  imgs = {
    carrinho: '/assets/icons/carrinhodecompras.svg',
    carrinhoVazio: ' /assets/icons/carrinhovazio.svg',
    remover: '/assets/icons/remover.svg',
    adicionar:'/assets/icons/adicionar.svg',
    subtrair: '/assets/icons/subtrair.svg',
    finalizar: '/assets/icons/finalizar.svg'
  }

  constructor(
    private loginService: LoginService,
    private pagamentoService: PagamentoService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTotal();
  }

  clearCart() {
    this.cartService.clearCart();
    window.location.reload();
  }

  removeProd(produto) {
    this.cartService.removeProd(produto);
  }

  increaseQtd(produto) {
    this.cartService.increaseQuantity(produto);
  }

  decreaseQtd(produto) {
    this.cartService.decreaseQuantity(produto);
  }

  getTotal() {
    this.items.forEach(item => {
      this.value += (item.quantity * item.unitCost);
    })
  }

  endTransation() {

    this.pagamentoService.allProdutoObj.shoppingCart = this.items;
    this.pagamentoService.allProdutoObj.value = this.value;
    
    if (!this.loginService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/areadepagamento']);
    }
  }
  
  backTOListProd() {
    this.router.navigate(['/produtos']);
  }

}