import { Component, OnInit } from '@angular/core';
import { PagamentoService } from 'src/app/services/pagamento/pagamento.service';

@Component({
  selector: 'app-areadepagamento',
  templateUrl: './areadepagamento.component.html',
  styleUrls: ['./areadepagamento.component.css']
})
export class AreadepagamentoComponent implements OnInit {
  dadosPagamento: any;

  constructor(private pagamentoService: PagamentoService) { }

  ngOnInit() {
  }


  endTransition() {
    this.dadosPagamento = this.pagamentoService.allProdutoObj;
    console.log(this.dadosPagamento);
    this.pagamentoService.pagar(this.dadosPagamento);
  }
}
