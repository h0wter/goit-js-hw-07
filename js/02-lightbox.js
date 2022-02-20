import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('ul.gallery');

let galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox');
