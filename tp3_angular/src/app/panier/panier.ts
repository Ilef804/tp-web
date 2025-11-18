import { Component } from '@angular/core';
import {Produit} from '../produit/produit';
@Component({
  selector: 'app-panier',
  imports: [Produit],
  templateUrl: './panier.html',
  styleUrl: './panier.css'
})
export class Panier {
messagePanier: string = "";

  // Méthode qui reçoit l'événement
  onProduitAjoute(nom: string) {
    this.messagePanier = nom + " ajouté au panier !";
  }
}
