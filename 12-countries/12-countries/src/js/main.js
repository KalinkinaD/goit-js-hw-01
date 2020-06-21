import fetchCountries from './fetchCountries.js';
import list from '../templates/list.hbs';
import listItems from '../templates/listItems.hbs';
import debounce from 'lodash.debounce';
import { error, notice } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  searchForm: document.querySelector('#search-form'),
  countryList: document.querySelector('#country-list'),
  searchInput: document.querySelector('.search__input'),
};
refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
});

refs.searchForm.addEventListener(
  'input',
  debounce(e => {
    searchFormInputHandler(e);
  }, 500),
);

function searchFormInputHandler(e) {
  const searchQuery = e.target.value;

  clearListItems();

  fetchCountries(searchQuery).then(data => {
    const markup = buildListItemMarkup(data);
    const renderCountriesList = buildCountriesList(data);
    if (!data) {
      return;
    } else if (data.length > 10) {
      error({
        type: 'error',
        text: 'Слишком много совпадений. Введите минимум 2 буквы!',
        addClass: 'error',
        delay: 5000,
        closerHover: true,
        sticker: false,
        stickerHover: false,
        animateSpeed: 'slow',
      });
    } else if (data.length >= 2 && data.length <= 10) {
      insertListItem(renderCountriesList);
    } else if (data.length === 1) {
      insertListItem(markup);
    } else {
      notice({
        type: 'notice',
        text: 'Такой страны нет!!',
        addClass: 'error',
        delay: 5000,
        closerHover: true,
        sticker: false,
        stickerHover: false,
        animateSpeed: 'slow',
      });
    }
  });
}

function insertListItem(items) {
  refs.countryList.insertAdjacentHTML('beforeend', items);
}

function buildCountriesList(items) {
  return list(items);
}

function buildListItemMarkup(items) {
  return listItems(items);
}

function clearListItems() {
  refs.countryList.innerHTML = '';
}
