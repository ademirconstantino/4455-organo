import { Component, input } from '@angular/core';
import { ILivro, IGenero, Livro } from "../livro/livro";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [NgClass, Livro],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterario {

  genero = input.required<IGenero>();

}
