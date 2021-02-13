import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtodetalhes',
  templateUrl: './produtodetalhes.component.html',
  styleUrls: ['./produtodetalhes.component.css']
})
export class ProdutodetalhesComponent implements OnInit {

  constructor(private router: Router) { 
    const nav = router.getCurrentNavigation();
    console.log(nav.extras.state);
  }

  ngOnInit() {
  }

}
