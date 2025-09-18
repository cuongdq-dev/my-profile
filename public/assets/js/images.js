$(function () {
  const $slider = $(".images_active");
  $slider.slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0, // không delay
    speed: 3000, // thời gian chạy hết 1 vòng (ms) → càng lớn càng chậm
    cssEase: "linear", // chạy đều, mượt
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false, // không cho kéo chuột (đỡ giật)
    swipe: false, // tắt swipe trên mobile nếu muốn auto mượt
  });
});
