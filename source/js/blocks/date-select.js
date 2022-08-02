function dateSelect() {
  let dateSelects = document.querySelectorAll('.date-select');

  if (dateSelects.length) {
    dateSelects.forEach((select) => {
      select.addEventListener('change', () => {
        if (new Date(select.value).toLocaleDateString() === 'Invalid Date') {
          select.dataset.value = select.value === '' ? 'Все' : select.value
        } else {
          select.dataset.value = select.value === '' ? 'Все' : new Date(select.value).toLocaleDateString()
        }
      })
    })
  }
  
}

export { dateSelect }