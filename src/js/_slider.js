import Swiper from '../../node_modules/swiper/swiper-bundle.min'

const swiper = new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
})

const swiperGallery = new Swiper('.swiper-gallery', {
  slidesPerView: 1.4,
  spaceBetween: 100,
  initialSlide: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
})

const width = window.matchMedia('(max-width: 768px)')
if (width.matches) {
  new Swiper('.swiper-gallery', {
    slidesPerView: 1.29,
    spaceBetween: 20,
    centeredSlides: true
  })
}
