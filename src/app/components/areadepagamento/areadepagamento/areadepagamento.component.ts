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
      fullName: ['Anthony C E Teixeira', Validators.compose([Validators.required, Validators.maxLength(80)])],
      email: ['anthonytexeira@outlook.com', Validators.compose([Validators.required, Validators.maxLength(60)])],
      documentNumber: ['25441545447', Validators.compose([Validators.required, Validators.maxLength(14)])],
      dateOfBirth: [''],
      ddd: ['11', Validators.compose([Validators.required, Validators.maxLength(2)])],
      phoneNumber: ['996587597', Validators.compose([Validators.required, Validators.maxLength(9)])]
    });

    this.fGroupADR = fBuilder.group({

      street: ['Avenida Mercedes', Validators.compose([Validators.required, Validators.maxLength(80)])],
      number: ['232', Validators.compose([Validators.required, Validators.maxLength(20)])],
      complement: ['Casa', Validators.compose([Validators.required, Validators.maxLength(40)])],
      postalCode: ['05081060', Validators.compose([Validators.required, Validators.maxLength(8)])],
      district: ['Alto da Lapa', Validators.compose([Validators.required, Validators.maxLength(60)])],
      city: ['São Paulo', Validators.compose([Validators.required, Validators.maxLength(60)])],
      federationUnit: ['SP', Validators.compose([Validators.required])]

    });

    this.fGroupSADR = fBuilder.group({

      street: ['Shipping Address Street'],
      receiverName: ['Receiver Name'],
      number: ['111'],
      complement: ['Casa'],
      postalCode: ['58015682'],
      district: ['Jaguaribe'],
      city: ['João Pessoa'],
      federationUnit: ['PB']

    });

    this.fGroupCARD = fBuilder.group({

      number: ['4111111111111111', Validators.compose([Validators.required, Validators.maxLength(16)])],
      exp_month: ['03', Validators.compose([Validators.required, Validators.maxLength(2)])],
      exp_year: ['2028', Validators.compose([Validators.required, Validators.maxLength(4)])],
      security_code: ['254', Validators.compose([Validators.required, Validators.maxLength(4)])],
      name: ['Anthony C E Teixeira', Validators.compose([Validators.required, Validators.maxLength(26)])],
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
