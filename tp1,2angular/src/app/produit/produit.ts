import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class Produit {
  imageUrl='assets/download.jpg';
  afficherAlerte() {
    alert("Produit ajouté au panier")
  }
  enStock:boolean=true;
}
