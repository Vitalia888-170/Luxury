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


//choose food categories
$(".checkAll").click(function(){
$(".dishes_items").show();
});

$(".checkBreakfast").click(function(){
$(".dishes_items").hide();
$(".breakf").show();
});

$(".checkLunch").click(function(){
$(".dishes_items").hide();
$(".lunch").show();
});

$(".checkSnacks").click(function(){
$(".dishes_items").hide();
$(".snacks").show();
});

$(".checkSnacks").click(function(){
$(".dishes_items").hide();
$(".snacks").show();
});

$(".checkPizza").click(function(){
$(".dishes_items").hide();
$(".pizza").show();
});

$(".checkSoups").click(function(){
$(".dishes_items").hide();
$(".soup").show();
});

$(".checkDinner").click(function(){
$(".dishes_items").hide();
$(".dinner").show();
});

//creating popap
$(document).ready(function(){
	$(".image").click(function(){
	let img=$(this);
	let src=img.attr('src');
	$("body").append("<div class='popup'>"+
		"<div class='popup_bg'></div>"+
		"<img src="+src+" class='popup_img'></div>"+
		"</div>");
	$(".popup").fadeIn(800);
	$(".popup_bg").click(function(){
	$(".popup").fadeOut(800);
	});
	});
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



