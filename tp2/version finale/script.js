let tab = [];

// Charger les tâches si elles existent déjà
if (localStorage.getItem("taches")) {
  tab = JSON.parse(localStorage.getItem("taches"));
  afficherTaches();
}

function ajouterTache() {
  const input = document.getElementById("element");
  const texte = input.value.trim();

  if (texte === "") return alert("Veuillez écrire quelque chose !");

  tab.push({ texte: texte, completed: false });
  sauvegarderTaches();
  afficherTaches();
  input.value = "";
}

function afficherTaches() {
  const liste = document.getElementById("liste");
  const search = document.getElementById("search");
  const encoursSpan = document.getElementById("encours");
  const termineesSpan = document.getElementById("terminees");

  liste.innerHTML = ""; // reset affichage

  let encours = 0;
  let terminees = 0;

  tab.forEach((tache, index) => {
    const li = document.createElement("li");

    // texte de la tâche
    const span = document.createElement("span");
    span.textContent = tache.texte;
    if (tache.completed) {
      li.classList.add("completed");
      terminees++;
    } else {
      encours++;
    }
    li.appendChild(span);

    // bouton terminer
    const terminerBtn = document.createElement("button");
    terminerBtn.textContent = "Terminer";
    terminerBtn.addEventListener("click", () => {
      tab[index].completed = !tab[index].completed;
      sauvegarderTaches();
      afficherTaches();
    });
    li.appendChild(terminerBtn);

    // bouton supprimer
    const supprimerBtn = document.createElement("button");
    supprimerBtn.textContent = "Supprimer";
    supprimerBtn.addEventListener("click", () => {
      tab.splice(index, 1);
      sauvegarderTaches();
      afficherTaches();
    });
    li.appendChild(supprimerBtn);

    // filtrage par recherche
    if (!tache.texte.toLowerCase().includes(search.value.toLowerCase())) {
      li.style.display = "none";
    }

    liste.appendChild(li);
  });

  // mise à jour des compteurs
  encoursSpan.textContent = `En cours : ${encours}`;
  termineesSpan.textContent = `Terminées : ${terminees}`;
}

function sauvegarderTaches() {
  localStorage.setItem("taches", JSON.stringify(tab));
}

//Events 
document.getElementById("add").addEventListener("click", ajouterTache);

document.getElementById("element").addEventListener("keydown", e => {
  if (e.key === "Enter") ajouterTache();
});

document.getElementById("clearAll").addEventListener("click", () => {
  if (confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) {
    tab = [];
    sauvegarderTaches();
    afficherTaches();
  }
});

document.getElementById("search").addEventListener("input", afficherTaches);
