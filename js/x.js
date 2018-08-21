
setInterval(function () {
    $('.zi p:nth-of-type(1)').animate({transform:"translate(0px,0px)"},100,'ease-out',function () {
        $('.zi p:nth-of-type(1)').animate({transform:"translate(0,-40px)",opacity:0},200,'ease-out',function () {
            $('.zi p:nth-of-type(1)').animate({transform:"translate(300px,0px)"},100,'ease-out',function () {
                $('.zi p:nth-of-type(1)').animate({transform:"translate(0px,40px)"},100,'ease-out',function () {
                    $('.zi p:nth-of-type(1)').animate({transform:"translate(0px,0px)",opacity:1},200,'ease-out');
                });
            });
        });
    });
},1000)
$('.X1').on("touchstart",function () {
    $('nav input').val("");
})
$('.X2').on("touchstart",function () {
    $('.advertisement').css("height",0)
})