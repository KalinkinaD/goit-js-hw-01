import './styles.css';
import imgService from './script/apiService';
import imgCard from './templates/image-card.hbs';
import debounce from 'lodash.debounce';
// import '../node_modules/@pnotify/core/dist/BrightTheme.css';

const inputText = document.querySelector('.input_text');
const loadBtn = document.querySelector('.load_button');

let page = 1;
let result;
let search = async () => {
  page = 1;
  if (inputText.value) {
    result = await imgService(inputText.value, page);
    document.querySelector('.image_list').innerHTML = imgCard(result.hits);
    if (result.hits.length > 0) {
      loadBtn.style.display = 'block';
    } else {
      loadBtn.style.display = 'none';
    }
  } else {
    document.querySelector('.image_list').innerHTML = '';
    loadBtn.style.display = 'none';
  }
};

const loadMore = async () => {
  page++;
  let result = await imgService(inputText.value, page);
  document
    .querySelector('.image_list')
    .insertAdjacentHTML('beforeend', imgCard(result.hits));
  window.scrollTo({
    top: window.scrollY + window.screen.height - loadBtn.scrollHeight,
    left: 0,
    behavior: 'smooth',
  });
};

loadBtn.addEventListener('click', loadMore);
inputText.addEventListener('input', debounce(search, 500));

window.addEventListener('keypress', event => {
  if (event.keyCode == 13) {
    event.preventDefault();
  }
});
