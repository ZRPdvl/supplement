const header = document.querySelector(".header--menu__burger");
const headerMenu = document.querySelector('.header--menu');

header.addEventListener('click' , function(){
    header.classList.toggle('active')
    document.querySelector('.header--menu').classList.toggle('active');
})


window.addEventListener('click' , function (e) {
   if (header.classList.contains('active') ) {
    this.window.addEventListener('scroll' , function(){
        header.classList.remove('active')
        headerMenu.classList.remove('active');
    })
    const target = e.target;
    if (!target.closest('.header--menu') && !target.closest('.header--menu__burger')) { 
        header.classList.remove('active');
        headerMenu.classList.remove('active');
      }
   } else {   

   }
})




const realSwiper = new Swiper('.real--slider__item', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.real--slider__dots',
        clickable: true,
    },
    navigation: {
        nextEl: ".slider--arrow__right",
        prevEl: ".slider--arrow__left",
      },
});

  const swiper = new Swiper('.client--slider', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.client--slider__dots',
        clickable: true,
    },
});