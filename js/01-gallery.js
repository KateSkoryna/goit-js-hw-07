import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGalleryListMarkup = gallery =>
  gallery
    .map(
      ({ description, original, preview }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');

const galleryItemsList = createGalleryListMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsList);

galleryEl.addEventListener('click', handlerClickInage);

let instance = null;

function handlerClickInage(event) {
  event.preventDefault();

  const targetEl = event.target;
  const targetValue = targetEl.dataset.source;

  if (!targetValue) {
    return;
  }

  instance = basicLightbox.create(` <img src="${targetValue}" width="800" height="600">`, {
    onShow: () => window.addEventListener('keydown', closebyEscape),
    onClose: () => window.removeEventListener('keydown', closebyEscape),
  });
  instance.show();
}

function closebyEscape(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

// // ВТОРОЙ ВАРИАНТ

// // const galleryRef = document.querySelector('.gallery');

// // // 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// // function galleryRender(arrayOfImages) {
// //   const arrayOfImg = [];
// //   galleryItems.map(({ preview, original, description }) => {
// //     arrayOfImg.push(`<div class="gallery__item">
// //                             <a class="gallery__link" href="large-image.jpg">
// //                                 <img
// //                                     class="gallery__image"
// //                                     src="${preview}"
// //                                     data-source="${original}"
// //                                     alt="${description}"
// //                                 />
// //                             </a>
// //                         </div>`);
// //   });
// //   galleryRef.insertAdjacentHTML('beforeend', arrayOfImg.join(''));
// // }

// // galleryRender(galleryItems);
// // galleryRef.addEventListener('click', openOriginalImage);

// // function openOriginalImage(event) {
// //   event.preventDefault();

// //   if (event.target.classList.contains('gallery__image')) {
// //     const instance = basicLightbox.create(
// //       `<img src="${event.target.dataset.source}" width="800" height="600">`,
// //       {
// //         onShow: () => document.addEventListener('keydown', onEscClick),
// //         onClose: () => document.removeEventListener('keydown', onEscClick),
// //       }
// //     );
// //     instance.show();

// //     // 3. Закрытие с клавиатуры

// //     function onEscClick(event) {
// //       if (event.code === 'Escape') {
// //         instance.close();
// //       }
// //     }
// //   }
// // }

// const paletteContainer = document.querySelector('.gallery');

// function createPhotoCardMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//         <div class="gallery__item">
//           <a class="gallery__link" href="${original}">
//             <img
//               class="gallery__image"
//               src="${preview}"
//               data-source="${original}"
//               alt="${description}"
//             />
//           </a>
//         </div>
//         `;
//     })
//     .join('');
// }
// const cardsMarkup = createPhotoCardMarkup(galleryItems);
// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', openImageClick);

// function openImageClick(e) {
//   e.preventDefault();

//   const modal = basicLightbox.create(
//     `
//         <img src="${e.target.src}" width="800" height="600">`,
//     {
//       onShow: () => window.addEventListener('keydown', onPressKeyESC),
//       onClose: () => window.removeEventListener('keydown', onPressKeyESC),
//     }
//   );
//   modal.show();

//   function onPressKeyESC(e) {
//     if (e.code === 'Escape') {
//       modal.close();
//     }
//   }
// }

// ТРЕТИЙ ВАРИАНТ

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// const galleryContainer = document.querySelector('.gallery');
// // galleryContainer.addEventListener('click', onUrlGet);
// galleryContainer.addEventListener('click', onModalCreate);

// const imagesMarkup = createGalleryItems(galleryItems);
// galleryContainer.innerHTML = imagesMarkup;

// function createGalleryItems(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, decription }) => {
//       return `<div class= "gallery__item">
//         <a class = "gallery__link" href ="${original}">
//         <img class = "gallery__image"
//         src = "${preview}";
//         data-source = "${original}";
//         alt = "${decription}";
//         />
//         </a>
//         </div>`;
//     })
//     .join('');
// }

// // function onUrlGet(event) {
// //   const getDataSetImage = event.target.dataset.source;
// //   console.log(getDataSetImage);
// // }

// function onModalCreate(event) {
//   event.preventDefault();
//   const a = event.target.dataset.source;
//   const modal = basicLightbox.create(
//     `
//     <img src="${a}" width="800" height="600">
// `,
//     {
//       onShow: () => window.addEventListener('keydown', onEscClose),
//       onClose: () => window.removeEventListener('keydown', onEscClose),
//     }
//   );

//   modal.show();

//   function onEscClose(event) {
//     if (event.code === 'Escape') {
//       modal.close();
//     }
//   }
// }

// console.log(galleryItems);

// ЧЕТВЕРТЫЙ ВАРИАНТ БЕЗ ИНСТАНС, КАК ГЛОБАЛЬНАЯ ПЕРЕМЕННАЯ

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// console.log(galleryItems);

// const galleryEl = document.querySelector('.gallery');

// const createGalleryListMarkup = gallery =>
//   gallery
//     .map(
//       ({ description, original, preview }) => `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`
//     )
//     .join('');

// const galleryItemsList = createGalleryListMarkup(galleryItems);
// galleryEl.insertAdjacentHTML('beforeend', galleryItemsList);

// galleryEl.addEventListener('click', handlerClickInage);

// function handlerClickInage(event) {
//   event.preventDefault();

//   const targetEl = event.target;
//   const targetValue = targetEl.dataset.source;

//   if (!targetValue) {
//     return;
//   }

//   const instance = basicLightbox.create(` <img src="${targetValue}" width="800" height="600">`, {
//     onShow: () =>
//       window.addEventListener('keydown', event => {
//         if (event.code === 'Escape') {
//           instance.close();
//         }
//       }),
//     onClose: () =>
//       window.removeEventListener('keydown', event => {
//         if (event.code === 'Escape') {
//           instance.close();
//         }
//       }),
//   });
//   instance.show();
// }
