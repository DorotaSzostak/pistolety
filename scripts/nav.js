var hamburger = document.querySelector(".hamburger__icon");

hamburger.addEventListener("click", function(){
    var menu = document.getElementById("nav__mobile");
    menu.classList.toggle("nav__responsive");
    this.classList.toggle("open");
});


var koszyk = document.getElementById("koszyk");
var lupka = document.getElementById("lupka");
var telefon = document.getElementById("contact");

koszyk.addEventListener("click", function(){
    var sign = document.getElementById("form");
    sign.classList.toggle("nav__logform--active");
});

lupka.addEventListener("click", function(){
    var search = document.getElementById("search");
    search.classList.toggle("nav__search--active");
});

telefon.addEventListener("click", function(){
    var search = document.getElementById("call");
    call.classList.toggle("nav__call--active");
});