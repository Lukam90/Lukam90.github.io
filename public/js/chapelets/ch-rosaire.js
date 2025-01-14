/* Eléments */

const checkboxes = $all("input[type='checkbox']");

const trioPremier = $("#base_trio_1");
const dzPremier = $("#dz_grains_1");

/* Fonctions */

// Réinitialisation des cases à cocher et des boutons radio

function resetAll()
{
    trioPremier.checked = true;
    dzPremier.checked = true;

    for (let cb of checkboxes)
    {
        cb.checked = false;
    }
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