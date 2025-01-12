// Eléments

const selMysteres = $("#sel_mysteres");

const btnPremier = $("#dz_grains_1");

const intros = $all(".intro");

let intro;

// Variables

let index = 0;
let numKey = 0;

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

/* Raccourcis */

// Sélection d'un mystere

function selectMystere(index)
{
    goTo("#mysteres");

    selMysteres.focus();
    selMysteres.selectedIndex = index;

    setIntro();
}

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey >= 1 && numKey <= 5) selectMystere(numKey - 1);

    if (e.key == "p")   goTo("#dz_pater");
    if (e.key == "a")   goTo("#dz_ave");
    if (e.key == "g")   goTo("#dz_gloria");
    if (e.key == "f")   goTo("#dz_fin");

    if (e.key == "d")   btnPremier.focus();
});