// Eléments

const selMysteres = $("#sel_mysteres");

const divPater = $("#dz_pater");

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

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "m") {
        goTo("#mysteres");

        selMysteres.focus();
    }

    if (e.key == "d") btnPremier.focus();

    if (e.key == "p") goTo("#dz_pater");
    if (e.key == "a") goTo("#dz_ave");
    if (e.key == "f") goTo("#dz_fin");
});