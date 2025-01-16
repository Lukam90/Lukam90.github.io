/* Eléments */

const selTypes = $("#sel_types");

const trioPremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

const mRadios = $name("rd_mystere");
const mLabels = $all(".txt_mystere");

let radioBtn, label;

/* Variables */

let index = 0, loopIndex = 0; numKey = 0;
let type = "joyeux";
let mysteres = [];

/* Fonctions */

majMysteres();

// MAJ des mystères

function majMysteres()
{
    index = selTypes.selectedIndex;

    type = types[index];
    mysteres = rosaire[type];

    loopIndex = 0;

    for (let label of mLabels)
    {
        label.textContent = mysteres[loopIndex++];
    }

    selectMystere(0);

    resetButtons();
}

// Sélection d'un mystère

function selectMystere(index)
{
    goTo("#rondes");

    radioBtn = mRadios[index];
    radioBtn.click();
}

// Réinitialisation des cases à cocher et des boutons radio

function resetButtons()
{
    trioPremier.checked = true;
    dzPremier.checked = true;
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    selTypes.selectedIndex = 0;

    majMysteres();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (numKey == 0)   resetAll();

    if (numKey >= 1 && numKey <= 5) selectMystere(numKey - 1);
});