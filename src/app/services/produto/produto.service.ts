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
      category: "Informática",
      name: "Impressora Epson EcoTank L3150",
      description: "A Epson EcoTank L3150 é uma multifuncional tanque de tinta compacta que proporciona baixo custo de impressão com alto rendimento.",
      unitCost: 1277.67,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/hpL3150.jpg'
    },
    {
      sku: "0002",
      product_code: 1112,
      category: "Informática",
      name: "Computador Gamer Skul, Intel Core i5-9400F, 8GB, SSD 240GB, 1TB, PCyes RX580 8GB GDDR5, Linux - KB02",
      description: "Com uma configuração focada em colecionar vitórias, a linha de computadores Gamer é ideal para quem busca desempenho, velocidade e qualidade de imagem em seus jogos! Com componentes potentes, desde a fonte até o processador e a placa de vídeo, esse sem dúvida é o arsenal que você precisa para conquistar o universo dos games.",
      unitCost: 5263.05,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-10",
      img: '/assets/img/pcgamer.jpg'
    },
    {
      sku: "0003",
      product_code: 1113,
      category: "Informática",
      name: "Monitor LG LED 23.8´ Widescreen, Full HD, IPS, HDMI - 24MK430H",
      description: "A resolução 1080p Full HD com IPS proporciona imagens brilhantes que surgem com detalhes vibrantes de qualquer ângulo de visualização.",
      unitCost: 888.78,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/monitor-lg.jpg'
    },
    {
      sku: "0004",
      product_code: 1114,
      category: "Informática",
      name: "Kit Gamer Dazz Combo 4 em 1 Arsenal - Teclado + Mouse + Mousepad + Headset",
      description: "O Combo 4 em 1 Arsenal Gamer da Dazz traz a proposta de reunir os instrumentos necessários para uma partida completa, garantindo uma jogabilidade equilibrada.Esse quarteto letal oferece precisão que o colocará à frente da competição, ajudando a enfrentar seu caminho até o topo.",
      unitCost: 420.95,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-08",
      img: '/assets/img/kittecladomouse.jpg'
    },
    {
      sku: "0005",
      product_code: 1115,
      category: "Smartphones",
      name: "Samsung Galaxy M21s Dual SIM 64 GB preto 4 GB RAM",
      description: "Smartphone Samsung Galaxy M21s, 64GB, 64MP, Tela 6.4´, Preto - SM-F415FZKRZTO",
      unitCost: 1389.00,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-10",
      img: '/assets/img/samsungm21s.jpg'
    },
    {
      sku: "0006",
      product_code: 1116,
      category: "Smartphones",
      name: "iPhone 11 Preto, 128GB - MHDH3BZ/A",
      description: "Seis novas cores lindas. Impressionante tela Liquid Retina LCD de 6,1 polegadas sem bordas. Resistência à água a uma profundidade de até dois metros por até 30 minutos. Ultra-angular (13 mm). Campo de visão de 120° para uma área de captura quatro vezes maior. Grande-angular (26 mm). Focus Pixels a 100% para foco automático até três vezes mais rápido com pouca luz. Vídeo 4K a 60 qps em todas as câmeras. Câmera ultra-angular que captura quatro vezes mais da cena. Gire, recorte e adicione filtros com a mesma facilidade que em fotos. Seja na hora de cantar parabéns ou durante um luau em volta da fogueira, usando o modo Noite, você tira fotos mais naturais em ambientes com pouca luz. Bateria para o dia todo. Chip A13 Bionic, o mais rápido em um smartphone. E recarga rápida com carregador de 18W (vendido separadamente). O Face ID é a tecnologia de autenticação facial mais segura em um smartphone. Ele não armazena nem compartilha sua foto e é ainda mais seguro do que o Touch ID.",
      unitCost: 5862.11,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/iphone11.jpg'
    },
    {
      sku: "0007",
      product_code: 1117,
      category: "Smartphones",
      name: "Smartphone Motorola Moto G8 Play, 32GB, 13MP, Tela 6.2´, Preto Ônix - XT2015-2",
      description: "O G8 Play possui sistema de câmera tripla, para que você não perca nenhum instante. Capture 4 vezes¹ mais da cena com a câmera ultra-wide e use um efeito Bokeh profissional com a câmera de profundidade para aprimorar suas fotos e deixá-las mais nítidas e bem iluminadas.",
      unitCost: 979.67,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/motog8play.jpg'
    },
    {
      sku: "0008",
      product_code: 1118,
      category: "Smartphones",
      name: "Smartphone Asus Zenfone 2 Deluxe Special Edition, 256GB, 13MP, Tela 5.5´, Preto + Tampa Texturizada Prata - ZE551ML-2J762WW",
      description: "Zenfone 2 Deluxe Special Edition é o primeiro com 256GB de armazenamento, tem desempenho gráfico ideal para os melhores jogos em Smartphones e já vem com duas opções de capinhas com design exclusivo.",
      unitCost: 2615.18,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-12",
      img: '/assets/img/zenfone2deluxe.jpg'
    },
    {
      sku: "0009",
      product_code: 1119,
      category: "Câmeras",
      name: "Câmera Sony A9 Mirrorless 4K Full-Frame",
      description: "Trazendo a velocidade que os ,disparos da ,Mirrorless ,Sony esperaram, a Câ,mera Sony Alpha A9 Mirrorless 4K Full-Frame ( Só, Corpo ), Modelo ,ILCE9/B possui impressionantes capacidades multimí,dia e aumenta as capacidades de processamento para o disparo contí,nuo ultra-rá,pido. Fazendo uso de um sensor CMOS Exmor RS de 24,2MP e do processador de imagem BIONZ X, a Sony Alpha A9 Mirrorless é, capaz de disparar em até, 20 fps, gravando o ví,deo 4K UHD internamente e filmando com uma faixa de sensibilidade expandida para ISO 204,800.",
      unitCost: 27162.45,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/sony.jpg'
    },
    {
      sku: "0010",
      product_code: 1120,
      category: "Câmeras",
      name: "Câmera Mirrorless FujiFilm 4K, Bluetooth e Wi-Fi",
      description: "Atendendo às necessidades dos criadores de imagens multimídia, a Câmera Mirrorless FujiFilm X-T4 4K, Bluetooth e Wi-Fi (Corpo) na Cor Preta/Black é, uma Câmera Mirrorless ,versátil que combina recursos avançados de fotos e vídeo, além de fluxo de trabalho aprimorado e funcionalidade assistida. Utilizando um sensor X-Trans CMOS 4 de 26,1MP no formato APS-C comprovado e bem considerado, a FujiFilm X-T4 ,é capaz de gravar em alta resolução junto com o suporte para vídeo DCI / UHD 4K a 60 fps, gravação Full HD até, 240 qps sensibilidade ISO 160-12800 e disparo contínuo de até 15 qps com o obturador mecânico. O design BSI do sensor oferece ruído reduzido e maior clareza geral e é emparelhado com o X-Processor 4 para obter desempenho rápido e capacidade de resposta aprimorada. O design do sensor também permite um sistema de foco automático híbrido que combina 425 pontos de detecção de fase com um sistema de detecção de contraste para um desempenho AF rápido e preciso. Além dos recursos de sensor e processador, as câmeras da FUJIFILM também são amadas por seu design físico, e a X-T4 possui um design atualizado para melhorar a eficiência de manuseio e disparo. Um visor eletrônico grande e brilhante de 3,69 m de ponto pode ser configurado para uma taxa de atualização de 100 qps para uma suavidade notável ao se movimentar ou rastrear assuntos. Por outro lado, o LCD touchscreen traseiro de 3,0 e 1,62 m de ponto agora apresenta um design de ângulo variável para se adequar ao trabalho em ângulos altos, baixos e dianteiros; ou pode ser fechado contra o corpo se estiver trabalhando apenas com o EVF. Dual SD Os slots para cartão de memória UHS-II oferecem flexibilidade para salvar arquivos e o X-T4 suporta a bateria NP-W235 atualizada e de alta capacidade, que fornece aproximadamente 600 fotos por carga. Além disso, o Wi-Fi e Bluetooth integrados permitem o controle remoto sem fio da câmera e compartilhamento de imagem para um dispositivo móvel.",
      unitCost: 14299.70,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/fujifilm.jpg'
    },
    {
      sku: "0011",
      product_code: 1121,
      category: "Câmeras",
      name: "Câmera de Ação Atrio com Capacete Bob Burnquist",
      description: "A linha Bob Burnquist ganhou novos produtos! Este Capacete acompanha Câmera de Ação HD, que grava em alta resolução todos os seus movimentos mais radicais , além de capturar 10 fotos sequenciais diferentes em um único clique.",
      unitCost: 254.94,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/atrio.jpg'
    },
    {
      sku: "0012",
      product_code: 1122,
      category: "Câmeras",
      name: "Câmera Digital GoPro HERO9 Black",
      description: "A HERO9 Black possui um sensor de 23,6 MP para vídeos de 5K e fotos de 20 MP incríveis. Além disso, com um novo display frontal, uma tela de toque traseira com zoom de toque, 30% a mais de duração da bateria1 e o HyperSmooth 3.0, você terá todos os recursos que já adora... e mais um pouco.",
      unitCost: 4189.37,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/goprohero.jpg'
    },
    {
      sku: "0013",
      product_code: 1123,
      category: "Consoles",
      name: "Sony PlayStation 4",
      description: "Você veio ao lugar certo. Jogos exclusivos levam você a jornadas incríveis, desde jogos independentes elogiados pela crítica a sucessos premiados pela AAA. Jogue online com seus amigos, obtenha jogos gratuitos, salve jogos online e muito mais com a associação ativa do PlayStation Plus. O pacote Mega Pack para o console PlayStation 4 é o melhor pacote de entretenimento.",
      unitCost: 2736.74,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-08",
      img: '/assets/img/ps4kit.jpg'
    },
    {
      sku: "0014",
      product_code: 1124,
      category: "Consoles",
      name: "Console Nintendo Switch",
      description: "O mais novo console da Nintendo promete inovar na jogabilidade, apresentando os joy-cons, controles removíveis e personalizáveis que atuam por conta própria, captando a distância das mãos, gestos, e movimentos, com um sensor infra vermelho e um giroscópio. Acompanham também uma função de vibração aprimorada, chamada de Rumble HD, que pode transmitir sensações táteis fiéis à realidade. O console possui uma resolução de 720p em seu display de 6.2 polegadas, e 1080p quando conectado a uma TV, e traz consigo recursos online totalmente novos, com foco em partidas multiplayer e parties com amigos.",
      unitCost: 3640.45,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/nintendosw.jpg'
    },
    {
      sku: "0015",
      product_code: 1125,
      category: "Consoles",
      name: "Console Sony PlayStation 5",
      description: "Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation 5 Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console PlayStation 5 pode fazer. Maximize suas sessões de jogo com tempos de carregamento praticamente instantâneos para jogos instalados. A integração personalizada dos sistemas de console PS5 permite que os criadores extraiam dados do SSD tão rápido que eles podem desenvolver jogos de formas que antes seriam impossíveis. Mergulhe em mundos com um nível inédito de realismo enquanto os raios de luz são simulados individualmente, criando sombras e reflexos realistas em jogos compatíveis do PS5. Curta seus jogos favoritos do PS5 na sua incrível TV 4K. Desfrute de fluidez e taxa de quadros de até 120 qps em jogos compatíveis , com suporte a saída de 120 Hz em telas 4K. Com uma TV HDR, os jogos compatíveis do PS5 exibem uma variedade de cores inacreditavelmente vibrante e realista. Os consoles PS5 oferecem suporte a saída 8K, para que você possa jogar na sua tela com resolução de 4320p.",
      unitCost: 4699.96,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/ps5.jpg'
    },
    {
      sku: "0016",
      product_code: 1126,
      category: "Consoles",
      name: "Microsoft Xbox Series S, 512GB, Branco",
      description: "Xbox Series S, o menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital. Retrocompatibilidade com milhares de jogos. Prepare-se para tempos de carregamento mais rápidos, resolução mais alta, taxas de quadros mais estáveis e melhor latência de entrada em milhares de jogos Xbox One, Xbox 360 e Xbox Original.",
      unitCost: 1277.67,
      quantity: 0,
      discount: 0,
      createdAt: "2021-02-09",
      img: '/assets/img/hpL3150.jpg'
    }
  ]

  constructor() { }
}
