// $d(document).ready(function(){

// });


$(function(){

$('.menu li:nth-child(3)').click(function(){
    $('.drop_menu').slideToggle();
})

$('.collapseButton').click(function(){
    $('.menu').slideToggle();
})


$('.btn_1').click(function(){

    $('.animate_1').animate({opacity:'0.5'},1000);
    $('.animate_1').animate({opacity:'1'},1000);
})

$('.btn_2').click(function(){

    $('.animate_2').animate({opacity:'0.5'},1000);
    $('.animate_2').animate({opacity:'1'},1000);
})

$('.btn_3').click(function(){

    $('.animate_3').animate({opacity:'0.5'},1000);
    $('.animate_3').animate({opacity:'1'},1000);
})



});