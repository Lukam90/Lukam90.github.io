// Données

const chapelets = {
    joyeux : ch_joyeux,
    lumineux : ch_lumineux,
    douloureux : ch_douloureux,
    glorieux : ch_glorieux
};

// Eléments

const selType = $("#sel_type");
const selMysteres = $("#sel_mysteres");

const spanFruit = $("#fruit");

const btnPremier = $("#dz_grains_1");

// Variables

let chapelet, mysteres, fruits;

let index = 0;
let type = "joyeux";
let fruit = "";

initData("joyeux");

//debugHideAll();

// Initialisation des données

function initData(type)
{
    chapelet = chapelets[type];

    mysteres = chapelet["mysteres"];
    fruits = chapelet["fruits"];
}

// MAJ des mystères d'un chapelet selon le type

function majMysteres() 
{
    index = 0;

    type = selType.value;

    initData(type);

    for (let optMystere of selMysteres.children) {
        optMystere.innerText = mysteres[index++];
    }

    selMysteres.selectedIndex = 0;

    majInfos();
}

// MAJ des données selon le mystère sélectionné

function majInfos() 
{
    index = selMysteres.selectedIndex;

    fruit = fruits[index];

    spanFruit.textContent = fruit;

    checkFirst();
}

/* Raccourcis */

// Sélection d'un type

function selectType(index)
{
    goTo("#mysteres");

    selType.selectedIndex = index;

    selMysteres.focus();

    majMysteres();
}

// Sélection d'un mystere

function selectMystere(index)
{
    goTo("#mysteres");

    selMysteres.focus();
    selMysteres.selectedIndex = index;

    majInfos();
}

// Evénements

document.addEventListener("keydown", e => {
    numKey = parseInt(e.key);

    if (e.key == "m")   goTo("#mysteres");

    if (e.key == "a")   selectType(0);
    if (e.key == "b")   selectType(1);
    if (e.key == "c")   selectType(2);
    if (e.key == "d")   selectType(3);

    if (numKey >= 1 && numKey <= 5) selectMystere(numKey - 1);
});