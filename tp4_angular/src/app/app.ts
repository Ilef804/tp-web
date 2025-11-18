import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenue } from './bienvenue/bienvenue';
import { Articles } from './articles/articles';
import { Produits } from './produits/produits';
import {todo} from './todo/todo'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Bienvenue,Articles,Produits,todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp4_angular');
}
