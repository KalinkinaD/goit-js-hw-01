'use strict';
import galleryItems from './gallery-items.js';

// рендерю лишки в галерешку
const gallery = document.querySelector('.js-gallery');

galleryItems.forEach(el =>
  gallery.insertAdjacentHTML(
    'afterbegin',
    `<li class="gallery__item">
<a
  class="gallery__link"
  href = "${el.original}"
  

>
  <img
    class="gallery__image"
    src='${el.preview}'
    data-source='${el.original}'
    alt='${el.description}'
      />
</a>
</li>`,
  ),
);

// открываем модальное окно
const lightbox = document.querySelector('div.lightbox');
const lightboxImg = document.querySelector('img.lightbox__image');

gallery.addEventListener('click', event => {
  event.preventDefault();
  const image = event.target;
  if (image.matches('img')) {
    lightbox.classList.add('is-open');
    lightboxImg.setAttribute('src', image.dataset.source);
  }
});

//закрываем модальное окно
const btnClose = document.querySelector('button[data-action="close-lightbox"]');
btnClose.addEventListener('click', closeModal);
const lightboxContent = document.querySelector('.lightbox__content');
lightboxContent.addEventListener('click', closeModalByDiv);

function closeModal() {
  lightbox.classList.remove('is-open');
  lightboxImg.src = '';
}

function closeModalByDiv(event) {
  if (event.currentTarget !== event.target) {
    return;
  }
  closeModal();
}
