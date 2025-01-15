/* Eléments */

const selRondes = $("#sel_rondes");

const basePremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");
const finPremier = $("#fin_trio_1");

/* Variables */

let index = 0;
let numKey = 0;

/* Fonctions */

// Sélection du numéro de ronde

function selectRonde(index) {
    resetButtons();

    selRondes.selectedIndex = index;
    selRondes.focus();
}

// Réinitialisation des boutons radio

function resetButtons()
{
    checkButton(basePremier);
    checkButton(dzPremier);
    checkButton(finPremier);
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    resetButtons();
}

/* Raccourcis */

// Réinitialisation ou sélection d'une ronde

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (e.key == "0")   resetAll();

    if (numKey >= 1 && numKey <= 5) selectRonde(numKey - 1);
});