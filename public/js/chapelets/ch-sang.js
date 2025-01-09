// Eléments

const selMysteres = $("#sel_mysteres");

const trioPremier = $("#ste_marie_vertus_1");
const dzPremier = $("#dz_grains_1");

const intros = $all(".intro");

let intro;

// Variables

let index = 0;

/* Fonctions */

resetAll();

// MAJ de l'intro

function setIntro()
{
    index = selMysteres.selectedIndex;

    intro = intros[index];

    hideAll(intros);
    showBlock(intro);

    trioPremier.checked = true;
    dzPremier.checked = true;
}

// Réinitialisation du chapelet

function resetAll()
{
    selRondes.selectedIndex = 0;

    setBlock();
}