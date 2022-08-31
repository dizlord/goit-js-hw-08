// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
  galleryEl: document.querySelector('.gallery'),
};

function createGallery(galleryItemsPar) {
  const galleryString = galleryItemsPar
    .map(galleryItem => {
      return `
          <a class="gallery__item" href="${galleryItem.original}">
            <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
          </a>
      `;
    })
    .join('');
  refs.galleryEl.insertAdjacentHTML('afterbegin', galleryString);
}

createGallery(galleryItems);

new SimpleLightbox('.gallery a', {
  nav: true,
  close: true,
  caption: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
