import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGalleryListMarkup = gallery =>
  gallery
    .map(
      ({ description, original, preview }) => `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>`
    )
    .join('');

const galleryItemsList = createGalleryListMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsList);

const imageBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  animationSpeed: 250,
});

// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// const galleryContainer = document.querySelector('.gallery');

// const imagesMarkup = createGalleryItems(galleryItems);
// galleryContainer.innerHTML = imagesMarkup;

// function createGalleryItems(image) {
//   return image
//     .map(({ preview, original, decription }) => {
//       return `<li>
//         <a class = "gallery__item" href ="${original}">
//         <img class = "gallery__image"
//         src = "${preview}";
//         data-source = "${original}";
//         alt = "${ decription}";
//         />
//         </a>
//         </li>`;
//     })
//     .join('');
// }

// const xxx = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   animation: 250,
// });

// const imageBox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   animationSpeed: 250,
// });
