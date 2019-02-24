/**
 * Created by jf on 2016/7/28.
 */
window.onload = function () {
    var flag = true;//将flag初始值设置为true，表示节流阀是打开的

    //config是配置单，规定了每张图片的大小位置层级透明度
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];

    //找人
    var wrap = document.getElementById("wrap");
    var slide = wrap.children[0];
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = slide.children[1];
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");

    //鼠标经过盒子，让arrow箭头渐渐地显示出来
    wrap.onmouseover = function () {
        arrow.style.opacity = 1

        //animate(arrow, {"opacity": 1});
    };
    //鼠标离开盒子，让arrow箭头渐渐地隐藏
    wrap.onmouseout = function () {
        arrow.style.opacity = 0

        //animate(arrow, {"opacity": 0});
    };

    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;
            });
        }
    }

    assign();

    arrRight.onclick = function () {
        if (flag) {
            flag = false;
            config.push(config.shift());
            //config.unshift(config.pop());
            assign();
        }

    };
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            assign();
        }
    };
};


//节流阀是通过改变节流截面或节流长度以控制流体流量的阀门。