const btnMenu = document.querySelector(".logo-menu");
const Menu = document.querySelector(".liste-nav");

btnMenu.addEventListener("click", () => {
    Menu.classList.toggle("active");
});