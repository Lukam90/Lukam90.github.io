// Eléments

const selRondes = $("#sel_rondes");

const basePremier = $("#ste_marie_vertus_1");
const btnPremier = $("#dz_grains_1");

// Variables

let index = 0;

/* Fonctions */

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;

    basePremier.checked = true;
    btnPremier.checked = true;
}