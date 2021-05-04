export const singleImage = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
};

export default {
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        autoplay: true,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
