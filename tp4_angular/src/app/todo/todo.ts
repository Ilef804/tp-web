import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css']
})
export class todo {
  taches: { description: string; complete: boolean; priorite: string }[] = [
    { description: 'Préparer le rapport', complete: false, priorite: 'haute' },
    { description: 'Envoyer les emails', complete: true, priorite: 'moyenne' },
    { description: 'Nettoyer le bureau', complete: false, priorite: 'basse' }
  ];

  nouvelleDescription: string = '';
  nouvellePriorite: string = 'basse';

  ajouterTache() {
    if (this.nouvelleDescription.trim()) {
      this.taches.push({
        description: this.nouvelleDescription,
        complete: false,
        priorite: this.nouvellePriorite
      });
      this.nouvelleDescription = '';
      this.nouvellePriorite = 'basse';
    }
  }

  toggleComplete(tache: any) {
    tache.complete = !tache.complete;
  }

  couleurPriorite(priorite: string): string {
    if (priorite === 'haute') return 'red';
    if (priorite === 'moyenne') return 'orange';
    return 'green';
  }
}
