import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('div.gallery');

let galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryRef.addEventListener('click', onGalleryImageClick);
let originalImage;
function onGalleryImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  window.addEventListener('keydown', onImageEsc);
  originalImage = basicLightbox.create(`
      <img src="${event.target.dataset.source}" >
  `);

  originalImage.show();
}

function onImageEsc(event) {
  if (event.code === 'Escape') {
    originalImage.close();
    window.removeEventListener('keydown', onImageEsc);
  }
}
