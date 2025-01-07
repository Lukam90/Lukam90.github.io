// Eléments

const selNiveaux = $("#sel_niveaux");

const divMedaille = $("#nv_medaille");
const divRonde = $("#nv_ronde");

const basePremier = $("#base_trio_1");
const trioPremier = $("#nv_trio_1");

// Variables

let index = 0;

/* Fonctions */

resetAll();

// MAJ du bloc

function setBlock()
{
    index = selNiveaux.selectedIndex;

    if (index == 0) {
        switchBlocks(divMedaille, divRonde);
    } else {
        switchBlocks(divRonde, divMedaille);
    }

    basePremier.checked = true;
    trioPremier.checked = true;
}

// Réinitialisation du chapelet

function resetAll()
{
    selNiveaux.selectedIndex = 0;

    setBlock();
}