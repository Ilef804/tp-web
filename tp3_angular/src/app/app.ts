import { Component, signal } from '@angular/core';
import { Bienvenue} from './bienvenue/bienvenue';
import { Panier } from './panier/panier';
import {Utilisateur} from './utilisateur/utilisateur'
@Component({
  

selector: 'app-root',
imports: [ Bienvenue, Panier, Utilisateur],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
protected readonly title = signal('ToDo');
}