/*

 モバマス支援ページ用JavaScript

 【更新予定】
 Androidだと数字入力が初期にならないからユーザーエージェントで判別する
 イベント順位実装(イベント変わった時用に変数を考えておく)	→適当に実装済み
 お仕事の一覧。衣装も分かるように	→適当に実装済み
 アイドルリスト実装　SQLでやる？ Jsonでもいいか？　テーブルで綺麗にしたい　ランク毎にわけ、更新しやすいように	→CGDBがスマフォ対応したからいらないか
 道場リンク集をSQLでやる　直接バトル画面に飛べるように	→SQLじゃなくてエクセル使ってやった。でも更新しにくいからDB化したいな。後軽くしたい
 道場はli要素のEventをul要素に移すことにより、Event減らしたので軽くなったはず。後はａタグ周りかな？

 */
// モバマスの基本URL
var imasURL = "http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2F"
var jump_url = "";

var eventUrlArr = new Array();
/*過去のイベント
 eventUrlArr[0] = "%3Fevent_id%3D402";//アイプロ京町編
 eventUrlArr[1] = "%3Fevent_id%3D207";//鯖ハロウィン
 eventUrlArr[2] = "%3Fevent_id%3D501";//Liveツアー
 eventUrlArr[3] = "%3Fevent_id%3D403";//アイプロ1周年記念
 eventUrlArr[4] = "%3Fevent_id%3D208";//鯖聖夜
 eventUrlArr[5] = "%3Fevent_id%3D404";//アイプロ1周年記念
 eventUrlArr[6] = "%3Frnd%3D722496483";//フェス用
 eventUrlArr[7] = "%3Fevent_id%3D303";//強化合宿
 eventUrlArr[8] = "%3Fevent_id%3D502";//Liveツアー
 eventUrlArr[9] = "%3Fevent_id%3D405";//アイプロバレンタイン
 eventUrlArr[11] = "%3Fevent_id%3D209";//鯖ひな祭り
 eventUrlArr[12] = "%3Fevent_id%3D503";//フランスツアー
 eventUrlArr[13] = "%3Fevent_id%3D406";//アイプロ花祭り
 eventUrlArr[14] = "%3Fevent_id%3D601";//アイドルセッション
 eventUrlArr[15] = "%3Fevent_id%3D504";//スペインツアー
 eventUrlArr[16] = "%3Fevent_id%3D210";//鯖ひな祭り
 eventUrlArr[17] = "%3Fevent_id%3D407";//アイプロ鎌倉
 eventUrlArr[18] = "%3Fevent_id%3D701";//ドリームライブ
 eventUrlArr[19] = "%3Fevent_id%3D505";//バリ島ツアー
 eventUrlArr[20] = "%3Fevent_id%3D408";//アイプロ花火
 eventUrlArr[21] = "%3Fevent_id%3D702";//ドリフェス
 eventUrlArr[22] = "%3Fevent_id%3D211";//ハワイ鯖
 eventUrlArr[23] = "%3Fevent_id%3D507";//ツアードイツ
 eventUrlArr[24] = "%3Fevent_id%3D409";//アイプロイタリアン編
 eventUrlArr[25] = "%3Fevent_id%3D801";//ロワイヤル
 eventUrlArr[26] = "%3Fevent_id%3D703";//第三回ドリフェス
 eventUrlArr[27] = "%3Fevent_id%3D212";//運動会サバイバル
 eventUrlArr[28] = "%3Fevent_id%3D508";//ツアーカーニバル　スペースワールド
 eventUrlArr[29] = "%3Fevent_id%3D704";//ドリフェス
 eventUrlArr[30] = "%3Fevent_id%3D410";//2周年アイプロ
 eventUrlArr[31] = "%3Fevent_id%3D411";//アイプロ　チョコレートフォーユー
 eventUrlArr[32] = "%3Fevent_id%3D510";//Liveツアー
 eventUrlArr[33] = "%3Fevent_id%3D1101";//トークバトルショー
 eventUrlArr[34] = "%3Fevent_id%3D804";//ロワイヤル
 eventUrlArr[35] = "%3Fevent_id%3D706";//ドリフェス
 eventUrlArr[36] = "%3Fevent_id%3D511";//Liveツアー 幻想公演 黒薔薇姫のｳﾞｫﾔｰｼﾞｭ
 eventUrlArr[37] = "%3Fevent_id%3D412";//アイプロ　聖靴学園の七不思議
 eventUrlArr[38] = "%3Fevent_id%3D1102";//第二回トークバトル
 eventUrlArr[39] = "%3Fevent_id%3D1201";//アイドルチャレンジ
 eventUrlArr[40] = "%3Fevent_id%3D512";//ツアー　西部公園ガンスリンガージャーニー
 eventUrlArr[41] = "%3Fevent_id%3D805";//ロワイヤル
 eventUrlArr[42] = "%3Fevent_id%3D1103";//第3回トークバトルショー
 eventUrlArr[43] = "%3Fevent_id%3D707";//第7回ドリフェス
 eventUrlArr[44] = "%3Fevent_id%3D513";//ツアー　海賊公演オーシャンクルーズ
 eventUrlArr[45] = "%3Fevent_id%3D1301";//フェスS
 eventUrlArr[46] = "%3Fevent_id%3D413";//アイプロ　みんなのなつやすみ
 eventUrlArr[47] = "%3Fevent_id%3D1202";//アイドルチャレンジ
 eventUrlArr[48] = "%3Fevent_id%3D1104";//第四回トークバトルショー
 eventUrlArr[49] = "%3Fevent_id%3D806";//第5回ロワイヤル
 eventUrlArr[50] = "%3Fevent_id%3D708";//第8回ドリフェス
 eventUrlArr[51] = "%3Fevent_id%3D414";//アイプロ　オーストラリア
 eventUrlArr[52] = "%3Fevent_id%3D1105";//第5回トークバトルショー
 eventUrlArr[53] = "%3Fevent_id%3D514";//LIVEツアー　功夫公演香港大決戦
 eventUrlArr[54] = "%3Fevent_id%3D1203";//アイドルチャレンジ目指せ☆きらきらモデル
 eventUrlArr[55] = "%3Fevent_id%3D807";//第7回ロワイヤル
 eventUrlArr[56] = "%3Fevent_id%3D1302";//フェスS
 eventUrlArr[57] = "%3Fevent_id%3D1106";//第6回トークバトルショー
 eventUrlArr[58] = "%3Fevent_id%3D709";//第9回ドリフェス
 eventUrlArr[59] = "%3Fevent_id%3D515";//LIVEツアー　戦国公演 天魔の乱
 eventUrlArr[60] = "%3Fevent_id%3D808";//第8回ロワイヤル
 */
eventUrlArr[0] = "%3Fevent_id%3D415";//ｱｲﾄﾞﾙﾌﾟﾛﾃﾞｭｰｽ the 3rd Anniversary
eventUrlArr[1] = "%3Fevent_id%3D710";//ｻﾝﾀDEﾄﾞﾘｰﾑLIVEﾌｪｽﾃｨﾊﾞﾙ
eventUrlArr[2] = "%3Fevent_id%3D1107";//ﾄｰｸﾊﾞﾄﾙｼｮｰ ｸﾘｽﾏｽｽﾍﾟｼｬﾙ
eventUrlArr[3] = "%3Fevent_id%3D516";//LIVEツアー　幻想公演 栄光のｼｭｳﾞｧﾘｴ
eventUrlArr[4] = "%3Fevent_id%3D1204";//ｱｲﾄﾞﾙﾁｬﾚﾝｼﾞ新年かくし芸SP
eventUrlArr[5] = "%3Fevent_id%3D809";//第8回ロワイヤル
eventUrlArr[6] = "%3Fevent_id%3D1303";//第3回フェスS
eventUrlArr[7] = "%3Fevent_id%3D1108";//ﾄｰｸﾊﾞﾄﾙｼｮｰ ｸﾘｽﾏｽｽﾍﾟｼｬﾙ
eventUrlArr[8] = "%3Fevent_id%3D711";//福は内DEﾄﾞﾘｰﾑLIVEﾌｪｽﾃｨﾊﾞﾙ
eventUrlArr[9] = "%3Fevent_id%3D810";//ｱｲﾄﾞﾙLIVEﾛﾜｲﾔﾙ ﾊﾞﾚﾝﾀｲﾝSP
eventUrlArr[10] = "%3Fevent_id%3D517";//戦国公演 風来剣客伝
eventUrlArr[11] = "%3Fevent_id%3D1205";//ｱｲﾄﾞﾙﾁｬﾚﾝｼﾞ新年かくし芸SP
eventUrlArr[12] = "%3Fevent_id%3D1401";//ぷちデレラコレクション
eventUrlArr[13] = "%3Fevent_id%3D1109";//第9回ﾌﾟﾛﾀﾞｸｼｮﾝ対抗ﾄｰｸﾊﾞﾄﾙｼｮｰ
eventUrlArr[14] = "%3Fevent_id%3D811";//第11回ロワイヤル
eventUrlArr[15] = "%3Fevent_id%3D712";//花見DEﾄﾞﾘｰﾑLIVEﾌｪｽﾃｨﾊﾞﾙ
eventUrlArr[16] = "%3Fevent_id%3D518";//御伽公演 ふれあい狼と小さな赤ずきんちゃん
eventUrlArr[17] = "%3Fevent_id%3D1621";//第21回プロダクションマッチフェスティバル
eventUrlArr[18] = "%3Fevent_id%3D1501";//第1回ﾁｰﾑ対抗ﾄｰｸﾊﾞﾄﾙｼｮｰ
eventUrlArr[19] = "%3Fevent_id%3D1701";//ｱｲﾄﾞﾙﾌﾟﾛﾃﾞｭｰｽ 初めてのキャンプ
eventUrlArr[20] = "%3Fevent_id%3D519";//美食公演 女神に捧ぐ御馳走
eventUrlArr[21] = "%3Fevent_id%3D1402";//ぷちデレラコレクション
eventUrlArr[22] = "%3Fevent_id%3D812";//ｱｲﾄﾞﾙLIVEﾛﾜｲﾔﾙ
eventUrlArr[23] = "%3Fevent_id%3D713";//ﾄﾞﾘｰﾑLIVEﾌｪｽﾃｨﾊﾞﾙ
eventUrlArr[24] = "%3Fevent_id%3D1206";//目指せｳｪﾃﾞｨﾝｸﾞﾓﾃﾞﾙ ｱｲﾄﾞﾙﾁｬﾚﾝｼﾞ
eventUrlArr[25] = "%3Fevent_id%3D1622";//第22回プロダクションマッチフェスティバル
eventUrlArr[26] = "%3Fevent_id%3D1502";//雨の日ﾁｰﾑ対抗ﾄｰｸﾊﾞﾄﾙｼｮｰ
eventUrlArr[27] = "%3Fevent_id%3D714";//夏祭りDEﾄﾞﾘｰﾑLIVEﾌｪｽﾃｨﾊﾞﾙ
eventUrlArr[28] = "%3Fevent_id%3D520";//青春公演 シング・ア・ソング
eventUrlArr[29] = "%3Fevent_id%3D1702";//ｱｲﾄﾞﾙﾌﾟﾛﾃﾞｭｰｽ 京町復刻
eventUrlArr[30] = "%3Fevent_id%3D813";//ｱｲﾄﾞﾙLIVEﾛﾜｲﾔﾙ
eventUrlArr[31] = "%3Fevent_id%3D1703";//ｱｲﾄﾞﾙﾌﾟﾛﾃﾞｭｰｽ 京町復刻
eventUrlArr[32] = "%3Fevent_id%3D1503";//夏だ！ﾌﾟｰﾙだ！ﾁｰﾑ対抗ﾄｰｸﾊﾞﾄﾙｼｮｰ
eventUrlArr[33] = "%3Fevent_id%3D1403";//第三回ぷちデレラコレクション
eventUrlArr[34] = "%3Fevent_id%3D521";//怪盗公演 美しき追跡者
eventUrlArr[35] = "%3Fevent_id%3D715";//ﾄﾞﾘｰﾑLIVEﾌｪｽﾃｨﾊﾞﾙ
eventUrlArr[36] = "%3Fevent_id%3D1623";//第23回プロダクションマッチフェスティバル
eventUrlArr[37] = "%3Fevent_id%3D1801";//ｱｲﾄﾞﾙﾊﾞﾗｴﾃｨ 究極のショートケーキを作ろう
eventUrlArr[38] = "%3Fevent_id%3D1207";//目指せ大和撫子 ｱｲﾄﾞﾙﾁｬﾚﾝｼﾞ
eventUrlArr[39] = "%3Fevent_id%3D716";//ﾄﾞﾘｰﾑLIVEﾌｪｽﾃｨﾊﾞﾙ
eventUrlArr[40] = "%3Fevent_id%3D1624";//ﾄﾞﾘｰﾑLIVEﾌｪｽﾃｨﾊﾞﾙ
eventUrlArr[41] = "%3Fevent_id%3D814";//ｱｲﾄﾞﾙLIVEﾛﾜｲﾔﾙ

//イベント判別数
var eventNameNum=8;

var eventNameArr = [];
eventNameArr[3] = "ﾌｪｽ";
eventNameArr[4] = "ｱｲﾌﾟﾛ";
eventNameArr[5] = "LIVEﾂｱｰ";
eventNameArr[7] = "ﾄﾞﾘﾌ";
eventNameArr[8] = "ｱｲﾄﾞﾙLIVEﾛﾜｲﾔﾙ";
eventNameArr[11] = "TBS";
eventNameArr[12] = "ｱｲﾁｬﾚ";
eventNameArr[13] = "ﾌｪｽS";
eventNameArr[14] = "ﾌﾟﾁｺﾚ";
eventNameArr[15] = "ﾊﾞﾗｴﾃｨ";

var eventUrlAfter = eventUrlArr[eventUrlArr.length - 1];

var event_title = eventNameArr[eventNameNum];
var event_name = "アイドルLIVEロワイヤルﾞ";

var profURL = imasURL + "profile%2Fshow%2F";
var eventNum = "1200";
var eventUrl = imasURL + "event_ranking%2Franking_for_user%2F0%2F";
var eventProUrl = imasURL + "event_ranking%2Franking_for_user%2F2%2F" + eventUrlAfter;

//チームランキング時のフラグ
var teamFlag = false;
//TBSとドリフはチーム対抗として扱う
if(eventNameNum==11||eventNameNum==7)teamFlag=true;


//PRA用
var rankNum = 100;
var id = 1234567;
var praURL = imasURL + 'p_ranking_award%2Franking_for_user%2F0%2F0%2F';

//通常フェス用 第21回フェスからEventIDで処理するように変更された
var fesFlag = false;//true で通常フェス開催中に　Sは普通の処理とほぼ同じ
//if (fesFlag) {
//    //fes用
//    eventUrl = imasURL + "p_match%2Franking_for_user%2F0%2F";
//    //イベント用のURL　最後の引数　event_idが毎回変わる
//    eventUrlAfter = "";
//    //event_ranking%2Franking_for_user%2F0%2F9860%3Fevent_id%3D402%26rnd%3D151170074
//}


//外部ページ読み込み時のローディング画面のテーマ
$(document).bind("mobileinit", function () {
    $.mobile.loadingMessageTextVisible = true;
    $.mobile.loadingMessageTheme = "a";
});
//jQuery Mobileではpagecreateでreadyする
$("pagecreate").ready(function (e) {
    init();
});

//初期
function init() {
    //ID JUMP用のchange
    $('.textSpaceID').change(function () {
        var id_text = $(this).val();
        $(".idJumpBtn").attr('href', profURL + id_text);
    });
    //ID Jumpのクリア
    $('.idClearBtn').click(function () {
        // console.log("Click idClearBtn");
        $('.idJumpBtn').attr('href', '#');
        $('.textSpaceID').val('');
    });

    //イベントジャンプ用のchange
    $('.eventID').change(function () {
        eventNum = $(this).val() - 1;
        jump_url = eventUrl + eventNum + eventUrlAfter;
       $('.eventJumpBtn').attr('href', jump_url);
    });

    if (fesFlag) {
        $('#eventProJumpBtn').hide();
        $('#eventProJumpBtn2').hide();
    }
    else{
        $('#fesbtn').hide();
    }

    if(eventNameNum==15){
        //@TODO プロ内順位が取れないのん！
        $('#eventProJumpBtn').hide();
    }


    $("#event_name").html(event_name);
    $("#event_title").html(event_title);

    if (teamFlag) {
        var team_url = imasURL + "event_ranking%2Franking_for_party%2F0%2F"
        var teamNum;
        $('#eventProJumpBtn').hide();
        $('#eventProJumpBtn2').hide();
        $('#teamJumpBtn').attr('href', imasURL + "event_ranking%2Franking_for_party%2F1" + eventUrlAfter);
        $('#teamID').change(function () {
            teamNum = $(this).val() - 1;
            $('#teamJumpBtn').attr('href', team_url+ teamNum + eventUrlAfter);
        });
        //イベント用
        $('#team50').attr('href', team_url + '49' + eventUrlAfter);
        $('#team100').attr('href', team_url + '99' + eventUrlAfter);
        $('#team200').attr('href', team_url + '199' + eventUrlAfter);
        $('#team300').attr('href', team_url + '299' + eventUrlAfter);
        $('#team500').attr('href', team_url + '499' + eventUrlAfter);
        $('#team1000').attr('href', team_url + '999' + eventUrlAfter);
        $('#team2000').attr('href', team_url + '1999' + eventUrlAfter);
    }else{
        $('#team').hide();
        $('#eventProJumpBtn').attr('href', eventProUrl);
        $('#eventProJumpBtn2').attr('href', imasURL + "event_ranking%2Franking_for_production%2F1" + eventUrlAfter);
    }
    praFunc();
}

function praFunc() {
    //PRA用
    var praArr = $('#page11');
    $('#textPra').change(function () {
        rankNum = $(this).val() - 1;
        var strURL = praURL + rankNum + '%3Frnd%';
        $('#praJump').attr('href', strURL);
    });
    $('#pra10').attr('href', praURL + '10%3Frnd%');
    $('#pra100').attr('href', praURL + '99%3Frnd%');
    $('#pra500').attr('href', praURL + '499%3Frnd%');
    $('#pra1000').attr('href', praURL + '999%3Frnd%');
    $('#pra2500').attr('href', praURL + '2499%3Frnd%');
    $('#pra5000').attr('href', praURL + '4999%3Frnd%');
    //イベント用
    $('#eve200').attr('href', eventUrl + '199' + eventUrlAfter);
    $('#eve1000').attr('href', eventUrl + '999' + eventUrlAfter);
    $('#eve1500').attr('href', eventUrl + '1499' + eventUrlAfter);
    $('#eve2000').attr('href', eventUrl + '1999' + eventUrlAfter);
    $('#eve4000').attr('href', eventUrl + '3999' + eventUrlAfter);
    $('#eve7000').attr('href', eventUrl + '6999' + eventUrlAfter);
    $('#eve10000').attr('href', eventUrl + '9999' + eventUrlAfter);
    $('#eve20000').attr('href', eventUrl + '19999' + eventUrlAfter);
}
