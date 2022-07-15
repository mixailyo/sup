function profile() {
  let profile = document.querySelector('.profile');
  let profileEdit = document.querySelector('.profile__edit');
  let profileSubmit = document.querySelector('.profile__submit');

  if (profile) {
    profile.addEventListener('submit', (e) => {
      e.preventDefault();
    })

    profileEdit?.addEventListener('click', () => {
      profile.classList.add('profile--edit')
    })

    profileSubmit.addEventListener('click', () => {
      profile.submit();
    })
  }
}

export { profile }