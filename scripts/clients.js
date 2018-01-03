    $(document).ready(function(){
      $('.clients').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          responsive: [
              {
                 breakpoint: 920,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    infinite: true,
                  }
              },
              {
                 breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    infinite: true,
                  } 
              }
          ]
      });
    });