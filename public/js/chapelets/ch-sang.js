/* Eléments */

const checkboxes = $all("input[type='checkbox']");

const intros = $all(".intro");

const selMysteres = $("#sel_mysteres");

const trioPremier = $("#base_trio_1");

let intro;

/* Variables */

let index = 0;

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

// Réinitialisation du chapelet

function resetAll()
{
    selMysteres.selectedIndex = 0;

    setIntro();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   goTo("#");
    if (e.key == "m")   goTo("#mysteres");
    if (e.key == "f")   goTo("#fin");

    if (e.key == "r")   resetAll();
});