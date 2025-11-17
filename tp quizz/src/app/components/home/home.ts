import { Component } from '@angular/core';
import { Game } from '../game/game';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'home',
  standalone: true,
  imports: [Game, CommonModule],
  template: `
    <h1>Bienvenue au Quiz !</h1>
    <button (click)="startGame()">Commencer</button>
    <game *ngIf="gameStarted"></game>
  `,
  styleUrls: ['./home.css']
})
export class Home {
  gameStarted = false;

  startGame() {
    this.gameStarted = true;
  }
}
