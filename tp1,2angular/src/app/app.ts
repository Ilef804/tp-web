import { Component, signal } from '@angular/core';
import { Bienvenue} from './bienvenue/bienvenue';
import { Produit} from './produit/produit';
import {Utilisateur} from './utilisateur/utilisateur'
@Component({
  

selector: 'app-root',
imports: [ Bienvenue, Produit, Utilisateur],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
protected readonly title = signal('ToDo');
}