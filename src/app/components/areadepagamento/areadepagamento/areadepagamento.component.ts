import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DadosPagamento } from 'src/app/interfaces/pagamento';
import { PagamentoService } from 'src/app/services/pagamento/pagamento.service';

@Component({
  selector: 'app-areadepagamento',
  templateUrl: './areadepagamento.component.html',
  styleUrls: ['./areadepagamento.component.css']
})
export class AreadepagamentoComponent implements OnInit {

  img ='/assets/img/logo-conpay.png'

  data: any = this.pagamentoService.allProdutoObj;
   
  estados = [

    { value: "AC" },
    { value: "AL" },
    { value: "AP" },
    { value: "AM" },
    { value: "BA" },
    { value: "CE" },
    { value: "DF" },
    { value: "ES" },
    { value: "GO" },
    { value: "MA" },
    { value: "MT" },
    { value: "MS" },
    { value: "MG" },
    { value: "PA" },
    { value: "PB" },
    { value: "PR" },
    { value: "PE" },
    { value: "PI" },
    { value: "RJ" },
    { value: "RN" },
    { value: "RS" },
    { value: "RO" },
    { value: "RR" },
    { value: "SC" },
    { value: "SP" },
    { value: "SE" },
    { value: "TO" },

  ]

  parcelas = [

    { value: 1 , nome: "1x "},
    { value: 2 , nome: "2x "},
    { value: 3 , nome: "3x "},
    { value: 4 , nome: "4x "},
    { value: 5 , nome: "5x "},
    { value: 6 , nome: "6x "},
    { value: 7 , nome: "7x "},
    { value: 8 , nome: "8x "},
    { value: 9 , nome: "9x "},
    { value: 10 , nome: "10x "},
    { value: 11 , nome: "11x "},
    { value: 12 , nome: "12x "}

  ]

  public fGroupDP: FormGroup;
  public fGroupADR: FormGroup;
  public fGroupSADR: FormGroup;
  public fGroupCARD: FormGroup

  constructor(
    private pagamentoService: PagamentoService,
    private fBuilder: FormBuilder) {

    this.fGroupDP = fBuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.maxLength(80)])],
      email: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      documentNumber: ['', Validators.compose([Validators.required, Validators.maxLength(14)])],
      dateOfBirth: [''],
      ddd: ['', Validators.compose([Validators.required, Validators.maxLength(2)])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.maxLength(9)])]
    });

    this.fGroupADR = fBuilder.group({

      street: ['', Validators.compose([Validators.required, Validators.maxLength(80)])],
      number: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      complement: ['', Validators.compose([Validators.required, Validators.maxLength(40)])],
      postalCode: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      district: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      city: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      federationUnit: ['', Validators.compose([Validators.required])]

    });

    this.fGroupSADR = fBuilder.group({

      street: [this.fGroupADR.value.street],
      receiverName: [this.fGroupADR.value.receiverName],
      number: [this.fGroupADR.value.number],
      complement: [this.fGroupADR.value.complement],
      postalCode: [this.fGroupADR.value.postalCode],
      district: [this.fGroupADR.value.district],
      city: [this.fGroupADR.value.city],
      federationUnit: [this.fGroupADR.value.federationUnit]

    });

    this.fGroupCARD = fBuilder.group({

      number: ['', Validators.compose([Validators.required, Validators.maxLength(16)])],
      exp_month: ['', Validators.compose([Validators.required, Validators.maxLength(2)])],
      exp_year: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
      security_code: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
      name: ['', Validators.compose([Validators.required, Validators.maxLength(26)])],
      parcelas: [ 1, Validators.compose([Validators.required])]

    });

  }


  ngOnInit() {
    console.log(this.pagamentoService.allProdutoObj);
  }

  endPayment() {

    this.pagamentoService.allProdutoObj.client = this.fGroupDP.value;

    this.pagamentoService.allProdutoObj.client.address = this.fGroupADR.value;
 
   this.pagamentoService.allProdutoObj.client.shippingAddress = this.fGroupSADR.value;
   this.pagamentoService.allProdutoObj.card.number = this.fGroupCARD.value.number;
   this.pagamentoService.allProdutoObj.card.exp_month = this.fGroupCARD.value.exp_month;
   this.pagamentoService.allProdutoObj.card.exp_year = this.fGroupCARD.value.exp_year;
   this.pagamentoService.allProdutoObj.card.security_code = this.fGroupCARD.value.security_code;
   this.pagamentoService.allProdutoObj.card.holder.name = this.fGroupCARD.value.name;
   this.pagamentoService.allProdutoObj.installments = parseInt(this.fGroupCARD.value.parcelas);


    console.log(this.pagamentoService.allProdutoObj);

    this.pagamentoService.finalizarTransacao(this.data);

  }

}
