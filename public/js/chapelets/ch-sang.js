/* Eléments */

const checkboxes = $all("input[type='checkbox']");

const intros = $all(".intro");

const selMysteres = $("#sel_mysteres");

const trioPremier = $("#base_trio_1");

let intro;

/* Variables */

let index = 0;
let numKey = 0;

/* Fonctions */

resetAll();

// MAJ de l'intro d'une douzaine

function setIntro()
{
    index = selMysteres.selectedIndex;

    intro = intros[index];

    hideAll(intros);
    showBlock(intro);

    resetButtons();
}

// Réinitialisation des cases à cocher et des boutons radio

function resetButtons()
{
    trioPremier.checked = true;
    
    for (let cb of checkboxes)
    {
        cb.checked = false;
    }
}

// Sélection rapide

function selectTo(index)
{
    goTo("#mysteres");

    selMysteres.selectedIndex = index;
    selMysteres.focus();

    setIntro();
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

    if (e.key == "0")   goTo("#");
    if (e.key == "f")   goTo("#fin");

    if (numKey >= 1 && numKey <= 5) selectTo(numKey - 1);

    if (e.key == "r")   resetAll();
});