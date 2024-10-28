import SimpleLightbox from "simplelightbox";
import Cleave from "cleave.js";
import AirDatepicker from "air-datepicker";

class MinModalJS {

    modalOpen () {
        this.modal.classList.add('min-modal-js-active');
        document.querySelector("html").classList.add('lock');
    }

    modalClose () {
        this.modal.classList.remove('min-modal-js-active');
        document.querySelector("html").classList.remove('lock');
    }

    modalDestroy() {
        this.modal.remove();
    }

    constructor(inner, obj) {
        if (obj.keyOpen === undefined) {
            obj.keyOpen = 'Escape';
        }

        this.btns = document.querySelectorAll(obj.buttonsActive);
        this.inner = document.querySelector(inner);
        this.closeBtns = document.querySelectorAll(obj.buttonsDisActive);
        this.keyOpen = obj.keyOpen;
        this.modalOutsideClick = obj.modalOutsideClick;
        this.modal = document.createElement('div');
        this.modal.classList.add('modal-wrapper');

        let modalOpen = () => {
            this.modalOpen();
        };
        let modalClose = () => {
            this.modalClose();
        };

        this.modal.append(this.inner);
        document.body.append(this.modal);
        
        this.btns.forEach(element => {
            element.addEventListener('click', (e) =>{
                e.preventDefault();
                modalOpen();
            });
        });

        this.closeBtns.forEach(element => {
            element.addEventListener('click', (e) =>{
                e.preventDefault();
                modalClose();
            });
        });

        if (this.modalOutsideClick != false) {
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    modalClose();
                }
            });
        }

        if (this.key != false) {
            document.addEventListener('keydown', (e)=> {
                if (e.key === this.keyOpen) { 
                    modalClose();
                }
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__menu");
    const mobMenu = document.querySelector(".mobmenu");
    const headerPhone = document.querySelector(".header__contacts-item--phone")
    const header = document.querySelector("header");
    const dataTabParent = document.querySelectorAll("[data-tab-parent]");
    const contactsMapAdapt = document.querySelector(".contacts__map-adapt");
    const contactsMap = document.querySelector(".contacts__map");
    const phoneInput = document.querySelectorAll("[name='phone']")
    const inputsDate = document.querySelectorAll("[calendar]");

    new SimpleLightbox('.gallery__item a');

    inputsDate.forEach(el => {
        new AirDatepicker(el)
    });

    phoneInput.forEach(el => {
        var cleave = new Cleave(el, {
            prefix: '+7',
            delimiters: [' ', '-', '-', '-'],
            blocks: [2, 3, 3, 2, 2],
            uppercase: true,
        });
    })

    const callModal = new MinModalJS('.modal-call', {
        buttonsActive: ".modal-call-open",
        buttonsDisActive: '.modal-call-close',
        modalOutsideClick: true,
    });

    const thanksModal = new MinModalJS(".modal-thanks--selector", {
        modalOutsideClick: true
    });

    const errorModal = new MinModalJS(".modal-error", {
        modalOutsideClick: true
    })

    dataTabParent.forEach((el, i) => {
        const dataTabTitles = el.querySelectorAll("[data-tab-title]");
        const dataTabContents = el.querySelectorAll("[data-tab-content]");
        
        dataTabTitles.forEach((el2, j) => {
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

        contactsMapAdapt.append(contactsMap);
    }

    if (window.innerWidth <= 768) {
        mobMenu.append(headerPhone);
    }

    document.querySelectorAll('.form').forEach(el => {
        const restUrl = el.getAttribute("data-rest-url");
        const nonce = el.getAttribute("data-nonce");

        el.addEventListener('submit', async function(e) {
            e.preventDefault();
    
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                dphone: formData.get('phone'),
                dateDeparture: formData.get("dateDeparture"),
                dateArrival: formData.get("dateArrival")        
            };
    
            try {
                const response = await fetch(restUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-WP-Nonce': nonce
                    },
                    body: JSON.stringify(data)
                });
    
                if (response.ok) {
                    thanksModal.modalOpen();
                } else {
                    errorModal.modalOpen();
                }
            } catch (error) {
                errorModal.modalOpen();
            }
        });
    })
});