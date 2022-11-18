function searchForm() {
  let searchForms = document.querySelectorAll('.search__form');
  let searchFormFiltersBtn = document.querySelector('.search__form-filters-btn');
  let searchFormBackBtn = document.querySelector('.search__form-back-btn');

  if (searchForms.length) {
    searchForms.forEach((form) => {
      let searchFormSubmitBtn = form.querySelector('.search__form-submit');

      form.addEventListener('submit', (e) => {
        e.preventDefault();
      });

      searchFormSubmitBtn?.addEventListener('click', () => {
        form.submit();
      });

      searchFormFiltersBtn?.addEventListener('click', () => {
        form.classList.add('search__form--active');
        document.body.classList.add('scroll-lock');
      });

      searchFormBackBtn?.addEventListener('click', () => {
        form.classList.remove('search__form--active');
        document.body.classList.remove('scroll-lock');
      });
    });
  }
}

export {searchForm};
