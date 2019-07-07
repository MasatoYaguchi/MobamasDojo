//モバマスの基本URL
var imasURL = "http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2F"
//imasURL = "#";//デバック用

//プロフィール用
var profURL = imasURL + "profile%2Fshow%2F";

//dpageの数
var maxBtnNum = 4;

//初期化
$(document).ready(function () {
    btnset();
    $(window).resize(btnset);
    var $lank1 = $("#lank1");
    var $lank2 = $("#lank2");
    var $lank3 = $("#lank3");
    var $lank4 = $("#lank4");
    var dom = {};
    $.getJSON("js/dojo.json", function (data) {
        $.each(data, function (i, value) {
            console.log(value);
            switch (value.lank) {
                case"S5":
                case"S4":
                    dom = $lank1;
                    break;
                case "S3":
                    dom = $lank2;
                    break;
                case "SS":
                    dom = $lank3;
                    break;
                case "S":
                    dom = $lank4;
                    break;
            }
            dojoLinkBtn(dom, value);
        })
    })

    var dojoHtml = "";
    /**
     * 各ボタンのDOMElement生成
     * @param dom
     * @param obj
     */
    function dojoLinkBtn(dom, obj) {
        dojoHtml = "<div id='" + obj.id + "' class='dojoBtn'>";
        dojoHtml += "<h1>" + obj.reader + "</h1>";
        dojoHtml += "<h2>ランク:" + obj.lank + " 発揮値:" + obj.atk + " LV:" + obj.lv + "</h2>";
        dojoHtml += "<p>" + obj.comment + "</p></div>";

        dom.append(dojoHtml);
    }

    /**
     * tap時の動作
     */
    $("#btnGroup").on("touchend", function (e) {
        var thisId = $(e.target).parent("div").attr("id");
        console.log("thisId = " + thisId);
        $("#" + thisId).addClass("linked")
        window.open(profURL + thisId);
    });

    $("#tab_group").on("touchend", function (e) {
        var thisId = $(e.target).attr("id");
        console.log("thisId = " + thisId);
    });

    //Cookie取得
    var arrCookie = new Array();
    if (getCookie("select") != null) {
        arrCookie = getCookie("select").split(',');
        for (i in arrCookie) {
            if (arrCookie[i] != '') {
                $('#dlist' + arrCookie[i]).addClass('linked');
            }
        }
    }
    //クッキー消去
    $('#clrBtn').click(function () {
        clearCookie('select');
        alert("Clear Cookie");
        location.reload();
    });
    //a.click Start
/*    $('li').click(function (e) {
        var reg = /dlist/;
        var selectNum = $(this).attr('id');
        if (reg.test(selectNum)) {
            var checkClass = $(this).hasClass('linked');
            $(this).toggleClass('linked');
            selectNum = selectNum.replace(reg, "");
            if (!getCookieNum(arrCookie, selectNum)) {
                arrCookie.push(selectNum);
            } else if (checkClass) {
                for (i in arrCookie) {
                    if (arrCookie[i] == selectNum) {
                        arrCookie.splice(i, 1)
                    }
                }
            }
            setCookie("select", arrCookie);
        }
    });*/

    
    //スムーズスクロールアニメーション
    //$("a[href*=#]").click(function(e) {
    $("#lastBtn").click(function (e) {
        var lastID = "#dlist" + arrCookie[arrCookie.length - 1];
        var offset = $("#dlist" + arrCookie[arrCookie.length - 1]).offset().top - 46;
        $("html, body").stop().animate({
            scrollTop: offset
        }, {
            duration: 500
        });
    });

    //Cookieの重複チェック
    function getCookieNum(arr, str) {
        for (var i = 0; i < arr.length; i++) {
            //console.log("arr[i] = " + arr[i] + " str = " + str + "\t" );
            if (String(arr[i]) == String(str)) {
                return true;
            }
            ;
        }
        return false;
    }

    //Cookieのセット
    function setCookie(key, str) {
        var lastTime = timeCookie(1000 * 3600 * 24);
        document.cookie = key + '=' + str + '; expires=' + lastTime;
    }

    //Cookieの消去
    function clearCookie(key) {
        var lastTime = timeCookie(1);
        document.cookie = key + '=0' + '; expires=' + lastTime;
    }

    //Cookieの時間設定
    //現在時刻から引数のミリ秒後にクッキー有効時刻をセット
    function timeCookie(millsec) {
        var expire = new Date();
        expire.setTime(expire.getTime() + millsec);
        return expire.toUTCString();
    }

    //Cookie取得
    function getCookie(key) {
        var result = null;
        var CookieName = key + '=';
        var allCookies = document.cookie;
        var position = allCookies.indexOf(CookieName);
        if (position != -1) {
            var startIndex = position + CookieName.length;
            var endIndex = allCookies.indexOf(';', startIndex);
            if (endIndex == -1) {
                endIndex = allCookies.length;
            }
            result = decodeURIComponent(allCookies.substring(startIndex, endIndex));
        }
        return result;
    }

    //上部ボタンの位置をCSSで指定　
    function btnset() {
        var windowWidth = $(window).width();
        $('#menubtn').css('width', windowWidth);
        $('#menubtn li').css('width', windowWidth / maxBtnNum);
        $('#lankMenu').css('width', windowWidth);
        $('#lankMenu li').css('width', windowWidth / (maxBtnNum - 1) - 2);
    };

});



