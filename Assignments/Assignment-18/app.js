//Assignment 18

//1.
// Get the image gallery
const imageGallery = document.querySelector('.image-gallery');
// Get the modal and modal image elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
// Get the close button for the modal
const closeButton = document.getElementsByClassName('close')[0];

// Add click event listeners to each image in the gallery
imageGallery.addEventListener('click', function (event) {
  if (event.target.classList.contains('gallery-image')) {
    const clickedImageSrc = event.target.getAttribute('src');
    modalImage.setAttribute('src', clickedImageSrc);
    modal.style.display = 'block';
  }
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});


// Get the zoom in and zoom out buttons
const zoomInButton = document.getElementById('zoomInBtn');
const zoomOutButton = document.getElementById('zoomOutBtn');
// Get the zoom paragraph
const zoomParagraph = document.getElementById('zoomParagraph');

// Zoom in button click event listener
zoomInButton.addEventListener('click', function () {
  const currentFontSize = parseInt(window.getComputedStyle(zoomParagraph).fontSize);
  const newFontSize = currentFontSize + 10;
  zoomParagraph.style.fontSize = newFontSize + 'px';
});

// Zoom out button click event listener
zoomOutButton.addEventListener('click', function () {
  const currentFontSize = parseInt(window.getComputedStyle(zoomParagraph).fontSize);
  const newFontSize = currentFontSize - 10;
  zoomParagraph.style.fontSize = newFontSize + 'px';
});
