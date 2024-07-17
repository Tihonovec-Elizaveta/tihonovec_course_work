import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  let navigation = document.querySelector(".navigation");
  let burger = document.querySelector(".fa-bars");
  burger.addEventListener('click', function(){
    navigation.classList.toggle("active");
  })

