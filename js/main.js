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
// もばますの基本URL
var imasURL = "http://sp.pf.mbga.jp/12008305/?guid=ON&url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2F"

var eventUrlArr=new Array();
eventUrlArr[0] = "%3Fevent_id%3D402";//アイプロ京町編
eventUrlArr[1]="%3Fevent_id%3D207";//鯖ハロウィン
eventUrlArr[2]="%3Fevent_id%3D501";//Liveツアー
eventUrlArr[3]="%3Fevent_id%3D403";//アイプロ1周年記念
eventUrlArr[4]="%3Fevent_id%3D208";//鯖聖夜
eventUrlArr[5]="%3Fevent_id%3D404";//アイプロ1周年記念
eventUrlArr[6]="%3Frnd%3D722496483";//フェス用
eventUrlArr[7]="%3Fevent_id%3D303";//強化合宿
eventUrlArr[8]="%3Fevent_id%3D502";//Liveツアー
eventUrlArr[9]="%3Fevent_id%3D405";//アイプロバレンタイン
eventUrlArr[10]="";//フェス用
eventUrlArr[11]="%3Fevent_id%3D209";//鯖ひな祭り
eventUrlArr[12]="%3Fevent_id%3D503";//フランスツアー
eventUrlArr[13]="%3Fevent_id%3D406";//アイプロ花祭り
eventUrlArr[14]="%3Fevent_id%3D601";//アイドルセッション
eventUrlArr[15]="%3Fevent_id%3D504";//スペインツアー

var eventUrlAfter = eventUrlArr[15];
var profURL = imasURL + "profile%2Fshow%2F";

//イベント用のURL　最後の引数　event_idが毎回変わる？
var eventNum = "1200";
//var eventUrl = imasURL + "event_ranking%2Franking_for_user%2F0%2F";
var eventProUrl = imasURL + "event_ranking%2Franking_for_user%2F2%2F"+eventUrlAfter;
var eventUrl = imasURL + "event_ranking%2Franking_for_user%2F0%2F";
//event_ranking%2Franking_for_user%2F0%2F9860%3Fevent_id%3D402%26rnd%3D151170074

//PRA用
var rankNum = 100;
var id = 1234567;
var praURL = imasURL + 'p_ranking_award%2Franking_for_user%2F0%2F0%2F';
var battle = imasURL + 'battle%2Fbattle_check%2F' + id + '%3Frnd%3D811173936';
var cheerURL = imasURL + 'cheer%2Findex%2F' + id + '%2F1%3Frnd%3D302587028';
var workURL = imasURL + 'quests%2Fmission_list%2F';


//外部ページ読み込み時のローディング画面のテーマ
$(document).bind("mobileinit", function() {
    $.mobile.loadingMessageTextVisible = true;
    $.mobile.loadingMessageTheme = "a";
});
//jQuery Mobileではpagecreateでreadyする
$("pagecreate").ready(function(e) {
    init();
});
//初期
function init() {
    //フッターを同じタイトルに
    //$('.footerClass').text('モバマス支援ページ');

    //殴られ屋リンク集用の動作　aタグのhrefに明記されたIDを引っ張ってきてる
    $('.plofileLink>li').each(function(index, element) {
        var idHerf = $(this).find('a').attr('href');
        $(this).find('a').attr('href', profURL + idHerf).attr('target', '_blank');
    });

    //ID JUMP用のchange
    $('.textSpaceID').change(function() {
        var idtext = $(this).val();
        $(".idJumpBtn").attr('href', profURL + idtext);
    });

    $('.idClearBtn').click(function() {
        // console.log("Click idClearBtn");
        $('.idJumpBtn').attr('href', '#');
        $('.textSpaceID').val('');
    });
    //イベントジャンプ用のchange
    $('.eventID').change(function() {
        eventNum = $(this).val() - 1;
        $('.eventJumpBtn').attr('href', eventUrl + eventNum + eventUrlAfter);
    });

    $('.workBtn >a').each(function() {
    var num = $(this).attr('href');
    $(this).attr('href', workURL + num).attr('target', '_blank');
    });  
    $('#eventProJumpBtn').attr('href', eventProUrl);
    $('#eventProJumpBtn2').attr('href', imasURL+"event_ranking%2Franking_for_production%2F0"+eventUrlAfter);

    praFunc();
}

function praFunc() {
    //PRA用
    var praArr = $('#page11');
    $('#textPra').change(function() {
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
    $('#eve150').attr('href',eventUrl + '149' + eventUrlAfter);
    $('#eve500').attr('href',eventUrl + '1199' + eventUrlAfter);
    $('#eve1500').attr('href',eventUrl + '1499' + eventUrlAfter);
    $('#eve3000').attr('href',eventUrl + '2999' + eventUrlAfter);
    $('#eve5000').attr('href',eventUrl + '4999' + eventUrlAfter);
    $('#eve10000').attr('href',eventUrl + '9999' + eventUrlAfter);
}
