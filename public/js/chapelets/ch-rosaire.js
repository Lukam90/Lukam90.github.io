/* Eléments */

//

/* Fonctions */

//

/* Raccourcis */

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (e.key == "m")   goTo("#mysteres");

    if (e.key == "a")   selectType(0);
    if (e.key == "b")   selectType(1);
    if (e.key == "c")   selectType(2);
    if (e.key == "d")   selectType(3);

    if (numKey >= 1 && numKey <= 5) selectMystere(numKey - 1);
});