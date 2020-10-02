//menu burger
$(".menu_burger").click(function(){
$(".menu_list").toggleClass("active"),
$(".menu_burger").toggleClass("active"),
$(".booking").toggleClass("active"),
$(".shop_arrow").toggleClass("active"),
$(".burger_items").toggleClass("active"),
$(".burger").toggleClass("active"),
$(".back_menu").toggleClass("active"),
$('body').toggleClass('lock')
}); 

$('.menu_items').click(function(){
$(".back_menu").removeClass('active');
$(".menu_burger").removeClass("active"),
$(".menu_list").removeClass("active"),
$(".menu_burger").removeClass("active"),
$(".burger_items").removeClass("active"),
$(".burger").removeClass("active")

});

//Change header height when user will scroll the window
$(window).scroll(function() {
    if ($(this).scrollTop() > 2){  
        $(".header").addClass("sticky");
        $(".title_img").addClass("sticky");
        $(".shop").addClass("sticky");
         $(".booking").addClass("sticky");
    }
    else{
        $(".header").removeClass("sticky");
          $(".title_img").removeClass("sticky");
            $(".shop").removeClass("sticky");
             $('.booking').removeClass('sticky')
          
    };
});

//Slick-slider
$(document).ready(function(){
    $('.menu_slider').slick({
    arrows:false,
    dots:true,
    slidesToShow:2,
    slidesToScroll:2,
    autoplay:true,
        adaptiveHeight:true,
    });
});

//Creanting slider by hands
let slidesIndex=1;

showSlides(slidesIndex);

function plusSlides(n){
showSlides(slidesIndex+=n)
};

function showSlides(n){
let i;
let slides=document.getElementsByClassName("mySlides");

if(n>slides.length){
slidesIndex=1
};
if(n<1){
slidesIndex=slides.length
};

for(i=0; i<slides.length; i++){
slides[i].style.display="none"
};
slides[slidesIndex-1].style.display="block"
}

//Creating background properties for all images
function ibg(){
$.each($('.ibg'), function(index, val){
if($(this).find('img').length>0){
$(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
}
});
};
ibg();


