$(document).ready(function() {
    // Shoping bag menu
    $("#cart-icon").on('click', function () {
        $(".shopping-bag-menu").addClass("show__shopping-bag-menu");
        $('.shopping-bag-overlay').addClass('active');
    });

    $("#back-arrow").on('click', function () {
        $(".shopping-bag-menu").removeClass("show__shopping-bag-menu");
        $('.shopping-bag-overlay').removeClass('active');
    });
    
    
    // Navigation
    $("#nav-toggle").on('click', function () {
        $(this).toggleClass("active");
        $(".mobile-menu").toggleClass("show__mobile-menu");
    });

    $("#header-links__men").on('click', function() {
        $(".header-men-women-container").toggleClass('hidden');
    });
    $("#header-links__women").on('click', function() {
        $(".header-men-women-container").toggleClass('hidden');
    });

    $("#men-link").on('click', function() {
        $(".header-mobile__men-link").show();
        $(".mobile-ul-first").hide();
    });
    $("#women-link").on('click', function() {
        $(".header-mobile__women-link").show();
        $(".mobile-ul-first").hide();
    });

    $(".link-to-first-ul").on('click', function() {
        $(".header-mobile__men-link").hide();
        $(".header-mobile__women-link").hide();
        $(".mobile-ul-first").show();
    });
    $(".link-to-second-ul").on('click', function() {        
        $(".header-mobile__shoes-link").hide();
        $(".header-mobile__basics-link").hide();
        $(".header-mobile__accessories-link").hide();
        $(".header-mobile__collections-link").hide();

        $(".mobile-ul-first").hide();
        $(".mobile-ul-second").show();
    });
    
    // $("#link-to-second-ul-women").on('click', function() {        
    //     $(".header-mobile__shoes-link").hide();
    //     $(".header-mobile__basics-link").hide();
    //     $(".header-mobile__accessories-link").hide();
    //     $(".header-mobile__collections-link").hide();

    //     $(".mobile-ul-first").hide();
    //     $(".mobile-ul-second").hide();
    //     $("#mobile-ul-second-women").show();
    // });

    $(".shoes-link").on('click', function() {
        $(".header-mobile__shoes-link").show();
        $(".mobile-ul-second").hide();
    });
    $(".basics-link").on('click', function() {
        $(".header-mobile__basics-link").show();
        $(".mobile-ul-second").hide();
    });
    $(".accessories-link").on('click', function() {
        $(".header-mobile__accessories-link").show();
        $(".mobile-ul-second").hide();
    });
    $(".collections-link").on('click', function() {
        $(".header-mobile__collections-link").show();
        $(".mobile-ul-second").hide();
    });


    // Owl Carousel (Slider)
    $(".owl-carousel").owlCarousel({
        loop:true,
        nav:true,
        navText: ['<span class="chevron-left"><i class="fas fa-chevron-left"></i></span>', '<span class="chevron-right"><i class="fas fa-chevron-right"></i></span>'],
        dots: false,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        // margin:10,
        responsiveClass:true,
        responsive: {
            0 : {
                items: 1,
            },
            768 : {
                items: 1,
            }
        }
    });
});


// document.querySelector( "#nav-toggle").addEventListener( "click", function() {
//     this.classList.toggle( "active" );
//     document.querySelector(".mobile-menu").classList.toggle("show__mobile-menu");
// });
