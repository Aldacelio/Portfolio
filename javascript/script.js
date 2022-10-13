var btnMenu = document.querySelector(".btn-menu");
var menuClick = document.querySelector(".menu");
btnMenu.addEventListener("click", function(){
    document.querySelector(".side-bar").classList.toggle("show-menu");
    document.querySelector(".container").classList.toggle("show-menu");
});

menuClick.addEventListener("click", function(){
    document.querySelector(".side-bar").classList.toggle("show-menu");
    document.querySelector(".container").classList.toggle("show-menu");
});