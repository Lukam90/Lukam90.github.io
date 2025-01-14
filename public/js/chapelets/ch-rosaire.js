/* Eléments */

const checkboxes = $all("input[type='checkbox']");

const blocks = $all(".mysteres");

const selTypes = $("#sel_types");

const trioPremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

let block;

/* Variables */

const types = ["joyeux", "lumineux", "douloureux", "glorieux"];

let index = 0;
let type = "";

/* Fonctions */

setBlock();

// MAJ du bloc

function setBlock()
{
    index = selTypes.selectedIndex;
    type = types[index];

    block = $("#m_" + type);

    hideAll(blocks);
    showBlock(block);

    resetButtons();
}

// Réinitialisation des cases à cocher et des boutons radio

function resetButtons()
{
    trioPremier.checked = true;
    dzPremier.checked = true;

    for (let cb of checkboxes)
    {
        cb.checked = false;
    }
}

// Réinitialisation du chapelet

function resetAll()
{
    selTypes.selectedIndex = 0;

    setBlock();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   goTo("#");

    if (e.key == "r")   resetAll();
});