// ----- ハンバーガーメニュー -----
$(".toggle_btn").on("click",function() {
    var pos;
    if ($("header").hasClass("open")) {  // トグルボタンを押下した時、
        $("header").removeClass("open"); // × の時は、open クラス削除
        $('body').removeClass('fixed').css({'top': 0});
        window.scrollTo(0, pos); // fixed が解除されズレが生じるので、スクロール位置を元の位置へ戻す
    } else {
        $("header").addClass("open"); // 三 の時は、open クラス追加
        pos = $(window).scrollTop();
        $('body').addClass('fixed').css({'top': -pos});
    }
})

// ----- リンクを押した時にメニューを閉じる -----
$(".right_list a").on("click",function() {
    $("header").removeClass("open");
});