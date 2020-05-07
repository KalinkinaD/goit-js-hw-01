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
    window.addEventListener('keydown', handleKeyPress);
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
  window.removeEventListener('keydown', handleKeyPress);
}

function closeModalByDiv(event) {
  if (event.currentTarget !== event.target) {
    return;
  }
  closeModal();
}

function handleKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}

// переключение открытых картинок
let imgSrc;
let index;
const galleryItem = gallery.children;
for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener('click', event => {
    event.preventDefault();
    index = i;
    changeImg();
  });
}
function changeImg() {
  imgSrc = galleryItem[index].querySelector('img').getAttribute('data-source');
  lightboxImg.src = imgSrc;
}
function prev() {
  if (index === 0) {
    index = galleryItem.length - 1;
  } else {
    index--;
  }
  changeImg();
}

function next() {
  if (index == galleryItem.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeImg();
}
document.onkeydown = event => {
  if (imgSrc) {
    if (event.code == 'ArrowRight') {
      next();
    }
    if (event.code == 'ArrowLeft') {
      prev();
    } else {
      return;
    }
  }
};
