import { Component } from '@angular/core';
import { ItemPortfolio } from '../../models/item-portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
})
export class Portfolio {
  public itensPortfolio: ItemPortfolio[] = [
    {
      titulo: 'Clube da Leitura',
      urlImagem: 'clubedaleitura.png',
      urlGif: 'https://imgur.com/OvL594f.gif',
      urlRepositorio: 'https://github.com/VictorRSilva05/clube-da-leitura',
      stack: [
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `Gustavo sempre adorou compartilhar suas revistas em quadrinhos com seus colegas, porém, acabava se perdendo na organização de todas as revistas, caixas e empréstimos que possuía. Para resolver esse problema, ele decidiu entrar em contato com a Academia do Programador para poder administrar melhor sua coleção de revistas em quadrinhos.`,
    },
    {
      titulo: 'Gestão de Equipamentos (WinForms)',
      urlImagem: 'gestaoequipamentos.png',
      urlGif: 'https://imgur.com/9MqocVD.gif',
      urlRepositorio: 'https://github.com/VictorRSilva05/gestao-de-equipamentos?tab=readme-ov-file',
      stack: [
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `Júnior controla um estoque muito importante na sua empresa, porém ele realizava todo esse processo pelo Excel, o que tornava o processo muito lento e propenso a erros. Júnior então, entrou em contato com a Academia do Programador para que nós pudessemos ajudá-lo a criar um programa que suavizasse sua rotina de trabalho.`,
    },
    {
      titulo: 'Controle de Bar',
      urlImagem: '',
      urlGif: '',
      urlRepositorio: 'https://github.com/VictorRSilva05/controle-de-bar',
      stack: [
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
      ],
      descricao: `Projeto desenvolvido em ASP.NET MVC para gerencia de pedidos de um bar.`,
    },
    {
      titulo: 'Teste Fácil',
      urlImagem: 'testefacil.png',
      urlGif: '',
      urlRepositorio: 'https://github.com/VictorRSilva05/teste-facil',
      stack: [
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=docker&theme=light',
        'https://skillicons.dev/icons?i=selenium&theme=light',
      ],
      descricao: `Projeto desenvolvido em ASP.NET MVC para criação de testes para uma turma, conta com integração de IA`,
    },
    {
      titulo: 'Controle de Cinema',
      urlImagem: 'controledecinema.png',
      urlGif: '',
      urlRepositorio: 'https://github.com/VictorRSilva05/controle-de-cinema-2025',
      stack: [
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=selenium&theme=light',
        'https://skillicons.dev/icons?i=docker&theme=light',
      ],
      descricao: `Projeto desenvolvido em ASP.NET MVC para a prática de testes automatizados`,
    },
     {
      titulo: 'eAgenda',
      urlImagem: 'eagenda.png',
      urlGif: '',
      urlRepositorio: 'https://github.com/VictorRSilva05/e-agenda-fullstack-2025',
      stack: [
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=docker&theme=light',
         'https://skillicons.dev/icons?i=redis&theme=light',
      ],
      descricao: `API baseada em um projeto passado`,
    },
     {
      titulo: 'Gestão de Estacionamento',
      urlImagem: 'gestaodeestacionamento.png',
      urlGif: '',
      urlRepositorio: 'https://github.com/VictorRSilva05/gestao-estacionamento',
      stack: [
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
        'https://skillicons.dev/icons?i=docker&theme=light',
      ],
      descricao: `API para controle de estacionamento de um hotel`,
    },
  ];

  public itemPortfolioSelecionado?: ItemPortfolio;
}
