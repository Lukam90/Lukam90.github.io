/* Eléments */

const paterN1 = $("#rd_pater_1");
const aveN1 = $("#rd_ave_1");
const gloriaN1 = $("#rd_gloria_1");

/* Fonctions */

// Sélection d'une section

function setFocus(radioBtn)
{
    radioBtn.checked = true;
    radioBtn.focus();
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#base");

    checkButton(paterN1);
    checkButton(aveN1);
    checkButton(gloriaN1);
}

/* Raccourcis */

// Réinitialisation ou sélection d'une ronde

document.addEventListener("keydown", e => {
    if (e.key == "b" || e.key == "0")   resetAll();

    if (e.key == "p" || e.key == "1")   setFocus(paterN1);
    if (e.key == "a" || e.key == "2")   setFocus(aveN1);
    if (e.key == "g" || e.key == "3")   setFocus(gloriaN1);
});