// ----- ハンバーガーメニュー -----
var pos;
$(".toggle_btn").on("click",function() {
    if ($("header").hasClass("open")) {  // トグルボタンを押下した時、
        $("header").removeClass("open"); // × の時は、open クラス削除
        $('body').removeClass('fixed').css({'top': 0});
        window.scrollTo(0, pos); // fixed が解除されズレが生じるので、スクロール位置を元の位置へ戻す
    } else {
        $("header").addClass("open"); // 三 の時は、open クラス追加
        pos = $(window).scrollTop();
        $('body').addClass('fixed').css({'top': -pos});
    }
});

// ----- リンクを押した時にメニューを閉じる -----
$(".right_list a").on("click",function() {
    $("header").removeClass("open");
    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo(0, pos); // fixed が解除されズレが生じるので、スクロール位置を元の位置へ戻す
});

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

    // ふわっ
    $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      }else{
      $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
      }
      });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述