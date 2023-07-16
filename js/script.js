$('.popular_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode: true,
  centerPadding: 0,

  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.explore_popular_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode: true,
  centerPadding: 0,
  dots: true
});
$('.testimonial_slide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  autoplay: true
});
$('.counter').counterUp({
  delay: 10,
  time: 1000
});

let main_menu = document.querySelector('.main_menu');

let menu_height = main_menu.clientHeight

window.addEventListener('scroll', function () {
  let scrolling = this.scrollY;

  if (scrolling > (menu_height + 40)) {
    main_menu.classList.add("menu_fixed")
  } else {
    main_menu.classList.remove("menu_fixed")
  }
})

let backtotop = document.querySelector('.backtotop');

window.addEventListener('scroll', () => {
  let scrolling = this.scrollY;
  if (scrolling > 300) {
    backtotop.classList.add('show')
  } else {

    backtotop.classList.remove('show')
  }
})

backtotop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})

// ==== Explore slide Part Start ====

const swiperEl = document.querySelectorAll('swiper-container')


swiperEl.forEach(element => {
  Object.assign(element, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
  element.initialize();
});
// ==== Explore slide Part End ====