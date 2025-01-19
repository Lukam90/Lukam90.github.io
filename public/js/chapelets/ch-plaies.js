/* Eléments */

const rdMysteres = $name("rd_mysteres");

const btnPremier = rdMysteres[0];

const pMystere = $("#mystere");

/* Variables */

const plaies = ["1. les mains", "2. les pieds", "3. le dos", "4. la tête", "5. le coeur"];

let index = 0, numKey = 0;
let mystere = "";

/* Fonctions */

resetAll();

// MAJ du mystère

function majMystere(number)
{
    index = parseInt(number) - 1;

    mystere = plaies[index];

    pMystere.textContent = mystere;
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    majMystere(1);

    checkButton(btnPremier);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   resetAll();
});