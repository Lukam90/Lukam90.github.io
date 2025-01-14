/* Eléments */

const checkboxes = $all("input[type='checkbox']");

const trioPremier = $("#base_trio_1");

/* Fonctions */

// Réinitialisation des cases à cocher et des boutons radio

function resetAll()
{
    goTo("#");

    trioPremier.checked = true;
    
    for (let cb of checkboxes)
    {
        cb.checked = false;
    }
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   resetAll();

    if (e.key == "1")   goTo("#p1");
    if (e.key == "2")   goTo("#p2");
    if (e.key == "3")   goTo("#p3");
    if (e.key == "4")   goTo("#p4");
    if (e.key == "5")   goTo("#p5");

    if (e.key == "f" || e.key == "6")   goTo("#fin");
});