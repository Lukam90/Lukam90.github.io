// Eléments

const selRondes = $("#sel_rondes");

const divDizaines = $("#dizaines");
const divFin = $("#fin");

const btnPremier = $("#dz_grains_1");
const finPremier = $("#fin_trio_1");

// Variables

let index = 0;

/* Fonctions */

resetAll();

// MAJ du bloc

function setBlock()
{
    index = selRondes.selectedIndex;

    if (index < 5) {
        switchBlocks(divDizaines, divFin);
    } else {
        switchBlocks(divFin, divDizaines);
    }

    btnPremier.checked = true;
    finPremier.checked = true;
}

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;

    setBlock();
}