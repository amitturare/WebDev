// Write a function to getElement
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check ${selection} selector because no such selector exists.`
  );
}

// Create a constructor function
function Gallery(element) {
  this.container = element;
  // Select all the images that are under the sections
  this.list = [...element.querySelectorAll('.img')]; // spread operator coverts the nodeList into array

  // Select the modal elements - target
  this.modal = getElement('.modal');
  this.modalImg = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.nextBtn = getElement('.next-btn');
  this.prevBtn = getElement('.prev-btn');

  // self reference
  // let self = this;

  // Bind Functions
  // this.openModal = this.openModal.bind(this); // we don't need this anymore
  this.closeModel = this.closeModel.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.clickedImg = this.clickedImg.bind(this);

  // Open modal, container event
  this.container.addEventListener(
    'click',
    function (e) {
      // Check if we are clicking on the container or image
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list); // points to the section. To make this point to the gallery: OPTION1: bind this callback function to 'this', so that it points to gallery. OPTION2: make a variable outside of 'this' so that the variable will always point to the gallery and then use that variable inside this function
      }
    }.bind(this)
  );
}

// +++++++++ FUNCTIONS +++++++++
Gallery.prototype.openModal = function (selectedImage, list) {
  // this should point to Gallery and not section only because we want to access modal which is under the Gallery and not section

  // Set Main Image
  this.setMainImage(selectedImage);

  // Set the list
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'}">`;
    })
    .join('');

  // Open Modal
  this.modal.classList.add('open');

  // Event Listeners
  this.closeBtn.addEventListener('click', this.closeModel);
  this.nextBtn.addEventListener('click', this.nextImage);
  this.prevBtn.addEventListener('click', this.prevImage);
  this.modalImages.addEventListener('click', this.clickedImg);
};

// Set Main Image
Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

// closeModel
Gallery.prototype.closeModel = function () {
  // Close the model
  this.modal.classList.remove('open');

  // Remove the event listeners when we have to close the modal
  this.closeBtn.removeEventListener('click', this.closeModel);
  this.nextBtn.removeEventListener('click', this.nextImage);
  this.prevBtn.removeEventListener('click', this.prevImage);
  this.modalImages.removeEventListener('click', this.clickedImg);
};

// nextImage
Gallery.prototype.nextImage = function () {
  // Select the img which has the class selected
  const selected = this.modalImages.querySelector('.selected');
  // Go next and if at the end, show the first element. Also remove the selected class and add it to the next one
  const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove('selected');
  next.classList.add('selected');
  this.setMainImage(next);
};

// prevImage
Gallery.prototype.prevImage = function () {
  // Select the img which has the class selected
  const selected = this.modalImages.querySelector('.selected');
  // Go prev and if at the first, show the last element. Also remove the selected class and add it to the prev one
  const prev =
    selected.previousElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove('selected');
  prev.classList.add('selected');
  this.setMainImage(prev);
};

// Clicked img
Gallery.prototype.clickedImg = function (e) {
  if (e.target.classList.contains('modal-img')) {
    // Remove selected class from the img which has it
    const selected = this.modalImages.querySelector('.selected');
    selected.classList.remove('selected');

    // Add selected to the img that has been clicked and set it as main image
    e.target.classList.add('selected');
    this.setMainImage(e.target)
  }
};

// Instances
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
