// TP1

// Exercice 1
{
  var x = 10;
  let y = 20;
  const z = 30;

  console.log("Ex1 : Dans le bloc");
  console.log(x, y, z); 
}

console.log("Ex1 : Hors du bloc");
console.log(x); 
console.log("\n");

// Exercice 2
const somme1 = (a, b) => { return a + b; };
const somme2 = (a, b) => a + b;

console.log("Ex2 : Sommes");
console.log(somme1(5,3));
console.log(somme2(5,3));
console.log("\n");

// Exercice 3
const user = { name: "Noor", age: 10, city: "Tunis" };
var name = user.name;
var age = user.age;

console.log("Ex3 : ");
console.log(name, age);
console.log("\n");

// Exercice 4
const tab1 = [1,2,3];
const tab2 = [4,5,6];
const tab3 = tab1.concat(tab2);

console.log("Ex4 : Tableaux concaténés");
console.log(tab3);
console.log("\n");

// Exercice 5
const livre = {
  titre: "book1",
  auteur: "auteur1",
  année: 2000,
  getInfo() { return `${this.titre} par ${this.auteur}, publié en ${this.année}.`; }
};

console.log("Ex5 : Livre");
console.log(livre.getInfo());
console.log("\n");

// Exercice 6
class Etudiant {
  constructor(nom, note) { this.nom = nom; this.note = note; }
  getMention() {
    if (this.note >= 16) return "Très bien";
    else if (this.note >= 14) return "Bien";
    else if (this.note >= 10) return "Passable";
    else return "Échec";
  }
}

const etu1 = new Etudiant("Amine", 17);
const etu2 = new Etudiant("Sarra", 13);
const etu3 = new Etudiant("Youssef", 8);

console.log("Ex6 : Étudiants");
console.log(etu1.nom, ":", etu1.getMention());
console.log(etu2.nom, ":", etu2.getMention());
console.log(etu3.nom, ":", etu3.getMention());
console.log("\n");

// Exercice 7
const notes = [12, 5, 17, 9, 20];
const somme = notes.reduce((acc, note) => acc + note, 0);
const moyenne = somme / notes.length;
const notesTriees = notes.slice().sort((a,b)=>b-a);
const notesFiltrees = notes.filter(note => note >= 10);

console.log("Ex7 : Notes");
console.log("Moyenne :", moyenne);
console.log("Tri décroissant :", notesTriees);
console.log("Notes >=10 :", notesFiltrees);
console.log("\n");

// Exercice 8
const wait = ms => new Promise(res => setTimeout(res, ms));

console.log("Ex8 : Attente");
console.log("Début");
wait(2000).then(() => { console.log("Fin après 2s"); });
