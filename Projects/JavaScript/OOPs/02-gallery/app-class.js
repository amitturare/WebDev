// Function to select any element
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

// Create a class
class Gallery {
  constructor(element) {
    this.container = element;
    // Select all the images that are under the sections
    this.list = [...element.querySelectorAll('.img')]; // spread operator coverts the nodeList into array

    // Select the modal - target
    this.modal = getElement('.modal');
    this.modalImg = getElement('.main-img');
    this.imageName = getElement('.image-name');
    this.modalImages = getElement('.modal-images');

    // Select the btns
    this.closeBtn = getElement('.close-btn');
    this.nextBtn = getElement('.next-btn');
    this.prevBtn = getElement('.prev-btn');

    // let self = this; // this points to the gallery

    // Bind functions
    // this.openModal = this.openModal.bind(this); // Binds openModal function to the gallery
    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);

    // Container event
    this.container.addEventListener(
      'click',
      function (e) {
        // console.log(this); // points to the section or else if this cb function is bind to gallery then it will point to gallery or else make a variable outside this so that the variable will always point to the gallery and then use that variable inside this function :)

        // Check the thing we clicking on is an image or not
        if (e.target.classList.contains('img')) {
          this.openModal(e.target, this.list); // this here points to the gallery
        }
      }.bind(this)
    );
  }
  // Methods
  openModal(selectedImg, list) {
    // console.log(this); // points to the whole instance

    // Add class open to the modal
    this.modal.classList.add('open');

    // Set Main Image
    this.setMainImage(selectedImg);

    // Set the list
    this.modalImages.innerHTML = list
      .map(function (image) {
        return `<img src="${
          image.src
        }" title="${image.title}" class="${selectedImg.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}" data-id="${image.dataset.id}" alt="${image.alt}"></img>`;
      })
      .join('');

    // closeBtn event
    this.closeBtn.addEventListener('click', this.closeModal);
    // nextBtn event
    this.nextBtn.addEventListener('click', this.nextImage);
    // prevBtn event
    this.prevBtn.addEventListener('click', this.prevImage);
    // modalImg event
    this.modalImages.addEventListener('click', this.chooseImage);
  }

  setMainImage(selectedImg) {
    this.modalImg.src = selectedImg.src;
    this.imageName.textContent = selectedImg.title;
  }

  closeModal() {
    this.modal.classList.remove('open');

    // REMOVE the event listeners when the modal is closed
    // closeBtn event
    this.closeBtn.removeEventListener('click', this.closeModal);
    // nextBtn event
    this.nextBtn.removeEventListener('click', this.nextImage);
    // prevBtn event
    this.prevBtn.removeEventListener('click', this.prevImage);
    // modalImg event
    this.modalImages.addEventListener('click', this.chooseImage);
  }
  nextImage() {
    // Get the image which has the class selected
    const selected = this.modalImages.querySelector('.selected');
    // Go next and if at the end, show the first element. Also remove the selected class and add it to the next one
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove('selected');
    next.classList.add('selected');
    this.setMainImage(next);
  }
  prevImage() {
    // Get the image which has the class selected
    const selected = this.modalImages.querySelector('.selected');
    // Go prev and if at the first, show the last element. Also remove the selected class and add it to the prev one
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove('selected');
    prev.classList.add('selected');
    this.setMainImage(prev);
  }
  chooseImage(e) {
    if (e.target.classList.contains('modal-img')) {
      // Remove the selected class from the selected img
      const selected = this.modalImages.querySelector('.selected');
      selected.classList.remove('selected');
      // Set main image
      this.setMainImage(e.target);
      // Add selected class to the img
      e.target.classList.add('selected');
    }
  }
}

// Call the instances
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
