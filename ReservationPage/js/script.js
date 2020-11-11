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

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $(".header").addClass("sticky");
        $(".title_img").addClass("sticky");
        $(".shop").addClass("sticky");
         $(".book").addClass("sticky");
    }
    else{
        $(".header").removeClass("sticky");
          $(".title_img").removeClass("sticky");
            $(".shop").removeClass("sticky");
             $(".book").removeClass("sticky");
    }
});