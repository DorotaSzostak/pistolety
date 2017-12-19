var hamburger = document.querySelector(".hamburger__icon");

hamburger.addEventListener("click", function(){
    var menu = document.getElementById("nav__mobile");
    menu.classList.toggle("nav__responsive");
    this.classList.toggle("open");
});