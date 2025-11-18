import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produits.html',
  styleUrls: ['./produits.css']
})
export class Produits {
  // Liste des produits avec stock
  produits = [
    { nom: 'Ordinateur', stock: 70 },
    { nom: 'Souris', stock: 35 },
    { nom: 'Clavier', stock: 15 }
  ];

  // Méthode pour changer le stock (simule une mise à jour)
  changerStock(produit: any, valeur: number) {
    produit.stock = valeur;
  }

  // Méthode pour obtenir la couleur en fonction du stock
  couleurStock(stock: number): string {
    if (stock > 50) return 'green';
    else if (stock >= 20) return 'orange';
    else return 'red';
  }
}
