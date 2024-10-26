document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__menu");
    const mobMenu = document.querySelector(".mobmenu");
    const headerPhone = document.querySelector(".header__contacts-item--phone")
    const header = document.querySelector("header");

    if (window.innerWidth <= 992) {
        mobMenu.append(menu);
        mobMenu.style.paddingTop = header.getBoundingClientRect().height + "px";
        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            mobMenu.classList.toggle("active");
            document.body.classList.toggle("lock");
        });
    }

    if (window.innerWidth <= 768) {
        mobMenu.append(headerPhone);
    }
});