// Eléments

const selRondes = $("#sel_rondes");

const btnPremier = $("#dz_grains_1");
const trioPremier = $("#fin_trio_1");

/* Fonctions */

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;

    btnPremier.checked = true;
    trioPremier.checked = true;
}