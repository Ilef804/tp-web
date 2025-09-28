
//Étape 7 : Tableaux et boucles

console.log("bienvenue");

const input = document.getElementById("element");
const bouton = document.getElementById("add");
const liste = document.getElementById("liste");

let tab = [];

function ajouterTache() {
  const texte = input.value.trim();
  if (texte === "") {
    alert("Veuillez écrire quelque chose !");
    return;
  }

  tab.push({ texte: texte, completed: false });
  afficherTaches();
  input.value = "";
}

function afficherTaches() {
  liste.innerHTML = "";

  tab.forEach((tache, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = tache.texte;
    if (tache.completed) li.classList.add("completed");
    li.appendChild(span);

    const terminerBtn = document.createElement("button");
    terminerBtn.textContent = "Terminer";
    terminerBtn.addEventListener("click", () => {
      tab[index].completed = !tab[index].completed;
      afficherTaches();
    });
    li.appendChild(terminerBtn);

    const supprimerBtn = document.createElement("button");
    supprimerBtn.textContent = "Supprimer";
    supprimerBtn.addEventListener("click", () => {
      tab.splice(index, 1);
      afficherTaches();
    });
    li.appendChild(supprimerBtn);

    liste.appendChild(li);
  });

  console.log("Tâches actuelles :", tab);
}

bouton.addEventListener("click", ajouterTache);
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") ajouterTache();
});
