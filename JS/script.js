$(function() {
  // ヘッダーfixed
  $(window).scroll(function() {
    if ($(window).scrollTop() !== 0) {
      $('body').addClass('is-fixed');
      $('#page-home .logo_kadan').attr('src', './kadan-image/kadan-room/sub-header-logo.png');
    } else {
      $('body').removeClass('is-fixed');
      $('#page-home .logo_kadan').attr('src', './kadan-image/kadan-main/top-header-logo.png');
    }
  });

  // ハンバーガーメニュー
  $('.hb__btn').click(function() {
    if ($('body').hasClass('hb_is-open')) {
      $('body').removeClass('hb_is-open');
      $('.hb__bg').fadeOut();
    } else {
      $('body').addClass('hb_is-open');
      $('.hb__bg').fadeIn();
    }
  });
  $('.hb__bg, .sp-rv__btn').click(function() {
    $('body').removeClass('hb_is-open');
    $('.hb__bg').fadeOut();
  });
  $('.sp-nav-global__item a').click(function() {
    $('.hb__btn').trigger('click');
  });

  // スライドショー
  var count = $('#slide li').length;
  var current = 1;
  var next = 2;
  var interval = 4000;
  var duration = 500;
  var timer;

  $('#slide li:not(:first-child)').hide();
  timer = setInterval(slideTimer, interval);

  function slideTimer() {
    $('#slide li:nth-child(' + current + ')').fadeOut(duration);
    $('#slide li:nth-child(' + next + ')').fadeIn(duration);
    current = next;
    next = ++next;
    if (next > count) {
      next = 1;
    }
  }

  // タブ
  $('.tab').click(function() {
    $('#contents .contents-media').hide();
    $(".contents > ." + $(this).attr('id')).show();
    $('.current').removeClass('current');
    $(this).addClass('current');
    return false;
  });

  // 日付カレンダー
  flatpickr("#flatpickr", {
    locale:"ja",
    enableTime: true,
    dateFormat: "Y-m-d",
    minDate:"today",
    mode: "multiple",
  });

  // モーダル
  $('.rv__btn, .sp-rv__btn').click(function() {
    $('.modal__bg, .modal-contents').fadeIn();
    return false;
  });
  $('.modal__btn, .modal__bg').click(function() {
    $('.modal__bg, .modal-contents').fadeOut();
  });

  //  iosの下部バーを補う
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // 画面のサイズ変動があった時に高さを再計算する
  window.addEventListener('resize', setFillHeight);
  
  // 初期化
  setFillHeight();
});