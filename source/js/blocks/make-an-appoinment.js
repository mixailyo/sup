function makeAnAppoinment() {
  let makeAnAppoinmentModal = document.querySelector("[data-modal='make-an-appoinment']")
  let makeAnAppoinmentForm = makeAnAppoinmentModal.querySelector("form")

  makeAnAppoinmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    modals.close("make-an-appoinment")
    modals.open("success")
  })
}

export { makeAnAppoinment }