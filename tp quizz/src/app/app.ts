import { Component } from '@angular/core';
import { Home } from './components/home/home';
import { Game } from './components/game/game';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home, Game],
  template: `<home></home>`,
  styleUrls: ['./app.css']
})
export class App {}
