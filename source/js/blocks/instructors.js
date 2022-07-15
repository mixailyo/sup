function instructors() {
  let instructorsSliders = document.querySelectorAll('.instructors__slider');

  if (instructorsSliders.length) {
    instructorsSliders.forEach((slider, i) => {
      let sliderNavigationButtonNext = slider.querySelector('.navigation-button--next');
      let sliderNavigationButtonPrev = slider.querySelector('.navigation-button--prev');
  
      const swiper = new Swiper(slider, {
        slidesPerView: 'auto',
        loop: false,
    
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

export { instructors }