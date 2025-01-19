/* Eléments */

const rdNiveaux = $name("rd_niveaux");

const btnPremier = rdNiveaux[0];

const basePremier = $("#base_trio_1");
const nvPremier = $("#nv_trio_1");

const pNiveau = $("#niveau");

/* Variables */

const niveaux = [
    "1. Crainte de Dieu", "2. Chasteté", "3. Foi",
    "4. Espérance", "5. Obéissance", "6. Patience",
    "7. Piété", "8. Chasteté", "9. Prudence",
    "10. Force", "11. Tempérance", "12. Pureté",
    "13. Justice"
];

let index = 0;
let niveau = "";

/* Fonctions */

resetAll();

// MAJ du niveau

function majNiveau(number)
{
    index = parseInt(number) - 1;

    niveau = niveaux[index];

    pNiveau.textContent = niveau;

    resetButtons();
}

// Réinitialisation des boutons radio

function resetButtons()
{
    checkButton(basePremier);
    checkButton(nvPremier);
}

// Réinitialisation du chapelet

function resetAll()
{
    goTo("#");

    majNiveau(1);

    checkButton(btnPremier);
}

/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   resetAll();

    // Ancres
    if (e.key == "c")   goTo("#credo");
    if (e.key == "p")   goTo("#pater");
    if (e.key == "g")   checkButton(basePremier);
    if (e.key == "a")   goTo("#ave");
    if (e.key == "m")   goTo("#medaille");
    if (e.key == "m")   goTo("#rondes");
});