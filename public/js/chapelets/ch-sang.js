// Eléments

const selMysteres = $("#sel_mysteres");

const btnPremier = $("#dz_grains_1");

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

    checkFirst();
}

// Réinitialisation du chapelet

function resetAll()
{
    selMysteres.selectedIndex = 0;

    setIntro();
}