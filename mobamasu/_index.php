<!DOCTYPE html>
<html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>モバマス支援ページ</title>
  <link href="css/jquery.mobile.structure-1.1.0.min.css" rel="stylesheet" type="text/css"/>
  <link href="css/jquery.mobile.theme-1.1.0.min.css" rel="stylesheet" type="text/css"/>
  <link href="css/basic.css" rel="stylesheet" type="text/css"/>
    <script src="js/jquery-1.7.1.min.js" type="text/javascript"></script>
    <script src="js/jquery.mobile-1.1.0.min.js" type="text/javascript"></script>
    <script src="js/main.js" type="text/javascript"></script>
  </head>
  <body>
  <!--メインページ-->
    <div id="page" data-role="page" >
      <div data-role="header">
        <h1 id='headerImg'>モバマス支援ページ</h1>
      </div>
      <div data-role="content">
        <ul data-role="listview">
          <li data-role="list-divider">Main Contents</li>
          <li>
            <a href="#page2">道場リンク集</a>
          </li>
          <li>
            <a href="#page3">アイドルリスト</a>
          </li>
          <li>
            <a href="#page4">お仕事リスト</a>
          </li>
          <li>
            <a href="#page5">定型文コピペツール</a>
          </li>
        </ul>
      </div>
      <div data-role="controlgroup" data-type="vertical" class="iconGroup">
        <a href="#page10" data-icon="gear" data-rel="dialog" data-role="button" data-transition="pop">ID Jump</a>
        <a href="#page11" data-icon="gear" data-rel="dialog" data-role="button" data-transition="pop">PRA順位確認</a>
        <a href="#page12" data-icon="gear" data-rel="dialog" data-role="button" data-transition="pop">イベント順位確認</a>
      </div>
      <div data-role="footer" data-position="fixed">
      <!--
        <h4>ページフッター</h4>-->
        <p id="topFooter"><?php $user_agent = $_SERVER['HTTP_USER_AGENT']; $Strings=date("Y年m月j日　H時i分"); echo $Strings; ?></p>
      </div>
    </div>
  <!--ページ2-->
    <div data-role="page" id="page2">
      <div data-role="header">
        <h1>殴られ屋リンク集</h1>
      </div>
      <div data-role="content">
        <ul class='plofileLink' data-role="listview">
        <li>S3</li>
<li><a href="9803820"><h1>しまむらさん</h1> <p>14000 フェス中は休業予定</p></a></li>
<li><a href="38335324"><h1>[ﾊｯﾋﾟｰﾌﾞﾗｲﾀﾞﾙ]ﾅﾀｰﾘｱ+</h1> <p>18000 基本休業時もリーダーはそのままですのでユニット名にご注意ください。</p></a></li>
<li><a href="61168865"><h1>桃華ちゃま</h1> <p> 作業する時は休業しますが殴っても問題無いです、その場合は発揮値注意</p></a></li>
<li><a href="61538900"><h1>SR+島村</h1> <p> アイサバ中は作業中表記時はフルメンそれ以外は強リーダー</p></a></li>
<li><a href="58908513"><h1>杏</h1> <p>14000 多分24時間営業。リーダー変わってても営業中</p></a></li>
<li><a href="58367118"><h1>しまむらさん</h1> <p>2000 イベントにより発揮値が異なるので、ユニット名を見てね</p></a></li>
<li><a href="59881437"><h1>やよい</h1> <p>1800 ζ*'ヮ')ζ＜もやし　サバイバル中はリーダー変更予定</p></a></li>
<li><a href="62206599"><h1>SRイヴ</h1> <p>8000 シッモです、たまにｽｰﾊﾟｰシッモ（＋）になります。応援いつもありがとうございます</p></a></li>
<li><a href="60535181"><h1>水木聖來</h1> <p>3000 リーダーが水木聖來の時は営業中です</p></a></li>
<li><a href="60329381"><h1>佐久間ちゃん</h1> <p>2200 基本休業なしですが、ユニ名みてね（＾∇＾）</p></a></li>
<li><a href="61075637"><h1>雪歩</h1> <p>12000 「茶道場」とあれば営業中ですぅ( ^^)旦~~</p></a></li>
<li><a href="60251756"><h1>SR+桃華ちゃん</h1> <p>5500前後 24時間営業</p></a></li>
<li><a href="59327217"><h1>ζ*'ω')ζ (ﾟ￢ﾟ*)</h1> <p>6000↑ 休業時はﾕﾆ名でお知らせします｡</p></a></li>
<li><a href="59426301"><h1>高森藍子ちゃん！</h1> <p>6000↑ 営業時はユニット名に発揮値を明記</p></a></li>
<li><a href="7901732"><h1>wakabachan</h1> <p>3000 作業中はユニット名に記載 ※鯖等イベント時はリーダー変わるので注意</p></a></li>
<li><a href="63828445"><h1>今井加奈</h1> <p>4000 超絶誰得道場リニューアルだよー＾＾もういまいちじゃない＾＾</p></a></li>
        <li>SS</li>
<li><a href="62757293"><h1>及川雫+</h1> <p>4000 驚異的な胸囲道場。※アイサバ時は強リーダーとなります。</p></a></li>
<li><a href="61332207"><h1>SR+しまむらさん</h1> <p>15000↑ サバイバル期間中は発揮値注意してください</p></a></li>
<li><a href="60734106"><h1>桃華ちゃま</h1> <p>3500↑ 桃華ちゃま輿水ちゃんまゆ様とか気分で</p></a></li>
<li><a href="60722314"><h1>小日向ちゃん</h1> <p>5000 発揮値変更時はユニット名でお知らせします</p></a></li>
<li><a href="60796160"><h1>藤原肇</h1> <p>6000↑ </p></a></li>
<li><a href="64663780"><h1>桃華ちゃま</h1> <p>3000くらい 求）桃華ちゃまの薄い本　出）現金　現地直トレでお願いします</p></a></li>
<li><a href="59448367"><h1>北条カレン</h1> <p>6400 休みの時はユニット名に「休」の文字をつけます　</p></a></li>
<li><a href="9989021"><h1>SR+城ヶ崎莉嘉</h1> <p>14000↑ ユニット名に道場とあれば営業中です</p></a></li>
<li><a href="60749314"><h1>コンプ美希＋</h1> <p>16000 ｻﾊﾞｲﾊﾞﾙ期間は発揮値上昇中です。</p></a></li>
<li><a href="62897418"><h1>城ヶ崎莉嘉ちゃん☆</h1> <p>2000~4000 DOKIDOKI道場よろしくお願いしますm(__)m</p></a></li>
<li><a href="60785960"><h1>五十嵐響子ちゃん</h1> <p>2900↑ 24時間営業</p></a></li>
<li><a href="15586190"><h1>向井拓海</h1> <p>16000  フェス中はリーダー美希になってます</p></a></li>
<li><a href="59426813"><h1>[鏡花水月]四条貴音</h1> <p>3000 </p></a></li>
<li><a href="54874033"><h1>水瀬伊織</h1> <p>3500↑ 休業中はユニット名とリーダーを変えますのでご注意お願いします！</p></a></li>
<li><a href="62054039"><h1>姫川ユッキー</h1> <p>3500 サンキューユッキ！</p></a></li>
<li><a href="15703780"><h1>千枝ちゃん</h1> <p>2000↑ 休む時はユニ名に記載します；；</p></a></li>
<li><a href="1308339"><h1>きらり</h1> <p>2000 常時営業目指してがんばるにぃ！</p></a></li>
<li><a href="61262026"><h1>ζ*'ヮ')ζ<YUKIMI</h1> <p>14000 ζ*'ヮ')ζ＜鯖終了まで</p></a></li>
<li><a href="48967477"><h1>パジャマ天使智ちん</h1> <p>3500↑ </p></a></li>
<li><a href="61439982"><h1>N凛ちゃん+</h1> <p>1300 不要な凛ちゃんを廃棄するのじゃ＾＾</p></a></li>
<li><a href="64613405"><h1>基本千枝or智絵里</h1> <p> たまに魔法のスマイルをリーダーにしますが、道場と書いてあれば営業中です＾＾</p></a></li>
<li><a href="61480702"><h1>春香さん</h1> <p>4000↑(12000↑) σのヮの　マラソン期間中は普通の春香さん+です。()の発揮値になっていますのでお気をつけくださいませー！</p></a></li>
<li><a href="61863374"><h1>あんず</h1> <p>2,000↑ 律子ガチャ終わったのでステマ終了</p></a></li>
<li><a href="61717709"><h1>今井ちゃん</h1> <p>4000↑ フェス期間中は当日最初の試合開始～最後の試合終了の前後１時間くらいまで休業します</p></a></li>
<li><a href="60071414"><h1>CDﾃﾞﾋﾞｭｰ高垣楓+他</h1> <p>(14000↑) ｻﾊﾞｲﾊﾞﾙ中はSR+島村さん固定。</p></a></li>
<li><a href="52736851"><h1>いろいろ　一夫多妻もありらしいな</h1> <p>16000ぐらい 休業中はユニット名で表示　ちょいちょい休業してるので注意</p></a></li>
<li><a href="31686682"><h1>R+如月千早</h1> <p>2000 殴ってくだし</p></a></li>
<li><a href="33281852"><h1>しおみー</h1> <p>10000 bot対策の為に必要発揮値少し高くなっていますが、よければお使いください！</p></a></li>
<li><a href="13507696"><h1>R+川島さん</h1> <p>3500↑ リーダーとユニット名の確認お願いします！</p></a></li>
<li><a href="62319622"><h1>市原仁奈</h1> <p> 衣装も余っていればﾄﾞｿﾞｰ</p></a></li>
<li><a href="59319849"><h1>いろいろ</h1> <p> 殴るときはユニット名確認してね　おさわり自由</p></a></li>
<li><a href="36000049"><h1>楓さん</h1> <p>2000~12000 気分で楓さんが変わります。要攻撃はコメ参照。どうじょ、ご利用下さい…ふふふ</p></a></li>
<li><a href="59044658"><h1>嫁を気分で日替わり制です</h1> <p>3000↑ フェスとサバイバルは強アイドル仕様なので注意</p></a></li>
<li><a href="34783802"><h1>及川雫＋など</h1> <p>4000 休業中の場合はコメ欄に記載。リーダー変わってるときは発揮値注意</p></a></li>
<li><a href="58321677"><h1>高垣楓</h1> <p>10000 楓さんをよろしく。</p></a></li>
<li><a href="59231161"><h1>杏きら</h1> <p>4000 レベル低いですが親愛度の足しにでもどうぞζ*'ω')ζ</p></a></li>
        </ul>
      <!-- 
        <li>
          <a href="#page" data-direction="reverse">back</a>
        </li>-->
      </div>
      <div data-role="footer" data-position="fixed">
        <h4>footer</h4>
      </div>
    </div>
  <!--ページ10 ID JUMP-->
    <div data-role="page" id="page10">
      <div data-role="header">
        <h1>ID Jump</h1>
      </div>
      <div data-role="content">
        <p>参照したい相手のIDを入力後 ボタンをクリックしてください </p>
        <div data-role="fieldcontain" class="ui-hide-label">
          <label for="text">Text Input:</label>
        <input type="text" pattern="[0-9]*" class="textSpaceID" value=""/>
        </div>
        <a href="#" target="new" class="idJumpBtn" data-icon="star" data-role="button" rel="external">Jump Button</a>
        <a href="#" class="idClearBtn" data-icon="back" data-role="button" rel="external">Clear Button</a>
      </div>
    </div>
  <!--ページ11 PRA順位確認-->
    <div data-role="page" id="page11">
      <div data-role="header">
        <h1>PRA順位確認</h1>
      </div>
      <div data-role="content">
        <h5>参照したい順位のボタンをクリックするか、順位を入力して下さい </h5>
        <div data-role="controlgroup" data-mini='true'data-type="horizontal">
            <a href="#" data-role="button" id="pra10">10位</a>
            <a href="#" data-role="button" id="pra100">100位</a>
            <a href="#" data-role="button" id="pra500">500位</a>
        </div>
        <div data-role="controlgroup" data-mini='true'data-type="horizontal">
            <a href="#" data-role="button" id="pra1000">1000位</a>
            <a href="#" data-role="button" id="pra2500">2500位</a>
            <a href="#" data-role="button" id="pra5000">5000位</a>
        </div>

        <div data-role="fieldcontain" class="ui-hide-label">
          <label for="text">Text Input:</label>
          <form id='rankForm'>
          <input type="text" pattern="[0-9]*" id='textPra' name="textPra" value=""/>
          </form>
        </div>
        <a id="praJump" href="#" target="new" class="idJumpBtn" data-icon="arrow-d" data-role="button">Jump Button</a>
      </div>
    </div>
  <!--ページ4-->
    <div data-role="page" id="page4">
      <div data-role="header">
        <h1>お仕事リスト</h1>
      </div>
      <div data-role="content">
      	<div data-role="controlgroup" class="workBtn">
			<a href="2" data-role="button">渋谷 ﾗﾌﾞﾘｰｱﾝｼﾞｪ</a>
			<a href="7" data-role="button">秋葉原 ﾌﾙｰﾙﾌﾚｰﾊﾞｰ</a>
			<a href="11" data-role="button">池袋 ﾐｽﾃｨｯｸｻｲﾊﾞｰ</a>
            <a href="15" data-role="button">横浜 ﾘｰﾃﾞｨﾝｸﾞｽﾀｰ</a>
			<a href="19" data-role="button">千葉 ﾉｰﾌﾞﾙｸﾞﾚｰｽ</a>
			<a href="23" data-role="button">埼玉 ﾌﾟﾘｰｽﾞﾒﾛﾃﾞｨｱ</a>
   			<a href="27" data-role="button">大阪 ﾌﾟﾘﾝﾂｪｽﾏｲﾘｰ</a>
			<a href="31" data-role="button">京都 ｼﾉﾋﾞﾄﾗﾃﾞｨｼｮﾝ</a>
			<a href="35" data-role="button">神戸 ﾋﾟｭｱﾄﾞﾛｯﾌﾟ</a>
            <a href="39" data-role="button">広島 ﾘﾎﾞﾝﾊﾟｰﾃｨ</a>     
			</div>
      	</div>
      <div data-role="footer" data-position="fixed">
        <h4>footer</h4>
      </div>
    </div>
  </body>
</html>
