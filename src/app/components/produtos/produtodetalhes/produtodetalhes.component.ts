import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { CartService } from 'src/app/services/cart/cart.service';


@Component({
  selector: 'app-produtodetalhes',
  templateUrl: './produtodetalhes.component.html',
  styleUrls: ['./produtodetalhes.component.css']
})
export class ProdutodetalhesComponent implements OnInit{

  produto: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private router: Router,
    ) { 
    const nav = router.getCurrentNavigation();
    this.produto = nav.extras.state;
  }

  ngOnInit() {
  }

  addToCart(produto) {
    this.cartService.addToCart(produto);
    window.alert('Item adicionado');
    this.router.navigate(['/carrinhodecompras']);
  }

}
