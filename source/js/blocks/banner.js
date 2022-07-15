function banner() {
  const swiper = new Swiper('.banner__slider', {
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

export { banner }