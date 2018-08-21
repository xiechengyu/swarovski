$("#dh1").on("touchstart",function () {
    // $(".aside1").css({"display":"block"});
    $(".left-aside").animate({
        left:0
    },200,'ease-out');
    $(".right-aside").animate({
        opacity:0.4
    },300,'ease-out');
    $(".aside1").animate({
        zIndex:101
    },200);
});

$(".aside1>.left-aside>.aside-top>i").on("touchstart",function () {
    // $(".aside1").css({"display":"none"});
    $(".left-aside").animate({
        left:"-75%"
    },200,'ease-out');
    $(".right-aside").animate({
        opacity:0
    },50,'ease-out');
    $(".aside1").animate({
        zIndex:-1
    },250);
});
$(".aside1>.right-aside").on("touchstart",function () {
    // $(".aside1").css({"display":"none"});
    $(".left-aside").animate({
        left:"-75%"
    },200,'ease-out');
    $(".right-aside").animate({
        opacity:0
    },50,'ease-out');
    $(".aside1").animate({
        zIndex:-1
    },250);
});

//侧边导航栏
$(".aside1>.left-aside>.ml>.ml1>li>.xia").on("touchstart",function () {
    $(this).css({"display":"none"});
    $(this).parent().children(".shang").css({"display":"block"});
    $(this).parent().children(".ml11").css({"display":"block"});
    $(this).parent().siblings().children(".ml11").css({"display":"none"});
});
$(".aside1>.left-aside>.ml>.ml1>li>.shang").on("touchstart",function () {
    $(this).css({"display":"none"});
    $(this).parent().children(".xia").css({"display":"block"});
    $(this).parent().children(".ml11").css({"display":"none"});
});


// 底部下拉菜单
$(".gywm>.gywm11>.xia").on("touchstart",function () {
    $(".gywm>.gywm11").animate({
        height:184
    },200);
    $(".gywm>.gywm11>.xia").css({"display":"none"});
    $(".gywm>.gywm11>.shang").css({"display":"block"});
});
$(".gywm>.gywm11>.shang").on("touchstart",function () {
    $(".gywm>.gywm11").animate({
        height:54
    },200);
    $(".gywm>.gywm11>.shang").css({"display":"none"});
    $(".gywm>.gywm11>.xia").css({"display":"block"});
});

$(".gywm>.gywm12>.xia").on("touchstart",function () {
    $(".gywm>.gywm12").animate({
        height:254
    },200);
    $(".gywm>.gywm12>.xia").css({"display":"none"});
    $(".gywm>.gywm12>.shang").css({"display":"block"});
});
$(".gywm>.gywm12>.shang").on("touchstart",function () {
    $(".gywm>.gywm12").animate({
        height:54
    },200);
    $(".gywm>.gywm12>.shang").css({"display":"none"});
    $(".gywm>.gywm12>.xia").css({"display":"block"});
});

$(".gywm>.gywm13>.xia").on("touchstart",function () {
    $(".gywm>.gywm13").animate({
        height:254
    },200);
    $(".gywm>.gywm13>.xia").css({"display":"none"});
    $(".gywm>.gywm13>.shang").css({"display":"block"});
});
$(".gywm>.gywm13>.shang").on("touchstart",function () {
    $(".gywm>.gywm13").animate({
        height:54
    },200);
    $(".gywm>.gywm13>.shang").css({"display":"none"});
    $(".gywm>.gywm13>.xia").css({"display":"block"});
});


