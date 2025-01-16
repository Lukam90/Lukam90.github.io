/* Eléments */

const selNiveaux = $("#sel_niveaux");

const basePremier = $("#base_trio_1");
const nvPremier = $("#nv_trio_1");

/* Variables */

let index = 0, numKey = 0;

/* Fonctions */

resetAll();

// Sélection d'un niveau

function selectNiveau(index)
{
    goTo("#rondes");

    resetButtons();

    selNiveaux.selectedIndex = index;
    selNiveaux.focus();
}

// Réinitialisation des boutons radio

function resetButtons()
{
    basePremier.checked = true;
    nvPremier.checked = true;
}

// Réinitialisation du chapelet

function resetAll()
{
    selectNiveau(0);

    resetButtons();

    goTo("#");
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 9) selectNiveau(numKey - 1);

    if (e.key == "a")   selectNiveau(9);
    if (e.key == "b")   selectNiveau(10);
    if (e.key == "c")   selectNiveau(11);
    if (e.key == "d")   selectNiveau(12);
});