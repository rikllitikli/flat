$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

jQuery(document).ready(function(){
    jQuery('.spoiler-head').click(function(){
        $(this).parents('.spoiler-wrap').toggleClass("active").find('.spoiler-body').slideToggle();
    })
})