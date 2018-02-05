var arrowBtn = document.querySelector(".filters__arrow");

arrowBtn.addEventListener('click', function(){
    var sekcja = document.querySelector(".filters__hidden");
    var sekcja2 = document.querySelector(".filters__selection");
    var results = document.querySelector(".filters__results");
    arrowBtn.classList.toggle("arrow__clicked");
    if(sekcja.classList.contains("filters__container")){
        sekcja.classList.remove("filters__container");
        sekcja2.style.display = "none";
        results.style.display = "none";
    } else { 
        sekcja.classList.add("filters__container");
        sekcja2.style.display = "block";
        results.style.display = "inline-block";
    }
});

var $grid = $('.recommended__container').isotope({
  // options
  itemSelector : '.recommended__products',
  layoutMode : 'fitRows'
});

$('.btn__filter').on( 'change', function() {
  var filterValue = this.value;
    
  $grid.isotope({ filter: filterValue });

})

$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
           // ajax call get data from server and append to the div
         var url = "http://localhost:3000/products"

    $.ajax({
        method: "GET",
        url: "http://localhost:3000/products",
        dataType: 'json'
    })
    
    .done(function(data){
        for(var i=0; i < data.length; i++){
        var $newProduct = $('<div class="recommended__products"></div>');
            $newProduct.addClass(data[i].category);
        var $newProductsShop = $('<div class = "products--shop"</div>')
        $newProductsShop.prepend('<a class="cena" href="#">' + data[i].price + ',<span>00 -</span></a><img src="components/recommended/src/dodaj.png" alt="koszyk zakupowy">');
        var $newImage = $('<div class="products--image"</div>')
        $newImage.prepend('<img src=' + data[i].image + '>')
        var $newDescription = $('<div class="products--description"</div>')
        $newDescription.prepend('<h2 class="description--title">' + data[i].name + '</h2>' + '<p class="products--text">' + data[i].desription + '</p>')
        $newProduct.append($newProductsShop, $newImage, $newDescription);
        $grid.append($newProduct).isotope('appended', $newProduct);
    }
    });

    }
});
  






