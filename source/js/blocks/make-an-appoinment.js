function makeAnAppoinment() {
  let makeAnAppoinmentModal = document.querySelector("[data-modal='make-an-appoinment']")
  let makeAnAppoinmentForm = makeAnAppoinmentModal?.querySelector("form")
  let successModal = document.querySelector("[data-modal='success']")
  let successModalForm = successModal?.querySelector("form")

  if (makeAnAppoinmentModal) {
    makeAnAppoinmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      modals.close("make-an-appoinment")

      let makeAnAppoinmentFormTel = makeAnAppoinmentForm?.querySelector("input[type='tel']");
      let modalSuccessTelephone = document.querySelector('.modal__success-telephone');

      modalSuccessTelephone.textContent = makeAnAppoinmentFormTel.value

      modals.open("success")
      makeAnAppoinmentForm.reset();
    })
  }

  successModalForm?.addEventListener('submit', (e) => {
    e.preventDefault()
  })
}

export { makeAnAppoinment }