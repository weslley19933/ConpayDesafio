import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  listaDeProdutos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit() {
    this.listaDeProdutos = this.produtoService.getProduto();
  }

  goTodetalhesByState(produto: Produto) {
    this.router.navigateByUrl('/produtodetalhes', {
      state: produto
    });
  }

}
