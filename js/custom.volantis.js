document.addEventListener("keydown", (e) => {
    if (e.key == "Escape")
        document.getElementById("rightmenu-wrapper").style.display = "none";
});
document.addEventListener("mousedown", (e) => {
    let menumain = document.getElementById("rightmenu-content");
    let menubase = menumain.parentElement;
    let
        menuX = menubase.offsetLeft + menumain.offsetLeft,
        menuY = menubase.offsetTop + menumain.offsetTop,
        menuRight = menuX + menumain.offsetWidth,
        menuBottom = menuY + menumain.offsetHeight,
        mouseX = e.screenX,
        mouseY = e.screenY;
    if (mouseX < menuX ||
        mouseY < menuY ||
        mouseX > menuRight ||
        mouseY > menuBottom)
        menubase.style.display = "none";
});