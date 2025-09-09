//Exercice 1
function filtrerCommentairesCritiques() {
    console.log("Filtrage des commentaires critiques");

    // Récupérer tous les commentaires dans div1
    const div1 = document.getElementById("div1");
    const commentaires = Array.from(div1.getElementsByTagName("p"));

    // Récupérer la liste des critiques urgentes
    const critiques = commentaires.filter(commentaire => {
        const note = parseInt(commentaire.textContent.split(":")[0]); // Extraire la note
        return note <= 2; // Critique urgente si note <= 2
    });

    if (critiques.length > 0) {
        // Afficher les critiques dans la section "critique"
        const listeCritiques = document.getElementById("listeCritiques");
        listeCritiques.innerHTML = ""; // Réinitialiser la liste

        critiques.forEach(critique => {
            // Ajouter chaque critique à la liste
            const critiqueItem = document.createElement("li");
            critiqueItem.textContent = critique.textContent;
            listeCritiques.appendChild(critiqueItem);

            // Supprimer la critique de la liste des commentaires
            critique.remove();
        });
    } else {
        console.log("Aucune critique urgente trouvée.");
    }
}

//Exercice 2 -Partie 1 et 2
function miseAJourVilles() {
    const villesElement = document.getElementById("villes");
    const villes = villesElement.textContent.split(", ");

    if (villes.length > 0) {
        // Retirer la première ville et la rajouter à la fin
        const ville = villes.shift();
        villes.push(ville);

        // Mettre à jour l'affichage
        villesElement.textContent = villes.join(", ");
    }
}

function demarrerDefilementVilles() {
    setInterval(() => {
        miseAJourVilles();
    }, 2000);
}

document.addEventListener("DOMContentLoaded", demarrerDefilementVilles);

//Exercice 3
function chargerDonnees() {
      console.log("Chargement d'un tableau de données");
}

//Exercice 4
let total = 0; //La somme totale des transactions générées
let nbreTotalTransactions = 0; //Nombre de transactions générées
let nbreTransactionsSupMile = 0; //Nombre de transactions dont le montant > 1000

function genererTransaction() {
    return Math.floor(Math.random() * (2000 - 100 + 1) + 100);
}

function ajouterTransaction() {
    console.log("Ajout de transaction");
}

function afficherStatistiques() {
    console.log("Affiche statistiques");
}
