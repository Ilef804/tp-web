import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-articles',
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
 articles: { titre: string; contenu: string; importance: string }[] = [
  { titre: 'Article 1', contenu: 'Ceci est le contenu du premier article.', importance: 'élevée' },
  { titre: 'Article 2', contenu: 'Voici le contenu du deuxième article.', importance: 'moyenne' },
  { titre: 'Article 3', contenu: 'Troisième article.', importance: 'faible' }
];

// Champs liés à l'input
nouveauTitre: string = '';
nouveauContenu: string = '';
nouvelleImportance: string = 'faible';

// Ajouter un nouvel article
ajouterArticle() {
  if (this.nouveauTitre.trim() && this.nouveauContenu.trim()) {
    this.articles.push({
      titre: this.nouveauTitre,
      contenu: this.nouveauContenu,
      importance: this.nouvelleImportance
    });
    // Réinitialiser les champs
    this.nouveauTitre = '';
    this.nouveauContenu = '';
    this.nouvelleImportance = 'faible';
  }
}
}