/* alternar barra de navegação */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    });
}


/* Adiciona classe ativa no cabeçalho quando rolada 200px do topo */

const header = document.querySelector("[data-header]");

    window.addEventListener("scroll", function () {
    window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})