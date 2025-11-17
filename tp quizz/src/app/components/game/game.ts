import { Component } from '@angular/core';
import { Question } from '../../classes/question';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game.html',
  styleUrls: ['./game.css']
})
export class Game {
  questions: Question[] = [
    { id: 1, question: 'Quel est le plus grand océan ?', options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'], reponse: 'Pacifique' },
    { id: 2, question: 'Capitale de l\'Algérie ?', options: ['Alger', 'Tunis', 'Paris'], reponse: 'Alger' },
    { id: 3, question: 'Couleur du ciel ?', options: ['Bleu', 'Vert', 'Rouge'], reponse: 'Bleu' }
  ];

  score = 0;
  correct = 0;
  wrong = 0;

  onAnswer(question: Question, answer: string) {
    if (question.answered) return; // Bloquer si déjà répondu

    question.userAnswer = answer;
    question.answered = true;

    if (answer === question.reponse) {
      this.score += 10;
      this.correct++;
    } else {
      this.score -= 5;
      this.wrong++;
    }
  }
}
