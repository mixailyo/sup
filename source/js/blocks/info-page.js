function infoPage() {
  let infoPageSliders = document.querySelectorAll('.info-page__slider');

  if (infoPageSliders.length) {
    infoPageSliders.forEach((slider, i) => {
      let sliderNavigationButtonNext = slider.querySelector('.navigation-button--next');
      let sliderNavigationButtonPrev = slider.querySelector('.navigation-button--prev');
  
      const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
    
        navigation: {
          nextEl: sliderNavigationButtonNext,
          prevEl: sliderNavigationButtonPrev,
        },
    
        on: {
          activeIndexChange: function() {
            if (this.realIndex === 0 && document.documentElement.clientWidth < 768) {
              sliderNavigationButtonPrev.style.opacity = '0';
            } else {
              sliderNavigationButtonPrev.style.opacity = '1';
            }
          }
        }
      });
    })
  }  
}

export { infoPage }