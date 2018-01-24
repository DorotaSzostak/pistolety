var $grid = $('.recommended__container').isotope({
  // options
  itemSelector : '.recommended__products',
  layoutMode : 'fitRows'
});

$('.filters__container').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
    
  $grid.isotope({ filter: filterValue });

})

//$('#btn').on('click', function(){
//    addItems();
//});

//function addItems  (data){
//    for(var i=0; i < data.length; i++){
//    var $newProduct = $('<div class="recommended__products"></div>');
//    var $newProductsShop = $('<div class = "products--shop"</div>')
//    $newProductsShop.prepend('<a class="cena" href="#">' + data[i].price + ',<span>00 -</span></a><img src="components/recommended/src/dodaj.png" alt="koszyk zakupowy">');
//    var $newImage = $('<div class="products--image"</div>')
//    $newImage.prepend('<img src="components/recommended/src/Layer%20196.png" alt="klucz do ustawiania muszki">')
//    $newProduct.append($newProductsShop, $newImage);
//    $grid.append($newProduct).isotope('appended', $newProduct);
//    }
//
//}

var products;
var url = "http://localhost:3000/products"

$('#btn').click(function(){
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/products",
        dataType: 'json'
    })
    
    .done(function(data){
        for(var i=0; i < data.length; i++){
        var $newProduct = $('<div class="recommended__products"></div>');
        var $newProductsShop = $('<div class = "products--shop"</div>')
        $newProductsShop.prepend('<a class="cena" href="#">' + data[i].price + ',<span>00 -</span></a><img src="components/recommended/src/dodaj.png" alt="koszyk zakupowy">');
        var $newImage = $('<div class="products--image"</div>')
        $newImage.prepend('<img src=' + data[i].image + '>')
        var $newDescription = $('<div class="products--description"</div>')
        $newDescription.prepend('<h2 class="description--title">' + data[i].name + '</h2>' + '<p class="products--text">' + data[i].desription + '</p>')
        $newProduct.append($newProductsShop, $newImage, $newDescription);
        $grid.append($newProduct).isotope('appended', $newProduct);
    }
    })
});





