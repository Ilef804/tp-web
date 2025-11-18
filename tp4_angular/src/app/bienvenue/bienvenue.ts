import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-bienvenue',
  imports: [CommonModule, FormsModule],
  templateUrl: './bienvenue.html',
  styleUrl: './bienvenue.css',
})
export class Bienvenue {
  isLoggedIn = false;
  name="";
  logIn(){
    this.isLoggedIn= this.name=="ilef";
  }

}
