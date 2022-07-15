function headerMenu() {
  let header = document.querySelector('.header');
  let headerHamburger = document.querySelector('.header__hamburger');
  let headerMenuButton = document.querySelector('.header__menu-button');
  let headerSubmenu = document.querySelector('.header__submenu');

  headerHamburger?.addEventListener('click', () => {
    headerHamburger.classList.toggle('is-active')
    header.classList.toggle('header--active')
    document.body.classList.toggle('scroll-lock')
  })

  if (headerMenuButton) {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header__submenu') && headerSubmenu.classList.contains('header__submenu--active')) {
        headerSubmenu.classList.remove('header__submenu--active')
      }
    })

    headerMenuButton.addEventListener('click', (e) => {
      headerSubmenu.classList.toggle('header__submenu--active')
      e.stopPropagation()
    })
  }
}

export { headerMenu }