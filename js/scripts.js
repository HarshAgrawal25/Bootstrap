  // for more reference :https://stackoverflow.com/questions/20615100/add-play-pause-button-to-bootstrap-carousel
  $(document).ready(function(){
    $('#mycarousel').carousel( { interval: 100,pause:"false" } );
    $('#carouselButton').click(function(){
        if( $('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else 
        if( $('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause ');
        }
        
    });


    $('#modal').click(function(){
        $('#reserve25').modal('show');
    })


    $('#login').click(function(){
        $('#loginModal').modal('show');
    })
});