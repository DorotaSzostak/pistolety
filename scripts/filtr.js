var $grid = $('.recommended__container').isotope({
  // options
  itemSelector : '.recommended__products',
  layoutMode : 'fitRows'
});

$('.filters__container').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
    
  $grid.isotope({ filter: filterValue });
});