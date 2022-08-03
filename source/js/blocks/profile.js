function profile() {
  let profile = document.querySelector('.profile');
  let profileEdit = document.querySelector('.profile__edit');
  let profileSubmit = document.querySelector('.profile__submit');

  if (profile) {
    profileEdit?.addEventListener('click', () => {
      profile.classList.add('profile--edit')
    })
  }
}

export { profile }