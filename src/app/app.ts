import { Component, signal } from '@angular/core';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { ListaLivros } from './componentes/lista-livros/lista-livros';

@Component({
  selector: 'app-root',
  imports: [
    Cabecalho,
    ListaLivros,
    Rodape
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('organo');
}
