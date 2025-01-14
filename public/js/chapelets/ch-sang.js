/* Raccourcis */

document.addEventListener("keydown", e => {
    if (e.key == "0")   goTo("#");
    if (e.key == "1")   goTo("#p1");
    if (e.key == "2")   goTo("#p2");
    if (e.key == "3")   goTo("#p3");
    if (e.key == "4")   goTo("#p4");
    if (e.key == "5")   goTo("#p5");

    if (e.key == "f" || e.key == "6")   goTo("#fin");
});