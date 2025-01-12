// Eléments

const selRondes = $("#sel_rondes");

const btnPremier = $("#dz_grains_1");

// Variables

let index = 0;
let numKey = 0;

/* Fonctions */

resetAll();

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;

    checkFirst();
}

/* Raccourcis */

// Sélection d'une ronde

function selectRonde(index)
{
    goTo("#rondes");

    selRondes.focus();
    selRondes.selectedIndex = index;

    checkFirst();
}

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey >= 1 && numKey <= 5) selectRonde(numKey - 1);

    if (e.key == "c")   goTo("#croix");
    if (e.key == "r")   goTo("#rondes");
    if (e.key == "f")   goTo("#fin");

    if (e.key == "d")   btnPremier.focus();
});