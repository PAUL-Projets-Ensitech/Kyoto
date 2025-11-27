const btnMenu = document.querySelector(".logo-menu");
const Menu = document.querySelector(".liste-nav");

btnMenu.addEventListener("click", () => {
    Menu.classList.toggle("active");
});

const allLinks = document.querySelectorAll(".item-nav");

allLinks.forEach(item => {
    item.addEventListener("click", () => {
        Menu.classList.toggle("active");
    });
});