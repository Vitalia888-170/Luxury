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

//creating menu in order to choose food categories
$('.changing').click(function(){
$('.changing_inner').toggleClass('active');
$('.category').toggleClass('active');
});

//sort dishes using radiobuttons
$(document).on( "click", ".radiobuttons", function(event){
    $(this).parents(".radiobuttons").find(".radiobuttons").removeClass('active');
    $(this).parents(".radiobuttons").find(".radiobuttons").prop('checked',false);
    $(this).toggleClass('active');
    $('.sort').toggleClass('active');
    $(this).find('input').prop('checked',true);
    return false;
});

//exchange type of sorting
$('.sort').click(function(){

  if($(this).hasClass('up')){
      $(this).toggleClass('active');
      $('.first').replaceWith($('.up'));

  }else if($(this).hasClass('down')){
      $(this).toggleClass('active');
      $('.first').replaceWith($('.down'));

  }else if($(this).hasClass('rating')){
      $(this).toggleClass('active');
      $('.first').replaceWith($('.rating')); 

  }else{
  return;
  }
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
//show menu
$('.category_items').click(function(){
$(this).toggleClass('active');
});

//sorting products
document.querySelector('#sort-up').onclick =  function(){
  mySort('data-price');
}
document.querySelector('#sort-down').onclick = function(){
  myDecSort('data-price');
}
document.querySelector('#sort-rating').onclick = function(){
  myDecSort('data-rating');
}

function mySort(price){
let list = document.querySelector('#main_list');
for (let i = 0; i < list.children.length; i++){
  for (let j = i; j < list.children.length; j++){
    if(+list.children[i].getAttribute(price) > +list.children[j].getAttribute(price) ){
      replacedNode = list.replaceChild(list.children[j], list.children[i]);
      insertAfter(replacedNode,list.children[i])
    }
  }
}
};
function myDecSort(price){
let list=document.querySelector('#main_list');
for(let i=0; i< list.children.length; i++){
  for(let j=i; j< list.children.length; j++){
    if(+list.children[i].getAttribute(price)< +list.children[j].getAttribute(price)){
     let replacedNode=list.replaceChild(list.children[j],list.children[i]);
      insertAfter(replacedNode, list.children[i]);

    }
  }
}
};

function insertAfter(elem, refElem){
return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
};
//filter dishes by food category
$(".breakfast").click(function(){
$(".food_items").hide();
$(".breakf").show();
});

$(".lunch").click(function(){
$(".food_items").hide();
$(".lunch").show();
});

$(".snack").click(function(){
$(".food_items").hide();
$(".snack").show();
});

$(".pizza").click(function(){
$(".food_items").hide();
$(".pizza").show();
});

$(".soup").click(function(){
$(".food_items").hide();
$(".soup").show();
});

$(".dinner").click(function(){
$(".food_items").hide();
$(".dinner").show();
});


