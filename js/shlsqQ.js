    //显示更多信息
var aboutActive = document.querySelector('.aboutActive');
var aboutMore = document.querySelector('.aboutMore');
aboutMore.addEventListener('click',function(){
    aboutActive.style.display = 'block';
    this.style.display = 'none';
})
    //返回顶部
var scrollT = document.querySelector('.scrollTop');
//获取页面高度
var pageH = client().height;

window.onscroll = function(){
    //获取滚动高度
    var scrollTops = scroll().top;
    //返回顶部显示隐藏
    if(scrollTops <= pageH / 4){
        scrollT.style.display = 'none';
    }else{
        scrollT.style.display = 'block';
    }

    scrollT.addEventListener('click',function(){
        buffer2(document.documentElement,{"scrollTop": 0},function(){
            onOff = true;  // 回调函数，执行完上一段代码后在执行这段代码。
            //    滚动动画完成后，将开关改为开状态
        })

        this.style.display = 'none';
    })
}
    function client(){
        if(window.innerWidth){
            return{
                width : window.innerWidth,
                height : window.innerHeight
            }
        }else if(document.compatMode === "CSS1Compat"){
            return {
                width : document.documentElement.clientWidth,
                height : document.documentElement.clientHeight
            }
        }
    }

    function scroll() {
        if(window.pageYOffset !== null){
            return {
                top: window.pageYOffset,
                left: window.pageXOffset
            }
        }else if(document.compatMode === "CSS1Compat"){ // W3C
            return {
                top: document.documentElement.scrollTop,
                left: document.documentElement.scrollLeft
            }
        }
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
