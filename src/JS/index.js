document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__menu");
    const mobMenu = document.querySelector(".mobmenu");
    const headerPhone = document.querySelector(".header__contacts-item--phone")
    const header = document.querySelector("header");
    const dataTabParent = document.querySelectorAll("[data-tab-parent]");

    dataTabParent.forEach((el, i) => {
        const dataTabTitles = el.querySelectorAll("[data-tab-title]");
        const dataTabContents = el.querySelectorAll("[data-tab-content]");

        console.log("ok!");
        
        dataTabTitles.forEach((el2, j) => {
            console.log("ok!");
            el2.addEventListener("click", (e) => {
                if (el.classList.contains("active") === true) {
                    el2.classList.remove("active");
                    dataTabContents[j].classList.remove("active");
                } else {
                    dataTabTitles.forEach((el3, d) => {
                        el3.classList.remove("active");
                        dataTabContents[d].classList.remove("active");
                    })
                    el2.classList.add("active");
                    dataTabContents[j].classList.add("active");
                }
            })
        })
    });

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