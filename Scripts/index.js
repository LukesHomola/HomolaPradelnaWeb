document.addEventListener("DOMContentLoaded", function () {
  const splide = new Splide(".sluzby-slider", {
    type: "loop",
    snap: true,
    rewind: true,
    drag: true,
    pagination: false,
    perPage: 3,
    autoplay: true,
    interval: 5000,
    speed: 600,
    arrows: false,
  }).mount();
});
