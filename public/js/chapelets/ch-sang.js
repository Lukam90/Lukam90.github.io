// Eléments

const selMysteres = $("#sel_mysteres");

const divPater = $("#dz_pater");

const btnPremier = $("#dz_grains_1");
const btnDernier = $("#dz_grains_7");

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
    // Langue (Latin - FR)
    if (e.key == "l") cbLatin.click();

    // Sélection du mystère (ou retour)
    if (e.key == "m" || e.key == "1") selMysteres.focus();

    // Pater
    if (e.key == "p" || e.key == "2") goTo("#dz_pater");

    // Ave
    if (e.key == "a" || e.key == "3") goTo("#dz_ave");

    // Douzaine
    if (e.key == "d" || e.key == "4") checkButton(btnPremier);

    // Gloria
    if (e.key == "g" || e.key == "5") checkButton(btnDernier);

    // Oraison finale
    if (e.key == "f" || e.key == "6") goTo("#dz_fin");
});
