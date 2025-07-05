const moreBtn = document.getElementById("moreBtn");
const menuMidBar = document.getElementById("menu_mid_bar");
moreBtn.addEventListener("click", () => {
menuMidBar.style.display =
    menuMidBar.style.display === "flex" ? "none" : "flex";
});