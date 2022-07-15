function timetable() {
  let timetable = document.querySelector('.timetable');
  let timetableEdit = document.querySelector('.timetable__edit');
  let timetableSubmit = document.querySelector('.timetable__submit');

  if (timetable) {
    timetable.addEventListener('submit', (e) => {
      e.preventDefault();
    })

    timetableEdit?.addEventListener('click', () => {
      timetable.classList.add('timetable--edit')
    })

    timetableSubmit?.addEventListener('click', () => {
      timetable.submit();
    })
  }
}

export { timetable }