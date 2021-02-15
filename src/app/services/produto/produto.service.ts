import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //Lista de produtos
  produtos = [

    {
      sku: "0001",
      product_code: 1111,
      category: "1111",
      name: "Impressora Epson EcoTank L3150",
      description: "A Epson EcoTank L3150 é uma multifuncional tanque de tinta compacta que proporciona baixo custo",
      unitCost: 1277.67,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/hpL3150.jpg'
    },
    {
      sku: "0002",
      product_code: 1112,
      category: "1112",
      name: "Computador Gamer Skul, Intel Core i5-9400F, 8GB, SSD 240GB, 1TB",
      description: "a linha de computadores Gamer é ideal para quem busca desempenho velocidade nos seus jogos",
      unitCost: 5263.05,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-10",
      img: '/assets/img/pcgamer.jpg'
    },
    {
      sku: "0003",
      product_code: 1113,
      category: "1113",
      name: "Monitor LG LED 23.8´ Widescreen, Full HD, IPS, HDMI - 24MK430H",
      description: "A resolução 1080p Full HD com IPS proporciona imagens brilhantes que surgem com detalhes",
      unitCost: 888.78,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/monitor-lg.jpg'
    },
    {
      sku: "0004",
      product_code: 1114,
      category: "1114",
      name: "Kit Gamer Dazz Combo 4 em 1 Arsenal - Teclado + Mouse + Mousepad + Headset",
      description: "O Combo 4 em 1 Arsenal Gamer da Dazz traz a proposta de reunir os instrumentos.",
      unitCost: 420.95,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-08",
      img: '/assets/img/kittecladomouse.jpg'
    },
    {
      sku: "0005",
      product_code: 1115,
      category: "1115",
      name: "Samsung Galaxy M21s Dual SIM 64 GB preto 4 GB RAM",
      description: "Smartphone Samsung Galaxy M21s, 64GB, 64MP, Tela 6.4´, Preto - SM-F415FZKRZTO",
      unitCost: 1389.00,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-10",
      img: '/assets/img/samsungm21s.jpg'
    },
    {
      sku: "0006",
      product_code: 1116,
      category: "1116",
      name: "iPhone 11 Preto, 128GB - MHDH3BZ/A",
      description: "Seis novas cores lindas. Impressionante tela Liquid Retina LCD de 6,1 polegadas",
      unitCost: 5862.11,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/iphone11.jpg'
    },
    {
      sku: "0007",
      product_code: 1117,
      category: "1117",
      name: "Smartphone Motorola Moto G8 Play, 32GB, 13MP, Tela 6.2´, Preto Ônix - XT2015-2",
      description: "O G8 Play possui sistema de câmera tripla, para que você não perca nenhum momento",
      unitCost: 979.67,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/motog8play.jpg'
    },
    {
      sku: "0008",
      product_code: 1118,
      category: "1118",
      name: "Smartphone Asus Zenfone 2 Deluxe Special Edition, 256GB, 13MP, Tela 5.5´",
      description: "Zenfone 2 Deluxe Special Edition é o primeiro com 256GB de armazenamento, tem desempenho gráfico",
      unitCost: 2615.18,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-12",
      img: '/assets/img/zenfone2deluxe.jpg'
    },
    {
      sku: "0009",
      product_code: 1119,
      category: "1119",
      name: "Câmera Sony A9 Mirrorless 4K Full-Frame",
      description: "A Câmera Sony Alpha A9 Mirrorless 4K Full-Frame traz mais velocidae e qualidade de imagem.",
      unitCost: 27162.45,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/sony.jpg'
    },
    {
      sku: "0010",
      product_code: 1120,
      category: "1120",
      name: "Câmera Mirrorless FujiFilm 4K, Bluetooth e Wi-Fi",
      description: "Atendendo às necessidades dos criadores de imagens multimídia",
      unitCost: 14299.70,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/fujifilm.jpg'
    },
    {
      sku: "0011",
      product_code: 1121,
      category: "1121",
      name: "Câmera de Ação Atrio com Capacete Bob Burnquist",
      description: "Este Capacete acompanha Câmera de Ação HD, que grava em alta resolução todos os seus movimentos",
      unitCost: 254.94,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/atrio.jpg'
    },
    {
      sku: "0012",
      product_code: 1122,
      category: "1122",
      name: "Câmera Digital GoPro HERO9 Black",
      description: "A HERO9 Black possui um sensor de 23,6 MP para vídeos de 5K e fotos de 20 MP incríveis. ",
      unitCost: 4189.37,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/goprohero.jpg'
    },
    {
      sku: "0013",
      product_code: 1123,
      category: "1123",
      name: "Sony PlayStation 4",
      description: "Jogue online com seus amigos, obtenha jogos gratuitos, salve jogos online e muito mais.",
      unitCost: 2736.74,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-08",
      img: '/assets/img/ps4kit.jpg'
    },
    {
      sku: "0014",
      product_code: 1124,
      category: "1124",
      name: "Console Nintendo Switch",
      description: "O mais novo console da Nintendo promete inovar na jogabilidade.",
      unitCost: 3640.45,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/nintendosw.jpg'
    },
    {
      sku: "0015",
      product_code: 1125,
      category: "1125",
      name: "Console Sony PlayStation 5",
      description: "Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade.",
      unitCost: 4699.96,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/ps5.jpg'
    },
    {
      sku: "0016",
      product_code: 1126,
      category: "1126",
      name: "Microsoft Xbox Series S, 512GB, Branco",
      description: "o Xbox Series S oferece desempenho e velocidade de última geração em um formato totalmente digital.",
      unitCost: 1277.67,
      quantity: 1,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/xboxseries.jpg'
    }
  ]

  constructor() { }

  getProduto() {
    return this.produtos;
  }
}
