/* Eléments */

const selRondes = $("#sel_rondes");

/* Variables */

let index = 0, numKey = 0;

/* Fonctions */

resetAll();

// Sélection d'une ronde

function selectRonde(index)
{
    goTo("#rondes");

    selRondes.selectedIndex = index;
    selRondes.focus();
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    selRondes.selectedIndex = 0;
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) selectRonde(numKey - 1);
});