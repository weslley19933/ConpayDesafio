import { Injectable } from '@angular/core';
import { Produto } from 'src/app/interfaces/produto';
import { AlertService } from '../alerts/alert.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Produto[];

  constructor(
    private alert: AlertService
  ) { }

  addToCart(produto) {
    this.items = this.getItems();
    console.log(this.items);
    if (this.items == null) {
      this.items = [];
      this.items.push(produto);
      localStorage.setItem('cart', JSON.stringify(this.items));
    } else {
      let newProduto = produto;
      let verifica = this.items.find(produto => produto.product_code == newProduto.product_code);
      console.log(verifica);
      if (this. items == null || verifica) {
        this.alert.alertaSnackBar("Este produto já está contido no seu carrinho de compras!!!","OK");
      } else {
        this.items.push(produto);
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.alert.alertaSnackBar("Produto adicionado com sucesso!!!", "OK");
      }
    }
  }

  getItems() {
    this.items = JSON.parse(localStorage.getItem('cart'));
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart');
    return this.items;
  }
}
