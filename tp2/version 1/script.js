//Étape 1 jusqu'a étape 6

console.log("bienvenue")
function ajouterTache() {
  const input = document.getElementById("element");
  const texte = input.value.trim(); 


  if (texte === "") {
    alert("Veuillez écrire quelque chose !");
    return;
  }


  const li = document.createElement("li");
  li.textContent = texte;

  const liste = document.getElementById("liste");
  liste.appendChild(li);

  terminertache(li);
  supprimertache(li);

  input.value = "";
}



function terminertache(li) {
  const terminerBtn = document.createElement("button");
  terminerBtn.textContent = "Terminer";
  terminerBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  li.appendChild(terminerBtn);}


function supprimertache(li) {
    

  const supprimerBtn = document.createElement("button");
  supprimerBtn.textContent = "Supprimer";
  supprimerBtn.addEventListener("click", () => {
    liste.removeChild(li);
  });

  li.appendChild(supprimerBtn);}


  const bouton = document.getElementById("add");
bouton.addEventListener("click", ajouterTache);

const input = document.getElementById("element");
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    ajouterTache();
  }
});