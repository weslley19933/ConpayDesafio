import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor() { }

  addToCart(produto) {
    this.items.push(produto);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getItems() {
    this.items = JSON.parse(localStorage.getItem('cart'));
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
