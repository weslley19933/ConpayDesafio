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
    produto.quantity++;
    produto.total = produto.quantity * produto.unitCost;
    console.log(produto.quantity);
    this.items = this.getItems();
    if (this.items == null) {
      this.items = [];
      this.items.push(produto);
      window.localStorage.setItem('cart', JSON.stringify(this.items));
    } else {
      let position = this.items.findIndex (x => x.product_code == produto.product_code);
      if (position != -1) {
        this.alert.alertaSnackBar("Este produto já está contido no seu carrinho de compras!!!","OK");
      } else {
        this.items.push(produto);
        window.localStorage.setItem('cart', JSON.stringify(this.items));
        this.alert.alertaSnackBar("Produto adicionado com sucesso!!!", "OK");
      }
    }
  }

  getItems() {
    this.items = JSON.parse(window.localStorage.getItem('cart'));
    return this.items;
  }

  getTotalProd(produto) {
    this.items = this.getItems();
    let position = this.items.findIndex (x => x.product_code == produto.product_code);
    if (position != -1) {
      this.items[position].total = this.items[position].quantity*this.items[position].unitCost;
    }
    window.localStorage.setItem('cart', JSON.stringify(this.items));
    return this.items[position].total;
  }

  clearCart() {
    this.items = [];
    window.localStorage.removeItem('cart');
    return this.items;
  }

  removeProd(produto) {
    this.items.splice(produto, 1);
    window.localStorage.setItem('cart', JSON.stringify(this.items));
  }


  increaseQuantity(produto) {
    this.items = JSON.parse(window.localStorage.getItem('cart'));
    let position = this.items.findIndex (x => x.product_code == produto.product_code);
    if (position != -1) {
      this.items[position].quantity++; 
    }
    window.localStorage.setItem('cart', JSON.stringify(this.items));
    return this.items[position].quantity;
    
  }

  decreaseQuantity(produto) {
    this.items = JSON.parse(window.localStorage.getItem('cart'));
    let position = this.items.findIndex (x => x.product_code == produto.product_code);
    if (position != -1) {
      this.items[position].quantity--; 
      if(this.items[position].quantity == 1 || this.items[position].quantity < 1) {
        this.items[position].quantity = 1;
      }
    }
    window.localStorage.setItem('cart', JSON.stringify(this.items));
    return this.items[position].quantity;

  }
}
