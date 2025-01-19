/* Eléments */

const btnPremier = $("#p1");

/* Fonctions */

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    checkFirst();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   resetAll();
});