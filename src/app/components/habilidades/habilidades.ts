import { Component } from '@angular/core';
import { ItemHabilidade } from '../../models/item-habilidade';

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
})
export class Habilidades {
  public itensHabilidades: ItemHabilidade[] = [
    {
      icone: 'bi-server',
      titulo: 'Aplicações Back-End',
      descricao: `Desenvolvimento de sistemas robustos para solucionar problemas simples ou complexos.`,
    },
    {
      icone: 'bi-graph-up',
      titulo: 'Testes Automatizados',
      descricao: `Criação de testes automatizados que facilitam a manutenção e melhoram as entregas das aplicações.`,
    },
    {
      icone: 'bi-wrench',
      titulo: 'Engenharia de Software',
      descricao: `Planejamento e execução de sistemas multi-camadas, integrando várias tecnologias de forma organizada e escalável.`,
    }
  ];
}
