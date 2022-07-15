function uploadProfilePhoto() {
  let uploadProfilePhotoInput  = document.querySelector('.profile__photo .upload-files__input');
  let uploadProfilePhotoLabel = document.querySelector('.profile__photo .upload-files__label');
  let profilePhotoImg = document.querySelector('.profile__photo-img');
  let profilePhotoText = document.querySelector('.profile__photo-text');

  if (uploadProfilePhotoInput ) {
    uploadProfilePhotoInput .addEventListener("change", function handleFiles(event) {
      let target = event.target;

      if (!FileReader) {
        return;
      }

      if (!target.files.length) {
        alert('Ничего не загружено');
        return;
      }

      let fileReader = new FileReader();
      fileReader.onload = function() {
        profilePhotoImg.src = fileReader.result;
      }

      fileReader.readAsDataURL(target.files[0]);

      if (target.files[0]) {
        profilePhotoText.style.display = 'none';
      } else {
        profilePhotoText.style.display = 'block';
      }
    });
  
    uploadProfilePhotoLabel.addEventListener("dragenter", dragenter, false);
    uploadProfilePhotoLabel.addEventListener("dragover", dragover, false);
    uploadProfilePhotoLabel.addEventListener("drop", drop, false);
  
    function dragenter(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    function dragover(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  
    function drop(e) {
      e.stopPropagation();
      e.preventDefault();
    
      var dt = e.dataTransfer;
      var files = dt.files;
  
      uploadProfilePhotoInput .files = files
      uploadProfilePhotoInput .dispatchEvent(new Event('change'))
    }
  }
  
} 

export { uploadProfilePhoto }