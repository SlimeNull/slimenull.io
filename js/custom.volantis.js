document.addEventListener("keydown", (e) => {
    if (e.key == "Escape")
        document.getElementById("rightmenu-wrapper").style.display = "none";
});
document.addEventListener("mousedown", (e) => {
    let menumain = document.getElementById("rightmenu-content");
    let menubase = menumain.parentElement;
    if (!menumain.contains(e.target))
        menubase.style.display = "none";
});