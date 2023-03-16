$(document).ready(function () {
  // pr_slider
  $(".pr_slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: $(".pr_p"), //이전 화살표
    nextArrow: $(".pr_n"), //다음 화살표
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 800,
    slidesToShow: 1, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    fade: true,
  });

  // lo_slider
  $(".lo_slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    prevArrow: $(".pr_p"), //이전 화살표
    nextArrow: $(".pr_n"), //다음 화살표
    autoplay: true,
    autoplaySpeed: 3200,
    speed: 800,
    slidesToShow: 1, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
    fade: true,
  });
});
