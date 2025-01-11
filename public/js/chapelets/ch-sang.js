// Eléments

const selMysteres = $("#sel_mysteres");

const divPater = $("#dz_pater");

const btnPremier = $("#dz_grains_1");
const btnDernier = $("#dz_grains_7");

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

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (e.key == "m")   goTo("#mysteres");
    if (e.key == "l")   cbLatin.click();

    if (numKey >= 1 && numKey <= 5) {
        selMysteres.focus();
        selMysteres.selectedIndex = numKey - 1;
    }
});