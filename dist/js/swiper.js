// import Swiper bundle with all modules installed
// import Swiper from "swiper/bundle";

// import styles bundle
// import "swiper/css/bundle";

// init Swiper:
var swiper = new Swiper(".testimonial-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
});
