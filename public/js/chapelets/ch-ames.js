/* Eléments */

const btnPremier = $("#nv1");

const basePremier = $("#base_trio_1");
const nvPremier = $("#nv_trio_1");

/* Fonctions */

// Réinitialisation des boutons radio

function resetButtons()
{
    checkButton(basePremier);
    checkButton(nvPremier);
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    resetButtons();

    checkFirst();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    // Réinitialisation
    if (e.key == "0")   resetAll();

    // Ancres
    if (e.key == "c")   goTo("#credo");
    if (e.key == "p")   goTo("#pater");
    if (e.key == "g")   checkButton(basePremier);
    if (e.key == "a")   goTo("#ave");
    if (e.key == "m")   goTo("#medaille");
    if (e.key == "r")   goTo("#rondes");
});