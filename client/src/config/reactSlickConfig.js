export default {
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
