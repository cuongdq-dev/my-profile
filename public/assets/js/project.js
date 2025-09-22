$(function () {
  const $slider = $(".project_active");
  $slider.slick({
    infinite: true,
    initialSlide: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    prevArrow: '<span class="prev"><i class="lni lni-chevron-left"></i></span>',
    nextArrow:
      '<span class="next"><i class="lni lni-chevron-right"></i></span>',
    speed: 800,
    autoplaySpeed: 800,
    autoplay: true,
    pauseOnHover: true,

    draggable: true,
    swipe: true,
    touchMove: true,
    swipeToSlide: true,
    cssEase: "linear",

    centerMode: true,
    adaptiveHeight: false,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 991,
        settings: { speed: 800, slidesToShow: 1, centerMode: false },
      },
    ],
  });

  $(".project_active > .prev, .next").mouseenter(function () {
    $slider.slick("slickPause");
  });

  $(".project_active > .prev, .next").mouseleave(function () {
    $slider.slick("slickPlay");
  });

  //===== Slick Project

  $(".testimonial_active").slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
