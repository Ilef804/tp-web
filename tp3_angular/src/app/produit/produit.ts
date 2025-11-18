import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class Produit {

  @Input() nomProduit: string = "Produit par défaut";  // Activité 7
  @Input() prix: number = 0;                           // Activité 8

  @Output() ajoutPanier = new EventEmitter<string>();  // Activité 6

  imageUrl = 'assets/download.jpg';

  enStock: boolean = true;

  // Bascule du stock
  toggleStock() {
    this.enStock = !this.enStock;
  }

  // Émettre l'événement vers le parent
  ajouterAuPanier() {
    this.ajoutPanier.emit(this.nomProduit);
  }
}
