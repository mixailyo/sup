function dateSelect() {
  let dateSelects = document.querySelectorAll('.date-select');

  if (dateSelects.length) {
    dateSelects.forEach((select) => {
      select.addEventListener('change', () => {
        select.dataset.value = select.value === '' ? 'Все' : new Date(select.value).toLocaleDateString()
      })
    })
  }
  
}

export { dateSelect }