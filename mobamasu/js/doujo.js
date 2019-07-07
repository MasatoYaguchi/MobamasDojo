//モバマスの基本URL
var imasURL = "http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2F";
//imasURL = "#";//デバック用
//プロフィール用
var profURL = imasURL + "profile%2Fshow%2F";
//dpageの数
var maxBtnNum = 4;
var doujoData = [];
var doujoListNum = 150;//1pageの表示数
var addNo = 0;
//初期化
$(document).ready(function () {
    //ヘッダのボタン設定
    btnset();
    $(window).resize(btnset);

    var $plofile = $('.plofileLink');
    var jsonPath = "js/dojo" + String(doujoListNum * doujoPageNo) + ".json";
    $.get(jsonPath, function (data) {
        //objectをArrayに
        $.each(data, function (key, val) {
            doujoData.push(val);
        });
        /*
         //降順でソート
         doujoData.sort(function (a, b) {
         var aLv = a["lv"];
         var bLv = b["lv"];
         if (bLv - aLv)return bLv - aLv;
         if (aLv < bLv) return -1;
         if (aLv > bLv) return 1;
         return 0;
         });*/
        addNo = (doujoPageNo - 1) * doujoListNum;
        //jsonから値を取得して表示
        for (var i = 0; i < doujoData.length; i++) {
            var dom = doujoDomCreate(i + addNo, doujoData[i]);
            $plofile.append(dom);
        }

        //表示終了後にボタンの動作設定
        init();
    });

    function init() {
        //ヘッダータイトル設定
        $("#doujoTitle").html("道場リンク&nbsp;No" + String(addNo + 1) + "〜" + doujoPageNo * doujoListNum);

        //li.click Start
        $('li').on("click", function (e) {
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
        });

        //スムーズスクロールアニメーション
        $("#lastBtn").click(function (e) {
            var lastID = "#dlist" + arrCookie[arrCookie.length - 1];
            if (arrCookie[arrCookie.length - 1] != undefined) {
                var offset = $("#dlist" + arrCookie[arrCookie.length - 1]).offset().top - 46;
                $("html, body").stop().animate({
                    scrollTop: offset
                }, {
                    duration: 500,
                    easing: "easeOutSine"
                });
            }
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

    }
});

/**
 * jsonデータを元にDOMエレメントを生成
 * @param num
 * @param obj
 * @returns {string}
 */
function doujoDomCreate(num, obj) {
    var dom = "";
    dom += "<li id='dlist" + num + "'> ";
    dom += "<a href='" + profURL + obj.id + "' target='_blank'>";
    dom += "<h1>" + obj.reader + "</h1>";
    var lank = obj.lank;
    dom += "<p><span class='rankText " + lank + "'>" + lank + "</span> 発" + obj.atk + " LV" + obj.lv;
    dom += "<span class='numbers'>" + (num + 1) + "</span>";
    dom += "<br>" + obj.comment + "&nbsp;</p></a>";
    dom += "</li>";

    return dom;
}


//Cookieの重複チェック
function getCookieNum(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        //console.log("arr[i] = " + arr[i] + " str = " + str + "\t" );
        if (String(arr[i]) == String(str)) {
            return true;
        }
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
    $('#lankMenu li').css('width', windowWidth / (maxBtnNum - 1) - 2)
};

