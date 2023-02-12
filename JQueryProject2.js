////////////////////////////Main//////////////////////
/////////////// menu

    var over = document.getElementById("boody");
$("#MenuButton").click(function(){
    over.style.overflowY="hidden";
//    $(window).css("overFlowY","hidden");
    $("#menu").show(300);
    $(".background").show(100);
})
$("#close").click(function(){
    over.style.overflowY="scroll";
    $("#menu").hide(400);
    $(".background").hide(100);
    $(".hidden1").hide(100);
})
/////////////// mini menu

$(".Renault").click(function(){
    $(".A1").slideToggle(400);
})
$(".Fiat").click(function(){
    $(".A2").slideToggle(400);
})
$(".Mercedes").click(function(){
    $(".A3").slideToggle(400);
})
$(".BMW").click(function(){
    $(".A4").slideToggle(400);
})
$(".Audi").click(function(){
    $(".A6").slideToggle(400);
})
$(".Lamborghini").click(function(){
    $(".A7").slideToggle(400);
})
$(".Porsche").click(function(){
    $(".A5").slideToggle(400);
})
/////////////// offers

$('.c2').css( "background-color", "white");

var x = 1 ;
$(".bt1").click(function(){
    x--;
    
    if(x == -1){
        x = 2;
    }  
    
    const cars = ["fc_bayarn.jpg", "imag_1.jpg", "image_3.jpg"];
    $("#imgOffers").attr("src", cars[x]);
    
    if(x==0){
        $('.c1').css( "background-color", "white");
        $('.c2').css( "background-color", "transparent");
        $('.c3').css( "background-color", "transparent");
    }else if (x==1){
        $('.c1').css( "background-color", "transparent");
        $('.c2').css( "background-color", "white");
        $('.c3').css( "background-color", "transparent");
    }else{
        $('.c1').css( "background-color", "transparent");
        $('.c2').css( "background-color", "transparent");
        $('.c3').css( "background-color", "white");
    }
})
$(".bt2").click(function(){
    x++;
    
    if(x == 3){
        x = 0;
    }
    
    const cars = ["fc_bayarn.jpg", "imag_1.jpg", "image_3.jpg"];
    $("#imgOffers").attr("src", cars[x]);
    
    if(x==0){
        $('.c1').css( "background-color", "white");
        $('.c2').css( "background-color", "transparent");
        $('.c3').css( "background-color", "transparent");
    }else if (x==1){
        $('.c1').css( "background-color", "transparent");
        $('.c2').css( "background-color", "white");
        $('.c3').css( "background-color", "transparent");
    }else{
        $('.c1').css( "background-color", "transparent");
        $('.c2').css( "background-color", "transparent");
        $('.c3').css( "background-color", "white");
    }
})

//////////////// Button up To

let scrollbu = $(".content_5").offset().top;

$(window).scroll(function(){
    let scrollWindow = $(window).scrollTop();
    if(scrollWindow > scrollbu ){
        $('nav').css("backgroundColor","#000000d4");
        $(".upTo").fadeIn(500);
    }else{
        $(".upTo").fadeOut(500);
        $('nav').css("backgroundColor","#000");
    } 
})
$(".upTo").click(function(){
    $("html,body").animate({scrollTop:0},1000);
})