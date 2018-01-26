var $grid = $('.recommended__container').isotope({
  // options
  itemSelector : '.recommended__products',
  layoutMode : 'fitRows'
});

$('.btn__filter').on( 'change', function() {
  var filterValue = this.value;
    
  $grid.isotope({ filter: filterValue });

})

//$('.container').infiniteScroll({
//  // options
//  path: addItems,
//  append: '.recommended__products',
//  scrollThreshold: 100,
//  history: false,
//});

//$('#btn').on('click', function(){
//    addItems();
//});
//    
//
//function addItems  (){
//    var price= 100
//    var $newProduct = $('<div class="recommended__products"></div>');
//    var $newProductsShop = $('<div class = "products--shop"</div>')
//    $newProductsShop.prepend('<a class="cena" href="#">' + price + ',<span>00 -</span></a><img src="components/recommended/src/dodaj.png" alt="koszyk zakupowy">');
//    var $newImage = $('<div class="products--image"</div>')
//    $newImage.prepend('<img src="components/recommended/src/Layer%20196.png" alt="klucz do ustawiania muszki">')
//    $newProduct.append($newProductsShop, $newImage);
//    $grid.append($newProduct).isotope('appended', $newProduct);
//    
//    
//    
//}

$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
           // ajax call get data from server and append to the div
         var url = "http://localhost:3000/products"

//$('#btn').click(function(){
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
    })
//}); 

    }
});
  






