import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
selector: 'app-welcome',
imports: [ FormsModule],
templateUrl: './welcome.html',
styleUrls: ['./welcome.css']
})
export class Welcome{
username = 'Mohamed';
imagePath =
'https://angular.io/assets/images/logos/angular/angular.png';
onClick() {
alert(`Bienvenue, ${this.username} !`);
}
}