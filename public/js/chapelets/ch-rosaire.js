/* Eléments */

const checkboxes = $all("input[type='checkbox']");

const trioPremier = $("#base_trio_1");

const jPremier = $("#dz_grains_joyeux_1");
const lPremier = $("#dz_grains_lumineux_1");
const dPremier = $("#dz_grains_douloureux_1");
const gPremier = $("#dz_grains_glorieux_1");

/* Fonctions */

// Réinitialisation des cases à cocher et des boutons radio

function resetRadioButtons()
{
    trioPremier.checked = true;

    jPremier.checked = true;
    lPremier.checked = true;
    dPremier.checked = true;
    gPremier.checked = true;
}

function resetCheckboxes()
{
    for (let cb of checkboxes)
    {
        cb.checked = false;
    }
}

function resetAll()
{
    resetRadioButtons();
    resetCheckboxes();
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   goTo("#");

    if (e.key == "j" || e.key == "1")   goTo("#m_joyeux");
    if (e.key == "l" || e.key == "2")   goTo("#m_douloureux");
    if (e.key == "d" || e.key == "3")   goTo("#m_lumineux");
    if (e.key == "g" || e.key == "4")   goTo("#m_glorieux");

    if (e.key == "r")   resetAll();
});