function uploadFiles() {
  let uploadFilesInputs = document.querySelectorAll('.upload-files:not(.profile__photo) .upload-files__input');

  if (uploadFilesInputs.length) {
    uploadFilesInputs.forEach((input) => {
      let filesList = input.closest('.upload-files').querySelector('.upload-files__list:not(.upload-files__list--uploaded)');
      let filesLabel = input.closest('.upload-files').querySelector('.upload-files__label');

      input.addEventListener("change", function handleFiles() {
        let fileList = this.files;
    
        let listUpdated = false;
    
        let newList = new DataTransfer();
        for (let i = 0; i < fileList.length; i++) {
          if (fileList[i].size / 1048576 < 5) {
            newList.items.add(fileList[i]);
          } else {
            listUpdated = true;
          }
        }
    
        let htmlfileList = [];
        
        for (let i = 0; i < fileList.length; i++) {
          let newFile = `<li class="upload-files__file">
            <svg class="upload-files__file-icon" width="24" height="24" aria-hidden="true">
              <use xlink:href="#upload-file"></use>
            </svg>
            <p class="upload-files__file-name">${fileList[i].name}</p>
            <button class="upload-files__file-delete" data-file-name="${fileList[i].name}">
              <svg class="upload-files__file-delete-icon" width="24" height="24" aria-hidden="true">
                <use xlink:href="#file-delete"></use>
              </svg>
            </button>
          </li>`
    
          htmlfileList.push(newFile)
        }

        filesList.innerHTML = htmlfileList.join('');
    
        if (listUpdated) {
          this.files = newList.files;
          this.dispatchEvent(new Event('change'))
        }
      });
    
      document.addEventListener('click', (e) => {
        let btn = e.target.closest('.upload-files__file:not(.upload-files__file--uploaded) .upload-files__file-delete')
        if (btn) {
          e.preventDefault();
          let newList = new DataTransfer();
          for (let i = 0; i < input.files.length; i++) {
            if (input.files[i].name != btn.dataset.fileName) {
              newList.items.add(input.files[i]);
            }
          }
    
          input.files = newList.files;
          input.dispatchEvent(new Event('change'))
        }
      })
    
      filesLabel.addEventListener("dragenter", dragenter, false);
      filesLabel.addEventListener("dragover", dragover, false);
      filesLabel.addEventListener("drop", drop, false);
    
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
    
        input.files = files
        input.dispatchEvent(new Event('change'))
      }
    })
  }
} 

export { uploadFiles }