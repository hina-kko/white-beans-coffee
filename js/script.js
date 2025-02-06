'use strict'
//モーダルウィンドウ
const modal = $("#js-modal");
const overlay = $("#js-overlay");
const close = $("#js-close");
const open = $("#js-open");

// contactのモーダルウィンドウ
open.on('click', function () { //ボタンをクリックしたら
  modal.addClass("open"); // modalクラスにopenクラス付与
  overlay.addClass("open"); // overlayクラスにopenクラス付与
});


close.on('click', function () { //×ボタンをクリックしたら
  modal.removeClass("open"); // modalクラスからopenクラスを外す
  overlay.removeClass("open"); // overlayクラスからopenクラスを外す
});

// menuのスライダー
$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "15%",
    dots: true,
    slidesToShow: 3,
  });
});


$(function () {
  let pageTop = $('#pageTop a');

  // ブラウザをスクロール
  $(window).scroll(function () {
   
    // 500px下へスクロールした時点でTOPへ戻るボタンを表示
    if ($(this).scrollTop() > 500) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
});
