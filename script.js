// Typed JS 
var typed = new Typed('#element', {
    strings: ["I am a Web Developer", "I am a Student", "I am a Photographer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
    });

// Owl Carousel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })










