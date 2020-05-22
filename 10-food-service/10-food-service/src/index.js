import './styles.css';
import menuTemplate from './templates/menu.hbs';
import menuList from './menu.json';

document.querySelector('.js-menu').innerHTML = menuTemplate(menuList);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const switchTheme = () => {
  const body = document.querySelector('body');
  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);
};
const jsSwitch = document.querySelector('.js-switch-input');
jsSwitch.addEventListener('change', e => {
  switchTheme();
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
});

if (localStorage.getItem('theme') === Theme.DARK) {
  jsSwitch.checked = true;
  switchTheme();
}
