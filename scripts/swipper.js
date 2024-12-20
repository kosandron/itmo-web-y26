import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
  direction: 'horizontal', // горизонтальная прокрутка
  loop: true, // зацикленный слайдер

  autoplay: {
    delay: 3000, // автоматическое пролистывание с переключением в 3 секунды и отключение при взаимодействии с пользователем
    disableOnInteraction: false, 
  },

  navigation: { // включаем кнопки
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});