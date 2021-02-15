import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor() { }

  addToCart(produto) {
    this.items.push(produto);
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
