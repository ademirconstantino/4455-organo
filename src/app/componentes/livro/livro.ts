import { Component, input } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})

export class Livro {

  livro = input.required<ILivro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}

export interface ILivro {
    titulo: string,
    autoria: string
    favorito: boolean,
    genero: IGenero,
    imagem: string
}

export interface IGenero {
  id: string,
  value: string,
  livros: ILivro[];
}

